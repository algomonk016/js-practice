// Create a cache object to store the responses
const cache = {};

// Function to make API requests and cache responses
async function fetchAndCache(url) {
    if (cache[url]) {
        console.log(`Returning cached response for ${url}`);
        return cache[url];
    } else {
        console.log(`Making API request to ${url}`);
        const response = await fetch(url);
        const data = await response.json();
        cache[url] = data; // Cache the response
        return data;
    }
}

(async () => {
    try {
        const response1 = await fetchAndCache('https://api.example.com/data');
        console.log('Response 1:', response1);

        const response2 = await fetchAndCache('https://api.example.com/data'); // This request will be served from cache
        console.log('Response 2:', response2);
    } catch (error) {
        console.error('Error occurred:', error);
    }
})();
