const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const router = Router();

router.post('/product/store', ProductController.insert);
router.get('/product/list', ProductController.show);
router.put('/product/update/:id', ProductController.update);
router.delete('/product/delete/:id', ProductController.delete);

module.exports = router;
