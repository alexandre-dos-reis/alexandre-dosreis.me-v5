const fetchData = async (query: string) => {
    try {
        return (await fetch(process.env.API_ITEMS + query)).json()
    } catch (e) {
        console.error(e)
        throw new Error('The fetch have failed')
    }
}

export default fetchData
