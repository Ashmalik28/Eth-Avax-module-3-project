const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraProjectId = '4aeaaef098944254b59c2338dae8cb84';
const mnemonic = 'your mnemonic';

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
      network_id: 5, // Goerli network ID
      gas: 6000000, // Adjust the gas limit based on your contract's requirements
      gasPrice: 10000000000, // Adjust the gas price as needed
    },
  },
  compilers: {
    solc: {
      version: "0.8.9", // Specify the solc version you want to use
    },
  },
};
