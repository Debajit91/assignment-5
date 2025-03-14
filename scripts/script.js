const colors = ['pink', 'purple', 'yellow', 'orange', 'green'];
let currentColorIndex = 0;

document.getElementById('themeBtn').addEventListener('click', function(event){
    event.preventDefault();
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex +1) % colors.length;
})

document.getElementById('discoverNew').addEventListener('click', function(){
    window.location.href = "blogs.html"
})

function updateDayDate(){
    const shortDay = new Date().toLocaleString('en-us', {weekday: 'short'})
    const month = new Date().toLocaleString('en-us', {month: 'short'});
    const day = new Date().getDate();
    const year = new Date().getFullYear();
    const formattedDate = `${month} ${day} ${year}`;
    document.getElementById('currentDay').firstChild.textContent = `${shortDay} ,`;
    document.getElementById('currentDate').textContent = formattedDate;
}

updateDayDate();
setInterval(updateDayDate, 60000);