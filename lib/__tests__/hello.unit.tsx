function add(a:number,b:number) {
  return a + b
}
describe('我的第一测试用例', () => {
  it('1+2=3',()=>{
    expect(add(1,2)).toEqual(3)
  })
});
