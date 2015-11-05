/* your code should go in this file */

/*
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

var total_sentences = 0;
var solved_sentences = 0;
var current_sentece = 0;

$(document).ready(function(){

  total_sentences = data.length;

  $.each(data, function(index){

    var sentence = tmpl.replace("ID", index);
    sentence = sentence.replace("SENTENCE", this.phrase_en);

    console.log(sentence);

    $('.sentences').append(sentence);
  })

  $('.sentences li:first-child').addClass('current');

  $('.opt-continue').click(function() {
    current_sentece++;
    console.log('current:' + current_sentece + ' total:' + total_sentences);
    if(current_sentece < total_sentences)
      next();
    else {
      $('.pratice').attr('hidden','');
      //$('.final').attr('','');
    }

  });

});

function next() {
  var current_id = $('.current').attr('id');
  $('.current').removeClass('current');
  var next = $('#'+ (++current_id)).addClass('current');

}
