// load DOM before JS with "window.load"
window.onload = function () {
    //
    // The DOM
    // 

    /*
    1 / Create tag, set text in tag and place in DOM
    */
    // @:before
    var newDiv = document.createElement("div");
    console.log(newDiv);
    // create content in DIV
    var newContent = document.createTextNode('Hello again there sucker 1');
    console.log(newContent);
    // set the text in DIV
    newDiv.appendChild(newContent);
    console.log(newDiv);
    // set where to add "newDiv" in DOM
    document.getElementById('empty-div').prepend(newDiv);
    // @:after
    var newDiv2 = document.createElement("span");
    // create content in SPAN
    var newContent2 = document.createTextNode('Hello again there sucker 2 ');
    // set the text in SPAN
    newDiv2.appendChild(newContent2);
    // set where to add "newDiv" in DOM
    document.getElementById('empty-div').appendChild(newDiv2);
    /*
    2 / Find all SPANs in DOM.J
    */
    var paragraphs = document.getElementsByTagName('span').length;
    for (var i = 0; i < paragraphs; i++) {
        // The [i] is the table-number incremented to return each new instance/placement [0], [1], [2], [3], [4]
        console.log(document.getElementsByTagName('span')[i].textContent);
    }
    /*
    3 / Return the "Family-nodes"
    */
    // > https://www.youtube.com/watch?v=rBjvPNE2or0

    // Save ".empty-div" in a variable
    var elem = document.getElementsByClassName('empty-div');
    // if "elem" has childNodes
    console.log(elem);
    // Returns the "first" nodeList of 'empty-div' with a table > https://stackoverflow.com/questions/11953413/searching-for-childnodes-returns-undefined
    // check if elem == true
    if (elem) {
        console.log("Too right!");
        // return all childNodes (text, div, text etc..)
        console.log("Returning all \"childNodes\"");
        // the [0] is selecting THE FIRST node list (child/parent)
        // Even if there's only one list, this needs to be done
        console.log(elem[0].childNodes);
        // the "children" method will return only the tags
        console.log("Returning only \"child-tags\"");
        console.log(elem[0].children);
        // returning the number of child-tags
        console.log("Returning the number of \"child-tags\"");
        console.log(elem[0].children.length);
        // returning the next sibling in the parent node-list
        console.log("Returning the next sibling which is the 3rd sibling at the same level as \"elem\"...  #text");
        console.log(elem[0].nextSibling.nextSibling.nextSibling);
        console.log("Returning the next ELEMENT sibling which is the \"4rd sibling\" but also the 2nd \"Element sibling\" at the same level as \"elem\"...  <main>");
        console.log(elem[0].nextElementSibling.nextElementSibling);
        // returning the parent node
        console.log("Returning the parent node which is <body>, in this case");
        console.log(elem[0].parentNode);
        // returning the parent node
        console.log("Returning the parent element level 2 which is <body>, in this case");
        console.log(elem[0].parentElement.parentElement);
        // Condition to validate containing thisClass
        console.log("Defining if the child tag has got the \".thisClass\"");
        if (elem[0].getElementsByClassName('thisClass')) {
            console.log('It has got the class');
        } else {
            console.log('..euhh.. could\'nt find it, but I\'ll try to set the first in JS');
        }
    } else {
        console.log("busted");
    }

    /*
    5 / The FOR loop, running through the the OL list-stack, returning the child tags
    */

    var nlist = document.getElementsByClassName('list-content');
    for (var j = 0; j < nlist.length; j++) {
        // returning the entire block
        console.log(nlist[0]);
        // returning THE FIRST CHILD ELEMENT OF the entire block
        console.log(nlist[0].firstElementChild);
        // returning THE LAST CHILD ELEMENT OF the entire block
        console.log(nlist[0].lastElementChild);
        // returning A SPECIFIC CHILD of THE LAST CHILD ELEMENT OF
        console.log(nlist[0].lastElementChild.children[2]);
    }

    /*
    
    //
    // Events
    //

    /*
    1 / The click
    */
    // Just checkin!
    console.log(elem[0]);
    // click event with console.log()
    var here = elem[0].getElementsByClassName('thisClass')[0];
    // Just checkin where I am.. still
    console.log(here);
    // adding the eventlistener
    here.addEventListener("click", function () {
        console.log("Clicked it bro!");
    });
    /*
    2 / Returning object "clicked" via the click
    */

    // First part, counting the childNodes
    console.log('Returning object "clicked" via the click');
    // counting children of parentNode
    var countingChildren = elem[0].children.length;
    for (var k = 0; k < countingChildren; k++) {
        console.log(k);
    }
    console.log('Returning child list');
    // Second part, returning the child list
    for (var l = 0; l < countingChildren; l++) {
        console.log(elem[0].children[l]);
    }
    console.log('Returning child list clicked');
    // third part, returning the clicked child with THIS
    for (var m = 0; m < countingChildren; m++) {
        console.log(elem[0].children[m].addEventListener('click', function () {
            console.log(this);
        }));
    }
    //
    // Why do I get 5 undefined objects??
    //
    
    /*
    Topic on replacing textContent > https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
    */









}; // window onload
