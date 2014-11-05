/* EcjtuNet javascript utils 
 * copyright 2014
 * by Venshy
 */
(function() {
	//global Object Window in Browser or exports in Node
	var root = this;

	var prevutils = root.v;
	// v 声明
	//v({Object}) 初始化 添加新成员给v 
	var v = function (exv) {
		if(exv instanceof v) return exv;
		if(!(this instanceof v)) return new v(exv);
		v.exv = exv;
	}
	//兼容Node
	if(typeof module === "object" && typeof module.exports === "object") {
		exports = module.exports = v;
	} else {
		root.v = v;
	}
	//解决v命名冲突问题
	v.noConflict = function() {
	    root.v = prevutils;
	    return this;
  	};

  	//内置对象原型简写声明
  	var ArrayProto = Array.prototype
  	,	ObjProto = Object.prototype
  	,	FuncProto = Function.prototype;

  	//常用内置函数简写声明
  	var v.push  = push  = ArrayProto.push
  	,	v.slice = slice = ArrayProto.slice
  	,	v.toStr = toStr = ObjProto.toString
  	,	v.hasOp = hasOp = ObjProto.hasOwnProperty;
  	/* 
  	 * About Array
  	 * By Venshy
  	 */	

  	 //数组类型判断
  	 v.isArray = Array.isArray || function (arr) {
  	 	return toStr.call(arr) === "[object Array]";
  	 };


  	/* 
  	 * About Object
  	 * By Venshy
  	 */

  	//对象类型判断
  	v.isObject = functin (obj) {
  		var type = typeof obj;
  		return type === 'object' || type === 'function' && !!obj;
  	};
  	//类数组对象数组化
  	//begin end 提供slice参数
  	//考虑 obj is undefined & obj is an Array
  	v.toArray = function (obj, begin, end) {
  		if(!obj) return [];
  		return !v.isArray(obj) ?
  			slice.call(obj, begin || 0, end || 0) :
  			obj;
  	};
  	//对象扩展
  	//obj: 被扩展对象
  	//src: 扩展属性来源
  	//over: 是否覆盖 Default: true
  	v.extend = function (obj, src, over) {
  		if(!v.isObject(obj)) return obj;
  		var key
  		,	over = over || true;
  		for (key in src) {
  			if (over || !(key in obj)) {
  				obj[key] = src[key];
  			}
  		}
  		return obj;
  	};


}.call(this));