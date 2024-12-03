// List of possible responses from the Magic 8-Ball
const answers = [
    "Yes, definitely! 🎅",
    "No way! 😔",
    "Ask again later... 🎄",
    "Perhaps, let the Christmas magic decide! 🎁",
    "It's certain! 🌟",
    "Very unlikely... ❄️",
    "Yes, but with a holiday twist! 🎉",
    "Nope, not today! 🎄",
    "Absolutely! Ho-ho-ho! 🎅"
];

// Get the DOM elements
const askButton = document.getElementById('askButton');
const answerDiv = document.getElementById('answer');
const questionInput = document.getElementById('questionInput');

// Add event listener for asking the 8-Ball
askButton.addEventListener('click', function() {
    const userQuestion = questionInput.value; // Get the question from input field

    // If the input field is empty, ask to type something
    if (userQuestion.trim() === "") {
        answerDiv.textContent = "Please type a question first!";
        return;
    }

    // Display the user's question before getting the answer
    answerDiv.textContent = `You asked: "${userQuestion}"`;

    // After showing the question, wait a moment before giving the answer
    setTimeout(function() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const randomAnswer = answers[randomIndex];
        answerDiv.textContent = randomAnswer; // Display the answer
    }, 2000); // Wait 2 seconds before answering
});

// Christmas Music Toggle
let musicPlaying = false;
let audio = new Audio('path/to/your/christmas-music.mp3'); // Add your Christmas music file path here

function toggleMusic() {
    if (musicPlaying) {
        audio.pause();
        musicPlaying = false;
    } else {
        audio.play();
        musicPlaying = true;
    }
}
