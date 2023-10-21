export async function fetchJoke(url) {
    const response = await fetch(url, {
        headers: {
            Accept: "application/json",
        },
    });
    return response.json();
}

