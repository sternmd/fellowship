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
forgeTheFellowShip();

//Part 8
var gandalf = fellowship.eq(0);

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   gandalf.text('Gandalf the White');
   // apply the following style to the element, make the // background 'white', add a grey border
   gandalf.css('border','5px solid slategray');
   gandalf.css('background-color','white');
};
theBalrog();

//PART 9
var boromir = fellowship.eq(4);

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('the horn of gondor has been blown!');
   // Boromir's been killed by the Uruk-hai!
   alert("Boromir's been killed by the Uruk-hai!");
   // Remove `Boromir` from the Fellowship
   boromir.css('text-decoration','line-through');
   rivendell.append(boromir);

};
hornOfGondor();

//Part 10

var frodo = $('li').eq(0);
var sam   = $('li').eq(5);

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   mordor.append(frodo);
   mordor.append(sam);
   // add a div with an id of `'mount-doom'` to `Mordor`
   var mountDoom = $('<div>');
   mountDoom.prop('id','mount-doom');
   mordor.append(mountDoom);
};
itsDangerousToGoAlone();

var gollum
var theRing
//PART 11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  gollum = $('<div>');
  gollum.prop('id','gollum');
  mordor.append(gollum);
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  theRing = frodo.find('#the-ring').eq(0);
  gollum.append(theRing);
  // Move Gollum into Mount Doom
  var mountDoom = mordor.find('mount-doom').eq(0);
  mountDoom.append(gollum);
};
weWantsIt();

//Part 12
var thereAndBackAgain = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  gollum.remove();
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  var hobbitsList = $('<ul>');
  var hobbits = $('.hobbit');
  for (var i = 0; i < hobbits.length; i++) {
    hobbitsList.append(hobbits.eq(i));
  }
  theShire.append(hobbitsList);
};
thereAndBackAgain();
