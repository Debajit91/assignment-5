// Theme changer
const colors = ['pink', 'purple', 'yellow', 'orange', 'green'];
let currentColorIndex = 0;

document.getElementById('themeBtn').addEventListener('click', function(event){
    event.preventDefault();
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex +1) % colors.length;
})

// Open Blogs
document.getElementById('discoverNew').addEventListener('click', function(){
    window.location.href = "blogs.html"
})


// Day & Date
function updateDayDate(){
    const shortDay = new Date().toLocaleString('en-us', {weekday: 'short'})
    const month = new Date().toLocaleString('en-us', {month: 'short'});
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    const formattedDate = `${month} ${day} ${year}`;
    document.getElementById('currentDay').firstChild.textContent = `${shortDay} ,`;
    document.getElementById('currentDate').innerText = formattedDate;
}

updateDayDate();
setInterval(updateDayDate, 60000);

// Complete Buttons Task
const completeButtons = document.querySelectorAll('.completeBtn')
let totalTasks = completeButtons.length;
let taskCompleted = 0;

for(let button of completeButtons){
    button.addEventListener('click', function(event){
        
        // Disabling Button
        event.target.disabled = true;
        event.target.innerText = 'Completed';
        event.target.style.backgroundColor = '#a4aff3';
        event.target.style.cursor = 'default';
        event.target.style.color = '#e6ecfc';
        
        // Alert
        alert('Board Updated Successfully')
        
        // Decreasing Task Assigned
        const assignedTask = document.getElementById('taskAssigned');
        const currentTask = parseInt(assignedTask.innerText);
        assignedTask.innerText = '0' + (currentTask - 1);

        // Increasing Task Completion
        const completedTask = document.getElementById('taskCompleted');
        completedTask.innerText = parseInt(completedTask.innerText) + 1;

        // Activity Log Section functionality
        const taskCard = event.target.parentElement.parentElement;
        const taskName = taskCard.querySelector('h4').innerText;
        
        const activityLog = document.getElementById('activityLog');
        const logEntry = document.createElement('div');
        logEntry.innerText = `You have completed the ${taskName} at ${new Date().toLocaleTimeString()}`;
        logEntry.classList.add('log-entry');
        activityLog.appendChild(logEntry);
        
        // Alert after all tasks completion
        taskCompleted = taskCompleted + 1;
        if(taskCompleted === totalTasks){
            alert('Congrats!!! You have completed all the current tasks')
        }
    })
}

// Clear History Button Clicked
document.getElementById('clearHistoryBtn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('activityLog').innerHTML = '';
})