declare module '*.svg' {  // 没有用  但是为了兼容ts 所以要默认导出一个content
  const content: any;
  export default content;
}