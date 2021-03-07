import axios from 'axios';
import { isFun } from './utils';
import {
    customConf
} from './initconfig';

export const setInterceptors = () => {
    // 请求拦截器
    axios.interceptors.request.use((config) => {
        const { interceptors = {} } = customConf;
        const { beforeRequest } = interceptors;
        const custConfig = isFun(beforeRequest) && beforeRequest() || {};
        return {
            ...config,
            ...custConfig
        }
    }, (error) => {
        const { interceptors = {} } = customConf;
        const { requestError } = interceptors;
        return isFun(requestError) && requestError(error) || Promise.reject(error);
    })

    // 返回拦截器
    axios.interceptors.response.use((res) => {
        const { interceptors = {},  resDataConfig = {} } = customConf;
        const {
            // 配置返回码取值key
            resCodeKey = 'resCode',
            // 配置数据取值key
            resDataKey = 'data',
            // 请求Code出错执行函数
            codeErrorNotice = '',
            // 表示返回成功的code
            successCode = []
        } = resDataConfig;
        const { data = {} } = res;
        const { responseData } = interceptors;
        // 配置了自定义拦截器
        if(isFun(responseData)){
            return responseData(res)
        }
        // 未配置拦截器，配置参数
        if(successCode.includes(data[resCodeKey])) {
            return data[resDataKey];
        }
        if(isFun(codeErrorNotice)) {
            codeErrorNotice(res);
        }
        return res;
    }, (error) => {
        const { interceptors = {},  resDataConfig = {} } = customConf;
        const {
            errorNotice = '',
        } = resDataConfig;
        const { responseError } = interceptors;
        // 配置了自定义拦截器
        if(isFun(responseError)){
            return responseError(error)
        }
        // 未配置拦截器，配置参数
        if(isFun(errorNotice)) {
            errorNotice(error);
        }
        return Promise.reject(error);
    })
    return axios;
}