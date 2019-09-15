// console.log('hi222');
// let div = document.createElement('div')
// div.innerText = 'div'
// document.body.appendChild(div)



/* start my UI
 * @Author: Jericho Ding 
 * @Date: 2019-09-14 21:27:07 
 * @Last Modified by: Jericho Ding
 * @Last Modified time: 2019-09-15 10:44:51
 */


import React from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
const fn:React.MouseEventHandler =(e)=>{
  console.log(e);
  console.log(e.target);
  console.log((e.target as HTMLDivElement).style);
}
ReactDOM.render(
  <div>
    <Icon name="wechat" onClick={fn}/>
  </div>,document.getElementById("root"))