export function add(a:number,b:number){
    return a+b
}

export class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    displayInfo(): void {
        console.log(`This car is a ${this.make} ${this.model}`);
    }
}
export const utilOne = () => {
    /*...*/
  };
  export const utilTwo = () => {
    /*...*/
  };