
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