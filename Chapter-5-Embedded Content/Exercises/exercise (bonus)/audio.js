// Audio samples
const audioSamples = [
    { name: "Sample 1", src: "audio/sample1.mp3" },
    { name: "Sample 2", src: "audio/sample2.mp3" },
    // Add more samples as needed
];

// Function to create audio sample buttons
function createAudioSampleButton(sample) {
    const button = document.createElement("button");
    button.textContent = sample.name;
    button.addEventListener("click", () => {
        const audio = new Audio(sample.src);
        audio.play();
    });
    return button;
}

// Populate audio samples section
const audioSamplesSection = document.getElementById("audio-samples");
audioSamples.forEach(sample => {
    const audioSampleDiv = document.createElement("div");
    audioSampleDiv.classList.add("audio-sample");
    const button = createAudioSampleButton(sample);
    audioSampleDiv.appendChild(button);
    audioSamplesSection.appendChild(audioSampleDiv);
});

// Text-to-speech
const textToSpeechBtn = document.getElementById("text-to-speech-btn");
textToSpeechBtn.addEventListener("click", () => {
    const textInput = document.getElementById("text-input").value;
    const utterance = new SpeechSynthesisUtterance(textInput);
    speechSynthesis.speak(utterance);
});

// Pagination
const prevPageBtn = document.getElementById("prev-page");
const nextPageBtn = document.getElementById("next-page");

// Add event listeners for pagination buttons
prevPageBtn.addEventListener("click", () => {
    // Handle previous page logic
});

nextPageBtn.addEventListener("click", () => {
    // Handle next page logic
});
