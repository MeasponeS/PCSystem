import request from '../utils/request.js'

export function getUserInfo(params) {
    return request({
        url: '/pc/user/getUserInfo',
        method: 'get',
        params: params
    })
}

export function updateUs (params) {
    return request({
        url: '/pc/user/updateUserInfo',
        method: 'post',
        data: params
    })
}

export function getDictionaryList(params) {
    return request({
        url: '/pc/getDictionaryList',
        method: 'get',
        params: params
    })
}

export function getNotices(params) {
    return request({
        url: '/pc/user/getNotices',
        method: 'get',
        params: params
    })
}
