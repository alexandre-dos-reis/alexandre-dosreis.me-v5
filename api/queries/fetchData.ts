const fetchData = async (query: string) => {
    const urlRequested = process.env.API_URL + '/items/' + query
    try {
        const res = await fetch(urlRequested)
        const json = await res.json()
        return json.data
    } catch (e) {
        console.error(e)
        throw new Error(`The fetch have failed for ${urlRequested}`)
    }
}

export default fetchData
