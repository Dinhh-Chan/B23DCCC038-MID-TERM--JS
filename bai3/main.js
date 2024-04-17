
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-button').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target'); 
            const targetElement = document.getElementById(targetId); 
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' }); 
            }
        });
    });
});
       