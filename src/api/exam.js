import request from "../utils/request";

export function getRoomListByType(params) {
    return request({
        url: '/pc/evaluation/getRoomListByType',
        method: 'get',
        params: params
    })
}


export function getExam(params) {
    return request({
        url: '/pc/evaluation/getExam',
        method: 'get',
        params: params
    })
}

export function getEvaluationList(params) {
    return request({
        url: '/pc/evaluation/getEvaluationList',
        method: 'get',
        params: params
    })
}

export function commitEvaluationAnswer(params) {
    return request({
        url: '/pc/evaluation/commitEvaluationAnswer',
        method: 'post',
        data: params
    })
}

export function getEvaluationinfo(params) {
    return request({
        url: '/pc/evaluation/getEvaluationinfo',
        method: 'get',
        params: params
    })
}

export function getStudyInfo(params) {
    return request({
        url: '/pc/evaluation/getStudyInfo',
        method: 'get',
        params: params
    })
}
