
function doMove ( obj, json, dir, endFn ) {
	//json 目标位置
	//dir 步长集合,数组
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		var flag=true;
		var num=0;
		for(var attr in json){
			var current=0;
			if(attr=="opacity"){
				current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
			}else 
			{
                current = parseInt(getStyle(obj,attr)); // 数值
            }
			//var step = ( json[attr] - current) / 10;
			var step=current <json[attr]? dir[num] : -dir[num];
			
			var speed=current+step;
			if ( speed > json[attr] && step > 0 ||  speed < json[attr] && step < 0  ) {
			speed = json[attr];
		   }
		   
		   //console.log(speed);
		   if(attr=="opacity"){
				if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
                     {
                         // obj.style.opacity
                         obj.style.opacity = speed /100;
                     }
                    else
                     {  // obj.style.filter = alpha(opacity = 30)
                         obj.style.filter = "alpha(opacity = "+(speed)* 10+")";

                     }
			}else 
			{
                obj.style[attr] = speed + 'px'; // 数值
            }
			

                if(speed != json[attr])  // ???只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
                {
                    flag =  false;
                }
			
			
			num++;
	     }
		
		
		if(flag)  // 用于判断定时器的条件
            {
                clearInterval(obj.timer);
                //alert("ok了");
                if(endFn)   // 很简单   当定时器停止了。 动画就结束了  如果有回调，就应该执行回调
                {
                    endFn(); // 函数名 +  （）  调用函数  执行函数
                }
            }
		
		
	}, 30);
}


  







	  
	  function doMove_cls(obj, json, dir, endFn){
	    return function(){
		   clearInterval( obj.timer );
	      //console.log('进入');
	          obj.timer = setInterval(function () {
		      var flag=true;
		      var num=0;
		      for(var attr in json){
			         var current=0;
			         if(attr=="opacity"){
				        current = Math.round(parseInt(getStyle(obj,attr)*100)) || 0;
			         }else 
			         {
                        current = parseInt(getStyle(obj,attr)); // 数值
                     }
			//var step = ( json[attr] - current) / 10;
			           var step=current <json[attr]? dir[num] : -dir[num];
			           var speed=current+step;
			          if ( speed > json[attr] && step > 0 ||  speed < json[attr] && step < 0  ) {
			          speed = json[attr];
		            }
		   
		   //console.log(speed);
		           if(attr=="opacity"){
				      if("opacity" in obj.style)  // 判断 我们浏览器是否支持opacity
                     {
                         // obj.style.opacity
                         obj.style.opacity = speed /100;
                     }
                    else
                     {  // obj.style.filter = alpha(opacity = 30)
                         obj.style.filter = "alpha(opacity = "+(speed)* 10+")";

                     }
			       }else 
			       {
                     obj.style[attr] = speed + 'px'; // 数值
                   }
			

                   if(speed != json[attr])  // ???只要其中一个不满足条件 就不应该停止定时器  这句一定遍历里面
                  {
                    flag =  false;
                  }
			
			
			       num++;
	     }
		
		
		      if(flag)  // 用于判断定时器的条件
               {
                clearInterval(obj.timer);
                //alert("ok了");
                if(endFn)   // 很简单   当定时器停止了。 动画就结束了  如果有回调，就应该执行回调
                {
                    endFn(); // 函数名 +  （）  调用函数  执行函数
                }
              }
		
		
	         }, 30);
			  
	     }  
		  
	  }


 function shake ( obj, attr, endFn ) {

	 if(!obj.onOff){
		 return
	
	 }
	
	var pos = parseInt( getStyle(obj, attr) );			// 有隐患的
	
	var arr = [];			// 20, -20, 18, -18 ..... 0
	var num = 0;
	var timer = null;
		
	for ( var i=20; i>0; i-=2 ) {
		arr.push( i, -i );
	}
	arr.push(0);
		
	clearInterval( obj.shake );
	obj.shake = setInterval(function (){
		obj.onOff=false;
		obj.style[attr] = pos + arr[num] + 'px';
		num++;
		if ( num === arr.length ) {
			clearInterval( obj.shake );
            obj.onOff=true;
			endFn && endFn();
		}
	}, 50);
}






function getStyle ( obj, attr ) { return obj.currentStyle?obj.currentStyle[attr] : getComputedStyle( obj )[attr]; }