// Navigation buttons

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('settingsButton').addEventListener('click', () => {
        window.location.href = "settings.html";
    });
    
    document.getElementById('homeButton').addEventListener('click', () => {
        window.location.href = "index.html";
    });
    
    document.getElementById('profileButton').addEventListener('click', () => {
        
        window.location.href = "Admin.html";
    });
});
