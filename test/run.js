(function () {
	//Object unit test
	//some object is useed for Object Unit test
	var testObj = {'name': 'Venshy', 'age': 'unknown'};
	var testOverF = {'name': 'VenshyReal'};
	var testOverT = {'name': 'VenshyReal', 'team': 'EcjtuNet'}

	//test v.extend
	test('extend', function () {
		//over : false 
		deepEqual(v.extend(testObj, testOverF, false), {
			'name': 'Venshy',
			'age': 'unknown'
		}, '对象未覆盖扩展');
		//over : true
		deepEqual(v.extend(testObj, testOverT), {
			'name': 'VenshyReal',
			'age': 'unknown',
			'team': 'EcjtuNet'
		}, '对象覆盖扩展');
	});
	//clone test
	test('clone', function () {
		ok(v.clone(testObj) !== testObj, 'clone并非引用');
		deepEqual(v.clone(testObj), testObj, 'clone');
	});
}());

