#!/bin/bash
source ./scripts/release-version.sh

rm -rf ./backend/bin

unzip -o $ -d ./

./backend/bin/Release/net8.0/backend.dll