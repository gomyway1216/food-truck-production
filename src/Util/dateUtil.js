const days = ['SUN', 'MON', 'TUE', 'WED','THU', 'FRI','SAT'];
const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 
  'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];

export const getFormattedTime = (date) => {
  let hours = date.getHours();
  const ampm = hours < 12 ? 'AM' : 'PM';
  hours = hours === 12 ? hours : hours % 12;
  let mins = date.getMinutes();
  mins = mins < 10 ? '0' + mins : mins;
  return hours + ':' + mins + ' ' + ampm;
};

export const getDayOfWeek = (date) => {
  return days[date.getDay()];
};

export const getFormattedDate = (date) => {
  const month = months[date.getMonth()];
  const day = date.getDate();
  return month + ' ' + day;
};