require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24", // Adjust this version to match the pragma in your contract
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};