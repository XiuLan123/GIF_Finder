//create a search buttton
function GIFsearchButtonClicked(){
    //#1 above - this URL is the Giphy Search endpoint. Here's an example of another endpoint, the Giphy "Trending" endpoint:
    const GIF_Search_URL = "https://api.giphy.com/v1/gifs/search";
    //url to store the value
    //require api_key, q, limit, offset, rating, lang,  random_id.
    //the first one is the GIF_URL
    let url = GIF_Search_URL;
    //decleasr some required value
    let api_key = "tH7NkuJUOcVVGQ7yoFMoUkTgppTJUEY9";
    //parse in the api_key
    url += "api_key=" + api_key;
    //get and parse the search item
    let item = document.querySelector("#searchGIF").value;
}