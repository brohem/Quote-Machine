function main(){

var quoteTxt;
var quoteAut;


$('#newQuote').click( function(){


  $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(data) {
        console.log(data);
          $(".qoute-row").hide().html('<p class=qoute>' + data.quoteText + '</p>').fadeIn(1000);
          $(".author-row").hide().html('<p class=author> - ' + data.quoteAuthor + '</p>').fadeIn(1500);
          quoteTxt = data.quoteText;
          quoteAut = data.quoteAuthor;
      },

      function(err) {
        console.log('Error: ' + err.status);
      }

    });

  });// END #newQuote click function

$('#tweet-quote').click(function(){

 $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + quoteTxt + " -by " + quoteAut);


});


//<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

};//END main function


$(document).ready(main);
