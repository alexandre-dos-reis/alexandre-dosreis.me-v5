import fetchData from './fetchData'

const ITEM = 'link_item'

export const getLinkItems = async () =>
    await fetchData(ITEM + '?' + 'fields=id,url,label,category')
