module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    quorum: {
      host: "167.99.163.41",
      port: 22006,
      network_id: "*",
      gasPrice: 0,
      gas: 4500000,
      from: '0x9c8c83ecb89384db79b7f9da90224a8d6bcd1bf5'
    },
    coverage: {
      host: "localhost",
      port: 8555,
      network_id: "*", // Match any network id
      gas: 0xFFFFFFF,
      gasprice: 0x1
    },
  },
  mocha: {
    useColors: true,
    enableTimeouts: false
  },
  solc: {
    optimizer: {
      enabled: true,
        runs: 200
    }
  }
};
