// @todo
//  After clicking DOGS PLEASE, The div #dog-grid needs to be filled with at
//  least one dog picture from 'https://dog.ceo/api/breeds/image/random'.
//
//  The online demo has  a multiple dogs version, but you're only REQUIRED to add one dog.
//  adding multiple dogs now will make future assignments easier...
//
//  Here are the broad steps
//  - add a click listener to the #more-dogs button that calls the (currently empty)
//    addDogs() function below.
//  - addDogs() should first clear #dog-grid of existing dogs
//  - addDogs() should then fetch from 'https://dog.ceo/api/breeds/image/random'
//    to get the URL of the random dog image. You'll need to first get .json()
//    from the response. Use console/debugger to find where the dog image URL
//    can be accessed.
//  - Add this html to #dog-grid:
//        <div class="col p-0"><img src="(THE IMAGE URL)" alt="dog" /></div>
// Tip: This is a little more complex than prior exercises,
// but if you go over 20 lines of code, it may be more complex
// than it needs to be
// (the answer key does this in 9, but a little longer is not an issue).
//
// STRETCH GOAL
// Use the value of the input with the id `how-many` to add multiple dogs,
// so if the value is 10, you get 10 dogs after clicking.
//
const dogGrid = document.querySelector('#dog-grid');
const addDogs = () => {
  // @todo SECOND fetch your dogs here
  // TIP - in promises.js there's a section that says
  // "So, when in doubt, start with this snippet:"
  // Using that snippet will make things easier...
}
// @todo FIRST add a click listener for #more-dogs that triggers addDogs()



