const LOCALSTORAGE_KEY = 'is-sidebar-open';


const sidebar = document.querySelector('.sidebar');

initSidebar()

document.querySelector('[data-open-sidebar]').addEventListener('click', e => {
  openSidebar();
  saveSidebarStateToLS(true)
});


document.querySelector('[data-close-sidebar]').addEventListener('click', e => {
  closeSidebar();
  saveSidebarStateToLS(false)
})

function openSidebar(){
  sidebar.classList.add('is-open');
}

function closeSidebar(){
  sidebar.classList.remove('is-open');
}

function saveSidebarStateToLS(state){
  localStorage.setItem(LOCALSTORAGE_KEY, state)
}

function initSidebar(){
  const persistedSidebarState = localStorage.getItem(LOCALSTORAGE_KEY);

  if(persistedSidebarState){
    const shouldOpenSidebar = JSON.parse(persistedSidebarState);

    if(shouldOpenSidebar){
      openSidebar()
    }

  }
}