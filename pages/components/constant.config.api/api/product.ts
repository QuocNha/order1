async function getEmployee(name:String) {
    interface Person {
        name: string;
        price: number;
      }
      const array1: Person[] =[
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10},
        {name:"Ga CHien",price:10}
      ]
      return array1;
}

export default getEmployee;