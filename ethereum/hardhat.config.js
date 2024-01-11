require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/4853151b470443bfa38bb78076564f66", //Infura url with projectId
      accounts: [
        "de3f19205860216ecab10ae61d6b15a280ddc9bd818d373cfecae1f4ed1127ae",
      ], // add the account that will deploy the contract (private key)
    },
  },
};
