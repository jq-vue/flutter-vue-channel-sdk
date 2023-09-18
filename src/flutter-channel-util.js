
'use strict';
// 检测是否app内打开
const checkIsAppOpen = () => navigator.userAgent.indexOf("flutter-mini-webview-plugin") != -1

// map转json
function mapTojson(strMap) { 
	var obj = Object.create(null);
	for (var [k, v] of strMap) {
		obj[k] = v;
	}
	var json = JSON.stringify(obj)
	return json;
}

// json转map
function jsonToMap(jsonStr) { 
	var json = JSON.parse(jsonStr);
	let strMap = new Map();
	for (let k of Object.keys(json)) {
		strMap.set(k, obj[k]);
	}
	return strMap;
}

// 校验值是否为空
function valueEmpty(value) {
	if (value == "null" || value == "undefined" || value == undefined || value == "") {
		return false;
	}
	return true;
}

export  {
	 jsonToMap, 
	 mapTojson,
	 valueEmpty,
	 checkIsAppOpen
}