import Highway from '@dogstudio/highway';
import Overlap from './transitions/Overlap';
import SimpleTest from './transitions/SimpleTest';

// Add custom transitions/renderers, etc here

const H = new Highway.Core({
  transitions: {
    default: SimpleTest,
    Amenities01: Overlap
  }
});



// Page handling, no need to edit
//
//
const pages = ['index', 'Help', 'Exterior01', 'Fullscreen01', 'Amenities01', 'Interior01', 'Interior02'];

function getCurrentPageIndex() {
  let pageName = window.location.pathname.replace('.html', '').replace('/', '');
  if (pageName === '') pageName = 'index';
  console.log(pageName);
  return pages.indexOf(pageName);
}

let isBusy = false;
function navigateTo(pageName) {
  if (isBusy) return;
  isBusy = true;

  H.redirect(`${window.location.origin}/${pageName}.html`);

  setTimeout(() => { isBusy = false }, 1100);
}

document.body.querySelector('.prev-button').onclick = () => {
  console.log('prev');
  
  let idx = getCurrentPageIndex();
  idx--;
  if (idx < 0) idx = pages.length-1;

  navigateTo(pages[idx]);
}

document.body.querySelector('.next-button').onclick = () => {
  console.log('next');

  let idx = getCurrentPageIndex();
  idx++;
  if (idx >= pages.length) idx = 0;

  navigateTo(pages[idx]);
}
