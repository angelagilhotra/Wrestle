var web3Provider = null;
var WrestlingContract;
const nullAddress = "0x0000000000000000000000000000000000000000";

function init () {
    initWeb3();
}

function initWeb3 () {
    if (typeof web3 !== 'undefined' && typeof web3.currentProvider !== 'undefined')  {
        web3Provider = web3.currentProvider;
        web3 = new Web3 (web3Provider);
    } else {
        console.error ('No web3 provider found. Please install Metamask on your browser');
        alert ('No web3 provider found. Please install Metamask on your browser.');
    }
    initWrestlingContract();
}

function initWrestlingContract () {
    $.getJSON ('Wrestling.json', function (data) {
        WrestlingContract = TruffleContract (data);
        WrestlingContract.setProvider (web3Provider);
        getEvents () ;
        getFirstWrestlerAddress() ;
        getSecondWrestlerAddress ();
    });
}

function getEvents() {
    
}