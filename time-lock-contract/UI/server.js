var express = require('express');
var app = express();

var path = require('path');

const Web3 = require('web3')

const fs = require('fs')
//for the alert box
var alert = require('alert')



 app.get('/', async (req, res) => { 
	res.sendFile(__dirname + '/index.html');
  });


 app.get('/claim', async (req, res) => { 
	
	let token = req.query.token;
	
	let _resp = await deposit(token,toBeDeposited);
	resp.send(_resp);

  });
  

  app.get('/deposit', async (req, res) => { 

	let toBeDeposited = req.query.amt; //token
	let token = req.query.token;

	let _resp = await deposit(token,toBeDeposited);
	resp.send(_resp);


  });



app.listen(3000);
console.log("server is up");



async function insertValue(incrVal, taskType){

	try{
		var con = await client.connect();
		var today = new Date();
		var time = today.getFullYear() + "-" + today.getMonth()+1 + "-" + today.getDate() + today.getFullYear() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		
		if(taskType == "increment") {
			console.log("increment Value");
			var myobj = { incVal: incrVal, timestamp: time, comment:"Incremented value"};
			let result = await con.db("Counter").collection("countercoll").insertOne(myobj);
		
		} else if(taskType == "reset") {
			var myobj = { incVal: incrVal, timestamp: time, comment:"Value has been reset to zero."};
			let result = await con.db("Counter").collection("countercoll").insertOne(myobj);
		}

	}catch (e) {
	
		console.error(e);
	} finally {	
	}


}

//web3.js code

// ganache url
const web3 = new Web3("http://127.0.0.1:7545")

//**NOTE** 'address' value should be changed to the address of the account which sends the transaction */
let address ;//= '0x181f92EeEabB05Dc04F0C2cbD70753f9ddCa576A' 
setDefaultAccount();
//**NOTE** 'contAddr' value should be changed to the address of the contract */
const contAddr = '0x7aF2bEDbFe0e1F12bC6F442b6347df1dD4A6d967'

const abi = [
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Approval",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Transfer",
	  "type": "event"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "totalSupply",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "who",
		  "type": "address"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		}
	  ],
	  "name": "allowance",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "transfer",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "approve",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "transferFrom",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "last_completed_migration",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "owner",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "",
		  "type": "address"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "completed",
		  "type": "uint256"
		}
	  ],
	  "name": "setCompleted",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "owner",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "spender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Approval",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "from",
		  "type": "address"
		},
		{
		  "indexed": true,
		  "internalType": "address",
		  "name": "to",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "value",
		  "type": "uint256"
		}
	  ],
	  "name": "Transfer",
	  "type": "event"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "decimals",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "name",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [],
	  "name": "symbol",
	  "outputs": [
		{
		  "internalType": "string",
		  "name": "",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [],
	  "name": "ToptalToken",
	  "outputs": [],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_owner",
		  "type": "address"
		}
	  ],
	  "name": "balanceOf",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "balance",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "_value",
		  "type": "uint256"
		}
	  ],
	  "name": "transfer",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_from",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "_to",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "_value",
		  "type": "uint256"
		}
	  ],
	  "name": "transferFrom",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_spender",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "_value",
		  "type": "uint256"
		}
	  ],
	  "name": "approve",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "_owner",
		  "type": "address"
		},
		{
		  "internalType": "address",
		  "name": "_spender",
		  "type": "address"
		}
	  ],
	  "name": "allowance",
	  "outputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "inputs": [
		{
		  "internalType": "address",
		  "name": "tokenContract",
		  "type": "address"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "constructor"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "sender",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "releaseTime",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "string",
		  "name": "tokenType",
		  "type": "string"
		}
	  ],
	  "name": "LogLockBoxDeposit",
	  "type": "event"
	},
	{
	  "anonymous": false,
	  "inputs": [
		{
		  "indexed": false,
		  "internalType": "address",
		  "name": "receiver",
		  "type": "address"
		},
		{
		  "indexed": false,
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		},
		{
		  "indexed": false,
		  "internalType": "string",
		  "name": "tokenType",
		  "type": "string"
		}
	  ],
	  "name": "LogLockBoxWithdrawal",
	  "type": "event"
	},
	{
	  "constant": true,
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "",
		  "type": "uint256"
		}
	  ],
	  "name": "lockBoxStructs",
	  "outputs": [
		{
		  "internalType": "address",
		  "name": "beneficiary",
		  "type": "address"
		},
		{
		  "internalType": "uint256",
		  "name": "balance",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "releaseTime",
		  "type": "uint256"
		},
		{
		  "internalType": "string",
		  "name": "tokenType",
		  "type": "string"
		}
	  ],
	  "payable": false,
	  "stateMutability": "view",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "uint256",
		  "name": "amount",
		  "type": "uint256"
		},
		{
		  "internalType": "uint256",
		  "name": "releaseTime",
		  "type": "uint256"
		},
		{
		  "internalType": "string",
		  "name": "tokenType",
		  "type": "string"
		}
	  ],
	  "name": "deposit",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "success",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	},
	{
	  "constant": false,
	  "inputs": [
		{
		  "internalType": "string",
		  "name": "tokenType",
		  "type": "string"
		}
	  ],
	  "name": "withdraw",
	  "outputs": [
		{
		  "internalType": "bool",
		  "name": "success",
		  "type": "bool"
		}
	  ],
	  "payable": false,
	  "stateMutability": "nonpayable",
	  "type": "function"
	}
  ]
	
const contract = new web3.eth.Contract(abi, contAddr)



const deposit = async (token,value) => { 

	let date = (new Date()).getTime();
	//
	date = date.getDate() + 100;
	let releaseDateiUnixTimeStamp = date / 1000;

	let addr =  web3.currentProvider.selectedAddress;

	var isDone = await contract.methods.deposit(value,releaseDateiUnixTimeStamp,token).send({from:addr});

	return isDone;

}

const claim = async (token,value) => { 
	var isDone = await contract.methods.withdraw(token).send({from:addr});
	return isDone;

}

//used to set the default account.
async function setDefaultAccount() {

	console.log("Calling currentAccount")
	var addresses = await web3.eth.getAccounts(function (error, result) {
		return  result;
	});
	console.log("addresses ", addresses)
	address = addresses[0];
	console.log("default address is ", address);
	return addresses;

} 