#!/usr/bin/env bash
cd "$(dirname "$0")"

bump=$1

cd projects/angular-highcharts-es
npm --no-git-tag-version version "$bump" > /tmp/version.txt
echo "$(< /tmp/version.txt)"
cd ..
cd ..

git add projects/angular-highcharts-es/package.json
git commit -m "Bump to $(< /tmp/version.txt)"
git tag -a "$(< /tmp/version.txt)" -m "$(< /tmp/version.txt)"

rm /tmp/version.txt
