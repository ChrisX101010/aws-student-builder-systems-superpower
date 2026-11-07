#!/usr/bin/env bash
set -euo pipefail
rm -f systems-superpower-amplify.zip
python3 -m zipfile -c systems-superpower-amplify.zip index.html styles.css script.js favicon.svg manifest.webmanifest robots.txt 404.html
echo "DEPLOY_ZIP=systems-superpower-amplify.zip"
sha256sum systems-superpower-amplify.zip
