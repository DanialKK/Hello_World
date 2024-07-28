function loadHTML(elementId, filepath) {
    fetch(filePath)
        .then(response => {
        if (!response.ok) {
        throw new Error(`Network response was not successful`);
        }
        return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch opration:', error)
        });      
}

// Load HTML into specific element

    loadHTML('header-include', '../includes/header.html');
    // loadHTML('footer-include', '../includes/footer.html');
    // loadHTML('slider', '../includes/slider.html');


    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
    };
