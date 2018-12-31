var bc = require('../blockchain')



var controllers = {
    async handleLogin(req, res) {
        try {
            await bc.loginAccount(req.body.address, req.body.password)
            req.session.address = req.body.address
            res.status(200).end()
        } catch (e) {
            console.log('login error ' + e)
            res.status(401).end()
        }
    },

    async getAllAccounts(req, res) {
        try {
            let t = await bc.getAllAccounts()
            res.json(t)
        } catch (e) {
            console.log('get accounts error ' + e)
            res.status(400).end()
        }
    },

    async getAllCrickets(req, res) {
        try {
            let t = await bc.getAllCrickets()
            res.json(t)
        } catch (e) {
            console.log('get crickets error ' + e)
            res.status(400).end()
        }
    },

    async getCricketsByOwner(req, res) {
        try {
            let t = await bc.getCricketsByOwner(req.session.address)
            res.json(t)
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async getCricketById(req, res) {
        try {
            let t = await bc.getCricketById(req.params.cid)
            res.json(t)
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async consignmentCricket(req, res) {
        try {
            await bc.consignmentCricket(req.body.price, req.body.cid, req.session.address)
            res.status(200).end()
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async getCricketsOnSelling(req, res) {
        console.log('get crickets on selling')
        try {
            let t = await bc.getCricketOnSelling()
            res.json(t)
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async buyCricket(req, res) {
        try {
            await bc.buyCricket(req.body.cid, req.body.price, req.session.address)
            res.status(200).end()
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async createCricket(req, res) {
        try {
            let t = await bc.createCricket(req.body.name, req.body.nonce, req.session.address)
            res.status(200).end()
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async getWorldCup(req, res) {
        try {
            let t = await bc.getWorldCup()
            res.json(t)
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async participateGame(req, res) {
        try {
            let t = await bc.participateGame(req.params.cid, req.session.address)
            res.status(200).end()
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async beginFighting(req, res) {
       try {
            await bc.beginFighting(req.session.address)
            res.status(200).end()
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async organiseCompetitions(req, res) {
        try {
            await bc.organiseCompetitions(req.session.address)
            res.status(200).end()
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },

    async getRecordByCricketId(req, res) {
        try {
            let t = await bc.getRecordByCricketId(req.params.cid)
            res.json(t)
        } catch (e) {
            console.log(e)
            res.status(400).end()
        }
    },
}


module.exports = controllers