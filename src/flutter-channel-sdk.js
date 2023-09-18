'use strict';

import Vue from 'vue'
Vue.prototype.$eventBus = new Vue()  
import{ChannelRequestQuery} from './flutter-channel-enum'
import{checkIsAppOpen,valueEmpty}from './flutter-channel-util'
var  _openAppCheck = true
// 初始化SDK
function initFlutterChannel(handleChannelCallback,openAppCheck = true){
	_openAppCheck = openAppCheck
	if(!checkIsAppOpen() && _openAppCheck){
		alert('SDK初始化失败,请在APP内使用!')
	}else{
		window.messageFlutterToWebChannel = _messageFlutterToWebChannel
		_handleWebFlutterEvent(handleChannelCallback)
		console.log('flutter-web-channel-sdk','初始化完成')
	} 
}

// 向flutter交互
function messageWebToFlutterChannel({ channelApi = '', channelArgument = '', data = ''}) { 
	if(!checkIsAppOpen() && _openAppCheck == true){
		alert('SDK初始化失败,请在APP内使用!')
	}else{
		if (!valueEmpty(channelApi)) {
			alert('channelApi不能为空');
		} else {
			try { 
				ChannelRequestQuery.channelApi = channelApi
				ChannelRequestQuery.data = data 
				ChannelRequestQuery.channelArgument = channelArgument
				var json = JSON.stringify(ChannelRequestQuery) 
				webMessageToFlutter.postMessage(json,'*')
				console.log('flutter-web-channel-sdk交互了flutter：',ChannelRequestQuery)
				_respEvent(ChannelRequestQuery)
			} catch (error) {
				console.log('flutter-web-channel-sdk和APP交互出错：',error)
				alert('和APP交互出错,请检查参数！');
			}
		}
	} 
}

// flutter向web交互
function _messageFlutterToWebChannel(flutterData) {
	console.log('flutter-web-channel-sdk收到flutter交互',flutterData)   
	_respEvent(flutterData)
}

// 响应 
var _respEvent = (respData) => Vue.prototype.$eventBus.$emit('VueFlutterEventBus', respData)

// 监听   
var _handleWebFlutterEvent = (handleCallback) => Vue.prototype.$eventBus.$on('VueFlutterEventBus', handleCallback)

export  {
	initFlutterChannel,
	messageWebToFlutterChannel, 
}