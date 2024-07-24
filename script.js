$(document).ready(function() {
    // Set up a counter for the current image index
    var imageIndex = 0;

    // Set up an interval to cycle through the images
    setInterval(function() {
        // Hide all the images
        $('.slideshow img').css('opacity', 0);

        // Show the next image
        $('.slideshow img').eq(imageIndex).css('opacity', 1);

        // Increment the index and loop back to the beginning if necessary
        imageIndex = (imageIndex + 1) % $('.slideshow img').length;
    }, 3000); // Repeat the effect every 3000 milliseconds (3 seconds)
});

$(document).ready(function(){
    var changebox = $(".changebox");
    
    var firstclone = changebox.children(":first").clone();
    changebox.append(firstclone);
    
    var fsstr = changebox.parent().css("font-size");
    fsstr = fsstr.slice(0,fsstr.indexOf("p"));
    var fs = parseInt(fsstr);
    
    changebox.css("height",changebox.parent().css("font-size") );
    ChangeSize(0);
    setInterval(Next,2000);
    
    function Next(){
       if( typeof Next.i == 'undefined' ) {
         Next.i = 0;
       }
      Next.i++;
       if(Next.i == changebox.children("span").length){
          Next.i = 1;
          changebox.scrollTop(0);
       }
       changebox.animate({scrollTop: (fs*Next.i)+Next.i*5+3},500);
       setTimeout(function(){
          ChangeSize(Next.i);
       },500);
       
    }
    
    function ChangeSize(i){
    var word = changebox.children("span").eq(i);
    var wordsize = word.css("width");
    changebox.css("width",wordsize);
 }
    
    
 });
 




 /*********
  * bg
  */

const yellowBackground = document.createElement("div");
yellowBackground.style.backgroundColor = "#FFEF00";
yellowBackground.style.position = "absolute";
yellowBackground.style.top = "27.6%";
yellowBackground.style.left = "0";
yellowBackground.style.width = "100%";
yellowBackground.style.height = "75%";
yellowBackground.style.zIndex = "-1";

document.body.appendChild(yellowBackground);

const sharkImage = document.querySelector("body > img");

sharkImage.style.position = "absolute";
sharkImage.style.top = "50%";
sharkImage.style.left = "50%";
sharkImage.style.transform = "translate(-50%, -50%)";

const sharkImageHeight = sharkImage.offsetHeight;

yellowBackground.style.top = `calc(50% + ${sharkImageHeight / 2}px)`;
yellowBackground.style.height = `calc(50% - ${sharkImageHeight / 2}px)`;