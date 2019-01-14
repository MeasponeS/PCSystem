import request from '../utils/request.js'

// 获取用户收藏页列表
export function getUserFavorList(params) {
    return request({
        url: 'pc/user/getUserFavorList',
        method: 'get',
        params: params
    })
}

// 获取消息页
export function getNotices(params) {
    return request({
        url: 'pc/user/getNotices',
        method: 'get',
        params: params
    })
}

