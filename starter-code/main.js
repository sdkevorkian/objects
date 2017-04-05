/*
	Part 1: We're going to be creating animals today.
	Create 4 animal objects: a dog, a cat, a bird, a mouse.
	Each of these animal objects should have a name, a noise that they make,
	and a makeNoise property that prints out their noise.
*/

var dog;

var cat;

var bird;

var mouse;

/*
	Part 2: Let's use an array to hold all of these animals.
	Create a new variable, animals, that contains the 4 animals we just created.

	Use a for-loop to iterate through the array of animals and have each animal make a noise.

	Hint: Use the makeNoise() function for each animal in the array
*/

var animals = []; // replace "[]"

// loop thru animals
//	for each, call the function "makeNoise". Use dot notation.

/*
	Part 3: Let's see how hungry these animals get by adding a "hunger" property to them.
	Use a for-loop to iterate through the array of animals and add a "hunger" property with
	a value of 10. This value will represent how hungry the animal is. A value of 10 means
	they're pretty full, and a value of 0 means they're starving.

	Hint: The syntax to add a new property to an object looks like this:
	myObject.newPropertyName = newValue; // or...
	myObject['newPropertyName'] = newValue;
*/

// your code here

/*
	Part 4: These animals should be able to walk. Let's add a new "walk" property to them.
	
	For each animal, the "walk" property should be a function that:
	
	1) prints out a string that says they are walking
	2) It should also subtract 1 from their "hunger" property

	For example, if I had a duck that looked like this:
	
	

	Hint: You will need the "this" keyword
*/

var dog = {
	name: 'dog',
	hunger: 8,
	walk: function() {
	    // your code here
	}
};

dog.walk(); // prints "dog took a walk"
console.log(dog.hunger); // prints 7

/*
	Part 5: Now these animals can walk and talk by themselves, but they're quite lonely.
	Let's add a "makeFriend" function to each animal. The "makeFriend" function will
	take another animal as an argument, and pushes it to its "friends" property.
*/

var duck = {
	name: 'duck',
	friends: []
};
var swan = {
	name: 'swan',
	noise: 'chirp quack',
	friends: []
};

var makeFriend = function(newFriend) {
	// your code here
	// hint: use the 'this' keyword
};

duck.makeFriend = makeFriend;
swan.makeFriend = makeFriend;

duck.makeFriend(swan);
console.log(duck.friends); // prints [{ name: 'swan' }]
console.log(duck.friends[0].name);  // prints 'swan'

/* BONUS
This bonus will be a challenge! To complete this step, you'll need to do some Googling to look up things that have not yet been covered.

Take a look at the index.html file. You'll notice the following code:

	<img src="">
	
Here we have an image without a src attribute. 

Now take a peek inside the images folder to see what images are there. 

Here are the image paths for reference:

	- images/bird.jpg
	- images/cat.jpg
	- images/dog.jpg
	- images/mouse.jpg

Note that the name of each image is the animal name (bird, cat, dog, or mouse) plus an extension of .jpg.

Now that you're familiar with the code and assets that are available to you, let's add an appear property to each animal. The appear property will be a method that updates the src attribute to the path of the image of that animal.

Test things out by calling the appear method for one of your animals. When you load the page in your browser, the image of the animal should appear!

Hint #1: Google the following:
	- "JavaScript querySelector"
	- "JavaScript setAttribute"

Hint #2: You'll need to use the this keyword to access the name of the current animal from within the appear method to create the image path. The format to do so should look like this:
	'images/' + this.name + '.jpg'

Hint #3: Still stuck? The code to update the image source should look like this:
	document.querySelector('img').setAttribute('src', 'images/' + this.name + '.jpg');
*/
	
