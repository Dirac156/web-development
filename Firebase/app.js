// db.collection('todos').orderBy('title').onSnapshot(
//     snapshot => {
//         let changes = snapshot.docChanges();
//         console.log(changes);
//     }
// )

const docRef = db.collection('todos').doc('tKfvkITdpKTIPTKK63NW');

docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});
