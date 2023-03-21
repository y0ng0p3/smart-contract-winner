import hre, { artifacts } from "hardhat";

async function main() {
  const url = process.env.GOERLI_URL;
  const privateKey = process.env.PRIVATE_KEY;
  // const callingContract = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";

  let artifacts = hre.artifacts.readArtifact("AttemptContract");

  const provider = new hre.ethers.providers.JsonRpcProvider(url);

  let wallet = new hre.ethers.Wallet(privateKey!, provider);

  const AttemptContract = await hre.ethers.getContractFactory((await artifacts).abi,(await artifacts).bytecode, wallet);
  const attemptContract = await AttemptContract.deploy();

  await attemptContract.deployed();

  console.log(
    `Contract deployed to ${attemptContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(() => {
  process.exit(0);
}).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
