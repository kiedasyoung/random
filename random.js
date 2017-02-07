var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0,0,1000,1000,"lightblue")
    makeEllipse(100,46,20,25,"white")
    makeEllipse(100,45,15,5,"brown")
    makeCircle(100,50,5,"black")
    makeCircle(110,35,4,"black")
    makeCircle(108,33,1,"white")
    makeCircle(111,36,2,"white")
    makeCircle(90,35,4,"black")
    makeCircle(88,33,1,"white")
    makeCircle(91,36,2,"white")
    makeEllipse(88.5,52,5,10,"brown")
    makeEllipse(111.5,52,5,10,"brown")
    makeCircle(100,62,2,"red")
    makeLine(100,50,100,60,"black",3,3)
    makeLine(100,59,90,65,"black",3,3)
    makeLine(100,59,110,65,"black",3,3)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0,0,1000,1000,"lightgreen")  
    makeCircle(77,35,15,"brown")
    makeCircle(77,35,10,"#F2913D")
    makeCircle(123,35,15,"brown")
    makeCircle(123,35,10,"#F2913D")
    makeCircle(100,50,30,"brown")
    makeCircle(87,45,15,"#F2913D")
    makeCircle(112,45,15,"#F2913D")
    makeCircle(100,60,20,"#F2913D")
    makeEllipse(86,40,5,7,"black")
    makeEllipse(116,40,5,7,"black")
    makeEllipse(100,55,10,6,"black")
    makeEllipse(100,56.5,8,6,"#F2913D")
    makeEllipse(97,55,2,1,"black")
    makeEllipse(97,55.5,1,0.5,"#F2913D")
    makeEllipse(102,55,2,1,"black")
    makeEllipse(102,55.5,1,0.5,"#F2913D")
    makeEllipse(100,70,15,5,"black")
    makeEllipse(105,75,4,5,"red")
    makeEllipse(101,72,7,3,"red")
    makeLine(98, 72, 104, 72.5, "black",0.5)
    makeLine(104, 72.5, 106, 79,"black",0.5)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0,0,1000,1000,"brown")  
    makeEllipse(92,55,5,20,"lightgray")
    makeEllipse(92,55,3,18,"pink")
    makeEllipse(103,55,5,10,"lightgray")
    makeEllipse(103,55,3,8,"pink")
    makeCircle(100,75,20,"lightgray")
    makeEllipse(100,75,10,5,"gray")
    makeEllipse(100,73,3,2,"pink")
    makeLine(100, 80, 100, 85, "black",0.5)
    makeRect(96.5,80,3,5,"white")
    makeRect(100.5,80,3,5,"white")
    makeEllipse(96,65,2,4,"black")
    makeEllipse(103,65,2,4,"black")
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if (number < 0.33){
    createFirstScene()
    // Else, if the number is less than 0.67, call the function to create your second scene.
        }else if (number > 0.67){
        createSecondScene()
    // Else, call the function to create your third scene.
        }else{
        createThirdScene()   
        }
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}