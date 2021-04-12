import axios from './axios'

export function fetchMusic(params) {
	return axios({
		url: '/soso/fcgi-bin/client_search_cp',
		method: 'get',
		params
	})
}
