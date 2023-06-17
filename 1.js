class Car{
    constructor(name,model){
        this.name= name;
        this.model= model;
    }
    start(){
        console.log(`The model name of this ${this.name} is ${this.model}`);
    }

}

class Electric extends Car{
    start(){
        super.start();
    }
}

const tesla= new Electric('abc','tesla');
tesla.start();