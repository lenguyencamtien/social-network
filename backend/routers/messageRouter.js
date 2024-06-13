const router = require('express').Router();
const messageController = require('../controllers/messageController');
const auth = require('../middlewares/auth');

router.post('/message', auth, messageController.createMessage);
router.get('/conversation', auth, messageController.getConversations);
router.get('/message/:id', auth, messageController.getMessages);
router.delete('/message/:id', auth, messageController.deleteMessages);

module.exports = router;
