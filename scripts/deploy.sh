#!/bin/bash

dotnet publish -c Release

./backend/bin/Release/net8.0/backend.dll