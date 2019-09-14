
import React from 'react'
// import './icons/wechat.svg';  //引入svg
import './importIcons';

  
interface IconProps{
  name:string
}
const Icon: React.FunctionComponent<IconProps> = (props)=>{
  return(
    <span>
      <svg><use xlinkHref={`#${props.name}`}/></svg>
    </span>
  )
}
export default Icon;