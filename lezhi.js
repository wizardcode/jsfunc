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