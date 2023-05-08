import { DateTime } from './loxun.js';

const dateNow = () => {
  const date = document.querySelector('#date');
  const now = DateTime.now();
  const nowFormart = now.toLocaleString(DateTime.DATETIME_FULL);
  date.innerHTML = `<small>${nowFormart}</small>`;
};
export default dateNow;