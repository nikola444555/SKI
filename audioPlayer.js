        function audioPlayer(){
            
            var currentSong = 0;
            
            $("#audioPlayer")[0].src = $("#playlist li a")[0];
            
            
            $("#playlist li a").click(function(e){
                     
               e.preventDefault(); 
               $("#audioPlayer")[0].src = this;
               $("#audioPlayer")[0].play();
               $("#playlist li").removeClass("current-song");
               currentSong = $(this).parent().index();
               $(this).parent().addClass("current-song");
               $("#muzika img").attr('src',(currentSong+'.jpg')); 
            });
            
            $("#audioPlayer")[0].addEventListener("ended", function(){
               currentSong++;
               $("#muzika img").attr('src',(currentSong+'.jpg'));
                if(currentSong == $("#playlist li a").length){
                    currentSong = 0;
                    $("#muzika img").attr('src',(currentSong+'.jpg'));}
                $("#playlist li").removeClass("current-song");
                $("#playlist li:eq("+currentSong+")").addClass("current-song");
                $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
                $("#audioPlayer")[0].play();
            });
        }