
	var fs = require("fs");
	var request = require("request");
	var keys = require("./keys.js");
	var twitter = require("twitter");
	var Spotify = require ("node-spotify-api");
	var omdb = require("omdb");
	var liriArg = process.argv[2];

	switch(liriArg) {
		case
		 "my-tweets": myTweets();
		  break;
		case 
		"spotify-this-song": selectSong(); 
		break;
		case 
		"movie-this": movieThis(); 
		break;
		case 
		"do-what-it-says": doWhatItSays(); 
		break;
		
	};

	// OMDB
	function movieThis(){
		var movie = process.argv[3];
		if(!movie){
			movie = "mr nobody";
		}

		input = movie

		request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

		  if (!error && response.statusCode === 200) {

		  console.log("Your requested movie info: " + JSON.stringify(body));
		  }
		});
	}
		

	// 	request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&r=json&tomatoes=40e9cece", function (error, response, body) {
	// 		if (!error && response.statusCode == 200) {

	// 	var data = [];
 //        var results = JSON.parseint(body);

 //        data.push({
 //        'Title: ' : results.Title,
 //        'Year: ' : results.Year,
 //        'Rated: ' : results.Rated,
 //        'IMDB Rating: ' : results.imdbRating,
 //        'Country: ' : results.Country,
 //        'Language: ' : results.Language,
 //        'Plot: ' : results.Plot,
 //        'Actors: ' : results.Actors,
 //        'Rotten Tomatoes Rating: ' :results.tomatoRating,
 //        'Rotton Tomatoes URL: ' : results.tomatoURL
 //    	})
 //        console.log(data);
 //   	 }
	// });
	

	// Twitter
	function myTweets() {
		var client = new twitter(keys.twitterKeys);
			
		var twitterUsername = process.argv[3];
		if(!twitterUsername){
			twitterUsername = "sportsfan1977";
		}
		params = {screen_name: twitterUsername, count: 20};
		client.get("statuses/user_timeline/", params, function(error, data, response){
			if (!error) {
				for(var i = 0; i < data.length; i++) {
					console.log(data[i].created_at, data[i].text);
				}
			}  else {
				console.log(error);
				return;
			}
		});
	}

	// Spotify

	 function selectSong() {
            var spotify = new Spotify(keys.spotifyKeys);
            var limit = 3;
            var songName = process.argv[3];
             if (songName === undefined) {
 		        songName = 'The Sign';
        
            spotify.search({ type: 'track', query: songName, limit: limit}, function(err, data) {
              if (err) {
                return console.log('Error occurred: ' + err);
              }
                    console.log(`\n`);
                    console.log(`----------------------------------------`);
                    console.log(`Search Results for Song: ${songName}`);
                    console.log(`----------------------------------------`);
                    console.log(`\n`);
        
                for(var i = 0; i < limit; i++) {
        
                    console.log(`Result ${i+1}`);
                    console.log(`----------------------------------------`);
                    console.log(`Artist(s) Name: ${data.tracks.items[i].artists[0].name}`); 
                    console.log(`Album Name: ${data.tracks.items[i].album.name}`); 
                    console.log(`Song Name: ${data.tracks.items[i].name}`);  
                    console.log(`Spotify Preview Link: ${data.tracks.items[i].external_urls.spotify}`); 
                    console.log(`Popularity: ${data.tracks.items[i].popularity}`); 
                    console.log(`----------------------------------------`);
                    console.log(`\n`);
                }
            });
          }      
        }


	// function spotifyThisSong(songName) {
	//  if (songName === undefined) {
 //        songName = 'The Sign';
 //      };
 //    var limit = 3;
 //    var spotify = new Spotify(keys.spotifyKeys);
 //    spotify.search({ type: 'track', query: songName, limit: limit}, function(err, data) {
 //      if (err) {
 //        return console.log('Error occurred: ' + err);
 //      }
	//     for (var i = 0; i < songs.length; i++) {
 //        console.log(' ');
 //        console.log('Artist: ' + data.tracks.items[0].artists[0].name);
 //        console.log('Song: ' + data.tracks.items[0].name);
 //        console.log('Preview Link: ' + data.tracks.items[0].preview_url);
 //        console.log('Album: ' + data.items[0].album.name);
 //        console.log(' ');
 //        }  if (error) {
 //            	console.log(error);
	//     }
	//   });
	// };

	//do what random.txt says
	function doWhatItSays() {
		fs.readFile("random.txt", "utf8", function(error, data){
			if (!error) {
				doWhatItSaysResults = data.split(",");
				spotifyThisSong(doWhatItSaysResults[0], doWhatItSaysResults[1]);
			} else {
				console.log("Error occurred" + error);
			}
		});
	};
	
	function log(logResults) {
	  fs.appendFile("log.txt", logResults, (error) => {
	    if(error) {
	      return;
	    }
	  });
	}