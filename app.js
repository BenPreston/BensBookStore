// First thing is to create a data variable 

var data;

fetch("https://api.myjson.com/bins/1h3vb3", {
    
    method: "GET"

}).then(function (response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.statusText);
}).then(function (json) {
    
    // do something with json data
    
    app.books = json.books;
    
// Then create a new Vue which draws in the data from the json file.
});

var app = new Vue({
    el: '#vue-app',
    
    data: {
        books: [],
        search: ""
},
    
    // Then I'm going to write a method  that comes up with filtered blogs
    
    computed: {

        filteredBooks: function(){
                return this.books.filter((book) => {
                return book.titulo.toLowerCase().match(this.search.toLowerCase());
            });
        }
    }

});

