let Web3 = require('web3');

let web3 = new Web3();

web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"));

web3.eth.getAccounts().then(console.log);

let user0 = web3.eth.getAccounts()[0];


var myContract = new web3.eth.Contract([
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "nonce",
                "type": "int256"
            }
        ],
        "name": "getCricket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "crickets",
        "outputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "owner",
                "type": "address"
            },
            {
                "name": "strength",
                "type": "uint256"
            },
            {
                "name": "momentum",
                "type": "uint256"
            },
            {
                "name": "size",
                "type": "uint256"
            },
            {
                "name": "win",
                "type": "int256"
            },
            {
                "name": "loss",
                "type": "int256"
            },
            {
                "name": "lastWin",
                "type": "uint256"
            },
            {
                "name": "price",
                "type": "uint256"
            },
            {
                "name": "selling",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "worldCup",
        "outputs": [
            {
                "name": "state",
                "type": "uint8"
            },
            {
                "name": "startDate",
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
        "name": "getCricketOnSelling",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
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
                "name": "cricketid",
                "type": "uint256"
            }
        ],
        "name": "find",
        "outputs": [
            {
                "name": "",
                "type": "bool"
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
                "name": "cricketid",
                "type": "uint256"
            }
        ],
        "name": "participateGame",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "beginFighting",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "gameRecord",
        "outputs": [
            {
                "name": "winnerId",
                "type": "uint256"
            },
            {
                "name": "loserId",
                "type": "uint256"
            },
            {
                "name": "round1",
                "type": "int256"
            },
            {
                "name": "round2",
                "type": "int256"
            },
            {
                "name": "round3",
                "type": "int256"
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
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getCricketByOwner",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
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
                "name": "cricketid",
                "type": "uint256"
            }
        ],
        "name": "buyCriket",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "cid",
                "type": "uint256"
            }
        ],
        "name": "getRecordByCricketId",
        "outputs": [
            {
                "name": "",
                "type": "uint256[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "organiseCompetitions",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "value",
                "type": "uint256"
            },
            {
                "name": "cricketid",
                "type": "uint256"
            }
        ],
        "name": "consignment",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    }
], '0xEBDAf30C32F3fFe1d361b403daF2c2E9FeA0099a');

console.log(myContract.methods.crickets(0).call({from: user0}, function(err, result) {
    console.log(result);
}));