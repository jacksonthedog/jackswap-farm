require("@nomiclabs/hardhat-ethers");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: { compilers: [{ version: "0.6.12" }] },
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      port: 8545,
    },
  },
};
