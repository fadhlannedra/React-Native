export async function filterFetch(f) {
    return await f.then(response => {
        if (!response.ok) {
            throw new Error(response.statusText || 'Unknown Error');
        }
    return response.json();
    }).then(json => {
        if (json.responseStatus.responseCode != "00") {
            console.log(json);
            throw new Error(json.message || 'Unknown error');
        }
        return json.data;
        

    });
}