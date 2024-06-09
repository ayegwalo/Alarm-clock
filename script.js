// store the alarm time
let alarmTime = null; 

// Store the timeout for the alarm
let alarmTimeout = null; 

// Function to update displayed time every second
function updateTime() {
    // Get the DIVelement to display the time
    const timeElement = document.getElementById('time'); 
    // Get the current date and time
    const timeNow = new Date(); 
    // Format the current time (see bottom for alternative)
    const timeString = timeNow.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    /*
    Alternative
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    */

    // Update the time with the current time
    timeElement.textContent = timeString; 

    // Check if the current time matches the alarm time
    if (alarmTime && timeNow.getHours() === alarmTime.hours 
        && timeNow.getMinutes() === alarmTime.minutes && timeNow.getSeconds() === 0) {
        // Trigger an alert when the alarm time is reached
        alert("Alarm! Time to wake up!"); 
        // Reset the alarm time
        alarmTime = null; 
        // Clear the timeout for the alarm
        clearTimeout(alarmTimeout); 
    }
}

// Function to set alarm
function setAlarm() {
    // Get the alarm time input value
    const alarmInput = document.getElementById('alarmTime').value; 
    // Check if the alarm time is valid
    if (!alarmInput) { 
        // Alert the user if the time is invalid
        alert("Please set a valid time for the alarm."); 
        return;
    }

    // Split the input into hours and minutes and convert them to numbers
    const [hours, minutes] = alarmInput.split(':').map(Number); 
    // Set the alarm time
    alarmTime = { hours, minutes }; 
    // Alert the user that the alarm is set
    alert(`Alarm set for ${hours}:${minutes}`); 
}

// Call the updateTime function every second to update the displayed time
setInterval(updateTime, 1000);
