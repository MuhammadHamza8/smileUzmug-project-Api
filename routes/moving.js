 const express = require('express');
 const router = express.Router();

 const movingController= require('../controllers/moving');


 router.post('/post', movingController.postMoving);

router.get('/getAll',movingController.getAll);


  router.get('/getOne/:id',movingController.getOne);


  router.patch('/update/:id',movingController.update);


  router.delete('/delete/:id',movingController.delete);

module.exports = router;