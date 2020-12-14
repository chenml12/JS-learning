// obj:运动元素
// attr:移动方向(left/top)
//dir:步长/速度
// target :目标/终点
//回调函数：endFn
function doMove(obj, attr, dir, target, endFn) {
    //判断方向
    dir = parseInt(getStyle(obj, attr)) > target ? -dir : dir;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      let speed = parseInt(getStyle(obj, attr)) + dir;
      if ((speed > target && dir > 0) || (speed < target && dir < 0)) {
        speed = target;
      }
      obj.style[attr] = speed + "px";
      if (speed == target) {
        clearInterval(obj.timer);
        //判断是否有回调函数
        // if (endFn) {
        //   endFn();
        // }
        endFn && endFn();
      }
    }, 30);
  }
  //获取元素样式函数封装
  function getStyle(obj, attr) {
    return obj.currentStyle
      ? obj.currentStyle[attr]
      : getComputedStyle(obj)[attr];
  }