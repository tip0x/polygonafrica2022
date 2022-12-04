# POLYGON ZERO-KNOWLEDGE ETHEREUM VIRTUAL MACHINE IMPLEMENTATION
## INTRODUCTION
Polygon zkEVM is the first zero-knowledge (ZK) scaling solution that's fully compatible with Ethereum. All existing smart contracts and wallets work seamlessly within Polygon's zkEVM.
The zkEVM harnesses the power of ZK proofs to reduce transaction costs and massively increase throughput, all while inheriting near proximal security to Ethereum's Layer 1.
#### TOKEN INFORMATION
* **TOKEN NAME:** PrimeToadTokenZK
* **TOKEN SYMBOL:** $PTT
* **TOTAL SUPPLY:** 100
* **CONTRACT ADDRESS:** 0x88Fe282C4E2EE71da8793c87884417bFe1D1A81F
#### INSTRUCTION
- [X] Add goerli network to your metamask (*See network configuration below*)
- [X] Add faucet (fake ether) to your wallet `https://goerlifaucet.com/`
- [X] Add zkEVM network to your metamask (*See network configuration below*)
- [X] Bridge ether from goerli to zkEVM to enable gas fee payment `https://public.zkevm-test.net/`
- [X] Import token contract address into wallet on zkEVM network
- [X] Request token from developer to test zkEVM `taptclub@gmail.com`
### TECHNICAL INFORMATION
#### Contract Deployments
- [X] Install dependency `@remix-project/remixd`
- [X] run `yarn remixd -s /absolute/path/to/relearningculture/polygonHermez --remix-ide https://remix-alpha.ethereum.org/` 
- [X] Go to *https://remix-alpha.ethereum.org/*
- [X] Choose **localhost** from workspaces dropdown and click on **Connect**
- [X] You should be able to see the project folder in the remix file explorer panel and deploy your own custom contracts.
#### Network Configuration
**zkEVM public testnet**
*   RPC: `https://public.zkevm-test.net:2083`
*   Chain ID: `1402`
*   Block explorer URL: *https://explorer.public.zkevm-test.net/*

**Goerli public testnet**
*   RPC:  `https://goerli.infura.io/v3/`
*   Chain ID: `5`
*   Block explorer URL: `https://goerli.etherscan.io`
### Programming Languages & Stack
* Remix
### References
https://university.polygon.technology/