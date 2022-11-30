# The African Prime Toad Project

## INTRODUCTION
Necessary but short introduction to give overview of the purpose and importance of implementing polygonID zero knowledge self-sovereign identity in deploying custom created tokens.
### INSTRUCTIONS
* To transact token across multiple wallet, you need;

- [X] Install PolygonID & Metamask in your device
- [X] Complete identity verification by issuing yourself a Polygon ID claim via `https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea`
- [X] navigate to frontend-ui folder using ``` cd /home/tiptape/relearningculture/token-creation/deployment/frontend-ui``` in your terminal
- [X] ``` yarn start``` to launch react webpage on **localhost** on *http://localhost:3000/* then scan QR code within Polygon ID app via to claim tokens

#### TOKEN INFORMATION
* TOKEN NAME: Prime Toad Token
* TOKEN SYMBOL: PTT
#### CONTRACT ADDRESS:  
* PTTVerifier(zkevm): `0x603e34A7b86FD0084b718339C9935e62B63A02ab`

### TECHNICAL INFORMATION
#### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/token-creation --remix-ide https://remix-alpha.ethereum.org/` 
* Go to https://remix-alpha.ethereum.org
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel

#### Matic PTTVerifier Contract

- [X] PTTVerifier contract is verified and published on zkevm public testnet explorer `https://explorer.public.zkevm-test.net/address/0x603e34A7b86FD0084b718339C9935e62B63A02ab`
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
