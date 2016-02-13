CSS=$(patsubst assets/css/%.less,static/css/%.css,$(wildcard assets/css/*.less))
JS=static/js/index.js

ALL: $(CSS) $(JS)

static/css/%.css: assets/css/%.less $(wildcard assets/css/lib/*)
	lessc -x $< $@

static/js/index.js: assets/js/index.js assets/js/run_prettify.js
	cat $^ | closure-compiler -O SIMPLE --js_output_file $@
