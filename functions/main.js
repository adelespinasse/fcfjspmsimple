export function makeUppercase(functions, firebase) {
  return functions.database.ref('/messages/{pushId}/original')
    .onWrite(async function(event) {
      // Grab the current value of what was written to the Realtime Database.
      const original = event.data.val();
      console.log('Uppercasing', event.params.pushId, original);
      const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      await event.data.ref.parent.child('uppercase').set(uppercase);
    });
};
  
