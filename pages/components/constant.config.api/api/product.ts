async function getEmployee(name:String) {
  console.log("nameAPI",name);
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