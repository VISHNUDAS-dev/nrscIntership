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
        
        
      })
      .catch(function (error) {
        console.log(error);
      });
      document.getElementsByClassName("tts").hide();
      
};

//sending text and file name tts $()
$('#ttsbtn').click(function(){

  const file_name=$('#file_name');
  const input_data=$('#tarea');
  const input_lan=$('#languages');

  $.ajax({
    url         :'/texttspeech',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({filename:file_name.val(),inputdata:input_data.val(),lan:input_lan.val()}),
    beforeSend  : function() { $('#preloadertts').show(); },
    success     :function(response){
      //do something
      
    },
    complete   : function() { $('#preloadertts').hide(); },


  });

});

//sending text and file name imagetovideo $()
$('#makevideo').on('click',function(){

  const file_name=$('#file_name');
  const vcat=$('#video_cat');
  const time=$('#loop');
  $.ajax({
    url         :'/makevideo',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({filename:file_name.val(),type:vcat.val(),fps:time.val()}),
    beforeSend  : function() { $('#preloaderaddframe').show(); },
    success     :function(response){
      //do something
      //response.download(output);
      time.val('');
      $('#tarea').val(''); 
      $('#myfile').val(''); 
      
    },
    complete   : function() { $('#preloaderaddframe').hide(); },

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
      $('#registration_section').hide(600);
      $('.actionsection').show(600);  
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

//sending category into category table
$('#newcat').click(function(){

  const category=$('#cat');
  $.ajax({
    url         :'/insertcategory',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({newcat:category.val()}),
    success     :function(response){
      //do something

      var select=$('#video_cat');
      var btn=$('#newcat');
      var txt=$('#cat');
      select.append('<option>'+response+'</option>');
      btn.attr("disabled", true);
      txt.val("");

      
      
    }


  });

});
//sending data to merge video
$('#mergevideo').click(function(){

  const filesname=$('#file_name');
  $.ajax({
    url         :'/mergevideo',
    method      : 'POST',
    contentType :'application/json',
    data        :JSON.stringify({filename:filesname.val()}),
    success     :function(response){
      $('.actionsection').hide(600);
      $('.success').show(600);  
    },
    error       :function(response){
      $('.actionsection').hide(600);
      $('.error').show(600);  
    },


  });

});











