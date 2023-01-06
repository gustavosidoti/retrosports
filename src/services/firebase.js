// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, 
         doc, 
         getDoc, 
         collection, 
         getDocs, 
         query,
         where
        } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7rs5wprlaNqIjY4zS8dxTEdE9KXnFRmI",
  authDomain: "retrosport-19c0e.firebaseapp.com",
  projectId: "retrosport-19c0e",
  storageBucket: "retrosport-19c0e.appspot.com",
  messagingSenderId: "489797573001",
  appId: "1:489797573001:web:4fe8665b58600fe775a958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getSingleItem (id) {
    

    // 1. referencia
    let docRef = doc(DB, "products", id);
    // 2. obtenemos la respuesta async de getDoc
    let docSnapshot = await getDoc( docRef );
    

    // 3. retornamos la respuesta.data()
    let item = docSnapshot.data();
    item.id = docSnapshot.id;
    return item;

}

export async function getItems(){

  const collectionRef = collection(DB, "products");
  let docSnapshot = await getDocs(collectionRef);

  let docsArray = docSnapshot.docs;
  
  /*let dataDocs = docsArray.map( doc => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  }); */

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;

}

export async function getItemsCategory(categoryId) {
  let collectionRef = collection(DB, "products");

  let q = query(collectionRef, where("category", "==", categoryId));

  let docsSnapshot = await getDocs(q);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}