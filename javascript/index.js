//#1 above - this URL is the Giphy Search endpoint. Here's an example of another endpoint, the Giphy "Trending" endpoint: https://api.giphy.com/v1/gifs/trending

//#2 above - this API key identifies you to the owner of the service. API keys are used to track and control how the API is being used - so if the user of this key is abusing the service it can be "turned off". This particular key is a public key and may no longer work when you do the exercise. If it does not, head here to get your own key (it's free!): https://developers.giphy.com/docs/

//#3 above - we specify a parameter - api_key - and then give it a value

//#4 above - get the .value of the text input field

//#5 above - get rid of leading and trailing spaces. URLs do not work with spaces! Read about String.trim() here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim

//#6 above - encodeURIComponent() will escape characters like spaces (because we still might have spaces in the middle of the search term), ampersands, $ signs, + symbols and so on so that they are properly represented for a URL. For example, a space becomes %20. You can read the docs here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent

//#7 above - bail out if we have nothing to search for

//#8 above - add the search term to the url - the web service requires this parameter name to be q

//#9 above - grab the value of the <select>, and then add the limit parameter to the url. Note that parameters are formated as name=value and separated by ampersands.

//#10 above - update the UI with the user's search term

//#11 above - finally! log out the URL