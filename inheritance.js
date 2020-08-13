class Parent{
    constructor(){
        this.father = "Kolimuddin";
    }
}


class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }

    getFullname(){
        return this.name +" "+this.father;
    }
}


const babu = new Child("akkas");
const baby = new Child("kaku");

console.log(babu.getFullname());
console.log(baby.getFullname());