//====================================================
//
//	数据缓存:
//		方法允许我们在DOM元素上绑定任意类型的数据,
//		避免了循环引用的内存泄漏风险。
//		
//=====================================================
define([
	"./core",
	//引入参数access方法
	"./core/access"
],function(aAron, access) {

	/**
	 * 确保是一个对象有数据
	 */
	aAron.acceptData = function( owner ) {
		//只接受几种类型
		//元素节点
		//文档节点
		//任何对象
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};


	function Data() {
		//向下兼容
		//旧版本的Webkit没有对象的定义
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {

			}
		})

		//UUID基于版本号+随机数
		//避免一个用户引入多个版本的同样的库
		this.expando = aAron.expando + Math.random();
	}

	//生成唯一的UUID
	Data.uid = 1;

	var dataProto = Data.prototype;


	dataProto.key = function(){


	}

	/**
	 * 设置对象的缓存
	 * @param {[type]} owner [description]
	 * @param {[type]} data  [description]
	 * @param {[type]} value [description]
	 */
	dataProto.set = function(owner, data, value) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key(owner),
			cache = this.cache[unlock];

	}

	dataProto.get = function(){

		
	}


	//内部使用的缓存
	var data_priv = new Data();

	//用户使用的缓存
	var data_user = new Data();

	console.log(data_user)


	/**
	 * 扩展静态方法
	 */
	aAron.extend({
		data:function(){

		}
	});


	/**
	 * 扩展实例方法
	 */
	aAron.fn.extend({
		/*
		 * set/get同接口
		 * 通过传递参数不同区分
		 */
		data: function(key, value) {
			var i, name, data,
				elem = this[0],
				attrs = elem && elem.attributes;

			//如果是get,取值操作
			if(value === undefined){

			}

			//set操作
			//抽象出access参数解析方法
			access(this, function(value) {
				var data,
					//转化key正确
					//background-color => backgroundColor
					camelKey = aAron.camelCase(key);

				//设置数据缓存
				this.each(function() {
					data_user.set(this, camelKey, value);
				});

			}, null, value)
		}
	});



	return aAron;
})