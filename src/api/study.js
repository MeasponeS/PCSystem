import request from '../utils/request.js'

export function courses(params) {
    return request({
        url: '/pc/study/list/courses',
        method: 'get',
        params: params
    })
}

export function chapterContent(params) {
    return request({
        url: '/pc/study/list/chapterContent',
        method: 'get',
        params: params
    })
}

export function courseList(params) {
    return request({
        url: '/pc/study/list/courseList',
        method: 'get',
        params: params
    })
}

export function chapterList(params) {
    return request({
        url: '/pc/study/list/chapterList',
        method: 'get',
        params: params
    })
}
