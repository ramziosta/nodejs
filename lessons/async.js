async function fetchDataAsync() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); // Handle the resolved value
    } catch (error) {
        console.error('Error:', error); // Handle any errors
    } finally {
        console.log('Operation completed'); // Execute code regardless of the outcome
    }
}

fetchDataAsync();