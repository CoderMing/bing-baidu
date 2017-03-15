var a = Ms('#i1'),
	b = Ms('#i2'),
	c = Ms('.one-search'),
	d = Ms('.one');


MenterInput(c, function () {
	a.src = 'https://www.baidu.com/s?wd=' + c.value + '&rsv_spt=1&rsv_iqid=0xfc5defdb00000b3c&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&inputT=3243&rsv_t=597fSY7kQjY2GDp98rIOIs7Gl6D2TVaoeRK8fZii%2F4A8zNrQlPOTksKT1LbjqWYPbf8T&rsv_sug3=23&rsv_sug1=17&rsv_sug7=100&oq=dsfa&rsv_pq=d1b23166000003c5&rsv_sug2=0&rsv_sug4=5735';
	b.src = 'https://www.bing.com/search?q=' + c.value + '&qs=n&form=QBLH&sp=-1&pq=google+iframe&sc=2-13&sk=&cvid=4875C8CE9F54418E9BF9079975470E74';
	d.style.height = '0';
	d.style.opacity = 0;
})