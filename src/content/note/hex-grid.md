+++
date = "2016-03-06T20:29:25-05:00"
title = "How to Draw Hex Grids"
head_image = "/note/hex-grid/hdr.png"

+++

About every six months, I face the exact same task. I need to draw some kind of hex-based grid. It's not that surprising that it keeps coming up, hex grids are just aesthetically amazing and also relatively simple. But everytime this comes up, I find myself scribbling formulas in a notebook to remember what it was I did last time to make the associated code somewhat sane. So these are those recurring notes.

## Drawing a Hexagon

First of all, let's talk about the basics. How do you draw a single hexagon?

<object data="/note/hex-grid/a.svg" type="image/svg+xml">
</object>

In python, this might look like this:

<pre class="prettyprint linenums"><code><!--
-->def draw_hexagon(cx, cy, r):
	a = r*math.cos(math.pi/3)
	b = r*math.sin(math.pi/3)
	beginpath(cx + r, cy)
	lineto(cx + a, cy + b)
	lineto(cx - a, cy + b)
	lineto(cx - r, cy)
	lineto(cx - a, cy - b)
	lineto(cx + a, cy - b)
	closepath()
	endpath()
</code></pre>

Of course, this is a hexagon specific version of the following code which draws a polygon with n vertices on the circumference of a circle.

<pre class="prettyprint linenums"><code><!--
-->def draw_polygon(cx, cy, r, n):
	beginpath(cx + r, cy)
	for i in range(1, n):
		lineto(cx + r * math.cos(i * 2 * math.pi / n),
			   cy + r * math.sin(i * 2 * math.pi / n))
	closepath()
	endpath()
</code></pre>

But the interesting bit is drawing a grid of hexagons. You know, like a honey comb. That's the thing I always forget.

## Drawing a Grid of Hexagons

If you want to know everything about hexagonal grids, read [Amit Patel's amazing article](http://www.redblobgames.com/grids/hexagons/). By the way, I once chatted with Amit over email at Google because he watched everyone's snippets for the terms "space elevator". Anyway, I'm not trying to be exhaustive as Amit here. I'm just trying to document the method I often use to draw a hexagonal grid.

The most imporant part is finding a useful unit of repetition. You know, something you can draw repeatedly using a plain ole' rectangular grid. Well, here's something:

<object data="/note/hex-grid/repeat.svg" type="image/svg+xml">
</object>

As you can tell, <code>a</code> and <code>b</code> are the coordinates upon which the grid is built. If we simply divide the space up so that we can repeat these two offset hexagons, things should work out. It kind of looks like this.

<pre class="prettyprint linenums"><code><!--
-->def draw_hexagon(cx, cy, r):
    a = r*math.cos(math.pi/3)
    b = r*math.sin(math.pi/3)
    beginpath(cx + r, cy)
    lineto(cx + a, cy + b)
    lineto(cx - a, cy + b)
    lineto(cx - r, cy)
    lineto(cx - a, cy - b)
    lineto(cx + a, cy - b)
    closepath()
    endpath()
    
def draw_grid(w, h, n = 20):
    # the size of the repeatable grid
    dx = w / n    
    # find the value for a (dx is 6 a's)
    a = dx / 6.0
    r = 2 * a
    # find the value for b
    b = r * math.sin(math.pi/3.0)
    # number of repeatable grids vertically
    dy = b*2
    
    ny = int(math.ceil(h / dy)) + 1

    for j in range(ny):
        for i in range(n+1):
            draw_hexagon(i*dx, j*dy, r)
            draw_hexagon(i*dx + 3*a, j*dy + b, r)
</code></pre>

That's it.

