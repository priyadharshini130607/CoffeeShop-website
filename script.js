// ==============================================
//  script.js — Brew & Bean Coffee Shop
// ==============================================


// ===== 1. HAMBURGER MENU (Mobile) =====
// Toggles the nav menu open/close on small screens

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('open');
}

// Close the menu when any nav link is clicked
const allNavLinks = document.querySelectorAll('.nav-links a');

allNavLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navLinks').classList.remove('open');
  });
});


// ===== 2. MENU TABS =====
// Shows the selected tab panel, hides the others

function showTab(tabId, clickedBtn) {

  // Hide ALL menu panels
  const allPanels = document.querySelectorAll('.menu-panel');
  allPanels.forEach(function(panel) {
    panel.classList.remove('active');
  });

  // Remove 'active' from ALL tab buttons
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(function(tab) {
    tab.classList.remove('active');
  });

  // Show the selected panel
  document.getElementById('tab-' + tabId).classList.add('active');

  // Mark the clicked button as active
  clickedBtn.classList.add('active');
}


// ===== 3. SCROLL REVEAL =====
// Elements with class "reveal" fade in when scrolled into view

const revealElements = document.querySelectorAll('.reveal');

// IntersectionObserver watches when elements enter the screen
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      // Element is visible — add "show" class to trigger CSS animation
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15   // Trigger when 15% of element is visible
});

// Attach observer to every reveal element
revealElements.forEach(function(el) {
  observer.observe(el);
});


// ===== 4. SMOOTH SCROLL (for Order Now button) =====

function scrollToSection(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}