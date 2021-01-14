//   导出
 let name='张三';
 let age=20;
 const URL='https://www.baidu.com'
//导出方法
 function getName(){
    return '李四';
}
export{
    name as oldName,
    // name,
    age,
    URL,
    getName
}
