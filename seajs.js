function searchRedirect() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchForm = document.getElementById('searchForm');

    if (searchInput === 'cv') {
      searchForm.action = 'file:///C:/Users/ASUS/Desktop/mid/CV.html';
    } else if (searchInput === 'projects') {
      searchForm.action = 'file:///C:/Users/ASUS/Desktop/mid/works.html';
    }
    else if (searchInput==home){
        searchForm.action = 'file:///C:/Users/ASUS/Desktop/mid/mid.html#'
    } else {
      searchForm.action = '#'; 
    }
  }