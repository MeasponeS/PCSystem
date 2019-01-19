import request from '../utils/request.js'

// 获取用户收藏页列表
export function getUserFavorList(params) {
    return request({
        url: 'pc/user/getUserFavorList',
        method: 'get',
        params: params
    })
}



