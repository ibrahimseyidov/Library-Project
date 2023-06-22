history.pushState({ page: 'admin.html' }, '', 'panel.html');

window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page === 'panel.html') {
        window.location.href = 'panel.html';
    }
  });