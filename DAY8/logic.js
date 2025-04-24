// const intern = "Hello World";
// console.log(intern);


function add(a, b) {
    const sum = a + b;
    console.log("Sum is:", sum);
}

add(2, 4);
add(-40, 60);
add(0, 0);
add(100, -200);
add(-2, -4);
add()




// Problem statement-3

// Write a function that calculates and prints the area of a rectangle given its length and width.
// Input length and width
// Area of a rectangle = length*Width

function RectangleArea(length, width){
    if (length<=0){
        throw new Error("Length should be a positive number");
    }
    const rect = length * width;
    console.log("Area of a rectangle is:", rect);
}

RectangleArea(10, 5);
RectangleArea(20, 10);
RectangleArea(-2, 4);



