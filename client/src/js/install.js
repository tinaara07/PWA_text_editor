const butInstall = document.getElementById('buttonInstall');

// Variable to hold the deferred prompt
let deferredPrompt;

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-info bar from appearing on mobile
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update the UI to notify the user they can install the PWA
  butInstall.style.display = 'block'; // Show the install button
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Hide the install button
  butInstall.style.display = 'none';
  // Show the install prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Log the user's choice
    console.log(outcome === 'accepted' ? 'User accepted the A2HS prompt' : 'User dismissed the A2HS prompt');
    // Clear the deferredPrompt variable, since it can only be used once
    deferredPrompt = null;
  }
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Log the installation event
  console.log('App was installed.');
  // Optionally, you can also hide the install button if it's still visible
  butInstall.style.display = 'none';
});