import fetchData from './fetchData'

const ITEM = 'cv'

export const getCv = async () => await fetchData(ITEM)
