const { Router } = require('express');
const RequestController = require('../controllers/RequestController');

const router = Router();

router.post('/request/store', RequestController.insert);
router.get('/request/list', RequestController.show);
router.put('/request/update/:id', RequestController.update);
router.delete('/request/delete/:id', RequestController.delete);

module.exports = router;
