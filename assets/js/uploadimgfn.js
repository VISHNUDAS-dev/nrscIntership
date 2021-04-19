
var send=function(){
    var myfile=document.getElementById("myfile").files;
    var formdata=new FormData();
    for(var i=0;i<myfile.length;i++)
    {
        formdata.append("myfile",myfile[i]);
    }
    var contenttype={
        headers:{
            "content-type": "multipart/form-data"
        }
    };

    axios.post('/uploadingimage',formdata,contenttype)
      .then(function (response) {
        console.log(response);
        console.log("axios posting............");
      })
      .catch(function (error) {
        console.log(error);
      });

};



