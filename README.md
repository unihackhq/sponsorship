# UNIHACK Sponsorship
Simple HTML and CSS website

# Deployment
Minification is manual for now...

remove old stuff
```
rm -r docs; mkdir docs
```

Minify HTML with (you need html-minifier)
```
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags --remove-redundant-attributes --remove-script-type-attributes --remove-tag-whitespace --use-short-doctype --minify-css inline index.html -o docs/index.html
```

Minify CSS with (you need postcss-cli and cssnano)
```
postcss --no-map index.css -o docs/index.css -u cssnano; postcss --no-map normalize.css -o docs/normalize.css -u cssnano
```

Minify JS with (you need uglify-es)
```
uglifyjs  --compress --mangle -o docs/main.js -- main.js
```

Then copy all the images and favicon
```
cp images docs/ -r; cp favicon.ico docs/
```
