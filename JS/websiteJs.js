
const portrait = window.matchMedia("(orientation: portrait)").matches;

function moveChildOfIndex(){    
    
    
    

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

     name.textContent = " "
        fullParagraph.textContent = ""
   
}, false);
