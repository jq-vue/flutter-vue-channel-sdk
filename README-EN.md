# web and flutter mutual

> WEB USE API , APP Inner Run

## use

> 1.use package

```javascript
// install
npm i flutter-vue2x-channel-sdk --save

// import
import { 
  initFlutterChannel,
  messageWebToFlutterChannel,
  ChannelRequest  
} from "flutter-vue-channel-sdk/flutter-channel-sdk"
```

> 2.init plugin

```javascript  
// 2.1 init
created() { 
   initFlutterChannel(this.handleFlutterCallback)
}  

// 2.2 callback
methods: {    
 handleFlutterCallback: function(callback) {
  console.log('flutter-sdk-callback => ' + callback);
 },
}
```

> 3.Flutter To Web mutual

```javascript  
messageWebToFlutterChannel(
 {
  channelApi: 'selectFileChannel',
  channelArgument: 'image'
 }
)
```

> 4.Flutter Callback

```javascript
handleFlutterCallback: function(callback) { 
  if(callback.request === ChannelRequest.webRequest) { 
   ...web request
  }
  if (callback.request === ChannelRequest.flutterResponse){
   ...flutter response
  }
 },
```

## field desc
| field | desc |
| ---- | ---- |
| channelApi | flutter api name |
| channelArgument| api argument |
| data| undfind |
| request | request platfomat |
