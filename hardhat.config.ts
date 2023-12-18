import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("hardhat-gas-reporter");

const config: HardhatUserConfig = {
  solidity: "0.8.15",
  gasReporter: {
    enabled:true,
    currency: 'USD',
  },
};

export default config;
