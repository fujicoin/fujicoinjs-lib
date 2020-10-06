'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x19FujiCoin Signed Message:\n',
  bech32: 'fc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x24,
  scriptHash: 0x10,
  wif: 0xa4,
};
exports.regtest = {
  messagePrefix: '\x19FujiCoin Signed Message:\n',
  bech32: 'fcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
};
exports.testnet = {
  messagePrefix: '\x19FujiCoin Signed Message:\n',
  bech32: 'tf',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x4a,
  scriptHash: 0xc4,
  wif: 0xca,
};
