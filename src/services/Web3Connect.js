import RemoteScript from './RemoteScript';

export const connectWeb3 = (dispatch) => {

  const waitForAccount = (err, accounts) => {
    const web3 = window.web3;
    try {
      if (accounts && accounts.length > 0) {
        web3.eth.getBalance(accounts[0], (error, result) => {
          // console.log('getBalance', accounts[0], 'error=', error, 'result=', result);
          dispatch({type: 'INIT_ACCOUNT', payload: { accountId: accounts[0], balance: result }});
        });
      }
    } catch (e) {}
  };
  
  const initNetwork = () => {
    const version = window.web3.version;
    version.getNetwork((error, result) => {
      if (error) {
        let networkId = -1;
        try { networkId = version.network; } catch (e) {};
        if (networkId) dispatch({ type: 'INIT_NETWORK', payload: networkId });
    } else {
      dispatch({type: 'INIT_NETWORK', payload: result});
    }
    });
  };
  
  window.addEventListener('load', () => {
    let attempts = 25;
    //let attempts = 0;
    let intervalId = setInterval(() => {
      if (attempts <= 0) { clearInterval(intervalId); dispatch({ type: 'NO_METAMASK' }); return; }
      // checking meta mask injection
      const web3 = window.web3;
      if (typeof web3 !== 'undefined' && typeof web3.eth !== 'undefined') {
        initNetwork();
        web3.eth.getAccounts(waitForAccount);
        // metamask injection detected
        clearInterval(intervalId);
      }
      attempts --;
    }, 100);
  });
  
  window.RPC = (uri) => {
    const providerUrl = uri || 'http://localhost:8545';
    RemoteScript('https://cdn.jsdelivr.net/npm/web3@0.19.0/dist/web3.min.js').then(() => {
      window.web3 = new window.Web3(new window.Web3.providers.HttpProvider(providerUrl));
      const web3 = window.web3;
      initNetwork(dispatch);
      web3.eth.getAccounts(waitForAccount);
      // Api.getGasPrice().then(result => dispatch({ type: 'GAS_PRICE', payload: result }));
    });
  };

  window.TESTSTATE = (module) => {
    dispatch({ type: 'INIT_TEST_STATE', payload: module });
  };

  const h = window.location.hostname;
  if (h === 'localhost' || h === '127.0.0.1') setTimeout(window.RPC, 200);
};
