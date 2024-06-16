import React, { useEffect } from 'react';

const SidebarToggle = () => {
  useEffect(() => {
    const sidebarToggle = document.querySelector('#sidebarToggle');

    if (sidebarToggle) {
      const handleSidebarToggle = (event) => {
        event.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
        // Uncomment the line below to persist sidebar toggle between refreshes
        // localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
      };

      sidebarToggle.addEventListener('click', handleSidebarToggle);

      return () => {
        sidebarToggle.removeEventListener('click', handleSidebarToggle);
      };
    }
  }, []);

  return null;
};

export default SidebarToggle;
