window.onload=function(){var e=document.createElement("div");console.log(e);var l=document.createTextNode("Hello again there sucker 1");console.log(l),e.appendChild(l),console.log(e),document.getElementById("empty-div").prepend(e);var o=document.createElement("span"),n=document.createTextNode("Hello again there sucker 2 ");o.appendChild(n),document.getElementById("empty-div").appendChild(o);for(var t=document.getElementsByTagName("span").length,s=0;s<t;s++)console.log(document.getElementsByTagName("span")[s].textContent);var i=document.getElementsByClassName("empty-div");console.log(i),i?(console.log("Too right!"),console.log('Returning all "childNodes"'),console.log(i[0].childNodes),console.log('Returning only "child-tags"'),console.log(i[0].children),console.log('Returning the number of "child-tags"'),console.log(i[0].children.length),console.log('Returning the next sibling which is the 3rd sibling at the same level as "elem"...  #text'),console.log(i[0].nextSibling.nextSibling.nextSibling),console.log('Returning the next ELEMENT sibling which is the "4rd sibling" but also the 2nd "Element sibling" at the same level as "elem"...  <main>'),console.log(i[0].nextElementSibling.nextElementSibling),console.log("Returning the parent node which is <body>, in this case"),console.log(i[0].parentNode),console.log("Returning the parent element level 2 which is <body>, in this case"),console.log(i[0].parentElement.parentElement),console.log('Defining if the child tag has got the ".thisClass"'),i[0].getElementsByClassName("thisClass")?console.log("It has got the class"):console.log("..euhh.. could'nt find it, but I'll try to set the first in JS")):console.log("busted");for(var c=document.getElementsByClassName("list-content"),g=0;g<c.length;g++)console.log(c[0]),console.log(c[0].firstElementChild),console.log(c[0].lastElementChild),console.log(c[0].lastElementChild.children[2]);console.log(i[0]);var a=i[0].getElementsByClassName("thisClass")[0];console.log(a),a.addEventListener("click",function(){console.log("Clicked it bro!")}),console.log('Returning object "clicked" via the click');for(var d=i[0].children.length,h=0;h<d;h++)console.log(h);console.log("Returning child list");for(var r=0;r<d;r++)console.log(i[0].children[r]);console.log("Returning child list clicked");for(var m=0;m<d;m++)console.log(i[0].children[m].addEventListener("click",function(){console.log(this)}))};