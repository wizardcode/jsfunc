function dealImage(path, obj) {
			var img = new Image();
			img.src = path;
			img.onload = function() {
				var that = this;
				var w = that.width,
					h = that.height,
					scale = w / h;
				w = obj.width || w;
				h = obj.height || (w / scale);
				var quality =obj.quality || 0.7;
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var anw = document.createAttribute("width");
				anw.nodeValue = w;
				var anh = document.createAttribute("height");
				anh.nodeValue = h;
				canvas.setAttributeNode(anw);
				canvas.setAttributeNode(anh);
				ctx.drawImage(that, 0, 0, w, h);
				if(obj.quality && obj.quality <= 1 && obj.quality > 0) {
					quality = obj.quality;
				}
				var base64 = canvas.toDataURL('image/jpeg', quality);
				dd=base64;			
			}
			return dd;
}

Date.prototype.format = function(format){ 
var o = { 
"M+" : this.getMonth()+1, //month 
"d+" : this.getDate(), //day 
"h+" : this.getHours(), //hour 
"m+" : this.getMinutes(), //minute 
"s+" : this.getSeconds(), //second 
"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
"S" : this.getMilliseconds() //millisecond 
}

if(/(y+)/i.test(format)) { 
format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
}

for(var k in o) { 
if(new RegExp("("+ k +")").test(format)) { 
format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length));
} 
} 
return format; 
}
