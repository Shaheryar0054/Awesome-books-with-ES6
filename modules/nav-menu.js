// Navigation menu
/* eslint-disable */
export const nav = () => {
  document.getElementById('list').addEventListener('click', () => {
    showList();
  });
  document.getElementById('add').addEventListener('click', () => {
    showAdd();
  });
  document.getElementById('cont').addEventListener('click', () => {
    showContact();
  });

  const defaultDisplay = () => {
    document.getElementById('diplay-list').setAttribute('class', 'non-show');
    document.getElementById('input-data').setAttribute('class', 'show');
    document.getElementById('contact').setAttribute('class', 'non-show');
    document.getElementById('footer').setAttribute('class', 'show');
  };
  defaultDisplay();

  const showList = () => {
    document.getElementById('diplay-list').setAttribute('class', 'show');
    document.getElementById('input-data').setAttribute('class', 'non-show');
    document.getElementById('contact').setAttribute('class', 'non-show');
  };

  const showAdd = () => {
    document.getElementById('diplay-list').setAttribute('class', 'non-show');
    document.getElementById('input-data').setAttribute('class', 'show');
    document.getElementById('contact').setAttribute('class', 'non-show');
  };

  const showContact = () => {
    document.getElementById('diplay-list').setAttribute('class', 'non-show');
    document.getElementById('input-data').setAttribute('class', 'non-show');
    document.getElementById('contact').setAttribute('class', 'show');
  };
};
