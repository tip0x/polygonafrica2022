# Matic Chain ERC20 Token

## INTRODUCTION
Necessary but short introduction to give overview of the purpose and importance of implementing zero knowledge roll up in deploying custom created tokens.
### INSTRUCTIONS
* To transact token across multiple wallet, you need;
[X] To get goerli faucet in the intended wallet address
[X] Bridge faucet from goerli to zkEVM to be able to pay for gas `https://public.zkevm-test.net/`
[X] Import AdamERC20 token contract address into the desired wallet
[X] Request for token amount to be sent via owner's account
[X] Send token to friends with ease 

## TOKEN INFORMATION
* TOKEN NAME: Saddamzk-ERC20
* TOKEN SYMBOL: ADAM
* TOTAL SUPPLY: 100
* CONTRACT ADDRESS: 
- [X] ChildChainManagerProxy (mumbai) : `0xDD6BC4108B9A62a8487ff118107A147e958A1739`  

<!-- 0xb5505a6d998549090530911180f38aC5130101c6 - zkevm address-->

- [X] AdamERC20(ChildChain): `0xe157bF0a74ccc5c2C7D3d8a29Ab0e6cae0e0290a`

### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/token-creation --remix-ide https://remix-alpha.ethereum.org/` 
* Go to https://remix-alpha.ethereum.org
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel

#### Matic custom ERC20 token

- [X] Child contract is verified and published on zkEVM public testnet explorer `https://explorer.public.zkevm-test.net/address/0xe157bF0a74ccc5c2C7D3d8a29Ab0e6cae0e0290a/contracts#address-tabs`
- [X] The deposit and withdraw functions are present on the child token contract
- [X] The AdamERC20 token was deployed as a child chain on zkEVM with one thing in mind, Supposedly the token is intended to be transfered to layer 1, and requires RootChain for mapping request, only the ChildChainManagerProxy address has the right to call the deposit function. (ChildChainManagerProxy - on zkEVM)
- [X] Mint function is an internal function (This gets called by deposit function internally)

### Network Configuration
*   ZKEVM public testnet
*   RPC: `https://public.zkevm-test.net:2083`
*   Chain ID: `1402`
*   Block explorer URL: `https://public.zkevm-test.net:8443`

### References
* https://github.com/maticnetwork/pos-portal 