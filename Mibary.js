// Mibary ---- Coder Ming的个人小库    My blog: www.coderming.com


// 性能好，动态的选择器
function MsId(a) {
	return document.getElementById(a);
}

function MsClass(a) {
	return document.getElementsByClassName(a).length == 1 ? document.getElementsByClassName(a)[0] : document.getElementsByClassName(a);
}

function MsClassAll(a) {
	return document.getElementsByClassName(a);
}


// 好用，全面的元素选择器
function Ms(a) {
	return document.querySelectorAll(a).length == 1 ? document.querySelector(a) : document.querySelectorAll(a);
}

function MsAll(a) {
	return document.querySelectorAll(a);
}



// Ajax-GET
function MAjaxGET(b, c, d) {
	var m = new XMLHttpRequest(),
		a = {};
	m.open('GET', b, true);
	if (!d) {
		d = function() {
			console.log('MAjaxGET is not search error');
		}
	}
	m.onreadystatechange = function() {
		if (m.status == 200 || m.status == 304) {
			a = JSON.parse(m.responseText);
			c(a);
		} else {
			d();
		}
	}
	m.send();
	return true;
}

// Ajax-POST
function MAjaxPOST() {
	var m = new XMLHttpRequest;
}

//测试版JSONP
function MajaxJSONP(a, b) {
	var ran = Math.floor((Math.random() * 1000));
	window[ran] = function(x) {
		b(x);
	}
	var m = document.createElement('script');
	m.src = a + '&callback=window[' + ran + ']';
	document.body.appendChild(m);
}




// 给数组赋index的值
function Mindex(a) {
	for (var i = a.length - 1; i >= 0; i--) {
		a[i].index = i;
	}
}


// input框回车触发事件
function MenterInput(a, b) {
	a.onkeyup = function() {
		if (event.keyCode == 13) {
			b();
		}
	}
}