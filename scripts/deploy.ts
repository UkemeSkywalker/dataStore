import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

async function main() {


  const deploy = await ethers.getContractFactory("DataStore");
  const deployed = await deploy.deploy();

  await deployed.deployed();

  console.log("contract deployed at:", deployed.address);

  const contractAddress = deployed.address;
  const result = await helpers.getStorageAt(contractAddress, 15);

  console.log("here is the result:", result);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
