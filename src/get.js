import { customConf } from './initconfig';
const { baseConfig = {} }  = customConf;
export const get = (axios) => {
    return (opt = {}) => {
        const { url = '', params, attachParams }= opt;
        return axios({
            url,
            method: 'GET',
            params,
            ...baseConfig,
            ...attachParams
        });
    }
}
