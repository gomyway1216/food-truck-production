import * as fbConnect from './firebaseConnect';
import { collection, getDocs, query, where } from 'firebase/firestore'; 


export const getDbAccess = () => {
  return fbConnect.exportDbAccess();
};

export const getPublicMenuList = async () => {
  const response = [];
  const q = query(collection(getDbAccess(), 'menu'), 
    where('isVisibleToCustomer', '==', true));
  const querySnapshot = await getDocs(q);
  for (let i = 0; i < querySnapshot.docs.length; i++) {
    const menuDoc = querySnapshot.docs[i];
    const menu = {
      id: menuDoc.id,
      title: menuDoc.data().title,
      subTitle: menuDoc.data().subTitle,
      type: menuDoc.data().type,
      price: menuDoc.data().price,
      cost: menuDoc.data().cost,
      description: menuDoc.data().description,
      ingredients: menuDoc.data().ingredients,
      image: menuDoc.data().image,
      isAvailable: menuDoc.data().isAvailable,
      order: menuDoc.data().order, // order of the food displayed
      originalStockCount: menuDoc.data().originalStockCount,
      soldCount: menuDoc.data().soldCount,
      canceledCount: menuDoc.data().canceledCount,
    };
    response.push(menu);
  }
  return response;
};

export const getMenuList = async () => {
  const response = [];
  const querySnapshot = await getDocs(collection(getDbAccess(), 'menu'));
  for (let i = 0; i < querySnapshot.docs.length; i++) {
    const menuDoc = querySnapshot.docs[i];
    const menu = {
      id: menuDoc.id,
      title: menuDoc.data().title,
      subTitle: menuDoc.data().subTitle,
      type: menuDoc.data().type,
      price: menuDoc.data().price,
      cost: menuDoc.data().cost,
      description: menuDoc.data().description,
      ingredients: menuDoc.data().ingredients,
      image: menuDoc.data().image,
      isVisibleToCustomer: menuDoc.data().isVisibleToCustomer,
      isAvailable: menuDoc.data().isAvailable,
      order: menuDoc.data().order, // order of the food displayed
      originalStockCount: menuDoc.data().originalStockCount,
      soldCount: menuDoc.data().soldCount,
      canceledCount: menuDoc.data().canceledCount,
    };
    response.push(menu);
  }
  return response;
};
