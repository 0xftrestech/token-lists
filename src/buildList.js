const { version } = require("../package.json");
const xdai = require("./tokens/xdai.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "Honeyswap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "ipfs://QmVkVdncv6V9M7ZVYP164bMQu4RPsDQQaWPFbeGtAVEZgg",
    keywords: ["honeyswap", "xdai"],
    tokens: [...xdai]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
