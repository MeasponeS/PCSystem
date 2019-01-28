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


export function getCoursePlay(params) {
    return request({
        url: '/pc/study/list/getCoursePlay',
        method: 'get',
        params: params
    })
}

export function checkDistribute(params) {
    return request({
        url: '/pc/study/list/checkDistribute',
        method: 'get',
        params: params
    })
}

export function openStudyCard(params) {
    return request({
        url: '/pc/study/list/openStudyCard',
        method: 'get',
        params: params
    })
}

export function subMajor(params) {
    return request({
        url: '/pc/study/list/subMajor',
        method: 'get',
        params: params
    })
}

export function submajor(params) {
    return request({
        url: '/pc/study/select/submajor',
        method: 'post',
        data: params
    })
}

export function report(params) {
    return request({
        closeLoading:true,
        url: 'pc/report/course',
        method: 'post',
        data: params
    })
}

export function getCourseHtml(params) {
    return request({
        url: 'pc/report/course',
        method: 'get',
        params: params
    })
}
