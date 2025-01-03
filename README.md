# Text Editor Starter Code
Description


This project is a text editor web application that allows developers to create, save, and retrieve code snippets or notes both with and without an internet connection. The app uses various modern web technologies, including IndexedDB, service workers, Webpack, and Workbox, to ensure reliable offline functionality and smooth user experience.

User Story


As a developer,
I want to create notes or code snippets with or without an internet connection,
So that I can reliably retrieve them for later use.

Acceptance Criteria

The following criteria must be met to ensure the text editor functions correctly:

Client-Server Structure
GIVEN a text editor web application
WHEN I open the application in my editor
THEN I should see a client-server folder structure
Application Start
WHEN I run npm run start from the root directory
THEN I find that my application should start up the backend and serve the client
Webpack Bundling
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using Webpack
Webpack Plugins
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
Next-Gen JavaScript Support
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
IndexedDB Functionality
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from IndexedDB
Installability
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
Service Worker Registration
WHEN I load my web application
THEN I should have a registered service worker using Workbox
WHEN I register a service worker
THEN I should have my static assets pre-cached upon loading along with subsequent pages and static assets
Deployment to Render
WHEN I deploy to Render
THEN I should have proper build scripts for a Webpack application
Features
Offline functionality using IndexedDB to store text and code snippets.
Service worker registration to ensure the app works offline and static assets are pre-cached for improved performance.
Bundling with Webpack for efficient JavaScript and asset management.
Installable as a Progressive Web App (PWA) for desktop access.
Support for next-gen JavaScript to ensure modern coding practices are utilized.

Technologies Used


IndexedDB: For storing notes and code snippets locally.
Service Workers: For offline functionality and caching.
Webpack: For bundling JavaScript and managing static assets.
Workbox: For handling service worker registration and asset caching.
Next-Gen JavaScript (ES6+): Modern JavaScript syntax and features.

Deployed link:

https://pwa-text-editor-3-0kr3.onrender.com/


![image](https://github.com/user-attachments/assets/d3e5552f-01d0-4e37-89dd-cdddb59566bb)


![image](https://github.com/user-attachments/assets/271fd746-8818-4ce3-bfd5-e98b46e1a76a)


![image](https://github.com/user-attachments/assets/a1508a2d-2f04-4e53-a721-c5e1b44cd26b)

![image](https://github.com/user-attachments/assets/b35d68b7-97da-4cbc-8b5d-aa7f6d6a7e36)




