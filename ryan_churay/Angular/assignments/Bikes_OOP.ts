class Bike{
  constructor(public price: number, public max_speed: string, public miles: number = 0) {}
    displayinfo = () => {
        console.log(this.price, this.max_speed, this.miles);
        return this;
    }
    ride = () => {
        console.log('Riding')
        this.miles += 10;
        return this;
    }
    reverse = () => {
        console.log('Reversing')
        this.miles -= 5;
        return this;
    }

}
const bike1 = new Bike(100, '20mph');
const bike2 = new Bike(200, '25mph');
const bike3 = new Bike(1000, '40mph');
bike1.displayinfo();
bike2.displayinfo();
bike3.displayinfo();
bike1.ride().ride().ride().reverse().displayinfo();
bike2.ride().ride().reverse().reverse().displayinfo();
bike3.reverse().reverse().reverse().displayinfo();
