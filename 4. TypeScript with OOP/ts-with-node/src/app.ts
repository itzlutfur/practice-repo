class Student{
    university: string = "DIU";
    name: string;
    amount: number;
    whatsapp: string;
    email: string;

    constructor(name:string, amount:number, whatsapp:string, email:string){
        this.name = name;
        this.amount = amount;
        this.whatsapp = whatsapp;
        this.email = email;
    }

    printDetails(): string{
        return `University: ${this.university}, Name: ${this.name}, Amount: ${this.amount}, WhatsApp: ${this.whatsapp}, Email: ${this.email}`;
    }

}

const student1 = new Student("Alice", 5000, "017XXXXXXXX", "st23@gmail.com");
console.log(student1.printDetails());