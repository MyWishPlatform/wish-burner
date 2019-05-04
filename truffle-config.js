require('dotenv').config();

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const getProvider = (network) => new HDWalletProvider(
    [process.env.PK],
    `https://${network}.infura.io/v3/${process.env.INFURA_KEY}`
);

module.exports = {
  networks: {
    mainnet: {
      provider: () => getProvider("mainnet"),
      network_id: 1,
      skipDryRun: true,
      gasPrice: '5000000000' // 5 gwei
    },
    ropsten: {
      provider: () => getProvider("ropsten"),
      network_id: 3,
      skipDryRun: true
    },
  },

  compilers: {
    solc: {
      version: "0.5.2",
      settings: {
       optimizer: {
         enabled: false,
         runs: 200
       },
      }
    }
  }
};
