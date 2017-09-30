# LIRI-Node-App
Language interface using NodeJS


LIRI will display your latest tweets. As we do not want to display your personal account, or its keys, please make an alias account and add a few tweets to it!
Make a new GitHub repository called liri-node-app and clone it to your computer.
To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and OMDB APIs. You'll find these Node packages crucial for your assignment.

Twitter
Spotify
Request

You'll use Request to grab data from the OMDB API.

Get your Twitter API keys by following these steps:



Step One: Visit https://apps.twitter.com/app/new
Step Two: Fill out the form with dummy data. Type http://google.com in the Website input. Don't fill out the Callback URL input. Then submit the form.

Step Three: On the next screen, click the Keys and Access Tokens tab to get your consume key and secret. 


Copy and paste them where the input here tags are inside your keys.js file.



Step Four: At the bottom of the page, click the Create my access token button to get your access token key and secret. 


Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the input here tags are inside your keys.js file.





Make a file called random.txt.




Inside of random.txt put the following in with no extra characters or white space:


spotify-this-song,"I Want it That Way"





Make a JavaScript file named liri.js.
At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
Make it so liri.js can take in one of the following commands:



my-tweets
spotify-this-song
movie-this
do-what-it-says



What Each Command Should Do


node liri.js my-tweets



This will show your last 20 tweets and when they were created at in your terminal/bash window.



node liri.js spotify-this-song '<>'




This will show the following information about the song in your terminal/bash window


Artist(s)
The song's name
A preview link of the song from Spotify
The album that the song is from


If no song is provided then your program will default to "The Sign" by Ace of Base.
You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.
Like the Twitter API, the Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
Step One: Visit https://developer.spotify.com/my-applications/#!/
Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package. 


This will output the following information to your terminal/bash window:

   * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.



If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!


You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use 40e9cece.



node liri.js do-what-it-says




Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Feel free to change the text in that document to test out the feature for other commands.