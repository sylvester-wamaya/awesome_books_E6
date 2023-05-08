const dateNow = ()=>{
const date = document.querySelector('#date');
date.innerHTML = `<small>${Date()}</small>`;
}
export default dateNow