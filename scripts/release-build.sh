#!/bin/bash
source ./scripts/release-vars.sh

if [ -f $RELEASE_ZIP_FILE ]; then
  rm $RELEASE_ZIP_FILE
fi

# We deploy to a linux 
dotnet publish -c Release -r linux-x64

ZIP_NAME="tmp-backend-publish.zip"

zip -r $ZIP_NAME backend/bin/Release/net8.0/$HOST_ARCHITECTURE/publish/

if ! [ -d ./release ]; then 
  mkdir ./release
fi

mv $ZIP_NAME release/$RELEASE_VERSION.zip