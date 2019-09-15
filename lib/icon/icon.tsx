
import React from 'react'
// import './icons/wechat.svg';  //引入svg
import './importIcons';          // 替换成批量引入
import './icon.scss';
import classes from '../helpers/classnames';


interface IconProps extends React.SVGAttributes<SVGElement>{
  name:string;
}
// onClick: React.MouseEventHandler<SVGElement>  //要使用继承的方式来获取属性事件
const Icon: React.FunctionComponent<IconProps> = (props)=>{
  const {className,name,...restProps} = props;
  return(
      <svg className={classes('fui-icon',className)}
          {...restProps} target={''} href={''} >
          <use xlinkHref={`#${name}`}/>
      </svg>
  );
}
export default Icon;