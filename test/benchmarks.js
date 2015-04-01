//Object unit test

(function () {
    //some object is used for Object Unit test
    var testObj = {'name': 'Venshy', 'age': 'unknown'};
    var testOverF = {'name': 'VenshyReal'};
    var testOverT = {'name': 'VenshyReal', 'team': 'EcjtuNet'};
    var i ; 
    var TIMES = 100;//循环次数，性能测试参数

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
    //each test
    test('objEach v', function () {
        var l = 2;
        var testvalue = {};
        var returnObj;
        for (i = TIMES; i >= 0; i--) {
            v.objEach(testObj, function(value, key, obj) {
                testvalue[key] = value;
                if(!returnObj) returnObj = obj;
            });
        };
        deepEqual(testvalue, testObj, 'each');
        equal(returnObj, testObj, '第三参数');
    });

    test('objEach _', function () {
        var l = 2;
        var testvalue = {};
        var returnObj;
        for (i = TIMES; i >= 0; i--) {
            _.each(testObj, function(value, key, obj) {
                testvalue[key] = value;
                if(!returnObj) returnObj = obj;
            });
        };
        deepEqual(testvalue, testObj, 'each');
        equal(returnObj, testObj, '第三参数');
    })
}());


//Array unit test
(function () {
    var arr = [1, 3, 5, 7, 9];
    var i ; 
    var TIMES = 1000000;//循环次数，性能测试参数

    test('isArray', function () {
        var testis = 'test';
        ok(!v.isArray(testis), 'It is not an Array');
    });


    test('arrEach v', function () {
        var returnArr,
            testArr = [];
        for (i = TIMES; i >= 0; i--) {
            v.arrEach(arr, function (value, ind, arr) {
                testArr[ind] = value;
                returnArr = arr; 
            });
        }
        deepEqual(testArr, arr, 'each');
        equal(returnArr, arr);
    });
    test('arrEach _', function () {
        var returnArr,
            testArr = [];
        for (i = TIMES; i >= 0; i--) {
            _.each(arr, function (value, ind, arr) {
                testArr[ind] = value;
                returnArr = arr; 
            });
        }
        deepEqual(testArr, arr, 'each');
        equal(returnArr, arr);
    });
}());

