import fetchData from './fetchData'

const ITEM = 'category'

export const getAllCategories = async () =>
    await fetchData(
        ITEM +
            '?' +
            'fields=id,name,slug' +
            '&' +
            'filter[status]=online&' +
            '&' +
            'sort=name'
    )

export const getOneCategory = async (slug: string) =>
    await fetchData(
        ITEM +
            '?' +
            `filter[slug][_eq]=${slug}` +
            '&' +
            'fields=*id,name,slug' +
            '&' +
            'filter[status]=online'
    )
