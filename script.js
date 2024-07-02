const currentUTCTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDayOfTheWeekElement = document.querySelector('[data-testid="currentDay"]');

function updateUTCTimeAndDay() {
    const currentTime = new Date();

    // Update the UTC time
    currentUTCTimeElement.textContent = currentTime.toUTCString();

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = currentTime.getDay();
    const currentDayOfWeek = daysOfWeek[dayOfWeek];

    // Update the current day of the week
    currentDayOfTheWeekElement.textContent = currentDayOfWeek;
}

// Update the UTC time and day every second
setInterval(updateUTCTimeAndDay, 1000);

// Initialize the time and day
updateUTCTimeAndDay();
