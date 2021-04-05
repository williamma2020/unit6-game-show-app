/*************************************************************************************************
              Add needed variables (followed guide)
**************************************************************************************************/

const keyboard = document.querySelector('#qwerty');        //#include children
const phrase=document.getElementById=('phrase');           //define phrase
const startButton = document.querySelector('.btn__reset'); //there is a dot before btn__reset
let missed=0;


/***************************************************************************************************
              Create an array named phrases
              Delare and initialize the phrases array, 
              storing at least five strings that contain only letters and spaces, no punctuation.
              (followed guide)
***************************************************************************************************/

let phrases=[
    'life is not easy',
    'health is important',
    'keep happy',
    'keep active',
    'BingGo'
];

/****************************************************************************************************
          attach an event listener to the start game button 
          to hide the start screen overlay
          (logic: because overlay style display as none, homepage is hided)
****************************************************************************************************/

const homepage = document.querySelector('#overlay'); //define the overlay
startButton.addEventListener('click', ()=>{          //add eventListener
    homepage.style.display='none';                   //hide the start screen
  });


/*************************************************************************************************
     create a getRandomPhraseAsArray function (get random phrase, and then splited letters)
**************************************************************************************************/


/* Create a variable to store a random number based on the length of the array*/
const randomNumber = () =>  Math.floor(Math.random() * 5);


/* Use the variable to select an index inside of the array*/
function getRandomPhraseAsArray(arr) {
    let randomArr = arr[randomNumber()];   
    return splitArray = randomArr.split([,]);  //Return the splitArray element at that index
}      

/*************************************************************************************************
        Create an addPhraseToDisplay function (in order to display the grey button letters,
        also, and the space between letters)
**************************************************************************************************/

const phraseList = document.querySelector('#phrase ul');
function addPhraseToDisplay (arr)  {
  //create list li item loop
  for(let i =0; i < arr.length; i++) {     
    const li = document.createElement('li');
    phraseList.appendChild(li);
    li.textContent = arr[i];
    // insert an if statement here to check if arr[i] is a space, if it is give it the class of "space"
    if (arr[i] === ' '){
      li.classList.add("space");
    } else {
      li.classList.add("letter");
    }
  }
}


/***To use the function, you’ll get the value returned by the
getRandomPhraseAsArray, save it to a variable */
const RandomPhrase = getRandomPhraseAsArray(phrases); 

/**and pass it to addPhraseToDisplay as an argument */
     addPhraseToDisplay(RandomPhrase);


/***********************************************************
              Create a checkLetter function
***********************************************************/

const letters = document.querySelectorAll('.letter');
const checkLetter = (button) => {
    let matched = null;
    for (i=0; i < letters.length; i++) {       //get all the letters
      if (button === letters[i].textContent.toLowerCase()) {
        letters[i].classList.add('show');
        matched = true;
      }
    }
        return matched;
  }


/***********************************************************
              Add an event listener to the keyboard
***********************************************************/

const liveHeart = document.querySelectorAll('.tries img'); //define the livHeart
keyboard.addEventListener('click', e => {
    if (e.target.tagName === "BUTTON") {
      e.target.className = 'chosen';
      e.target.disabled = true;

      const match = checkLetter(e.target.textContent.toLowerCase());
      if (match === null) {

        // code to change heart icon from liveHeart.png to lostHeart.png would go here
        liveHeart[missed].src = 'images/lostHeart.png';
        missed++;
      }
      // checkWin() function call would go here, the function is created as below
      checkWin();
    }
    reset();  //reset game after win or lose, the function is at the end
  });


/***********************************************************
              create checkWin function
***********************************************************/
function checkWin () {
  const show = document.querySelectorAll('.show');     //define the show
  let message = document.querySelector('.title')       //define the message
  if (letters.length === show.length) {
      homepage.className = "win"; 
      message.textContent = `you win!`;
      homepage.style.display = "flex";
  } else if (missed > 4) {
      homepage.className = "lose"; 
      message.textContent = `sorry, you lost`;
      homepage.style.display = "flex";
      }   
  }


/***********************************************************
              create reset function
***********************************************************/

function reset () {
  startButton.textContent = 'play again';
  startButton.addEventListener('click', ()=> {
      location.reload();
      startButton.style.transition = '3s';
  });

}   
