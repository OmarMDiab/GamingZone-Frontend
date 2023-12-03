/*
BY: Omar Mosaad Atalla Abdellatif Diab [20p3176]
*/

var index = 0;

var currentMusicIndex = 0;

var imageArray = [
    'images/d1.jpg',
    'images/d3.jpg',
    'images/d2.png',
    'images/d4.jpg',
    'images/t1.jpg',
    'images/t2.jpg',
];

var HomeMusicArray = [                   //note : plz allow your browser to autoplay audio first ^^
    'Music/HomeTheme3.mp3',
    'Music/HomeTheme2.mp3',
    'Music/HomeTheme1.mp3',
]

var homeElement = document.getElementById('home');
if (homeElement) {
/* changing background like slide show ^^  */
function changeBackgroundImage() {
    var homeElement = document.getElementById('home');

    if (homeElement) {
        homeElement.style.backgroundImage = 'url("' + imageArray[index] + '")';

        // Add a class to trigger the fade-in animation
        homeElement.classList.add('fadeIn');


         // Increment the index or reset it to 0 if it exceeds the array length
         index = (index + 1) % imageArray.length;
    }
}

// Call the function initially
changeBackgroundImage();

setInterval(changeBackgroundImage, 5000);


document.getElementById('home').addEventListener('animationend', function() {
    this.classList.remove('fadeIn');
});


var audio = new Audio();

function playNextMusic() {
    if (currentMusicIndex < HomeMusicArray.length) {
        audio.src = HomeMusicArray[currentMusicIndex];
        audio.play();
        currentMusicIndex++;
    } else {
        // loop back to the first music when the last one finishes
        currentMusicIndex = 0;
        playNextMusic();
    }
}

// Play the first music when the page loads
playNextMusic();

// Event listener to play the next music when the current one ends
audio.addEventListener('ended', function () {
    playNextMusic();
});
}




var game1 = document.getElementById('Mirage');
if (!game1) {
    game1=document.getElementById('DS');
    
    var m = "Music/HomeTheme1.mp3";
}else {
    var m = "Music/miragehometrack.mp3";
}
if (game1) {
    // Create an audio element
    audio = new Audio(m);

    // Set initial playback position
    audio.currentTime = 55;
    audio.volume=.6;
    // Add click event listeners to the document
    /*document.addEventListener('click', function() {
        // Pause the audio when a click occurs
        if (audio) {
            audio.pause();
        }

    });*/

    function playAudio(played) {
        if (!played) {
            // Start playing the audio
            audio.play();
        }
    }

    playAudio(false);
    var played = true;
}


function redirectToIndex() {
    // Redirect to index.html
    window.location.href = 'index.html';
}

if(document.getElementById('loginForm')){
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Redirect to index.html
    redirectToIndex();
});
}

if(document.getElementById('signupForm')){
document.getElementById('signupForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    // For demonstration purposes, redirecting to index.html after signup
    redirectToIndex();
});
}




document.addEventListener('DOMContentLoaded', function() {
    const h2Element = document.querySelector('h2');
    h2Element.style.marginBottom = '20px';
    h2Element.style.textAlign = 'left';
    h2Element.style.color = 'goldenrod';
    h2Element.style.fontFamily = "'Times New Roman', Times, serif";
    h2Element.style.fontSize = '4rem';
    h2Element.style.textTransform = 'capitalize';
});
  

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach((paragraph) => {
  paragraph.addEventListener('mouseover', function() {
    this.style.color = 'rgb(255, 235, 108)';
  });

  paragraph.addEventListener('mouseout', function() {
    this.style.color = ''; // Revert to the default color when not hovering
  });
});


document.addEventListener('DOMContentLoaded', function() {
  
    const footerElement = document.querySelector('footer');
    footerElement.style.backgroundColor = 'var(--black)';
    footerElement.style.color = 'var(--main-color)';
    footerElement.style.fontSize = '1.4rem';
    footerElement.style.textAlign = 'center';
    footerElement.style.padding = '10px';
    footerElement.style.bottom = '0';
    footerElement.style.width = '100%';
  
    // Check if the current page is index.html
    const isIndexPage = window.location.pathname.includes('index.html');
  
    // Adjust marginTop based on the condition
    footerElement.style.marginTop = isIndexPage ? '0' : '3rem';
  });
  
  