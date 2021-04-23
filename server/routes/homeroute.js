const express=require('express');
const router=express.Router();
const renderingHomepage=require('../controller/homerender');
const textTspeech=require('../controller/textTospeech');
const insertdb=require('../controller/addcategory_DB');
const upimagepage=require('../controller/uploadimage');
const utm=require('../controller/imagetovideo');
const cts=require('../controller/clientToserverupld');


//VIEW RENDER ROOUTES
router.get('/',renderingHomepage.renderingHomepage);
router.get('/createvideo',upimagepage.renderingui);
//API RENDER ROUTES
router.post('/texttspeech',textTspeech.textTospeech);
router.post('/b',insertdb.checkdb);
router.post('/mv',utm.imtovi);
router.post('/uploadingimage',cts.imageuploading);

module.exports=router;