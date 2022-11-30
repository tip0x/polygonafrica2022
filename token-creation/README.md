# The African Prime Toad Project

## INTRODUCTION
Necessary but short introduction to give overview of the purpose and importance of implementing polygonID zero knowledge self-sovereign identity in deploying custom created tokens.
### INSTRUCTIONS
* To transact token across multiple wallet, you need;

- [X] Install PolygonID & Metamask in your device
- [X] Complete identity verification by issuing yourself a Polygon ID claim via *https://polygontechnology.notion.site/Issue-yourself-a-KYC-Age-Credential-claim-a06a6fe048c34115a3d22d7d1ea315ea*
- [X] navigate to frontend-ui folder using ``` cd /absolute/to/relearningculture/token-creation/deployment/frontend-ui``` in your terminal
- [X] ``` yarn start``` to launch react webpage on **localhost** on *http://localhost:3000/* then scan QR code within Polygon ID app to claim tokens

#### TOKEN INFORMATION
* TOKEN NAME: Prime Toad Token
* TOKEN SYMBOL: $PTT
### TECHNICAL INFORMATION
#### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/token-creation --remix-ide https://remix-alpha.ethereum.org/` 
* Go to *https://remix-alpha.ethereum.org/*
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel

#### PTTVerifier Contract Description

- [X] PTTVerifier contract is a standard ERC20 verified and published on zkevm public testnet explorer *https://explorer.public.zkevm-test.net/address/0x603e34A7b86FD0084b718339C9935e62B63A02ab*

- [X] `_beforeproofsubmit`, `_afterproofsubmit` and  `_beforetokentransfer` functions are present in the token contract to trigger imported `ZKPverifier` to return `SubmitZKPResponse` 
### Network Configuration
*   zkEVM public testnet
*   RPC: `https://public.zkevm-test.net:2083`
*   Chain ID: `1402`
*   Block explorer URL: *https://explorer.public.zkevm-test.net/*

### References
* https://github.com/maticnetwork/pos-portal 
* https://github.com/codingwithmanny/polygonid-on-chain-verification/

#### Connect to developer
* https://twitter.com/tiptape0
