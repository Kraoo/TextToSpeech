const textInput = document.getElementById('text-input');
const speakButton = document.getElementById('speak-button');
const statusDiv = document.getElementById('status');

var speech = new SpeechSynthesisUtterance();

function speak() {
    speech.text = textInput.value;
    window.speechSynthesis.speak(speech);
    statusDiv.textContent = 'Speaking';
}

speech.onend = () => {
    statusDiv.textContent = 'Finished';
};

speakButton.addEventListener('click', speak);

textInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        speak();
    }
});
