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
                "name": "id",
                "type": "uint256"
            },
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
        "inputs": [],
        "name": "index",
        "outputs": [
            {
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
], '0xdb05b15Ace1C9d98753dFE99dd9aAB1656293a6d');

if (web3 == 'undefined') {
    console.log('open error')
} else {
    console.log('connect to "http://localhost:8545"')
}


let user0 = '0xfD913bEF9F04Befd3A87f898022160e634C29A05';


function parseCricket(c) {
    let {
        id: id,
        name: name,
        owner: owner,
        strength: strength,
        momentum: momentum,
        size: size,
        win: win,
        loss: loss,
        lastWin: lastWin,
        price: price,
        selling: selling
    } = c
    return {
        id,
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
    let {
        winnerId: winnerId,
        loserId: loserId,
        round1: round1,
        round2: round2,
        round3: round3
    } = r
    return {
        winnerId,
        loserId,
        round1,
        round2,
        round3
    }
}

async function getCricketById(cid) {
    let t = await myContract.methods.crickets(cid).call()
    return parseCricket(t)
}

async function getWorldCup() {
    let t = await myContract.methods.worldCup().call()
    return t
}

var bc = {
    async loginAccount(address, password) {
        await web3.eth.personal.unlockAccount(address, password, 60 * 60)
    },

    async getAllAccounts() {
        return await web3.eth.getAccounts()
    },

    async getCricketById(cid) {
        let t = await myContract.methods.crickets(cid).call()
        return parseCricket(t)
    },

    async getAllCrickets() {
        let crickets = []
        let index = await myContract.methods.index().call()
        console.log(index)
        for (i = 0; i < index; i++) {
            let t = await myContract.methods.crickets(i).call()
            crickets.push(parseCricket(t))
        }
        return crickets
    },


    async getCricketsByOwner(owner) {
        let crickets = []
        let cid = await myContract.methods.getCricketByOwner(owner).call()
        console.log('get cricket', cid)
        for (x of cid) {
            console.log(x)
            let t = await myContract.methods.crickets(x).call()
            crickets.push(parseCricket(t))
        }

        console.log('end')
        return crickets
    },


    async consignmentCricket(price, cid, owner) {
        await myContract.methods.consignment(price, cid).send({
            from: owner
        })
    },

    async getCricketOnSelling() {
        let crickets = []
        let cid = await myContract.methods.getCricketOnSelling().call()
        console.log(cid)
        for (x of cid) {
            console.log(x)
            let t = await myContract.methods.crickets(x).call()
            crickets.push(parseCricket(t))
        }
        return crickets
    },


    async buyCricket(cid, price, buyer) {
        await myContract.methods.buyCriket(cid).send({
            from: buyer,
            value: price
        })
    },


    async createCricket(name, nonce, owner) {
        await myContract.methods.getCricket(name, nonce).send({
            from: owner,
            gas: 500000
        })
    },

    async getWorldCup() {
        let t = await myContract.methods.worldCup().call()
        return t
    },

    async participateGame(cid, owner) {
        let worldCup = await getWorldCup()
        console.log(worldCup)
        let t = await myContract.methods.participateGame(cid).send({
            from: owner
        })
        console.log(t)
    },

    async find(cid) {
        let t = await myContract.methods.find(cid).call()
    },

    async beginFighting(owner) {
        await myContract.methods.beginFighting().send({
            from: owner,
            gas: 3000000
        })
    },

    async organiseCompetitions(owner) {
        await myContract.methods.organiseCompetitions().send({
            from: owner
        })
    },

    async getRecordByCricketId(cid) {
        let records = []
        let rid = await myContract.methods.getRecordByCricketId(cid).call()

        for (x of rid) {
            let t = await myContract.methods.gameRecord(x).call()
            records.push(parseRecord(t))
        }
        return records
    },

    async checkOwner(req, res, next) {
        try {
            let t = await getCricketById(req.body.cid)
            if (t.owner == req.session.address) {
                next()
            } else {
                res.status(400).json({
                    error: '你不是这个蛐蛐的拥有者'
                })
            }
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },


    async checkBalance(req, res, next) {
        try {
            let t = await web3.eth.getBalance(req.session.address)
            if (t >= req.body.price) {
                next()
            } else {
                res.status(400).json({
                    error: '账户余额不足'
                })
            }
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async authUser(req, res, next) {
        if (req.session.address) {
            next()
        } else {
            res.status(403).end()
        }
    },

    async checkCanStart(req, res, next) {
        try {
            let t = await getWorldCup()
            if (t.state == 0) {
                next()
            } else {
                res.status(400).json({
                    error: '比赛还没结束'
                })
            }
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async checkCanFight(req, res, next) {
        try {
            let t = await getWorldCup()
            if (t.state == 1 && Math.round(Date.now() / 1000) > t.startDate) {
                next()
            } else {
                res.status(400).json({
                    error: '不能开战'
                })
            }
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async checkCanParticipate(req, res, next) {
        try {
            let t = await getWorldCup()
            if (t.state == 1) {
                next()
            } else {
                res.status(400).json({
                    error: '不能参赛'
                })
            }
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async checkMining(req, res, next) {
        try {
            let t = await web3.eth.isMining()
            if (t == true) {
                next()
            } else {
                res.status(400).json({ error: '缺少矿工' })
            }
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    }
}

module.exports = bc