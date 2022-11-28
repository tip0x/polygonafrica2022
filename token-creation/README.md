# Matic Chain ERC20 Token

## INTRODUCTION
Necessary but short introduction to give overview of the purpose and importance of implementing polygonID zero knowledge self-sovereign identity in deploying custom created tokens.
### INSTRUCTIONS
* To transact token across multiple wallet, you need;

- [X] Install PolygonID & Metamask in your device
- [X] Signup on metamask, save recovery phrase in a save place
- [X] Add mumbai network, configuration is mentioned below
- [X] Add some faucets from `https://faucet.polygon.technology/`
- [X] Create your account on PolygonID
- [X] Open folder in commandline `cd relearningculture/token-creation/frontend-ui`
- [X] Start development web `yarn start`, open `https://localhost:3000/` in browser
- [X] Scan QR code with polygonID
- [X] Update required schema to be eligible for airdrop
- [X] Congratulations, check metamask for tokens and send token to friends with ease 

### TOKEN INFORMATION
* TOKEN NAME: Saddamzk-ERC20
* TOKEN SYMBOL: ADAM
* TOTAL SUPPLY: 15000
* CONTRACT ADDRESS: 
* ChildChainManagerProxy (mumbai) : `0xDD6BC4108B9A62a8487ff118107A147e958A1739`  
* AdamERC20(mumbai): `0x603e34A7b86FD0084b718339C9935e62B63A02ab`

### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/token-creation --remix-ide https://remix-alpha.ethereum.org/` 
* Go to https://remix-alpha.ethereum.org
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel

#### Matic custom ERC20 token

- [X] Child contract is verified and published on mumbai public testnet explorer `https://mumbai.polygonscan.com/address/0x603e34a7b86fd0084b718339c9935e62b63a02ab`
- [X] The deposit and withdraw functions are present on the child token contract
- [X] _beforeproofsubmit, _afterproofsubmit and  _beforetokentransfer functions are present in the token contract to trigger imported `ZKPverifier` to return `SubmitZKPResponse` 
- [X] The AdamERC20 token was deployed with a childChainManager function on mumbai with one thing in mind, Supposedly the token is intended to be transfered to layer 1, and requires RootChain for mapping request, only the ChildChainManagerProxy address has the right to call the deposit function.
- [X] Mint function is called outside constructors argument as required by standard POS child contract and is an internal function (This gets called by deposit function internally)

### Network Configuration
*   Mumbai public testnet
*   RPC: `https://matic-mumbai.chainstacklabs.com`
*   Chain ID: `80001`
*   Block explorer URL: `https://mumbai.polygonscan.com/`

### References
* https://github.com/maticnetwork/pos-portal 
* https://github.com/codingwithmanny/polygonid-on-chain-verification/

#### connect
* https://twitter.com/tiptape0