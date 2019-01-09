import request from '../utils/request.js'

export function getOrgCodeByDomain(params) {
    return request({
        url: '/pc/getOrgCodeByDomain',
        method: 'get',
        params: params
    })
}
