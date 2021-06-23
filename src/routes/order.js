const { Router } = require('express');
const OrderController = require('../controllers/OrderController');

const router = Router();

router.post('/order/store', OrderController.insert);
router.get('/order/list', OrderController.show);
router.get('/order/index/:id', OrderController.index);
router.put('/order/update/:id', OrderController.update);
router.delete('/order/delete/:id', OrderController.delete);

module.exports = router;
