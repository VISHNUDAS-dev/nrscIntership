//getting category from database

$(document).ready(function(){
  $.ajax({
    url         :'/getcategory',
    contentType :'application/json',
    success     :function(response){
      var select=$('#video_cat');
      for (row of response){
        select.append('<option>'+Object.values(row)+'</option>');
      }

    }


  });
  

});



var send=function(){
    var f_folder=document.getElementById("file_name").value;
    var category=document.getElementById("video_cat").value;
    var myfile=document.getElementById("myfile").files;
    var formdata=new FormData();
    formdata.append("file_folder",f_folder);
    formdata.append("vcategory",category);

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

//sending text and file name tts $()
$('#ttsbtn').click(function(){

  const file_name=$('#file_name');
  const input_data=$('#tarea');
  $.ajax({
    url         :'/texttspeech',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({filename:file_name.val(),inputdata:input_data.val()}),
    success     :function(response){
      //do something
    }


  });

});

//sending text and file name imagetovideo $()
$('#makevideo').click(function(){

  const file_name=$('#file_name');
  const vcat=$('#video_cat');
  $.ajax({
    url         :'/makevideo',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({filename:file_name.val(),type:vcat.val()}),
    success     :function(response){
      //do something
      //response.download(output);
      
    }


  });

});


//sending filename into filestore table
$('#next').click(function(){

  const file_name=$('#file_name');
  $.ajax({
    url         :'/insertfilename',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({filename:file_name.val()}),
    success     :function(response){
      //do something
      
      
    }


  });

});
//sending filename to check the availability
$('#file_name').keyup(function(){

  //var file_name = $(this).val().trim();
  const file_name=$('#file_name');
  if(file_name != ''){
    $.ajax({
      url         :'/checkfilename',
      method      : 'POST',
      contentType :'application/json',
      data        :JSON.stringify({filename:file_name.val()}),
      success     :function(response){
        if(response==0){
          $("#next").attr("disabled", true);
        }
        else if (response==1){
          $("#next").attr("disabled", false);
        }
        else{
          
        }
        
        //do something
        
        
        
      }
  
  
    });

  }
  

});











