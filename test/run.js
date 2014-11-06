(function () {
	var testObj = {'name': 'Venshy', 'age': 'unknown'};
	var testOverF = {'name': 'VenshyReal'};
	var testOverT = {'name': 'VenshyReal', 'team': 'EcjtuNet'}
	test('extend', function () {
		deepEqual(v.extend(testObj, testOverF, false), {
			'name': 'Venshy',
			'age': 'unknown'
		}, '对象未覆盖扩展');
		deepEqual(v.extend(testObj, testOverT), {
			'name': 'VenshyReal',
			'age': 'unknown',
			'team': 'EcjtuNet'
		}, '对象覆盖扩展');
	});
	test('clone', function () {
		ok(v.clone(testObj) !== testObj, 'clone并非引用');
	});
}());

