import { customConf } from './initconfig';
const { baseConfig = {} }  = customConf;
export const postJson = (axios) => {
    return (opt = {}) => {
        const { url = '', params, attachParams }= opt;
        return axios({
            url,
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: params,
            ...baseConfig,
            ...attachParams
        });
    }
}
