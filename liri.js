
	var fs = require("fs");
	var request = require("request");
	var keys = require("./keys.js");
	var twitter = require("twitter");
	var spotify = require ("spotify");
	var liriArg = process.argv[2];

	switch(liriArg) {
		case
		 "my-tweets": myTweets();
		  break;
		case 
		"spotify-this-song": spotifyThisSong(); 
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
		request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&r=json&tomatoes=true", function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var movieObject = JSON.parse(body);
				console.log(movieObject); 

				var movieResults =
				
				"Title: " + movieObject.Title+
				"Year: " + movieObject.Year+
				"Imdb Rating: " + movieObject.imdbRating+
				"Country: " + movieObject.Country+
				"Language: " + movieObject.Language+
				"Plot: " + movieObject.Plot+
				"Actors: " + movieObject.Actors+
				"Rotten Tomatoes Rating: " + movieObject.tomatoRating+
				"Rotten Tomatoes URL: " + movieObject.tomatoURL 
				
				console.log(movieResults);
				log(movieResults);
			} else {
				console.log("Error :"+ error);
				return;
			}
		});
	};

	// Twitter
	function myTweets() {
		var client = new twitter(keys.twitterKeys);
			// consumer_key: keys.twitterKeys.consumer_key,
			// consumer_secret: keys.twitterKeys.consumer_secret,
			// access_token_key: keys.twitterKeys.access_token_key,
			// access_token_secret: keys.twitterKeys.access_token_secret, 
		
		var twitterUsername = process.argv[3];
		if(!twitterUsername){
			twitterUsername = "sportsfan1977";
		}
		params = {screen_name: twitterUsername, count: 1};
		client.get("statuses/user_timeline/", params, function(error, data, response){
			if (!error) {
				for(var i = 0; i < data.length; i++) {
					console.log(data[i].created_at, data[i].text);

					// var twitterResults = 
					// "@" + data[i].user.screen_name + ": " + 
					// data[i].text +  
					// data[i].created_at 
					
					// console.log(twitterResults);
					// log(twitterResults); 
				 }
			}  else {
				console.log("Error :"+ error);
				return;
			}
		});
	}

	// Spotify
	function spotifyThisSong(songName) {
		var songName = process.argv[3];
		if(!songName){
			songName = "Ophelia";
		}
		params = songName;
		spotify.search({ type: "track", query: params }, function(err, data) {
			if(!err){
				var songInfo = data.tracks.items;
				for (var i = 0; i < 5; i++) {
					if (songInfo[i] != undefined) {
						var spotifyResults =
						"Artist: " + songInfo[i].artists[0].name +
						"Song: " + songInfo[i].name + 
						"Album the song is from: " + songInfo[i].album.name + 
						"Preview Url: " + songInfo[i].preview_url;
						
						console.log(spotifyResults);
						log(spotifyResults);
					}
				}
			}	else {
				console.log("Error :"+ err);
				return;
			}
		});
	};
	
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
	      throw error;
	    }
	  });
	}