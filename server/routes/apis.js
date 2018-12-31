var express = require('express');
var controllers = require('../controllers')
var bc = require('../blockchain')
var router = express.Router();

/* GET apis listing. */
router.get('/users', controllers.getAllAccounts);
router.get('/user', (req, res) => {
    res.json(!!req.session.address)
})
router.get('/crickets', controllers.getAllCrickets)
router.get('/crickets/selling', controllers.getCricketsOnSelling)
router.get('/crickets/:cid', controllers.getCricketById)
router.get('/user/crickets', bc.authUser, controllers.getCricketsByOwner)


router.get('/worldcup', controllers.getWorldCup)

router.get('/record/:cid', controllers.getRecordByCricketId)

router.post('/login', controllers.handleLogin)
router.post('/cricket/sell', bc.authUser, bc.checkOwner, bc.checkMining ,controllers.consignmentCricket)
router.post('/cricket/buy', bc.authUser, bc.checkBalance, bc.checkMining, controllers.buyCricket)
router.post('/cricket', bc.authUser, bc.checkMining, controllers.createCricket)


router.post('/worldcup/begin', bc.authUser, bc.checkMining, bc.checkCanStart, controllers.organiseCompetitions)
router.post('/worldcup/end', bc.authUser, bc.checkMining, bc.checkCanFight, controllers.beginFighting)
router.post('/worldcup/:cid', bc.authUser, bc.checkOwner, bc.checkCanParticipate, bc.checkMining, controllers.participateGame)

router.post('/logout', function (req, res) {
    req.session.address = null
    res.status(200).end()
})


module.exports = router;
