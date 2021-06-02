document.getElementById('quick_download').addEventListener('click',function(){
    document.querySelector('.QD_modal_bg').style.display="flex";
    document.querySelector('body').style.overflow="hidden";
    
});
document.querySelector('.qd_close').addEventListener('click',function(){
    document.querySelector('.QD_modal_bg').style.display="none";
    document.querySelector('body').style.overflow="visible";
    document.getElementById('video_name').value="";

    
});


//send file name to check the existance of video file
$('#video_name').keyup(function(){
    const video_file_name=$('#video_name');
    if(video_file_name != ''){
      $.ajax({
        url         :'/checkvideoavailability',
        method      : 'POST',
        contentType :'application/json',
        data        :JSON.stringify({video_name:video_file_name.val()}),
        success     :function(response){
          if(response==0){
            $("#qkdwd").attr("disabled", true);
          }
          else if (response==1){
            $("#qkdwd").attr("disabled", false);
          }
          else{
            
          }
          
          //do something
          }
    
    
      });
  
    }
   
    
  
  });
  