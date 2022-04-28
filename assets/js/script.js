if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/assets/js/service-worker.js")
    .then(serviceWorker => {
      console.log("Service Worker registered: ", serviceWorker);
    })
    .catch(error => {
      console.error("Error registering the Service Worker: ", error);
    });
}

/* functions practical */

  window.share = (data) => {
    try {
      navigator.share(data);
    } catch(err) {
      console.warn(err);
    }
  }

/* functions practical */

  // document.querySelector('.share').addEventListener('click', async () => {
  //   await share({
  //     title: 'MDN',
  //     text: 'Learn web development on MDN!',
  //     url: 'https://developer.mozilla.org'
  //   });
  // });
  

// document.addEventListener("contextmenu", (event) => {
//   var selected = ''+window.getSelection();
//   if (0 < selected.length) {
//     console.log(selected);
//     // console.log(event);
//   }
//   event.preventDefault();
// }, false);

document.oncopy = () => {
  navigator.clipboard.writeText(window.getSelection() + ('\n\nsite : '+(window.location.href)+'\n'));
};

document.querySelector('#search').addEventListener('search', (event) => {
  var text = this.value.trim() ;
  if (1 < text.length) {
    window.open('https://duckduckgo.com/?q='+text+' site:msfpt.github.io', '_blank')
  }
});