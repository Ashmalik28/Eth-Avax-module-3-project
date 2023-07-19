# Creating an ERC20 Token

>  A Simple token contract that lets the owner mint some tokens and let the token holders burn and transfer their tokens . 

## Description 

Ashyam (ASH) is a simple ERC-20 token deployed on the Ethereum Goerli test network. This smart contract implements the ERC-20 standard interface and allows for minting and burning tokens. The token can be used for testing and experimentation on the Goerli network.

---
## Contract Details

1) Network: Ethereum Goerli
2) Contract Address: [0xc034929155e43A6c10d037417791fE3126DA0e73]
3) Solidity Version: 0.8.9
4) License: MIT

## Token Details

1) Token Name: Ashyam
2) Token Symbol: ASH
3) Decimals: 18

## Functionality

- **Minting Tokens:** The owner of the contract can mint new ASHYAM tokens by calling the mint function. This function creates new tokens and adds them to the balance of the specified address.

- **Burning Tokens:** Token holders can burn their ASHYAM tokens by calling the burn function. This function removes tokens from the caller's balance and reduces the total supply.

- **Transferring Tokens:** Users can transfer ASHYAM tokens to other addresses using the transfer function. This function transfers a specified amount of tokens from the caller's balance to the recipient's balance.

- **Approving Allowances:** Token holders can approve other addresses to spend a certain number of ASHYAM tokens on their behalf using the approve function. This function sets the allowance for the spender.

- **Transferring from Allowance:** Spenders with an approved allowance can transfer tokens from the owner's balance to another address using the transferFrom function.

## Installation ⬇️

### Follow these steps to run this project locally on your system

1. Download or clone the repository by git command.
2. Install the dependencies by running `npm install`.
3. Install truffle by running 'npm install -g truffle' .
4. Download the Hd wallet provider package by npm install @truffle/hdwallet-provider command
5. Then run this command 'truffle migrate --network goerli' to deploy our contract on goerli eth.
6. Your contract will be successfully deployed on Eth goerli network

### Configure MetaMask to use ETH Goerli network  🦊

1. Connect your MetaMask Wallet to the ChainList website.
2. Select the 'Include Testnets' checkbox.
3. Search for "Goerli" in the 'Search Networks' tab.
4. Find the Goerli network you want to connect to and click 'Add to MetaMask'. It will be automatically added to your wallet.

