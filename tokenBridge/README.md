# POLYGON PROOF OF STAKE (POS) BRIDGE
## INTRODUCTION
#### TOKEN INFORMATION
* TOKEN NAME: Prime Toad Token
* TOKEN SYMBOL: $PTT
* TOTAL SUPPLY: 100
### TECHNICAL INFORMATION
#### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/tokenBridge --remix-ide https://remix-alpha.ethereum.org/` 
* Go to *https://remix-alpha.ethereum.org/*
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel




* **Mapping tokens** : [https://mapper.polygon.technology/]

### Contract Deployments
#### Standard requirement for mapped custom ERC20 token

- [X] Child contract is verified on Polygon/Mumbai explorer
- [X] The deposit and withdraw functions are present on the child token contract.
- [X] Only the ChildChainManagerProxy address has the right to call the deposit function. (ChildChainManagerProxy - on Mumbai)
- [X] Mint function is an internal function (This gets called by deposit function internally)

* ChildChainManagerProxy (mumbai) : `0xb5505a6d998549090530911180f38aC5130101c6`
* PrimeToadToken (goerli) : `0x7b9ba770a8030672774f31b6595e947596bff2c9` (PTT)
* PrimeToadToken (mumbai) : `0x6db297ce0140eb26af5c4fa955ef3963ef6ad96f` (PTT)

### References
* https://github.com/maticnetwork/pos-portal 

### NETWORK CONFIGURATION
#### MUMBAI
RPC https://matic-mumbai.chainstacklabs.com
CHAIN_ID 80001
EXPLORER https://mumbai.polygonscan.com/

#### ETHEREUM GOERLI
RPC https://public.zkevm-test.net:2083
CHAIN_ID 5
EXPLORER https://explorer.public.zkevm-test.net/



### Config

* Address in the src/config.js are the deployed root (PTTRootToken) and child (PTTChildToken) erc20 tokens respectively


### PoS Bridge


#### Transfer ETH from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "PTTERC20" from the dropdowns
3. Fill up the input control with the PTTERC20 to transfer to PoS Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in PTT token balance as per PTT deposited in step 4.


#### Withdraw ETH from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "Ether" from the dropdowns
3. Fill up the input control with the value to transfer to back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account Ether balance will increase after transaction is mined.

#### Transfer ERC20 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC20" from the dropdowns
3. Fill up the input control with the ERC20 tokens to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in posChildERC20 token balance as per ERC20 tokens deposited in step 4.

#### Withdraw ERC20 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC20" from the dropdowns
3. Fill up the input control with the value to transfer ERC20 token back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's posRootERC20 token balance will increase after transaction is mined.

#### Transfer ERC721 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC721" from the dropdowns
3. Fill up the input control with the ERC721 tokenId to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see the posChildERC721 token deposited in step 4.

#### Withdraw ERC721 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC721" from the dropdowns
3. Fill up the input control with the tokenId to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's posRootERC721 token will be there once transaction is mined.

#### Transfer ERC1155 token from Ethereum network to Matic PoS
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC1155" from the dropdowns
3. Fill up the input control with the ERC1155 tokenId and amount to transfer to PoS Bridge.
4. Click on Deposit and You will see two MetaMask popups back to back for approving and transferring. Select "Confirm" on MetaMask popups.
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see the posChildERC1155 token deposited in step 4.

#### Withdraw ERC1155 from Matic PoS back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Proof Of Stake" and "ERC1155" from the dropdowns
3. Fill up the input control with the tokenId and amount to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Exit button and wait until transaction get mined.
7. Your selected account's posRootERC1155 token will be there once transaction is mined.

### Plasma Bridge

#### Transfer ETH from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "Ether" from the dropdowns
3. Fill up the input control with the Ether to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in plasmaWETH token balance as per Eth deposited in step 4.

#### Withdraw ETH from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "Ether" from the dropdowns
3. Fill up the input control with the value of Eth to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's Ether balance will increase after transaction is mined.

#### Transfer ERC20 token from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC20" from the dropdowns
3. Fill up the input control with the tokens to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". You should be able to see increase in plasmaChildERC20 token balance as per tokens deposited in step 4.

#### Withdraw ERC20 from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC20" from the dropdowns
3. Fill up the input control with the value of tokens to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's plasmaRootERC20 token balance will increase after transaction is mined.

#### Transfer ERC721 token from Ethereum network to Matic Plasma
1. Select Goerli network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC721" from the dropdowns
3. Fill up the input control with the tokenId to transfer to Plasma Bridge.
4. Click on Deposit and select "Confirm" on MetaMask popup. Wait until transaction gets Mined
5. Change the network on MetaMask to "Matic Mumbai Testnet". Add plasmaChildERC721 token. You should be able to see plasmaChildERC721 token deposited in step 4.

#### Withdraw ERC721 from Matic Plasma back into Ethereum
1. Select Mumbai Matic network on MetaMask and refresh the page
2. Choose "Plasma" and "ERC721" from the dropdowns
3. Fill up the input control with the tokenId to transfer back to Ethereum.
4. Click on Burn and select "Confirm" on MetaMask popup. Wait until transaction gets Mined. Copy the transaction hash. Additionally wait for 5-7 minutes until Polygon's state sync mechanism completes check pointing.
5. Switch the network to Goerli (and refresh the page) and fill the input control with transaction hash.
6. Click on Confirm Withdraw button and wait until transaction get mined. Copy the transaction hash.
7. Fill the input control with transaction hash and click on Exit 
8. Your selected account's plasmaRootERC721 token will be available once transaction is mined.

Recommended Resources
* [Deposit and Checkpoint Event Tracking - PoS](https://wiki.polygon.technology/docs/develop/ethereum-polygon/submit-mapping-request/)
