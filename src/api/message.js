import request from '../utils/request.js'
// 获取消息页
export function getNotices(params) {
    return request({
        url: 'pc/user/getNotices',
        method: 'get',
        params: params
    })
}

export function readMag(params) {
    return request({
        url: '/pc/report/notice',
        method: 'get',
        params: params
    })
}
