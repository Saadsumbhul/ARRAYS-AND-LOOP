                           // Question No 1
var multiArray =[
    [],[],[]
];

                           // Question No 2
var arr = [
    [0, 1, 2,3],
    [1, 0, 1,2],
    [2, 1, 0,1]
];
document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

                           //    quetionNO 3
for (var i = 1; i <= 10; i++){
    const element =i;

console.log(element)
 };      
                        //  question 4
 var tableNumber = prompt("Enter a number to show its multiplication table");
 if (!isNaN(tableNumber)) {
     for (var i = 1; i <= 1; i++) {
         console.log(tableNumber+"x"+ i + " = "+ (tableNumber*i))
     }
 }else {
     alert("Please enter correctly")
 }
                        //  questionNo 5;
// declare an array of fruits
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// use a for loop to iterate over the array
for (var i = 0; i < fruits.length; i++) {
  // print each element of the array
  console.log(fruits[i]);
}

                                      // Question No 6
document.write("<b>Counting:</b> <br><br>")
for (var i = 0; i <= 15; i++) {
    const counting = i;
    document.write(counting+" ,")
};
document.write("<br><br><b>Reverse counting:</b><br><br>");
for (var i = 10; i > 0; i--) {
    let element = i;
    document.write(element+ " ,")
};
document.write("<br><br><b>Even:</b><br><br>");
for (var i = 0; i <= 20; i++) {
    let even = i++;
    document.write(even +" ,")
}
document.write("<br><br><b>Odd:</b><br><br>");
for (var i = 1; i <= 19; i++) {
    const odd = i++;
    document.write(odd+" ,")
};
document.write("<br><br><b>Series:</b><br><br>");
for (var i = 2; i < 20; i++) {
    const series = i++;
    document.write(series+"k, ")
}
                                           // Question No 7
var number;
var flag = false
var bakeryItems = ['coffee cake','doughnuts','Danish','sweet rolls','cinnamon rolls'];
var askingAboutItems = prompt("Welcome to Sitara Bakery.What do you want to order sir/ma'am?");
for (var i = 0; i < bakeryItems.length; i++) {
    if (bakeryItems[i] == askingAboutItems) {
        flag = true;
        number = i;
    }
}
if(flag) {
    alert(askingAboutItems+" is available at index " +number+" in our bakery");
}else{
    alert("We are sorry. "+ askingAboutItems+ " is not available in our bakery.")
}
                                            // Question No 8
var largestNumber = [24, 53, 78, 91, 12];
var findingLargestNum = largestNumber[0];
for (let i = 0; i < largestNumber.length; i++) {
    if (largestNumber[i] > findingLargestNum) {
        findingLargestNum = largestNumber[i];
    }
}
document.write("<br><br>Arrays items: "+largestNumber+"<br>The largest number is " + findingLargestNum);

                                          // Question No 9
var smallestNumber = [24, 53, 78, 91, 12];
var findingSmallestNum = smallestNumber[0];
for (let i = 0; i < smallestNumber.length; i++) {
    if (smallestNumber[i] < findingSmallestNum) {
        findingSmallestNum = smallestNumber[i];
    }
}
document.write("<br><br>Arrays items: "+smallestNumber+"<br>The largest number is " + findingSmallestNum);

                                         // Question No 10
for (let i = 5 ; i <= 100; i = i +5) {
    document.write(i + ", ")
}
                                         //END;  