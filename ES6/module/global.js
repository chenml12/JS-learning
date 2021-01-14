//   单个导出
//导出
// export let name='张三';
// export let age=20;
// export const URL='https://www.baidu.com'
// //导出方法
// export function getName(){
//     return '李四';
// }
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