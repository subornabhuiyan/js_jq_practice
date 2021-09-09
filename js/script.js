//js

setInterval(() =>{
    d= new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    hRot = 30*hTime + mTime/2 ;
    mRot = 6*mTime;
    sRot = 6*sTime;

    hr.style.transform = `rotateZ(`+hRot+`deg)`;
    min.style.transform = `rotateZ(`+mRot+`deg)`;
    sec.style.transform = `rotateZ(`+sRot+`deg)`;
},100);

//jq

$(document).ready(function () {
   
    // alert('hello world alert');

    // hide
    $('#hide-btn').click(function () {
       $('#fade-img').hide() ;
    });

    // show
    $('#show-btn').click(function () {
       $('#fade-img').show() ;
    });
    
    // fadeout
    $('#fadeout-btn').click(function () {
       $('#fade-img').fadeOut(1500) ;
    });
    
    // fadein
    $('#fadein-btn').click(function () {
       $('#fade-img').fadeIn(1500) ;
    });
    
    // toggle
    $('#tgl-btn').click(function () {
       $('#fade-img').toggle(1500) ;
    });

    // shake
    $('#shake-btn').click(function () {
       $('#fade-img').effect('shake') ;
    });

    //bounce
    $( '#bounce-btn' ).click(function() {
        $( '.box' ).toggle( 'bounce', { times: 3 }, 'slow' );
    });

    //draggable
    $( '#msngr' ).draggable();

    //sortable
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();

    //selectable
    $( "#selectable" ).selectable();

    //accordion
    $( "#accordion" ).accordion();

    //auto complete
    let availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#tags" ).autocomplete({
        source: availableTags
    });


    //checkboxradio
    $( ".widget input" ).checkboxradio(); 
    $( "fieldset" ).controlgroup();

    //dialogue
    $( "#dialog" ).dialog();





});