
import React from 'react'
// import './icons/wechat.svg';  //引入svg
import './importIcons';          // 替换成批量引入
import './icon.scss'

  
interface IconProps{
  name:string,
  onClick: React.MouseEventHandler<SVGElement>
}
const Icon: React.FunctionComponent<IconProps> = (props)=>{
  return(
    <svg className="fui-icon" onClick={props.onClick}><use xlinkHref={`#${props.name}`}/></svg>
  )
}
export default Icon;