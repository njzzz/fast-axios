export let customConf = {};

 // Do something before request is sent
export const requestBeforeInterceptor = (config) => {
    return config;
}

// Do something with request error
export const requestErrorInterceptor = (error) => {
    return Promise.reject(error)
}

// Do something before request is sent
export const responseDataInterceptor = (response)  => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}

// Do something with request error
export const responseErrorInterceptor = (error) => {
    return Promise.reject(error)
}

/**
 * @param {Object} opt 
 * request: {
 *      beforeRequest(config){
 *          return config
 *      },
 *      requestError(error){
 *          return xxxx
 *      }
 * }
 * response: {
 *      responseData(config){
 *          return config
 *      },
 *      responseError(error){
 *          return xxxxx
 *      }
 * }
 * 
 */
export const setInterceptersConfig = (interceptors = {}) => {
    customConf.interceptors = interceptors;
}

export const setResDataConfig = (opt = {}) => {
    const { resCodeKey = '', resDataKey = '', errorNotice = '', codeErrorNotice = '', successCode = [] } = opt;
    customConf = {
        ...customConf,
        resDataConfig: {
            // 配置返回码取值key
            resCodeKey,
            // 配置数据取值key
            resDataKey,
            // 请求码出错执行函数
            errorNotice,
            // 表示返回成功的code
            successCode,
            // 请求出错执行函数
            codeErrorNotice
        }
    }
}
export const setBaseConfig = (opt = {}) => {
    customConf = {
        ...customConf,
       baseConfig: opt
    }
}