# kawaiiHacker | [English Docs](/README.md)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)  [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-2.0)  


基于[Hacker](https://github.com/CodeDaraW/Hacker)修改而来，在原主题的基础上进行如下修改：

* 以LOGO取代网页头部显示的标题，并可以在LOGO上添加可以在移动鼠标时“看向”鼠标指针的小部件。

* 修改网页标题的生成格式，仅首页的标题中包含副标题。

## Demo
参考我的博客：http://kawaiiq.github.io/

## 安装

获得主题文件， `git clone`或者`download zip`均可；  

在`themes`文件夹中创建文件夹`kawaiiHacker`，将主题文件都复制粘贴至此；  

然后在hexo全局配置文件`_config.yml`中应用主题：

```yaml
theme: kawaiiHacker
```

这样就安装好了，开始享受吧~

__注意：版本更新后建议在hexo生成前执行一次`hexo clean`，清除以前的缓存，避免带来的一些莫名其妙的问题。__

## 配置

原主题包含功能的配置参见[Hacker](https://github.com/CodeDaraW/Hacker)，这里说明新添加或修改功能的配置。

### 替换个人LOGO

使用你喜欢的图片替换主题所在文件夹下的`source/images/logo.png`文件。为保证较好的显示效果，图片请使用5：3的比例。

### 使用widget（小部件）

小部件位于LOGO之上，可以随着鼠标的移动“看向”鼠标指针。运用小部件可以实现一些有趣的效果，例如看向鼠标指针的眼睛等。

使用小部件也非常简单，只需替换小部件图片并在主题配置文件中修改相关配置即可。

使用你想要作为小部件使用的图片替换主题所在文件夹下的`source/images/widget.png`文件。为保证较好的显示效果，图片请使用5：3的比例；

在主题配置文件`_config.yml`中：

```
# widget settings
widget: true
maxDistance: 15
sensitive: 0.01
```

`widget`：是否启用小部件；

`maxDistance`：整数，小部件能够移动的最大距离；

`sensitive`：数字，小部件跟随鼠标移动的灵敏度。

## 协议
GNU GPL(General Public License) v2.0
