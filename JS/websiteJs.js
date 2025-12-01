
const portrait = window.matchMedia("(orientation: portrait)").matches;

function moveChildOfIndex(){    
    
    
    

}

function validateForm() {
// retrieving form values
let name = document.getElementById("FirstName").value;
let email = document.getElementById("email").value;
let lastName = document.getElementById("LastName").value;

// avoiding blank input
if (name == "") {
	alert("First Name is required");
	
}

if (lastName == "") {
	alert("Last Name is required");
}
// validating email format using a simple regular expression
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
	alert("Please enter a valid email address");
}

}


 function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
  }

document.addEventListener('DOMContentLoaded', function() {
    console.log(portrait)
    if (portrait) {
    
    
    const indexImage = document.getElementById("firstImage");
    const indexContainer = document.getElementById("indexMobileContainer");
    
    let mobileContactPic = document.getElementById("mobileContactPic");
    let johnIdPic = document.getElementById("johnID");
    let detailsJohn = document.getElementById("detailsJohns");
    let another = document.getElementById("anotherContanctContainer");
    let name = document.getElementById("name")
    let fullParagraph = document.getElementById("FullParagraph")

    console.log(indexImage);
    if (indexContainer){
        
        indexContainer.appendChild(indexImage);

    }

    if (mobileContactPic){

        console.log("LETS GOOOO");
        console.log(detailsJohn)
        mobileContactPic.appendChild(johnIdPic);
        document.body.appendChild(detailsJohn)
        name.textContent = " "
        fullParagraph.textContent = ""

    }
    

    }
   let name = document.getElementById("name")
    let fullParagraph = document.getElementById("FullParagraph")

    if (name){
        
        name.textContent = " "
        fullParagraph.textContent = ""

    }
     
   
}, false);
