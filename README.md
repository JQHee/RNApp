# RNApp

#### 打包
- iOS
```
第一步： package.json 添加bundle-ios
"scripts": {
"bundle-ios":"node node_modules/react-native/local-cli/cli.js bundle --entry-file index.js --platform ios --dev false --bundle-output ./ios/bundle/index.ios.jsbundle --assets-dest ./ios/bundle"
}

第二步： 在ios 目录下创建文件夹 *bundle*

第三步：npm run bundle-ios 即可打包

第四步： 将 bundle 目录下包拖工程即可

```

#### 参考项目
- GitHubPopular： https://github.com/crazycodeboy/GitHubPopular
- GSYGithubAPP：https://github.com/CarGuo/GSYGithubAPP
- 美团项目: https://www.jianshu.com/p/42097aa798fa

#### 主要模块
- 底部导航：react-native-tab-navigator
- 路由：react-native-router-flux 、react-navigation 需要依赖 react-native-gesture-handler
- 数据库：react-native-sqlite-storage  、react-native-storage
- 单向数据流：redux、redux-thunk、react-redux
- CodePush

#### 第三方框架
- 图片选择：react-native-image-picker、react-native-image-crop-picker
- tab切换：react-native-scrollable-tab-view
-  webView: react-native-htmlview
- 加密库：crypto-js
- 下拉放大并回弹：react-native-parallax-scroll-view
- 毛玻璃：https://github.com/react-native-fellowship/react-native-blur
- 模态弹窗：https://github.com/maxs15/react-native-modalbox
- 轮播图：https://github.com/leecade/react-native-swiper 、https://github.com/appintheair/react-native-looped-carousel
- 图片加载进度条：https://github.com/oblador/react-native-image-progress
- 图片选择：https://github.com/marcshilling/react-native-image-picker、https://github.com/ivpusic/react-native-image-crop-picker
- 下拉选择：https://github.com/alinz/react-native-dropdown
- 获取设备信息：https://github.com/rebeccahughes/react-native-device-info
- 通讯录：https://github.com/rt2zz/react-native-contacts
- 国际化：https://github.com/joshswan/react-native-globalize

#### 调试
- 真机：react-native run-ios --device  手机的名称


#### 一、mac react-native环境搭建

工具：vscode

- 1.1 安装brew
```
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- 1.2 安装node和webpack
```
brew install node
brew install webpack
```

- 1.3 设置国内镜像
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

- 1.4 安装React Native
```
npm install -g react-native-cli
```

- 1.5 初始化项目和导入依赖模块
```
react-native init ProjectName
创建完成后在工程目录中执行： npm install 
```


#### 二、HTTP网络请求

```javascript
/**
 * http networkData request
 */

var HttpUtil = {};

/**
 *  基于fetch 封装的Get请求
 *  @param url
 *  @param params{}
 *  @param headers
 *  @returns {Promise}
 */

HttpUtil.get = function (url, params, headers) {
    if (params) {
        let paramsArray = [];
        // encodeURiComponet
        Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&')
        }else  {
            url += '&' + paramsArray.join('&')
        }
    }

    return new  Promise (function (reslove, reject) {
        fetch(url,{
            method: 'GET',
            headers: headers,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }else  {
                    reject({status: response.status})
                }
            })
            .then((response) => {
                reslove(response);
            })
            .catch((err) => {
                reject({status: -1});
            })
    })

}


/**
 * 基于 fetch 封装的 POST请求  FormData 表单数据
 * @param url
 * @param formData
 * @param headers
 * @returns {Promise}
 */
HttpUtil.post = function(url, formData, headers) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: 'POST',
            headers: headers,
            body:formData,
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
}

export default HttpUtil;

/*
// 使用
let formData = new FormData();
formData.append("id",1060);
HttpUtil.post(url,formData,headers).then((json) => {
    //处理 请求success
    if(json.code === 0 ){
        //我们假设业务定义code为0时，数据正常
    }else{
        //处理自定义异常
        this.doException(json);
    }
},(json)=>{
    //TODO 处理请求fail
})
*/
```

#### 三、路由（react-native-router-flux）

#### 四、第三方sdk
- 1、友盟分享：https://www.jianshu.com/p/97da7b3b28d2

#### 五、图片的引用方式 （三种：使用原生、使用js工程、使用网络图片）
- https://blog.csdn.net/hejiasu/article/details/78970251
