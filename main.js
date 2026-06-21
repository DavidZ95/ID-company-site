<script>
    document.addEventListener("DOMContentLoaded", function() {
        const path = window.location.pathname;
        const navLinks = document.querySelectorAll('nav a');
        
        navLinks.forEach(link => {
            if (path.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
</script>