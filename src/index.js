import { setInterceptors } from './base';
import { setInterceptersConfig, setResDataConfig, setBaseConfig } from './initconfig';
import { get } from './get';
import { postForm } from './post-form';
import { postJson } from './post-json';

class  FastAxios {
    constructor(opt = {}){
        const { interceptors = {}, resDataConfig = {}, baseConfig = {} } = opt
        this.interceptors = interceptors;
        this.resDataConfig = resDataConfig;
        this.baseConfig = baseConfig;
        this.$axios = null;
        this.methods = {};
        this.setInterceptersConfig();
        this.setResDataConfig();
        this.setBaseConfig();
        this.setInterceptors();
        this.setMethods();
        return this.methods;
    }
    setInterceptersConfig(){
        setInterceptersConfig(this.interceptors);
    }
    setResDataConfig(){
        setResDataConfig(this.resDataConfig);
    }
    setBaseConfig(){
        setBaseConfig(this.baseConfig);
    }   
    setInterceptors(){
        this.$axios = setInterceptors();
    }
    setMethods(){
        this.methods = {
            get: get(this.$axios),
            postJson: postJson(this.$axios),
            postForm: postForm(this.$axios)
        }
    }
}
export default FastAxios;