function displayCalendar() {
    const dateObj = new Date();

    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = days[dateObj.getDay()];

    const calendarText = `Date: ${day}/${month}/${year} Day: ${weekday}`;
    document.getElementById("calendar").innerText = calendarText;
}
