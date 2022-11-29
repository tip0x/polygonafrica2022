# Matic Chain ERC20 Token

## INTRODUCTION
Necessary but short introduction to give overview of the purpose and importance of implementing polygonID zero knowledge self-sovereign identity in deploying custom created tokens.
### INSTRUCTIONS
* To transact token across multiple wallet, you need;

- [X] Install PolygonID & Metamask in your device
- [X] Complete identity verification by issuing yourself a Polygon ID claim via `https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea` then scan QR code within Polygon ID app to claim tokens

### TOKEN INFORMATION
* TOKEN NAME: Saddamzk-ERC20
* TOKEN SYMBOL: ADAM
* TOTAL SUPPLY: 15000
* CONTRACT ADDRESS: 
* ChildChainManagerProxy (mumbai) : `0xDD6BC4108B9A62a8487ff118107A147e958A1739`  
* ERC20Verifier(mumbai): `0xe2F822232e4723C11fE6b63A75615Cdf4C85E168`

### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/token-creation --remix-ide https://remix-alpha.ethereum.org/` 
* Go to https://remix-alpha.ethereum.org
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel

#### Matic ERC20Verifier Contract

- [X] ERC20ZKP's contract is verified and published on mumbai public testnet explorer `https://mumbai.polygonscan.com/tx/0xa86b2becd2bfe2c07a9e41efe57427d57848e535f8157f8259a131c5f15f560b`
- [X] `_beforeproofsubmit`, `_afterproofsubmit` and  `_beforetokentransfer` functions are present in the token contract to trigger imported `ZKPverifier` to return `SubmitZKPResponse` 

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
