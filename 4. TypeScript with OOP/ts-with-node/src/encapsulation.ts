class Student{
    private university: string = "DIU";
    private name: string;
    private amount: number;
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

    addMoney(money: number): number{
        if(money > 0){
            this.amount += money;
        } else {
            console.log("Invalid amount to add.");
        }
        return this.amount;
    }

}

const student1 = new Student("Alice", 5000, "017XXXXXXXX", "st23@gmail.com");
console.log(student1.printDetails());
student1.addMoney(-199);
console.log(student1.printDetails());