import * as fbConnect from './firebaseConnect';
import { collection, getDocs, Timestamp, query, where } from 'firebase/firestore'; 

export const getDbAccess = () => {
  return fbConnect.exportDbAccess();
};

export const getScheduleForMonth = async () => {
  const today = new Date();
  today.setHours(0,0,0,0);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 30);
  const date1 = Timestamp.fromDate(today);
  const date2 = Timestamp.fromDate(tomorrow);
  const response = [];
  const q = query(collection(getDbAccess(), 'schedule'), 
    where('start', '>=', date1), where('start', '<=', date2));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    const schedule = {
      id: doc.id,
      title: doc.data().title,
      start: doc.data().start.toDate(),
      end: doc.data().end.toDate(),
      location: doc.data().location,
      mapUrl: doc.data().mapUrl
    };
    response.push(schedule);
  });
  return response;
};