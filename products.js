// const products = {
//     product_name: 'cadbury',
//     description: 'cadbury chocolate'
// }
// module.exports = products; //use products obj in somewhere else

console.log(__dirname,__filename);
//class of object
class Products{
    constructor(name,desc){
        this.name = name;
        this.desc = desc;
    }
    greeting(){
        console.log(`Product name ${this.name} and desc is ${this.desc}`);
        
    }
}
module.exports = Products; 