import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
// Open the database
const db = await openDB('jate', 1);
// Add content to the 'jate' object store
const tx = db.transaction('jate', 'readwrite');
const store = tx.objectStore('jate');
const request = store.put({ id: 1, value: content });// Add the content to the store
const result = await request; // Wait for the request to complete
console.log('Content saved to the database:', result.value);
};

// Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');

  // Open the database
  const db = await openDB('jate', 1);
  // Create a transaction to read from the 'jate' object store
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1); // Get a content from the store
const result = await request; //wait for the request to complete
result
  ? console.log('Data retrieved from the database', result.value)
  : console.log('Data not found in the database');

return result?.value; //Return the retrieved content
};


initdb();
