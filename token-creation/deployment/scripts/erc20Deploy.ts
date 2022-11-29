// Imports
// ========================================================
import { ethers } from "hardhat";

// Deployment Script
// ========================================================
const main = async () => {
  // Replace these variables as needed  
  const verifierContract = "PrimeToadToken";
  const verifierName = "Prime Toad Token";
  const verifierSymbol = "PTT";

  // Deploy contract
  const ERC20Verifier = await ethers.getContractFactory(verifierContract);
  const erc20Verifier = await ERC20Verifier.deploy(
    verifierName,
    verifierSymbol
  );
  await erc20Verifier.deployed();

  // Output result
  console.log(`${verifierName} deployed to ${erc20Verifier.address}`);
}

// Init
// ========================================================
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
