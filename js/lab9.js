var op=1.0;
$( document ).ready(function(){
	myul = document.getElementById("vvod");
	dontmyul=document.getElementById("delete");
	myclone=document.getElementById("clone");
$( myclone ).click(function(){ 
$('.source').clone().appendTo('.target');
var key2 = 'cont'; //тут получаю id родительского элемента
$(`#${key2} :last-child`).removeClass("source");
	});
	$( dontmyul ).click(function(){ 
document.getElementById("slovo").value="";
	});
	$( reduce ).click(function(){ 

	$('.fox').each(function() {
  Width = $(this).width();
  Height = $(this).height(); 
  

  $(this).css('width', Width*0.9);
  $(this).css('height', Height*0.9);
	});
});
	$( anim ).click(function(){ 

$(".animimg").animate({width: "+=100", height: "+=100"}, 2000);
op=op/2;
$(".animimg").fadeTo(2000,op);
});


	$( deleteimg ).click(function(){ 

	$('.fox').remove();
});
	  $( myul ).click(function(){ 
	  	//var n = document.getElementById("group1");
	    //if(n.value=="start")
	    //$( "<li>Hello</li>" ).prependTo( "ol" ); //  вставляем содержимое в начало каждого целевого элемента <ul>
	    //else if(n.value=="end")
	    //( "ol" ).append( "<li>Hello</li>" ); //  вставляем содержимое в начало каждого целевого элемента <ul>
let checked = document.querySelector('input[name="group1"]:checked');
  if( checked ){ 
	myslovo = document.getElementById("slovo").value;

  if(checked.value=="start") {
	    $( "<li>"+myslovo+"</li>" ).prependTo( "ol" ); //  вставляем содержимое в начало каждого целевого элемента <ul>

  }
  else{
	    $( "ol" ).append( "<li>"+myslovo+"</li>" ); //  вставляем содержимое в начало каждого целевого элемента <ul>

  }
}
	  });
	  function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[А-Я\а-я\s]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

document.getElementById('slovo').onkeypress = function() {
  validate(event);
}

document.getElementById('slovo').onpaste = function() {
  validate(event);
}
$('.table-filters input').on('input', function () {
    filterTable($(this).parents('table'));
});

function filterTable($table) {
    var $filters = $table.find('.table-filters td');
    var $rows = $table.find('.table-data');
    $rows.each(function (rowIndex) {
        var valid = true;
        $(this).find('td').each(function (colIndex) {
            if ($filters.eq(colIndex).find('input').val()) {
                if ($(this).html().toLowerCase().indexOf(
                $filters.eq(colIndex).find('input').val().toLowerCase()) == -1) {
                    valid = valid && false;
                }
            }
        });
        if (valid === true) {
            $(this).css('display', '');
        } else {
            $(this).css('display', 'none');
        }
    });
}
	});
