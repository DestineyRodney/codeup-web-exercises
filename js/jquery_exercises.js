"use strict";

// // Exercise Pt.1
// $(document).ready(function() {
// //
//     alert("Ready to Go!")
//
// });

// var content = $('#main-header').html();
// alert(content);
//
// $('#codeup').css('color', 'blue').css('font-size', '40px').css('text-align', 'center').html('Happy Coding');
//
// // Exercise Pt. 2
//
// $('.codeup').css('border', '1px solid red');
//

// Exercise pt. 3

// $('li').css('font-size', '20px');
// $('h1, p, li').css('background-color', 'yellow');
//
// var content = $('h1').html();
// alert(content);

// Exercise Pt. 3 Mouse Click

$('h1').click(
    function() {
        $(this).css('background-color', 'red');
    }
);

$('p').dblclick(
    function() {
        $(this).css('font-size', '18px');
    }
);

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);


