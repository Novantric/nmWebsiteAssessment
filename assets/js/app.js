
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar')

    sidebar.classList.toggle('showSidebar');

    // Prevent tabbing through items with inert atrb
    if (sidebar.classList.contains('showSidebar')) {
        document.body.classList.add('sidebar-open');
        mainContent.forEach(element => element.inert = true);
    } else {
        document.body.classList.remove('sidebar-open');
        mainContent.forEach(element => element.inert = false);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Get all banner dots
    const dots = document.querySelectorAll('.banner-dot');
    
    // Add click handler to each dot
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            // Remove active class from current active dot
            document.querySelector('.active-dot').classList.remove('active-dot');
            
            // Add active class to clicked dot
            this.classList.add('active-dot');
            
            // Optional: Add code here to switch the actual banner content
            // You'll need to connect dots to banners (likely using data attributes)
        });
    });
});