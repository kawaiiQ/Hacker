# kawaiiHacker | [中文版文档](/README_zh-CN.md)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badge/)  [![GPL Licence](https://badges.frapsoft.com/os/gpl/gpl.svg?v=103)](https://opensource.org/licenses/GPL-2.0)  

Based on [Hacker](https://github.com/CodeDaraW/Hacker). Made the following modification:

* Replace the title in the header of the website by a logo, which can add a widget on it that can automatically "look at" cursor when moving mouse.

* Change the format of title. Only the title of index contains subtitle.

* MathJax support.

* Modified style.

## Demo
You can refer to my blog: http://kawaiiq.github.io/

## Installation
Firstly get the theme files, `git clone` or `download zip` both are ok.  

Create a folder named `kawaiiHacker` in the folder `themes`, and copy all the theme files to the folder `kawaiiHacker`.  

Then apply the theme in the hexo global configuration file `_config.yml`:

```yaml
theme: kawaiiHacker
```
Now all are in order, just enjoy~

__Notice: After every update, you'd better run command `hexo clean` to clean cache files before Hexo generating, in case of some problems cache files bring.__


## Configure

For configurations of original fuctions. Please check [Hacker](https://github.com/CodeDaraW/Hacker).

### Replace Logo

Replace `source/images/logo.png` with your favorite picture. To have a better display effect, please make sure that proportion of the picture is 5: 3.

### Use Widget

The widget is on the logo, which can automatically "look at" the mouse cursor when the mouse moves.

It is simple to use widget. Just replace the picture of widget and modify the corresponding settings.

Replace `source/images/widget.png` with your favorite picture. To have a better display effect, please make sure that proportion of the picture is 5: 3.

In the theme configuration file `_config.yml`:

```
# widget settings
widget: true
maxDistance: 15
sensitive: 0.01
```

`widget`: whether enable the widget or not;

`maxDistance`: an integer that defines the maximum distance the widget can move;

`sensitive`: a number that defines the sensitive of widget.

### MathJax Support

By default, the MathJax support it enabled. You can use the format `$ ... $` or `$$ ... $$` to write MathJax formulas.

In the theme configuration file `_config.yml`:

```
# MathJax support
mathJax: true
```

`mathJax`: whether enable the MathJax Support.

## License
GNU GPL(General Public License) v2.0
