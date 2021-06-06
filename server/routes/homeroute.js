const express=require('express');
const router=express.Router();
const renderingHomepage=require('../controller/homerender');
const textTspeech=require('../controller/textTospeech');
const insertdb=require('../controller/addcategory_DB');
const upimagepage=require('../controller/uploadimage');
const utm=require('../controller/imagetovideo');
const cts=require('../controller/clientToserverupld');
const gcat=require('../controller/get_category');
const fsin=require('../controller/insert_filename');
const fncheck=require('../controller/validatefilename');
const vmerge=require('../controller/mergevideo');
const chkvideoname=require('../controller/checkforvideo');
const quickdwld=require('../controller/checkforvideo');



//VIEW RENDER ROOUTES
router.get('/',renderingHomepage.renderingHomepage);
router.get('/createvideo',upimagepage.renderingui);
//API RENDER ROUTES
router.post('/texttspeech',textTspeech.textTospeech);
router.post('/insertcategory',insertdb.checkdb);
router.post('/makevideo',utm.imtovi);
router.post('/uploadingimage',cts.imageuploading);
router.get('/getcategory',gcat.getcat);
router.post('/insertfilename',fsin.insertfilestore);
router.post('/checkfilename',fncheck.checkavailability);
router.post('/mergevideo',vmerge.merger);
router.post('/download',utm.downloading);
router.post('/checkvideoavailability',chkvideoname.checkforvideofile);
router.post('/quickdownload',quickdwld.quickdownloading);
module.exports=router;