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
## 2. new Date().format('yyyy-MM-dd hh:mm:ss q:S') 格式化时间输出
##### format里可使用自定义分隔符，如format('yyyy年MM月dd hh:mm:ss q:S')
##### 参数y代表年，M代表月，d代表日，h代表小时，m代表分钟，s代表秒，q代表季度，S代表毫秒。四个yyyy为年全称，如2017，两个yy为17。不需要的参数可不写。
##### 使用例子：
```
	<script type="text/javascript" src="js/lezhi.js" ></script>
     	<script>
		window.onload=function(){
			var time=new Date().format('yy-MM-dd hh:mm:ss');
			console.log(time);
		}
	</script>
```
