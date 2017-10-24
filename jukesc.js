SC.initialize({
  client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

$(document).ready(function() {
      console.log("ready!");

      var trackUrl;
      var streamUrl;
      var songId;
      var songTitle;
      var songArtist;
      var songArtwork;
      var clientId = 'fd4e76fc67798bfa742089ed619084a6';
      var audio = new Audio();
      audio.crossOrigin = "anonymous";

      class scJukebox {


        submit() {
          trackUrl = $("#search").val();
          $.get('https://api.soundcloud.com/resolve.json?url=' + trackUrl + '&client_id=' + clientId,
            function(result) {
              songId = result.id;
              songTitle = result.title;
              songArtist = result.user.username;
              songArtwork = result.artwork_url;
              streamUrl = result.stream_url;
              $('#artist').html(songArtist);
              $('#song').html(songTitle);
              $('#label').html(songArtwork);
              $('#artwork').attr("src", songArtwork);
            });
          }

          playSoundcloud() {
            audio.src = streamUrl + "/?client_id=" + clientId;
            audio.play();
          }

          stopSoundcloud() {
            audio.pause();
            audio.currentTime = 0;
          }
        }

        function init() {
          var jukebox = new scJukebox();

          document.getElementById('submit').addEventListener('click', function() {
            jukebox.submit()
          });

          document.getElementById('play').addEventListener('click', function() {
            jukebox.playSoundcloud()
          });

          document.getElementById('stop').addEventListener('click', function() {
            jukebox.stopSoundcloud()
          });

        }
        init();

      }); //end Jquery









    // SC.initialize({
    //   client_id: 'fd4e76fc67798bfa742089ed619084a6'
    // });
    //
    // // stream track id 293
    // // SC.stream('/tracks').then(function(player) {
    // //   player.play();
    // // });
    //
    // function playSong(genre) {
    //   SC.stream('/tracks', {
    //     genres: genre
    //
    //   }, function(tracks) {
    //     var random = Math.floor(Math.random() * 49);
    //     SC.oEmbed(tracks[random],{ auto_play: true }).document.getElementById('target');
    //   });
    // //   var track_url = 'http://soundcloud.com/forss/flickermood';
    // // SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    // //   console.log('oEmbed response: ', oEmbed);
    // // });
    // }
    //
    // window.onload = function() {
    //   var menuLinks = document.getElementsByClassName('genre');
    //   for (var i = 0; i < menuLinks.length; i++) {
    //     var menuLink = menuLinks[i];
    //     menuLink.onclick = playSong();
    //     //{
    //       //e.preventDefault();
    //     //  playSong(menuLinks.innerHTML);
    //     //};
    //   }
    // };
    //
    //
    //
    //
    // // SC.initialize({
    // //   client_id: 'fd4e76fc67798bfa742089ed619084a6'
    // // });
    // // function playSong(genre) {
    // //   SC.get('/tracks', {
    // //     genres: genre
    // //
    // //   }, function(tracks) {
    // //     var random = Math.floor(Math.random() * 49);
    // //     SC.oEmbed(tracks[random].uri, {auto_play: true}, document.getElementById('target'));
    // //   });
    // // }
    // //
    // // window.onload = function() {
    // //   var menuLinks = document.getElementsByClassName('genre');
    // //   console.log(menuLinks);
    // //   for (var i = 0; i < menuLinks.length; i++) {
    // //     var menuLink = menuLinks[i];
    // //     menuLink.onclick = function(e) {
    // //       e.preventDefault();
    // //       playSong(menuLink.innerHTML);
    // //     };
    // //   }
    // // };
