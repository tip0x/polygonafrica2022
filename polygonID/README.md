# POLYGON ID (SELF-SOVEREIGN IDENTITY)
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
- [X] go to live url https://primetoadproject.netlify.app/ then scan QR code within Prime toad app to claim tokens
- [X] Wait to generate proof, then connect and approve metamask wallet to get 5 PTT airdrop.
#### TOKEN INFORMATION
* TOKEN NAME: Prime Toad Token
* TOKEN SYMBOL: $PTT
* CONTRACT ADDRESS: `0xA08fAA759Dc286611e6a1c42c857F6022A7bbcf0`
### TECHNICAL INFORMATION
#### Contract Deployments
* Install dependency `@remix-project/remixd`
* run `yarn remixd -s /absolute/path/to/relearningculture/polygonID --remix-ide https://remix-alpha.ethereum.org/` 
* Go to *https://remix-alpha.ethereum.org/*
* Choose **localhost** from workspaces dropdown and click on **Connect**
* You should be able to see the project folder in the remix file explorer panel
* navigate to frontend-ui folder using ``` cd /absolute/to/relearningculture/polygonID/deployment/frontend-ui/claimer``` in your terminal
*  ``` yarn start``` to launch react webpage on **localhost** on *http://localhost:3000/* then scan QR code within Prime toad app to claim tokens
* Wait to generate proof, then connect and approve metamask wallet to get 5 PTT airdrop.

#### PTTVerifier Contract Description

- [X] PrimeToadIDVerifier contract is a standard ERC20 verified and published on mumbai public testnet explorer *https://mumbai.polygonscan.com/address/0xA08fAA759Dc286611e6a1c42c857F6022A7bbcf0/*

- [X] `_beforeproofsubmit`, `_afterproofsubmit` and  `_beforetokentransfer` functions are present in the token contract to trigger imported `ZKPverifier` to return `SubmitZKPResponse`.
### Programming Languages & Stack
* Javascript
* Typescript
* Solidity
* React
* Remix
* Hardhat
### References
* https://github.com/codingwithmanny/polygonid-on-chain-verification/

