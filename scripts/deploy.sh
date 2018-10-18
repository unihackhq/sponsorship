#!/bin/bash

# Delete and recreate docs folder
rm -r docs
mkdir docs

# Minify
html-minifier --collapse-whitespace --remove-comments --remove-optional-tags \
              --remove-redundant-attributes --remove-script-type-attributes \
              --remove-tag-whitespace --use-short-doctype --minify-css \
              inline index.html -o docs/index.html

postcss --no-map index.css -o docs/index.css -u cssnano
postcss --no-map normalize.css -o docs/normalize.css -u cssnano

uglifyjs  --compress --mangle -o docs/main.js -- main.js

# Copy assets
cp -r images docs/
cp favicon.ico docs/
