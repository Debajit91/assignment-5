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