// const btn = document.getElementById('my-btn');
// const test = 'Hello'
var btn = document.getElementById("my-btn");
btn.addEventListener('click', runSpeech);

function runSpeech(){
  var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

  var recognition = new SpeechRecognition();

  var speechRecognitionList = new SpeechGrammarList();
 
  recognition.lang = 'es-UY';
  recognition.interimResults = false;

  console.log(recognition)
  recognition.start();



  recognition.onresult = function(event) {
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = 'Voice Input: ' + command + '.';

    if(command.toLowerCase() === 'select steve'){
        document.querySelector('#chkSteve').checked = true;
    }
    else if (command.toLowerCase() === 'select tony'){
        document.querySelector('#chkTony').checked = true;
    }
    else if (command.toLowerCase() === 'select bruce'){
        document.querySelector('#chkBruce').checked = true;
    }
    else if (command.toLowerCase() === 'select nick'){
        document.querySelector('#chkNick').checked = true;
    }   
};











  recognition.onspeechend = function() {
    recognition.stop();
};


  
}