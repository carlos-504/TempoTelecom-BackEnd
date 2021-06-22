const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.post('/user/store', UserController.insert);
router.get('/user/list', UserController.show);
router.put('/user/update/:id', UserController.update);
router.delete('/user/delete/:id', UserController.delete);

module.exports = router;
