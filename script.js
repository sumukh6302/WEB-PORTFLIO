
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
   function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link"); 
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab"); 
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
   }

    var side_menu=document.getElementById("sidemenu");
    function openmenu(){
        side_menu.style.right="0";
    }
    function closemenu(){
        side_menu.style.right="-300px";
    }
 