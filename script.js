const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.getElementById('listen')
btn.addEventListener("click", () =>{
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(abc);
    }
    function handlecommands(command){
        if(command.includes("open youtube"))
        {
            speak("we are opening youtube...");
            window.open("https://www.youtube.com","blank");
        }
        else if(command.includes("open facebook"))
            {
                speak("we are opening facebook...");
                window.open("https://www.facebook.com","blank");
            }
        else if(command.includes("open instagram"))
            {
                speak("we are opening instagram...");
                window.open("https://www.instagram.com","blank");
            }
        else if(command.includes("open snapchat"))
            {
                speak("we are opening snapchat...");
                window.open("https://www.snapchat.com","blank");
            }
        else if(command.includes("open twitter"))
            {
               speak("we are opening twitter...");
                window.open("https://www.twitter.com","blank");
            }
        else{
            speak("just wait i will search");
            window.open(`https://www.google.com/search?q=${command}`,"blank");
        }
    }
    setTimeout(() =>{
        recognition.start();
    },2000);
    speak("hello,how can i help you..")
    recognition.onresult = (event) =>{
        const command = event.results[0][0].transcript.toLowerCase();
        handlecommands(command);
    }
})