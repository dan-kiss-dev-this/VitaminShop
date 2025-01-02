# Update the package list
sudo apt-get update

# Install dependencies
sudo apt-get install -y wget apt-transport-https software-properties-common

# required for unzipping
sudo apt-get install -y zip

# Add Microsoft's official package signing key to your trusted keys
wget https://packages.microsoft.com/config/ubuntu/22.04/prod.list
sudo mv prod.list /etc/apt/sources.list.d/microsoft-prod.list

# Install the .NET SDK
sudo apt-get update; sudo apt-get install -y dotnet-sdk-8.0