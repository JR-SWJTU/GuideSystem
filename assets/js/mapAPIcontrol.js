

var map = new BMap.Map("allmap",{enableMapClick:false});    // 创建Map实例,
map.centerAndZoom(new BMap.Point(103.9926590000, 30.7717970000), 20);  // 初始化地图,设置中心点坐标和地图级别
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.setCurrentCity("西南交大图书馆");          // 设置地图显示的城市 此项是必须设置的
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
map.addControl(new BMap.OverviewMapControl({isOpen:false,anchor:BMAP_ANCHOR_BOTTOM_RIGHT}));
//添加缩放平移控件
	map.addControl(new BMap.NavigationControl());
//添加比例尺控件
map.addControl(new BMap.ScaleControl());

var  mapStyle = {features:false};
map.setMapStyle(mapStyle);


var crelan = 0;
var crelon = 0;   
var cremarker;
function creNewLM(crelan1, crelon1){
	if(crelan1 == 0.0){
	 	map.addEventListener("click",function(e){
			crelan = e.point.lat;
			crelon = e.point.lng;
			if(crelan != 0.0)
				map.clearOverlays();
			cremarker = new BMap.Marker(new BMap.Point(crelon,crelan));// 创建标注
			map.addOverlay(cremarker);             // 将标注添加到地图中
			cremarker.enableDragging();           // 不可拖拽
			$("#sure_creLM").attr("disabled",false); 
		});
	}else{
		$("#sure_creLM").attr("disabled","true"); 
	}
}
function editNewLM(crelan1, crelon1){
	if(crelan1 == 0.0){
	 	map.addEventListener("click",function(e){
			crelan = e.point.lat;
			crelon = e.point.lng;
			if(crelan != 0.0)
				map.clearOverlays();
			cremarker = new BMap.Marker(new BMap.Point(crelon,crelan));// 创建标注
			map.addOverlay(cremarker);             // 将标注添加到地图中
			cremarker.enableDragging();           // 不可拖拽
			$("#sure_edit").attr("disabled",false); 
		});
	}else{
		$("#sure_edit").attr("disabled","true"); 
	}
}

