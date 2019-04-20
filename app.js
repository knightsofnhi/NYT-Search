// @ts-check
var query = 
var queryURL = api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) { }