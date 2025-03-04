document.addEventListener("DOMContentLoaded", function () {
    const planner = document.getElementById("planner");
    const hours = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
    
    // Load saved tasks
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    
    hours.forEach(hour => {
        let div = document.createElement("div");
        div.classList.add("time-slot");
        div.innerHTML = `<span>${hour}</span> 
                         <input type="text" value="${savedTasks[hour] || ''}" data-hour="${hour}">`;
        planner.appendChild(div);
    });
});

function saveTasks() {
    let tasks = {};
    document.querySelectorAll("input").forEach(input => {
        tasks[input.getAttribute("data-hour")] = input.value;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    alert("Tasks Saved!");
}
