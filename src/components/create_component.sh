#!/bin/sh

mkdir -p $1 ; cd $_

JS_FILES="__init__ actions container index reducer"

for f in $JS_FILES
do
  touch "${f}.js"
done

touch "${1}.scss"