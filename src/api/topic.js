import request from '../utils/request.js'

export function getTopicList(params) {
    return request({
        url: '/pc/exercise/getList',
        method: 'get',
        params: params
    })
}
export function getLevelList(params) {
    return request({
        url: '/pc/exercise/getLevelList',
        method: 'get',
        params: params
    })
}
export function getLevelDetail(params) {
    return request({
        url: '/pc/exercise/getLevelDetail',
        method: 'get',
        params: params
    })
}

export function commitQuestionAnswer(params) {
    return request({
        url: '/pc/exercise/commitQuestionAnswer',
        method: 'post',
        data: params
    })
}

export function getMyWrongQuestion(params) {
    return request({
        url: '/pc/exercise/getMyWrongQuestion',
        method: 'get',
        params: params
    })
}
