
import React from 'react'
// import './icons/wechat.svg';  //引入svg
import './importIcons';   // 换成批量引入
import './icon.scss'

  
interface IconProps{
  name:string
}
const Icon: React.FunctionComponent<IconProps> = (props)=>{
  return(
    <svg className="fui-icon"><use xlinkHref={`#${props.name}`}/></svg>
  )
}
export default Icon;