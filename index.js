let Web3 = require('web3');

let web3 = new Web3();

web3.setProvider(new Web3.providers.HttpProvider("http://localhost:8545"))

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


function cricket(name, owner) {
    this.name = name
    this.owner = owner
}





let user0 = '0xfD913bEF9F04Befd3A87f898022160e634C29A05'

async function loginAccount(address, password) {
    await web3.eth.personal.unlockAccount(address, password, 600)
}

async function getAllAccounts() {
    return await web3.eth.getAccounts()
}

async function getAllCrickets() {
    let crickets = []
    let index = 0

    await myContract.methods.index().call(err, result => {
        index = result
    })

    for (i = 0; i < index; i++) {
        await myContract.methods.crickets(index).call(function (err, result) {
            if (err) {
                console.log(err)
                return crickets
            } else {
                let { name: name, owner: owner } = result
                // console.log(name, owner)
                crickets.push({ name, owner })
            }
        })
    }
    return crickets
}


async function getCricketsByOwner(owner) {
    let crickets = []
    let cid
    await myContract.methods.getCricketsByOwner(owner, (err, result) => {
        if (err) {
            throw err
        } else {
            cid = result
        }
    })

    cid.map(async (x) => {
        await myContract.methods.crickets(x).call(err, result => {
            if (err) {
                throw err
            } else {
                crickets.push(result)
            }
        })
    })

    return crickets

}


async function consignmentCricket(price, cid, owner) {
    let a = await myContract.methods.consignment(price, cid).send({from: owner})
    console.log(a)
}

async function getCricketOnSelling() {
    let crickets = []
    let cid
    await myContract.methods.getCricketOnSelling((err, result) => {
        if (err) {
            throw err
        } else {
            cid = result
        }
    })

    cid.map(async (x) => {
        await myContract.methods.crickets(x).call(err, result => {
            if (err) {
                throw err
            } else {
                crickets.push(result)
            }
        })
    })

    return crickets

}


async function buyCriket(cid, price, buyer) {
    await myContract.methods.buyCriket(cid).send({from: buyer, value: price})
} 


async function createCricket(name, nonce, owner) {
    await myContract.methods.getCricket(name, nonce).send({from: owner, gas: 500000})
}

async function getWorldCup() {
    let t = await myContract.methods.worldCup().call()
}

async function participateGame(cid, owner) {
    let worldCup = await getWorldCup()
    // TODO: check world status
    let t = await myContract.methods.participateGame(cid).send({ from: owner })
    console.log(t)
}

async function find(cid) {
    let t = await myContract.methods.find(cid).call()
}

async function beginFighting(owner) {
    let t = await myContract.methods.beginFighting().send({from: owner, gas: 3000000})
} 

async function getRecordByCricketId(cid) {
    let t = await myContract.methods.getRecordByCricketId(cid).call()
    // TODO: map record
}

function parseCricket(c) {
    let { name: name, owner: owner, strength: strength, momentum: momentum, size: size, win: win, loss: loss, lastWin: lastWin, price: price, selling: selling } = c
    return {
        name,
        owner,
        strength,
        momentum,
        size,
        win,
        loss,
        lastWin,
        price,
        selling
    }
}

function parseRecord(r) {
    let { winnerId: winnerId, loserId: loserId, round1: round1, round2: round2, round3: round3 } = r
    return {
        winnerId,
        loserId,
        round1,
        round2,
        round3
    }
}

async function test() {
    try {
        await loginAccount(user0, 'dzj')
        let a = await participateGame(0, user0)
        console.log(a)
    } catch (e) {
        console.log(e)
    }
}

test()

setTimeout(() => {
    
}, 3000);