document.getElementById("myButton").addEventListener('click', myWindow);
function myWindow(event) { // when button is clicked an event is triggered to submit the whlole form


    //all the variables for inputs 
    Breakfast = document.getElementById("Breakfast").value;
    Snack1 = document.getElementById("Snack1").value;
    Lunch = document.getElementById("Lunch").value;
    Snack2 = document.getElementById("Snack2").value;
    Dinner = document.getElementById("Dinner").value;
    Email = document.getElementById("Email").value;
    Name = document.getElementById("Name").value;
    Goal = document.getElementById("Goal").value;

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex for email validation


    if (regex.test(Email)) { //regex test to see if email input is 
        myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n"); //writes the new page 
        myText += ("Name: " + Name + "<br>Email: " + Email + "<br>Goal: " + Goal + "<br>"+"<br>");//adds inputs to the new page
        for (let i = 1; i < 8; i++) { //itterate through the days to get the plan for the week
            myText += (`Day ${i} <br>` + Breakfast + "<br>" + Snack1 + "<br>" + Lunch + "<br>" + Snack2 + "<br>" + Dinner + "<br><hr>");
        }
        myText += "</body>\n</html>";
        myText += "<br><button onclick='clearContent()'>Clear</button>\n"; // button for clear screen
        myText += "<br><button onclick='downloadFile()'>Download</button>\n";//button for download button  
        myText += "<button onclick='window.print()'>Print</button>"; //button for print button

        flyWindow = window.open('about:blank', 'myPop', 'width=400,height=200,left=200,top=200'); //opens the new window with the default dimensions 
        flyWindow.document.write(myText); //writes all the inputs into the new window


        flyWindow.clearContent = function () { //for the clear button to clear the whole screen 
            flyWindow.document.body.innerHTML = "<html><body><button onclick='clearContent()'>Clear</button></body></html>";
        };


        flyWindow.downloadFile = function () { //function to download the html content as a file 
            const blob = new Blob([myText], { type: 'text/html' });   // Create a Blob object to hold the HTML content (myText) as its data
            const link = document.createElement('a'); //create an anchor element 
            link.href = URL.createObjectURL(blob); //generates a url for the blob object 
            link.download = 'pinkyDinky.html'; // Set the name of the file to be downloaded
            link.click();
        };

    } else {
        window.alert("Invalid Email"); //if email is wrong this will be displayed 
    }
}
