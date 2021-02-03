function calculateTime(event) {
    // Runs code when inpt box is blurred
    let distance = document.getElementById('distance').value;
    let minutes = parseInt(document.getElementById('minutes').value);
    let seconds = parseInt (document.getElementById('seconds').value);

    let notparkruntime_seconds = (((minutes * 60) + seconds)/distance  * 3.125);
    notparkruntime_seconds = Math.ceil(notparkruntime_seconds)
    let notMinutes = notparkruntime_seconds/60;
    notMinutes = Math.floor(notMinutes)
    let notSeconds = notparkruntime_seconds - (notMinutes*60);

    
// Debugging    
    document.getElementById("dbValue1").innerHTML = `${notparkruntime_seconds} Total seconds`;
    document.getElementById("dbValue2").innerHTML = notMinutes + " minutes portion for 5k";
    document.getElementById("dbValue3").innerHTML = `${notSeconds} seconds portion for 5k`;
    document.getElementById("dbValue4").innerHTML = distance + " Distance from input screen";
    document.getElementById("result").innerHTML = `${notMinutes}Min: ${notSeconds}Sec:`;
// End of debug

    // alert(notMinutes + "min " + notSeconds + "sec");
    
    
}