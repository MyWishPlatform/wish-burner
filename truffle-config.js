module.exports = {
  networks: {
  },

  compilers: {
    solc: {
      version: "0.5.8",
      settings: {
       optimizer: {
         enabled: true,
         runs: 200
       },
      }
    }
  }
};
