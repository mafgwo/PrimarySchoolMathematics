
#  小学数学口算题 | Primary School Mathematics 2.1

![输入图片说明](https://img.shields.io/badge/Vue-3.2.41-blue)
![输入图片说明](https://img.shields.io/badge/license-Apache--2.0-green)
![输入图片说明](https://img.shields.io/badge/Github--PrimarySchoolMathematics-green?logo=github)

## 背景 | Background
孩子上小学一年级了，加减乘除的口算就要开始练习了，估计老师肯定会让家长出题，所以提前准备一下，利用Python开发了一套自动生成小学生口算题的小应用。
为了让辛苦的程序员老爹解放抄题的双手，本程序让你拥有更多的时间去写代码而不用去手写几道口算题而劳神伤脑。所以有或没有娃子的程序员老爹们一起来继续优化个开源小程序的？有什么点子，发现什么BUG，欢迎提出issue。

仅以此软件，献给那些热爱编程的程序员老爹们！

[小学数学口算题在线使用地址1](https://suiyan.cc/demo/psm/)

[小学数学口算题在线使用地址2](https://tsukasa521.github.io/PrimarySchoolMathematics)

如果访问慢可以使用这个地址:
[地址](https://kkplusplus.gitee.io/primaryschoolmathematics)

## 功能列表 | Features
- 可以设置各算数项和结果的取值范围及多步算数（最多三步）符号的选择。
- 可以生成求结果、求算数项、带括号的算式，除法可以生成带有余数的口算题。
- 可以简单设置试卷标题，副标题。设置生成的口算题试卷个数。
- 用户可最多保存10份配置在浏览器端，方便给熊孩子重复生成口算题。🔥
- 除口算解题外还提供生成竖式题，让熊孩子不能逃脱被试卷支配的恐惧。🔥
- 除了自动生成试题外，还支持手动添加题目，可以手工添加特殊题目，还可以将之前的错题进行重复练习。🔥
- 提供仅用日期来作为生成的文件名，让家长们蹭公司打印机时更隐蔽。🔥
- `New` 试卷打印完全由前端生成。🔥

## 如何使用 | How to use

### 例子 | Samples

例1：生成10以内的加减法
![](images/Sample01.png)

例2：2位数乘以2位数的竖式题
![](images/Sample02.png)

例3：2位数除以1位数并且有余数
![](images/Sample03.png)

例4：不带括号的混合运算
![](images/Sample04.png)

例5：带括号的混合运算
![](images/Sample05.png)

## 本地运行 | Getting Started
安装依赖

```sh
  yarn # 推荐Yarn安装
```

启动

```sh
  yarn dev
```

启动成功后访问 `http://127.0.0.1:1101` 即可。

打包

```sh
  yarn build

  yarn build:github # 为了部署github pages
```

> 打包完成后,为了github page部署,前端静态资源会复制一份到`docs`文件夹

## 技术栈 | Tech Stack
- Vue 3
- pinia
- element-plus

## 贡献者 | Contributors
感谢曾经贡献过代码的同学，再次谢谢你们！
- [@J_sky](https://github.com/bosichong)
- [@KK++](https://github.com/tsukasa521)
- [@ruancheng77](https://github.com/ruancheng77)
- [@andywu1998](https://github.com/andywu1998)

后续还想添加的功能有：小数的口算题，整十百千的口算，分数口算题（这个完全没有思路）。





