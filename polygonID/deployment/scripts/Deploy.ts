// Imports
// ========================================================
import { ethers } from "hardhat";

// Deployment Script
// ========================================================
const main = async () => {
  // Replace these variables as needed  
  const verifierContract = "PrimeToadIDVerifier";
  const verifierName = "PrimeToadTokenID";
  const verifierSymbol = "PTT";

  // Deploy contract
  const PTTVerifier = await ethers.getContractFactory(verifierContract);
  const tokenVerifier = await PTTVerifier.deploy(
    verifierName,
    verifierSymbol
  );
  await tokenVerifier.deployed();

  // Output result
  console.log(`${verifierName} deployed to ${tokenVerifier.address}`);
}

// Init
// ========================================================
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
