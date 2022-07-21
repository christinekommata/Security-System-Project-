// Source code to interact with smart contract

// web3 provider with fallback for old version
window.addEventListener('load', async () => {
  // New web3 provider
  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // ask user for permission
          await ethereum.enable();
          // user approved permission
      } catch (error) {
          // user rejected permission
          console.log('user rejected permission');
      }
  }
  // Old web3 provider
  else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // no need to ask for permission
  }
  // No web3 provider
  else {
      console.log('No web3 provider detected');
  }
});
console.log (window.web30.currentProvider)

// contractAddress and abi are setted after contract deploy
var contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138';
var abi = JSON.parse([
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "lastname",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "dni",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "certification",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "hospital",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "date",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "untilDate",
				"type": "uint256"
			}
		],
		"name": "certificateSubscribed",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastname",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dni",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "certificationName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hospitalName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dueDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expirationDate",
				"type": "uint256"
			}
		],
		"name": "subscribeCertificate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "certifications",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lastName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "certificationName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hospitalName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "dueDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expirationDate",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dniToCertification",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]);

//contract instance
contract = new web3.eth.Contract(abi, contractAddress);

// Accounts
var account;

web3.eth.getAccounts(function(err, accounts) {
  if (err != null) {
    alert("Error retrieving accounts.");
    return;
  }
  if (accounts.length == 0) {
    alert("No account found! Make sure the Ethereum client is configured properly.");
    return;
  }
  account = accounts[0];
  console.log('Account: ' + account);
  web3.eth.defaultAccount = account;
});

//Smart contract functions
function subscribeCertification() {
  id = $("#newID").val();
  contract.methods.setID (id).send( {from: account}).then( function(tx) {
    console.log("Transaction: ", tx);
  });
  $("#newID").val('');

function subscribeCertification() {
  contract.methods.getID().call().then( function( id ) {
    console.log("id: ", id);
    document.getElementById('lastID').innerHTML = id;
  });
}
// web3 provider with fallback for old version
window.addEventListener('load', async () => {
  // New web3 provider
  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // ask user for permission
          await ethereum.enable();
          // user approved permission
      } catch (error) {
          // user rejected permission
          console.log('user rejected permission');
      }
  }
  // Old web3 provider
  else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      // no need to ask for permission
  }
  // No web3 provider
  else {
      console.log('No web3 provider detected');
  }
})};
