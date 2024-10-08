const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

//function to perform Google search (part of the optional challenge)
const performSearch = () => {
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
        window.open(`https://www.google.com/search?q=${searchTerm}` , "_self");
        searchBar.value = ''; // Clear the input field
    }
};

// listens for the enter key to be pressed
searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') { // Check if the Enter key is pressed
        event.preventDefault(); //prevent the default behaviour of the enter key
        performSearch();
    }
});

// Listen for click on the "Google Search" button (extra)
searchButton.addEventListener('click', performSearch);

const signInBtn = document.querySelector('.sign-in-btn');
signInBtn.addEventListener('click', () => {  window.open(`https://accounts.google.com/InteractiveLogin/signinchooser` , "_blank")   
})
