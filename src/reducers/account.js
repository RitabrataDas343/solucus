import { networks } from './../constants';

const defaultStateNoNetwork = {
  metamask: undefined,
  net: { isMain: false, id: -1, title: 'NO NETWORK', error: '' },
  accountId: '',
  balance: [],
  canPlay: false
};

const initialState = { ...defaultStateNoNetwork };

const getNetworkTitle = (netId) => {
  const networkTitle = networks.NETWORK_NAMES[netId];
  return networkTitle ? networkTitle : networks.TESTNET;
};

const defineAbilityToPlay = (state) => {
  let canPlay = true;
  if (!state.metamask) canPlay = false;
  else if (!state.accountId) canPlay = false;
  else if (!state.net || !state.net.id || parseInt(state.net.id, 10) === -1) canPlay = false;
  else if (typeof state.balance === 'object' && state.balance === []) canPlay = false;
  else if (typeof state.balance === 'string' && state.balance === '0') canPlay = false;
  return { ...state, canPlay };
};


export default function(state = initialState, action) {
  switch (action.type) {
    case 'NO_METAMASK': {
      return { ...defaultStateNoNetwork, metamask: false };
    }
    case 'INIT_NETWORK': {
      let netId = action.payload;
      const net = {
        isMain: netId === '1',
        id: netId || -1,
        title: getNetworkTitle(netId || -1),
        error: ''
      };
      return defineAbilityToPlay({ ...state, metamask: true, net });
    }
    case 'INIT_ACCOUNT': {
      return defineAbilityToPlay({ ...state, ...action.payload });
    }
    case 'SET_ACCOUNT_BALANCE': {
      if (!action.payload) return state;
      return { ...state, balance: action.payload };
    }
    default:
      return state;
  }
};
