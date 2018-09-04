$(document).ready(function(){
    var randomNum
    var randomQuote
    var randomAuthor
    
    function getQuote(){
        
        var quotes = ["He who is not courageous enough to take risks will accomplish nothing in life.", "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.", "Language is the key to the heart of people", "Develop a passion for learning. If you do, you will never cease to grow.", "The science of today is the technology of tomorrow.", "The great aim of education is not knowledge but action.", "I don't have to be what you want me to be."];
        var author = ["-Muhammad Ali", "-Malcolm X", "-Ahmed Deedat", "-Anthony J. D'Angelo", "-Edward Teller", "-Herbert Spencer", "-Muhammad Ali"];
        
        randomNum = Math.floor(Math.random()*quotes.length);
        randomQuote = quotes[randomNum];
        randomAuthor = author[randomNum];
        
        $(".quote").text(randomQuote);
        $(".author").text(randomAuthor);
        
        }
    
    $("#newQuote").on("click", function(){
        getQuote();
    });
    
    $("#tweet").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + randomAuthor);    
    });
    
    
});