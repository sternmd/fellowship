console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


//PART 1
var makeMiddleEarth = function() {

// create section tag with an id of middle earth...
 var middleEarth = $('<section id="middle-earth"></section>');

// add each land as article tag & inside each land make an H1
  for (var i = 0; i < lands.length; i++) {
    $(middleEarth).append('<article><h1>' + lands[i] + '</h1></article>');
  }

// append middle earth to the body
  $('body').append(middleEarth)
};

makeMiddleEarth()

//PART 2

var makeHobbits = function() {
   // display an `unordered list` of hobbits in the shire
   var unorderedList = $('<ul id="hobbit"></ul>');

   for (var i = 0; i < hobbits.length; i++)  {
     $(unorderedList).append('<li>' + hobbits[i] + '</li>');
   }
  // (which is the second article tag on the page)
  $("article:nth-child(1)").append(unorderedList);
  // give each hobbit a class of `hobbit`
};

makeHobbits()

//PART 3

var keepItSecretKeepItSafe = function() {
   // create a div with an id of `'the-ring'
   // give the div a class of `'magic-imbued-jewelry'
   var ring = $("<div id='the-ring' class='magic-imbued-jewelry'></div>");
   // add the ring as a child of Frodo
   $("li:nth-child(1)").append(ring);
};

keepItSecretKeepItSafe()


//PART 4
var makeBuddies = function () {
    // create an `aside` tag
    var aside = $('<aside></aside>');
    // attach an `unordered list` of the `'buddies'` in the aside
    for (var i = 0; i < buddies.length; i++)  {
      $(aside).append('<ul>' + buddies[i] + '</ul>');
    }
   // insert your aside as a child element of `rivendell`
   $("article:nth-child(2)").append(aside);
};

makeBuddies();

//PART 5
var beautifulStranger = function () {
 $('aside ul').eq(3).html('Aragon');
  // change the `'Strider'` text to `'Aragorn'`
};

beautifulStranger();

//Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var assemble = $('#hobbit').detach();
   $("article:nth-child(2)").append(assemble);



leaveTheShire();

//PART 7
var forgeTheFellowShip = function () {
   var fellowship = $('div class="the-fellowship"');
   $("article:nth-child(2)").append(fellowship);

   var assemble = $('#hobbit').detach();
   $(".the-fellowship").append(fellowship);

   var buddies = $('#aside').detach();
   $("the-fellowship").append(buddies;

};
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
forgeTheFellowShip();
