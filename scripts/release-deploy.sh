#!/bin/bash
source ./scripts/release-vars.sh

rm -rf ./backend/bin

unzip -o $RELEASE_ZIP_FILE -d ./

SCRIPT_TO_RUN="./backend/bin/Release/net8.0/$HOST_ARCHITECTURE/publish/backend.dll"

chmod +x $SCRIPT_TO_RUN

eval $SCRIPT_TO_RUN