import AUTH_API from './auth-api.js'
import MALL_API from './mall-api.js'
import axios from '@/js_sdk/gangdiedao-uni-axios'
let instance = axios.create({
	baseURL: "http://39.100.70.31/",
	timeout: 3000
});
instance.defaults.withCredentials = true;

const Http = {}; //包裹请求方法的容器

/**
 *
 * @param {请求的key属性} key
 * @param {对应的请求参数} api
 */
function apiProccess(key, api) {
	Http[key] = async function(params) {
		let config = {};
		let newParams = new FormData();
		for (let i in params) {
			console.log('i = ',i);
			newParams.append(i, params[i]);
		}
		let response = {};
		if (api.method === "put" ||api.method === "post" ||api.method === "patch") {
			try {
				console.log("----post-----", newParams);
				response = await instance[api.method](api.url, newParams, config);
			} catch (err) {
				response = err;
			}
		} else if (api.method === "delete" || api.method === "get") {
			config.params = newParams;
			try {
				response = await instance[api.method](api.url, config);
			} catch (err) {
				response = err;
			}
		}
		return response; //返回请求的相应值
	};
}

/**
 * 遍历api
 */
//请求格式/参数的统一
for (let key in AUTH_API) {
	let api = AUTH_API[key]; // url method
	apiProccess(key, api)
}
for (let key in MALL_API) {
	let api = MALL_API[key]; // url method
	apiProccess(key, api)
}


//请求拦截器
instance.interceptors.request.use(config => {
	console.log('请求之前的封装', config)
	return config;
}, err => {
	console.log('err -- ', err);
});

//响应拦截器
instance.interceptors.response.use(res => {
	if (res.data.res == -1) {
		uni.navigateTo({
			url: '/pages/login/login'
		})
		return res;
	} else {
		if ('obj' in res.data) {
			// console.log('请求成功--',res.data.obj);
			res.data.obj = JSON.parse(res.data.obj)
		}
	}
	return res.data;
}, err => {
	return err;
});
export default Http
