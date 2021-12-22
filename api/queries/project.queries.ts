// http://localhost:8055/items/project

import fetchData from './fetchData'

const ITEM = 'project'

export const getAllProjects = async () =>
    await fetchData(
        ITEM +
            '?' +
            'sort=sort' +
            '&' +
            'fields=id,title,body,url,image,stack.tech_id.name,stack.tech_id.color'
    )
