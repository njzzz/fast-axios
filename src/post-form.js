import qs from 'qs';
import { customConf } from './initconfig';
const { baseConfig = {} }  = customConf;
export const postForm = (axios) => {
    return (opt = {}) => {
        const { url = '', params, attachParams }= opt;
        return axios({
            url,
            method: 'POST',
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(params),
            ...baseConfig,
            ...attachParams
        });
    }
}
