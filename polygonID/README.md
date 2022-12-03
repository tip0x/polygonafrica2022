# The African Prime Toad Project
#   CLAIM TOKEN AIRDROP
### INTRODUCTION
Self-sovereign identity (SSI) can be described as the evolution or technological paradigm shift of internet identity and interestingly is one of the many key inventions of decentralized web3.0. 
SSI is a new model of digital identity on the internet that implements how we render services, applications and identify who we are which is essential to build relationship of trust in order to access or protect private information.
This project aims to harness the power of this new technology by developing an erc20 token symbolized as $PTT and distributing it to only individuals who verify their authenticity of existence, so this way only users who have access to the application gets to participate in the airdrop, please follow through.
#### INSTRUCTIONS
* To transact token across multiple wallet, you need to;

- [X] Install PolygonID & Metamask on your device
- [X] Complete identity verification by issuing yourself a Polygon ID claim via *https://platform-test.polygonid.com/claim-link/3c35f8cc-02e0-40c9-8de6-46c5f0d5051a* Scan QR code twice;
* Verify ID
* Claim ID
- [X] navigate to frontend-ui folder using ``` cd /absolute/to/relearningculture/token-creation/deployment/frontend-ui/claimer``` in your terminal
- [X] ``` yarn start``` to launch react webpage on **localhost** on *http://localhost:3000/* then scan QR code within Prime toad app to claim tokens
- [X] Wait to generate proof, then connect and approve metamask wallet to get 5 PTT airdrop.
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
* navigate to frontend-ui folder using ``` cd /absolute/to/relearningculture/token-creation/deployment/frontend-ui/claimer``` in your terminal
*  ``` yarn start``` to launch react webpage on **localhost** on *http://localhost:3000/* then scan QR code within Prime toad app to claim tokens
* Wait to generate proof, then connect and approve metamask wallet to get 5 PTT airdrop.

#### PTTVerifier Contract Description

- [X] PTTVerifier contract is a standard ERC20 verified and published on zkevm public testnet explorer *https://explorer.public.zkevm-test.net/address/0x603e34A7b86FD0084b718339C9935e62B63A02ab*

- [X] `_beforeproofsubmit`, `_afterproofsubmit` and  `_beforetokentransfer` functions are present in the token contract to trigger imported `ZKPverifier` to return `SubmitZKPResponse`
### References
* https://github.com/maticnetwork/pos-portal 
* https://github.com/codingwithmanny/polygonid-on-chain-verification/

