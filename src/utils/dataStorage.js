import Storage from 'good-storage'
import Config from '../config/app.js'
import {initUrlParams} from './app.js'


export function getUserInfo(key = null){
    let userInfo = Storage.get(Config.storageUserKey);
    if(key)return userInfo.hasOwnProperty(key) ? userInfo[key] : null;
    return userInfo;
}

export function saveUserInfo(user){
    Storage.set(Config.storageUserKey,user);
    return user;
}


export function getUrlInfo(key = null){
    if(!window.URlPARAMS)initUrlParams();
    if(key)return window.URlPARAMS.hasOwnProperty(key) ? window.URlPARAMS[key] : null;
    return window.URlPARAMS;
}
