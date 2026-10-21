// 5. Classes and Inheritance

// TypeScript supports classes with inheritance using the 'extends' keyword. 
// A child class inherits all propertiesand methods from the parent class

class Car{
    start()
    {
        console.log("Car--starts");
    }
       stop()
    {
        console.log("Car--stop");
    }
       refule()
    {
        console.log("Car--refuel");
    }
}

class BMW extends Car{
      override start()
    {
        console.log("BMW--starts");
    }
       auotoParkin()
    {
        console.log("BMW--auotoParkin");
    }
}

let bmw:BMW=new BMW();
bmw.start();
bmw.stop();
bmw.refule();
bmw.auotoParkin();

// 6. Method Overriding

//When a child class defines a method with the same name as the parent, 
// it overrides the parent method. Use the'override' keyword to make it explicit.class BMW extends Car {override start() {
//    // class BMW extends Car{
//       override start()
//     {
//         console.log("BMW--starts");
//     }
// When you call bmw.start(), the child class version runs.

// 7. Top Casting (Upcasting)

 //child class object can be referred to by a parent class reference variable. 
 // This is called upcasting or topcasting. The IS-A relationship: BMW IS-A Car.// 
 // Top casting: child object with parent reference let c1: Car = new BMW();
 // c1.start(); // BMW -- start
 //  (overridden method runs)
 // c1.stop(); 
 // // Car -- stopc1.refuel();
 // // Car -- refuel// 
 // c1.autoParking(); 
 // // Error: not available on Car type//
 //  Down casting: parent object with child reference//
 //  let b1: BMW = new Car(); // NOT ALLOWED -- will not compileWith top casting, 
 // you can only access methods defined in the parent type
 // . Child-only methods like autoParking() are notvisible through the parent reference.