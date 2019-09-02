import AUTH_API from './auth-api.js'
import MALL_API from './mall-api.js'
const Http = {}
let cookie = ''

/**
 * 请求之前的封装
 */
function beforeHttpProccess(key, api, params) {
	console.log('请求之前的封装', api.text, params)
	const value = uni.getStorageSync('userInfo');
	if (value || key == 'login') {
		return true;
	} else {
		uni.navigateTo({
			url: '/pages/login/login'
		})
		return false;
	}
}
/**
 * 请求之后的封装
 */
function afterHttpProccess(key, api, params, res) {
	console.log('请求之后的封装', res.data)
	return true;
}
/**
 * @param {请求的key属性} key
 * @param {对应的请求参数} api
 */
function apiProccess(key, api) {
	Http[key] = function(params) {
		if (!beforeHttpProccess(key, api, params)) {
			return undefined;
		}
		let headers = {
			'content-type': 'application/x-www-form-urlencoded',
		}
		if (cookie) {
			headers['cookie'] = cookie
		}
		let p = new Promise(function(resolve, reject) {
			console.log('http --- ', api.text)
			uni.request({
				url: "http://39.100.70.31" + api.url,
				data: params,
				method: api.method.toUpperCase(),
				header: headers,
				success: res => {
					console.log(api.text, res)
					if (afterHttpProccess(key, api, params, res)) {
						if (key == 'login') {
							let header = res.header;
							if (!!header['Set-Cookie']) {
								cookie = header['Set-Cookie']
							}
							if (!!header['set-cookie']) {
								cookie = header['set-cookie']
							}
							console.log("登录同步cookie", getCookie("email"))
						}
						resolve(res);
					} else {
						reject(undefined);
					}
				},
				fail: err => {
					reject(err);
				}
			})
		})
		return p; //返回请求的相应值
	};
}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
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
export default Http
