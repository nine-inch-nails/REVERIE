// This is a comment. Replace this with your actual code.

// You might use JavaScript to dynamically load content, like this:

function loadSchedule() {
    // Replace with your actual code to load the schedule.
    var schedule = [
        { time: "10:00 - 12:00", show: "Morning Vibes", dj: "DJ Morning" },
        // Add more schedule items...
    ];

    var table = document.querySelector("#schedule table tbody");

    schedule.forEach(function(item) {
        var row = document.createElement("tr");

        var timeCell = document.createElement("td");
        timeCell.textContent = item.time;
        row.appendChild(timeCell);

        var showCell = document.createElement("td");
        showCell.textContent = item.show;
        row.appendChild(showCell);

        var djCell = document.createElement("td");
        djCell.textContent = item.dj;
        row.appendChild(djCell);

        table.appendChild(row);
    });
}

function loadArchive() {
    // Replace with your actual code to load the archive.
    var archive = [
        "Past Show 1",
        "Past Show 2",
        // Add more archived shows...
    ];

    var list = document.querySelector("#archive ul");

    archive.forEach(function(show) {
        var item = document.createElement("li");
        item.textContent = show;
        item.className = "list-group-item bg-dark";
        list.appendChild(item);
    });
}

// Call these functions when the page loads.
document.addEventListener("DOMContentLoaded", function() {
    loadSchedule();
    loadArchive();
    // Add more initialization code as needed...
});
