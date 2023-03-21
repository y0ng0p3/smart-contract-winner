import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import path from "path"
import dotenv from "dotenv";

const envPath = path.resolve(__dirname, '.env');
dotenv.config({path: envPath});

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.GOERLI_URL,
      accounts: [process.env.PRIVATE_KEY!, ],
    }
  }
};

export default config;
