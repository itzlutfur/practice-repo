class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


const person1 = new Person("Alice", 45);
console.log(person1.getDetails());

const person2 = new Person("Baker", 12);
console.log(person2.getDetails());

const person3 = new Person("Kallu", 22);
console.log(person3.getDetails());