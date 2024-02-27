/**
 * interface接口和type类型别名的区别
 * 相同：都能为对象指定类型
 * 不同：type 可以声明基本类型别名，联合类型，元组等类型 接口不行
*/

interface IPreson{
    name:string,
    age:number,
    sayHi(name:string):void
}
let preson1:IPreson={
    name:'jack',
    age:19,
   sayHi(){

   }
}
preson1.sayHi('aaa')
type TPreson={
    name:string,
    age:number,
    sayHi(name:string):void
}


/**
 * 使用extends来继承接口
 */
interface Point2D{
    x:number
    y:number
}
interface Point3D extends Point2D{
    z:number
}