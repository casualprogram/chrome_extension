async function fetchData(){
    const url = 'https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Tampa&minDate=2025-03-15&maxDate=2025-03-20&page=1';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7cd6405a3dmsh2fdea003573fef7p102661jsn37100b27af78',
            'x-rapidapi-host': 'concerts-artists-events-tracker.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const record = await response.json();
        document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('')

    } catch (error) {
        console.error(error);
    }
}

fetchData();