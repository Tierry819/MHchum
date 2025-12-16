#!/bin/bash

# SCSS 編譯腳本
# 使用方法: ./compile-scss.sh

echo "開始編譯 SCSS..."
cd dist/scss
sass style.scss:../css/style.min.css --style=compressed --no-source-map
echo "✅ 編譯完成!"
