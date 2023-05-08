const navBar = () => {
  const navList = document.getElementById('display-list');
  const addNav = document.getElementById('display-add');
  const contactNav = document.getElementById('display-contact');
  const addSection = document.querySelector('.div');
  const contactSection = document.querySelector('.contact-section');
  const listSection = document.querySelector('.book-container');

  navList.addEventListener('click', () => {
    addSection.style.display = 'none';
    contactSection.classList.add('hide');
    listSection.classList.remove('hide');
  });

  addNav.addEventListener('click', () => {
    listSection.classList.add('hide');
    contactSection.classList.add('hide');
    addSection.style.display = 'flex';
  });

  contactNav.addEventListener('click', () => {
    listSection.classList.add('hide');
    contactSection.classList.remove('hide');
    addSection.style.display = 'none';
  });
};
export default navBar;