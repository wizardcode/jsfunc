# jsfunc使用说明
## 1.dealImage("url", {width: w,height:h,quality:0.7}) 图片压缩函数
#####  第一个参数url，传入要压缩图片的url地址.必填
#####  第二个参数为一个对象，width为要生成图片的宽度，height为图片高度，省略则根据width计算原图片比例。quality为图片质量，值在0到1之间，默认为0.7，可省略。
##### 函数返回值为图片base64编码，可直接用户img src属性上，或者传送到后台。
#####  使用例子：
```
     <script type="text/javascript" src="js/lezhi.js" ></script>
     <script>				
		var dd=dealImage("img/timg.jpg", {width: 400});
		window.onload=function(){
			console.log(dd);
		}
     </script>
 ```
####  使用注意：使用dealImage返回值要在页面加载完成之后。
