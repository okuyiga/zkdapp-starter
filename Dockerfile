FROM mcr.microsoft.com/vscode/devcontainers/rust:latest
# FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-14

# Update all Ubuntu Packages
RUN apt-get update && apt-get upgrade -y

# Install all apt-get packages
RUN apt-get install -y curl \
    python3-pip

USER vscode

# Install circom
RUN git clone https://github.com/iden3/circom.git ~/circom
WORKDIR /home/vscode/circom
RUN cargo build --release
RUN cargo install --path circom

# Install snarkjs
# RUN npm install -g snarkjs
