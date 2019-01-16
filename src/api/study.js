import request from '../utils/request.js'

export function courses(params) {
    return request({
        url: '/pc/study/list/courses',
        method: 'get',
        params: params
    })
}