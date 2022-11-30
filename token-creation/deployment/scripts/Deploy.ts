// Imports
// ========================================================
import { ethers } from "hardhat";

// Deployment Script
// ========================================================
const main = async () => {
  // Replace these variables as needed  
  const verifierContract = "PTTVerifier";
  const verifierName = "PrimeToadToken";
  const verifierSymbol = "PTT";

  // Deploy contract
  const PTTVerifier = await ethers.getContractFactory(verifierContract);
  const erc20Verifier = await PTTVerifier.deploy(
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
