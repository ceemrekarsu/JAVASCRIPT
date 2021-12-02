for (var i=1;i<=100;i++)
	{
		if(i%3==0 && i%5==0)
			{
				document.write(i+"<br>");
			}
	}
 

for (let i=0; i<30; i++) {
    if(i%5==0)
       {
           document.write(i+ "<br>")
       }
}

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;


for (let i = 0; i < 5; i++) { 
    document.write("<span style='font-size:" + i + 5 + "px;'>HEY</span><br/>");
           }        

let users = ['lorem', 'ipsum', 'dolor']
const userlist1 = document.querySelector('#userlist')
for (x = 0; x <users.length; x++ ) {
    const li1 = document.createElement('li')
    li1.innerHTML = users[x]
    userlist1.appendChild(li1)
}
var i = 0;
while (i < 50) {
    i++;
    if (i % 2 == 0) {              
document.write("<span style='color:blue;'>" + i + "</span><br/>");
    }
    else {
        document.write("<span style='color:orange;'>" + i + "</font><br/>");
    }
}

for (let number = 0; number < 100; number++) {
    document.write( "<span style='color:black; font-size:30px;'> " + number +  "</span>");
    if(number==33){
      break;
    } 
  }