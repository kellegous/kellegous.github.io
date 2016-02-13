+++
date = "2016-02-13T09:19:58-05:00"
title = "What's the deal with SafeVarargs?"

+++

After a long absence, I've recently found myself back in the world of Java.
Prior to the break, though, I worked in some kind of JVM language almost every
day. When you are fully immersed, you begin to not see Java's quirks. But if
you take a break and come back, they are all (once again) front and center.

My most recent rediscovered quirk is the curious case of why a combination of
generics and variadic methods requires the use of @SafeVarargs. I suspect the
most confusing thing about this particular quirk is the wording of the common
warning that is emitted. My suspicions are backed up by the number of
stack overflow questions that reference warning directly. So let's take a look
at some code that causes the warning.

<pre class="prettyprint linenums"><code><!--
-->static <T> List<T> toList(T... args) {
  List<T> list = new ArrayList<>();
  for (T arg : args) {
    list.add(arg);
  }
  return list;
}
</code></pre>

And now let's look at the warning that is emitted by the Java compiler:

<pre class="console">
warning: [unchecked] Possible heap pollution from parameterized vararg type T
</pre>

I think the most mysterious part of this warning is that it mentions the
possibility of something that sounds truly disastrous, "heap pollution". To
which most people, I assume, respond with: ¯\\\_(ツ)\_/¯

## What is heap pollution?

Heap pollution really just means the type of the thing you have does not match
the type indicated by the type system. You really shouldn't be able to cause
heap pollution in Java without doing something that emits a warning. Like here
is a super simple form of heap pollution.

<pre class="prettyprint linenums"><code><!--
-->List<String> a = new ArrayList<>();
((List)a).add(4);
System.out.println(a.get(0)); // ClassCastException!!!
</code></pre>

As expected, though, line #2 causes a compiler warning. The big issue with a
polluted heap is you will get a type error at the worst time, runtime.

## How to use varargs to pollute the heap

The warning we saw above on variadic, generic methods suggests there is a way to
write code that pollutes the heap without any other compiler warning. Indeed
there is:

<pre class="prettyprint linenums"><code><!--
-->static <T> List<T> makePollute(T... args) {
    Object[] asArray = args;
    asArray[0] = 42;
}
</code></pre>

Notice that we do some unmistakably bad things here, but the compiler doesn't
offer any warnings. At runtime, though, this is likely to throw either an
ArrayStoreException or a ClassCastException depending on the types involved.
There are also cases where this code doesn't show an exception at all.

<pre class="prettyprint linenums"><code><!--
-->makePollute(1, 2, 3); // no exception
makePollute("foo", "bar"); // ArrayStoreException
</code></pre>

To understand why this happens, you have to look at what the java byte code looks
like when you take into account [type erasure](http://javapapers.com/core-java/type-erasure/) and the fact that variadic
methods are simply methods that take arrays as arguments.

<pre class="prettyprint linenums"><code><!--
-->static void makePollute(Object[] args) {
  Object[] asArray = args;
  asArray[0] = 42;
}

public static void main(String[] args) {
  Integer[] args1 = new Integer[3];
  args1[0] = Integer.valueOf(1);
  args1[1] = Integer.valueOf(2);
  args1[2] = Integer.valueOf(3);
  makePollute(args1);

  String[] args2 = new String[2];
  args2[0] = "foo";
  args2[1] = "bar";
  makePollute(args2); // asArray[0] = 42 won't work!
}
</code></pre>

It's now a little clearer why you end up with an ArrayStoreException. I remember
chatting with some of the folks who worked on Java and the JVM and they always
bemoaned the fact that seemingly independent language features tended to interact
with each other in so many unpleasant ways. I imagine this is exactly the kind
of thing they had in mind.
