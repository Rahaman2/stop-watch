const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const refreshButton = document.getElementById("refresh");
const timeSlots = [hours, minutes, seconds]; // arrat of the respective time elements

startButton.addEventListener("click", startWatch);

function startWatch() {

    const timeInterval1 = setInterval(() => {
        // if seconds are less than 10, prepend a zero
        if (seconds.textContent < 9) {
            seconds.textContent = "0" + eval(parseInt(seconds.textContent) + 1);
        } else { // if seconds are ten or more; display seconds without adding or removing any digits
            seconds.textContent = eval(parseInt(seconds.textContent) + 1);
        }
        if (seconds.textContent == "59") { // if seconds > 59 reset seconds to zero
            setTimeout(() => {
                seconds.textContent = "00"
            }, 1000);
        }
        // change minute back to zero
        if(minutes.textContent == 59 && seconds.textContent == 59) {
            setTimeout(() => {
                minutes.textContent = "00"
                seconds.textContent = "00"
            }, 1000);
        }
    }, 1000)

    const timeInterval2 = setInterval(() => {

        if (minutes.textContent < 9) {
            minutes.textContent = "0" + eval(parseInt(minutes.textContent) + 1);
        } else {
            minutes.textContent = eval(parseInt(minutes.textContent) + 1);
        }
        if (minutes.textContent == "59") { // if seconds > 59 reset seconds to zero
            setTimeout(() => {
                minutes.textContent = "00"
            }, 3600000);
        }
    }, 60000);

    setInterval(() => {
        if(seconds.textContent == 59 && minutes.textContent == 59) {
            setTimeout(() => {
                if (hours.textContent < 9) {
                    hours.textContent = "0" + eval(parseInt(hours.textContent) + 1);
                } else {
                    hours.textContent = eval(parseInt(hours.textContent) + 1);
                }
            }, 1000);
        }
    }, 1000);

    stopButton.addEventListener("click", stopWatch);

    clearInterval()


    // pausing time
    function stopWatch() {
        clearInterval(timeInterval1)
        clearInterval(timeInterval2)

        /*
    -if time began then was paused then change the start buttons's text to "continue"
    -if time is reset than change the start button's text to "start"
    */

        const startButtonText = startButton.textContent;
        if (startButtonText === "start") {
            startButtonText = "continue"
        }
        return
    }
}
// refresh
refreshButton.addEventListener("click", () => {
    timeSlots.forEach(el => {
        el.textContent = "00";
    })
});



// qoutes
const qoutes = [
    {
    owner: "Rahaman Kazembe",
    qoute: "Beware of time for it is the most irreplaceable asset"
},
{
    owner: "Michael Altsshusler",
    qoute:"The bad news is time flies. The good news is you are the pilot."
},
{
    owner: "Stephen R. Covey",
    qoute:"The key is in not spending time, but in investing it."
},
{
    owner: "Brian Tracey",
    qoute:"There is never enough time to do everything, but there is always enough time to do the most important thing."
},
{
    owner: "Michael Altsshusler",
    qoute:"The bad news is time flies. The good news is you are the pilot."
},
{
    owner: "Barack Obama",
    qoute:"Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for. We are the ones we seek"
},
{
    owner: "William Penn",
    qoute:"Time is what we want most but what we use worst"
}
];


const blockquote = document.getElementsByTagName("blockquote")[0];
const qouteOwner = document.getElementById("qouteOwner")
console.log(blockquote);
async function generateQoute() {
    const random = await  Math.floor(Math.random() * 6)
    blockquote.textContent = await qoutes[random].qoute;
    qouteOwner.textContent = `"${qoutes[random].owner}"`
    return console.log(qoutes[random])
}    
    generateQoute()
