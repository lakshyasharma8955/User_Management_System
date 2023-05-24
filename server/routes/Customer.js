const express = require('express');
const router = express.Router();
const customerControllers = require('../controllers/customerControllers');

/**
 *  Customer Routes
 */

router.get('/', customerControllers.homepage);
router.get('/about', customerControllers.about);
router.get('/add', customerControllers.addCustomer);
router.post('/add', customerControllers.postCustomer);
router.get('/view/:id', customerControllers.view);
router.get('/edit/:id', customerControllers.edit);
router.put('/edit/:id', customerControllers.editPost);
router.delete('/edit/:id', customerControllers.deleteCustomer);
router.post('/search', customerControllers.searchCustomers);


module.exports = router;
