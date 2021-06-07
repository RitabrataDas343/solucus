export const UNKNOWN = -1;
export const OLYMPIC = 0;
export const MAINNET = 1;
export const MORDEN = 2;
export const ROPSTEN = 3;
export const RINKEBY = 4;
export const KOVAN = 42;
export const TESTNET = 'TESTNET';

export const NETWORK_NAMES = {
  [UNKNOWN]: 'UNKNOWN',
  [OLYMPIC]: 'OLYMPIC',
  [MAINNET]: 'MAINNET',
  [MORDEN]: 'MORDEN',
  [ROPSTEN]: 'ROPSTEN',
  [RINKEBY]: 'RINKEBY',
  [KOVAN]: 'KOVAN'
};

export const NETWORKS = {
  UNKNOWN: -1,
  OLYMPIC: 0,
  MAINNET: 1,
  MORDEN: 2,
  ROPSTEN: 3,
  RINKEBY: 4,
  KOVAN: 42
};

export const ETHERSCAN_HOSTS = {
  [MAINNET]: 'https://etherscan.io',
  [ROPSTEN]: 'https://ropsten.etherscan.io',
  [RINKEBY]: 'https://rinkeby.etherscan.io',
  [KOVAN]: 'https://kovan.etherscan.io'
};
