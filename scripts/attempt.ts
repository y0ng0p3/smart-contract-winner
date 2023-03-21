import hre, { artifacts } from "hardhat";
// import ethers from "@nomiclabs/hardhat-ethers"

async function main() {
  const callingContractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
  const attemptContractAddress = "0x176f6aEe8b42dA391C5c6a3B1Df0a12b11bF2735";

  const contract = await hre.ethers.getContractAt("Contract", callingContractAddress);
  const attemptContract = await hre.ethers.getContractAt("AttemptContract", attemptContractAddress);

  await attemptContract.attempt(contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
