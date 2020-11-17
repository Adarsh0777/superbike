//var name = "adarsh";
//var age = 20;
//        
//var message = "hi, my name is " + name + " and i am " + age + "years old";
//
//console.log(message);
//
//var firstName = "Adarsh";
//var lastName = "kumar singh";
//var dateOfBirth = "21/4/2000";
//var age = 20;
//var address = "Railway colony no: 2 , House no: L-15-E, near sadar thana , opposite amritsar,143001";
//var welcomeMessage = "Hi, welcome" + firstName + ". Happiest " + age + "th Birthday";
//
//console.log(welcomeMessage);
//
//var sum = 10 + 15;
//var sub = 29 - 15;
//var mul = 3 * 6;
//var div = 9 / 7;
//var mod = 9 % 4;
//
//console.log(sum);
//console.log(sub);
//console.log(mul);
//console.log(div);
//console.log(mod);
//
//
//var accountBalance = 40000;
//var laptop = 45000;
//var coupen = 10000;
//
//if(laptop <= accountBalance ){
//console.log(" i am able to buy a laptop");
//console.log("accountBalance = " + accountBalance);
//}
//else if (laptop - coupen <= accountBalance){
//    console.log(" i can buy a laptop by using coupen ");
//    accountBalance -= laptop - coupen;
//    console.log("account balance = "+ accountBalance);
//}
//else{
//    console.log(" i am not able to buy a laptop");
////}
//var val1 = 33;
//var val2 = "33";
//
//if (val1 == val2){
//    console.log("these numbers are equal");
//    
//}
//else{
//    console.log("these numbers are not equal")
////}
//var total =10
//for (var x=0; x<total; x++){
//    console.log(x)
//}
//
//var students = ["john","jacob","anjali"];
//for( var index = 0; index<students.length; index++){
//    console.log(students[index]);



//var length1=15;
//var width=30;
//var area = length1*width;
//
//var length2 = 13;
//width2 = 14;
//area2 = length2*width2;
//
//console.log(area2)
//console.log(area)
//    
    
//function area(length, width){
//    return length * width;
//}
//var rectangleAreas = [];
//rectangleAreas.push(area(22,33));
//rectangleAreas.push(area(43,55));
//rectangleAreas.push(area(5,7));
//
//console.log(rectangleAreas);

//
//var accountBalance = 5000;
//function makeTransaction(priceOfSale){
//    if(priceOfSale <= accountBalance){
//        accountBalance -= priceOfSale;
//    console.log("purchase sucessful")
//    }
//    else{
//        console.log("insufficient funds")
//    }
//}; 
//    
//console.log(accountBalance);
//makeTransaction(300);
//
//  
//console.log(accountBalance);
//makeTransaction(400);
//
//
//  
//console.log(accountBalance);
//makeTransaction(3000);
//
//  
//console.log(accountBalance);
//makeTransaction(30000);

//
//var student = {
//    firstName: "adarsh",
//    lastName: "kumar",
//    age: 20
//    
//};
// var student0 = new Object();
//student0.firstName = "shilpi";
//student0.lastName = "kumari";
//student0.age = 18;
////
//var student1 = {};
//student1.firstName ="shikha";
//student1.lastName ="kumari";
//student1.age = 19;
//
//var studentList = [];
//studentList.push(student);
//studentList.push(student0);
//studentList.push(student1);
//
//for (var index = 0; index < studentList.length; index++){
//console.log(studentList[index]);
//
//    
var student = [];
function student(first,last,age){
    this.firstName=first;
    this.lastName=last;
    this.age=age;
    this.greetings=function(){
        return "hi my name is " + this.firstName +" and i am " + age +" years old !";
        
    };
}
    var s1 = new student("jennny", "karter " 67);
console.log(s1)
console.log(s1.greetings());



    
    
    
    
    
    





    

    
    
    
    
    
    
    
    
    
    
    
    
    






































