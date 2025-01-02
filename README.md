# Vitamin Shop

## Project tasks

Planning is done via trello. Our board can be viewed here. [Trello-Board](https://trello.com/b/N3OHS706/vitamin-shop)

## Server Deployment

1. Locally run `./scripts/release-build.sh`. This will build the C# dot net server and zip to release/backend-<version-name>. To increment the version, change the "RELEASE_VERSION" variable.

2. Commit the new zip release. `git add release && git commit -m "build release 1.0.0"`
3. On the digital ocean run `./scripts/release-deploy.sh`. This will build the release and deploy it. It currently hosts directly. But would need to be backgrounded to be kept if the session was closed. (Look up persistent and HTTPS for needed changes)
