const express=require('express');
const router=express.Router();
const renderingHomepage=require('../controller/homerender');
const textTspeech=require('../controller/textTospeech');
const insertdb=require('../controller/userregdb');

router.get('/',renderingHomepage.renderingHomepage);
router.post('/a',textTspeech.textTospeech);
router.post('/b',insertdb.checkdb);
module.exports=router;