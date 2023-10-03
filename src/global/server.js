
export const PORTS = {
    DEVELOPMENT: '9900',
    PRODUCTION: '9900',
};
export const URL = {
    DEVELOPMENT: 'http://103.123.45.77',
    PRODUCTION: 'http://103.123.45.77',
}
export const setRegionCode = (region, url) => {
    BASE_URL = `${url}/regionCode/${region}`
    
}


export const URL_WITHOUT_REGION = `${URL.PRODUCTION}:${PORTS.PRODUCTION}/api/`;
// export const BASE_URL = 'https://live.schnelldev.in:8484/api';
export let BASE_URL = `https://assignment.8848digitalerp.com/api/method/`;
export let BASE_URL_WITHOUT_METHOD = `https://assignment.8848digitalerp.com/api/`;
export let FRANCHISEE_URL = `http://103.123.45.74:9434/api`;