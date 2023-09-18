# web和flutter交互


## 使用

> 1.导包

```javascript
// 安装插件
npm i flutter-vue2-channel-sdk --save

// 导入函数
import { 
  initFlutterChannel,
  messageWebToFlutterChannel,
  ChannelRequest  
} from "flutter-vue-channel-sdk/flutter-channel-sdk"
```

> 2.初始化插件

```javascript  
// 2.1 created或mounted中初始化
created() { 
   initFlutterChannel(this.handleFlutterCallback)
}  

// 2.2 methods中定义回调
methods: {    
 handleFlutterCallback: function(callback) {
  console.log('flutter-sdk-监听器 => ' + callback);
 },
}
```

> 3.向Flutter发起交互

```javascript  
messageWebToFlutterChannel(
 {
  channelApi: 'selectFileChannel',
  channelArgument: 'image'
 }
)
```

> 4.接收Flutter交互

```javascript
handleFlutterCallback: function(callback) { 
  if(callback.request === ChannelRequest.webRequest) { 
   ...web发起请求的回调
  }
  if (callback.request === ChannelRequest.flutterResponse){
   ...来自flutter的请求或响应
  }
 },
```

## 字段描述

| 字段 | 描述 |
| ---- | ---- |
| channelApi | flutter的接口 |
| channelArgument| flutter接口参数 |
| data| 自定义参数 |
| request | model标识符 |

 ` openAppCheck `设置为` true `时，flutter端的` userAgent `需要添加` flutter-mini-webview-plugin ` 用于SDK检测API是否在APP内运行
