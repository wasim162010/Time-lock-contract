var HDWalletProvider = require("truffle-hdwallet-provider");
//mnemonic of my metamask wallet account
const MNEMONIC = 'short decade demand train total truck awkward utility fire tail wide sign';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://kovan.infura.io/v3/9116e53c01e14b0580e566fc02645003")
      },
      network_id: 42,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  }
};