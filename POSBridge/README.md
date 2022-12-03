# POLYGON PROOF OF STAKE (POS) BRIDGE
## INTRODUCTION
A bridge is basically a set of contracts that help in moving assets from the root chain to the child chain. There are several types of bridges to move assets between Ethereum and Polygon. But this project is focused on the type of bridge called the PoS Bridge or Proof of Stake bridge. 
Proof of stake based assets provides PoS security, secured by a robust set of external validators and fast exit with one checkpoint interval.

**Steps to use the PoS Bridge**

The first step to using the PoS bridge is mapping the Root Token and Child Token. It means that the token contract on the root chain and the token contract on the child chain have to maintain a connection (called mapping) to transfer assets between themselves.

**Mapping tokens** : [https://mapper.polygon.technology/]
#### TOKEN INFORMATION
* **TOKEN NAME:** Prime Toad Token
* **TOKEN SYMBOL:** $PTT
* **TOTAL SUPPLY:** 100
**Build Link:** []

### TECHNICAL INFORMATION
#### Contract Deployments

* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/tokenBridge --remix-ide https://remix-alpha.ethereum.org/` 
* Go to *https://remix-alpha.ethereum.org/*
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel and deploy your own custom contracts.
### Contract Deployments
#### Standard requirement for mapping custom ERC20 token

- [X] Child contract is verified on Polygon/Mumbai explorer
- [X] The deposit and withdraw functions are present on the child token contract.
- [X] Only the ChildChainManagerProxy address has the right to call the deposit function. (ChildChainManagerProxy - on Mumbai)
- [X] Mint function is an internal function (This gets called by deposit function internally)
#### Contract Addresses

* ChildChainManagerProxy (mumbai) : `0xb5505a6d998549090530911180f38aC5130101c6`
* PrimeToadToken (goerli) : `0x7b9ba770a8030672774f31b6595e947596bff2c9` (PTT)
* PrimeToadToken (mumbai) : `0x6db297ce0140eb26af5c4fa955ef3963ef6ad96f` (PTT) 
### NETWORK CONFIGURATION
#### MUMBAI

* **RPC:** https://matic-mumbai.chainstacklabs.com
* **CHAIN_ID:** 80001
* **EXPLORER:** https://mumbai.polygonscan.com/
#### ETHEREUM GOERLI

* **RPC:** https://goerli.infura.io/v3/
* **CHAIN_ID:** 5
* **EXPLORER:** https://goerli.etherscan.io
### Config

* Addresses in the src/config.js are the deployed root (PTTRootToken) and child (PTTChildToken) erc20 tokens respectively
## PoS Bridge
### Transfer PTT from Ethereum network to Matic PoS

1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "PTTERC20" from the dropdowns
3. Fill up the input control with the PTTERC20 to transfer to PoS Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in PTT token balance as per PTT deposited in step 4.
#### Withdraw PTT from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "PTTERC20" from the dropdowns
3. Fill up the input control with the value to transfer to back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected Goerli network account PTT balance will increase after transaction is mined.
### Programming Languages & Stack
* Javascript
* Typescript
* Solidity
* React
#### REVIEW
This project was built out of curiosity and during development there were limitations on the architecture of polygon design that restriction implementation of polygonID and zkEVM into the project.
1.  **Building polygonID on top of zkEVM**
The state of the art self-sovereign identity polygonID has been built on mumbai chain, where interaction with contracts during zero-knowledge proof request makes use of a constant validator's address that is peculiar to mumbai network, and if a developer aims to build similar infrastructure deployed to zkEVM, it encounters bugs, as the validator's address is unable to interact with a contract on a different chain.

### References
* https://github.com/maticnetwork/pos-portal
* https://wiki.polygon.technology/docs/develop/ethereum-polygon/submit-mapping-request/