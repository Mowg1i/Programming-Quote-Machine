$(document).ready(function() {
  var link = "http://quotes.stormconsultancy.co.uk/quotes.json";
  var quote = "";
  var tweetlink = "";

  function getQuote() {
    $.getJSON(link, function(data) {
      var n = Math.floor(Math.random() * (data.length - 1)) + 1;
      
      if ( data[n].quote.length + data[n].author.length < 138) {
        quote = '<div class="quotetext">"' + data[n].quote + '"</div>';
        quote += '<div class="quoteauthor">-- ' + data[n].author + "</div>";

        tweetlink =
          "http://twitter.com/intent/tweet?text=" +
          data[n].quote +
          " - " +
          data[n].author;

        $(".quote").html(quote);
      } else {
        getQuote();
      }
    });
  }

  getQuote();

  $(".getquote").on("click", function() {
    getQuote();
  });
  $(".tweet").on("click", function() {
    window.open(tweetlink);
  });
});
