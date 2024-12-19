import { getFirestore, collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore';
import { app } from './config';

// Inicializa Firestore y exporta la instancia
const db = getFirestore(app);

export const getProducts = async (setItems) => {
  try {
    const documents = await getDocs(collection(db, "items"));
    const products = [];

    documents.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    setItems(products);
  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
};

export const getFilterProducts = async (category, setItems) => {
  if (!category) {
    return;
  }

  try {
    const normalizedCategory = category.toUpperCase();

    const q = query(collection(db, "items"), where("category", "==", normalizedCategory));
    const products = [];

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });

    setItems(products);
  } catch (error) {
    console.error("Error al obtener productos filtrados:", error);
  }
};

export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Producto no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error);
    throw error;
  }
};

// Exportación de la instancia de Firestore
export { db };