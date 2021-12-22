import fetchData from './fetchData'

const ITEM = 'home'

export const getHomePresentation = async () => await fetchData(ITEM)