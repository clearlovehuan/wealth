import { connect } from 'react-redux'

import TestRedux from './TestRedux'
import { countAddOrSub, msgChange, getMusic } from '@/store/actions'

export default connect(function(store){
	return {
		msg: store.study.msg,
		count: store.count.count,
		list: store.music.list
	}
}, function(dispatch) {
	return {
		changeMsg: val=>dispatch(msgChange(val)),
		changeCount: step=>dispatch(countAddOrSub(step)),
		getMusic: params=>dispatch(getMusic(params))
	}
})(TestRedux)
