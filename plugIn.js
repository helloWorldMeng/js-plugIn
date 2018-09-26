(function(win, doc){
	
	// 默认值
	var defaultSettings = {
		color: "red",
		background: "blue",
		border: "1px solid #333",
		fontSize: "30px",
		textAlign: "center",
		width: "200px",
		borderRadius: "5px"
	};
	
	// 构造函数
	function SetStyles(options) {
		var self = this;
		if(!options){
			throw new Error("请传入配置参数");
		}
		self = Object.assign(self, defaultSettings, options);
		
		self.container = doc.querySelector(self.container) || doc.querySelectorAll(self.container);
        self._changeStyles();
	}
	
	SetStyles.prototype = {
		_changeStyles: function() {
			var self = this;
			for (var pro in self) {
                if(pro == "container") {
                    continue;
                }
				if(pro == "text" && typeof self[pro] == 'string') {
					self.container.innerText = self[pro];
					continue;
				} else if(pro == 'text' && typeof self[pro] == 'function') {
					self.container.innerHTML = self[pro]();
					continue;
				}
				console.log(doc);
				console.log(doc.querySelector("#test"));
				self.container.style[pro] = self[pro];
			}
		}
	}
	
	win.SetStyles = SetStyles;
	
})(window, document)