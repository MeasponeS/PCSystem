import request from '../utils/request.js'

export function login(params) {
    return request({
        url: '/pc/user/login',
        method: 'post',
        data: params
    })
}

export function register(params) {
    return request({
        url: '/pc/user/register',
        method: 'post',
        data: params
    })
}

export function forgotPassword(params) {
    return request({
        url: '/pc/user/forgotPassword',
        method: 'post',
        data: params
    })
}

export function sendSMS(params) {
    return request({
        url: '/pc/user/sendsms',
        method: 'get',
        params: params
    })
}

export function logOut(params) {
    return request({
        url: '/pc/user/logOut',
        method: 'get',
        params: params
    })
}
