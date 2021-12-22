import fetchData from './fetchData'

const ITEM = 'link_category'

export const getLinkCategories = async () =>
    await fetchData(
        ITEM + '?' + 'fields=id,name' + '&' + 'filter[status]=published'
    )
