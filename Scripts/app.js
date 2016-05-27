/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "Bootstrap is a free and open-source front-end library for creating websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. It aims to ease the development of dynamic websites and web applications.Bootstrap is a front end web framework, that is, an interface for the user, unlike the server-side code which resides on the back end or server. Bootstrap is the second most-starred project on GitHub, with over 95 thousand stars and more than 40 thousand forks. -wikipedia";
    
    paragraphs[1] = "jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML. jQuery is the most popular JavaScript library in use today, with installation on 65% of the top 10 million highest-trafficked sites on the Web. JQuery is free, open-source software licensed under the MIT License. jQuery's syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library. This enables developers to create abstractions for low-level interaction and animation, advanced effects and high-level, theme-able widgets. The modular approach to the jQuery library allows the creation of powerful dynamic web pages and Web applications. The set of jQuery core features—DOM element selections, traversal and manipulation—enabled by its selector engine (named Sizzle from v1.3), created a new programming style, fusing algorithms and DOM data structures. This style influenced the architecture of other JavaScript frameworks like YUI v3 and Dojo, later stimulating the creation of the standard Selectors API. Microsoft and Nokia bundle jQuery on their platforms. Microsoft includes it with Visual Studio for use within Microsoft's ASP.NET AJAX and ASP.NET MVC frameworks while Nokia has integrated it into the Web Run-Time widget development platform. jQuery has also been used in MediaWiki since version 1.16. -wikipedia";
    
    paragraphs[2] = "font Awesome is a font and icon toolkit based on CSS and LESS. It was made by Dave Gandy for use with the Twitter Bootstrap, and later was incorporated into the BootstrapCDN. Font Awesome has a 20% market share among those websites which use third-party Font Scripts on their platform, ranking it on a second place after Google Fonts. There are also 3rd party CDN providers who host the project for free, such as Font Awesome CDN. -wikipedia";
    
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();