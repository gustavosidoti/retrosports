// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, 
         doc, 
         getDoc, 
         collection, 
         getDocs, 
         query,
         where,
         addDoc,
         documentId,
         writeBatch,
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

export async function createBuyOrder( order ) {

    const colectionRef = collection(DB, "orders");
    let newOrder = await addDoc(colectionRef, order);
        
        return newOrder.id;
}

export async function createBuyOrderWithStockControl( order ) {

    const colectionRef = collection(DB, "orders");
    const colectionProductsRef = collection(DB, "products");

    let batch = writeBatch(DB);

    let arrayIds = order.items.map((itemInCart) => itemInCart.id);
    const q = query(colectionProductsRef, where(documentId(), "in", arrayIds));
    let snapshot = await getDocs(q);
    
    // recorro el array de la consulta

    snapshot.docs.forEach((doc) => {
    let stockDispoible = doc.data().stock;   
    
    // identifico los id de productos del carro
    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    // pregunto si el stock es mayor que la compra
        if (stockDispoible < countItemInCart)
        throw new Error(
            `Stock no disponible para el producto para el producto ${doc.id}`
        );

        // actualizo el stock de los productos
        else batch.update(doc.ref, { stock: stockDispoible - countItemInCart });
    });

    // guardo los cambios en BD
    await batch.commit();
    let newOrder = await addDoc(colectionRef, order);
    
    return newOrder.id;
        
}

async function exportItemsToFirestore(){
  const products = [
    {
        id: 1,
        name: "2011-2012 Man City Home Retro Soccer Jersey",
        category: "Premier_League",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/50018/2020/10/19/d/9/d9448e52d21eefe2.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 2,
        name: "22-23 San Lorenzo Third Fans Soccer Jersey",
        category: "Argentina_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/50018/2022/03/13/9/b/9b20939db4459b33.jpg",
        price: 14.50,
        discount: 20,
        newProduct: true
    
    },
    {
        id: 3,
        name: "1998 Argentina Away Retro Soccer Jersey",
        category: "Argentina",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/07/09/1/4/14cd38c72a62b35b.jpg",
        price: 19.00,
        discount: 20,
        newProduct: true
    
    
    },
    {
        id: 4,
        name: "2006 Argentina Home Retro Retro Soccer Jersey",
        category: "Argentina",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/c/f/cf8820ae610b7d16.png",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 5,
        name: "2002 England Home Retro Long Sleeve Soccer Jersey",
        category: "Inglaterra",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/d/a/da705247f92aff44.jpg",
        price: 20.00,
        discount: 10,
        newProduct: false
    
    },
    {
        id: 6,
        name: "1990 England Blue White Red Retro Soccer Jersey",
        category: "Inglaterra",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/0/4/049a56e7f7f05976.jpg",
        price: 19.00,
        discount: 0,
        newProduct: false
    
    },
    {
        id: 7,
        name: "1994 England Away Red Retro Soccer Jersey",
        category: "Inglaterra",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/07/06/0/6/0652af876d659e96.jpg",
        price: 19.00,
        discount: 15,
        newProduct: false

    
    },
    {
        id: 8,
        name: "2008 Spain Away Retro Soccer Jersey",
        category: "España",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/5/2/52052a9d97397c2d.jpeg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 9,
        name: "2000-2001 Ajax Away Retro Soccer Jersey",
        category: "Holanda_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/10/30/4/0/400e4a952874cc19.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 10,
        name: "2022 Argentina Blue Training shirts",
        category: "Argentina",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/50018/2022/04/27/f/c/fc15c3c4db1af59a.jpg",
        price: 14.50,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 11,
        name: "2018 Spain Home Retro Soccer Jersey",
        category: "España",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/c/f/cf1d7d10245f156b.jpg",
        price: 19.00,
        discount: 20,
        newProduct: true
    
    },
    {
        id: 12,
        name: "1985-1986 Celtic Away Retro Soccer Jersey",
        category: "Escocia_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/9/0/9019aeb3e0775524.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 13,
        name: "21-22 Argentina Away Maradona Commemorative Edition Soccer Jersey",
        category: "Argentina",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/9/6/960068a1b3e347ce.jpg",
        price: 14.50,
        discount: 20,
        newProduct: false

    
    },
    {
        id: 14,
        name: "2000 Boca Juniors Away Retro Soccer Jersey",
        category: "Argentina_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/08/21/4/6/46a744b7c176112f.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 15,
        name: "1996-1997 River Plate Home Retro Soccer Jersey",
        category: "Argentina_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/a/d/ad9dc83bcac7baa1.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    {
        id: 16,
        name: "1994 Boca Juniors Away White Retro Soccer Jersey",
        category: "Argentina_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/2/c/2c002d427c3c2fdb.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false

    
    },
    {
        id: 17,
        name: "1995-1996 River Plate Away Red Retro Soccer Jersey",
        category: "Argentina_Clubes",
        stock: 35,
        img: "https://us03-imgcdn.ymcart.com/92854/2022/06/25/3/5/356650ee1e1514de.jpg",
        price: 19.00,
        discount: 20,
        newProduct: false
    
    },
    
    ];

    const colectionRef = collection(DB, "products");

    for (let item of products){
     let newItem = await addDoc(colectionRef, item);
        console.log("Item creado con el id->", newItem.id );
      
    }
    
}

