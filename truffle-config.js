module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      port: 8545,
      network_id: 97,
    },
    staging: {
      url: "http://52.203.139.141:8545",
      port: 8545,
      network_id: "*",
    },
  },
  compilers: {
    solc: {
      version: "0.6.12",
    },
  },
};
