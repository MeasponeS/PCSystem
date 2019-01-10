import request from '../utils/request.js'

export function getUserFavorList(params) {
    return request({
        url: 'pc/user/getUserFavorList',
        method: 'get',
        params: params
    })
}
