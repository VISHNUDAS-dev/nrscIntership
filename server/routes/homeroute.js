const express=require('express');
const router=express.Router();
const renderingHomepage=require('../controller/homerender');
const textTspeech=require('../controller/textTospeech');
const insertdb=require('../controller/userregdb');
const upimagepage=require('../controller/uploadimage');
const utm=require('../controller/imagetovideo');
const cts=require('../controller/clientToserverupld');



router.get('/',renderingHomepage.renderingHomepage);
router.post('/a',textTspeech.textTospeech);
router.post('/b',insertdb.checkdb);
router.post('/u',upimagepage.renderingui);
router.post('/mv',utm.imtovi);
router.post('/uploadingimage',cts.imageuploading);
module.exports=router;