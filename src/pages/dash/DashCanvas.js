import React, { useState, useEffect } from 'react'
import './style.scss'
import mapStyle1 from './style/mapStyle1'
import mapStyle2 from './style/mapStyle2'

const BMapGL = window.BMapGL
let map = null

export default props => {

	const [custom, setCustom] = useState(1)

	useEffect(()=>{
		console.log('地图api', BMapGL)
		map = new BMapGL.Map('bmap')
		map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 11)
		map.enableScrollWheelZoom(true)

		// 添加自定义Marker图标
		var icon = new BMapGL.Icon("/logo.png", new BMapGL.Size(50, 50))
		var pt = new BMapGL.Point(116.404, 39.915)
		var marker = new BMapGL.Marker(pt, { icon })
		map.addOverlay(marker)
		map.setMapStyleV2({styleJson: mapStyle1})
	}, [])

	const setCustomStyle = cur => {
		setCustom(cur)
		map.setMapStyleV2({styleJson: cur===1 ? mapStyle1 : mapStyle2})
	}

	return (
		<div className='qf-dash-canvas'>
			<div>
			<ul className="drawing-panel" style={{zIndex: 99}}>
				<li
					className={`light btn ${custom===1 ? 'current' : ''}`}
					onClick={()=>setCustomStyle(1)}>
					白天模式
				</li>
				<li
					className={`light btn ${custom===2 ? 'current' : ''}`}
					onClick={()=>setCustomStyle(2)}>
					夜晚模式
				</li>
			</ul>
				<div
					style={{width:'100%', height:'500px'}}
					id="bmap">
				</div>
			</div>
		</div>
	)
}
