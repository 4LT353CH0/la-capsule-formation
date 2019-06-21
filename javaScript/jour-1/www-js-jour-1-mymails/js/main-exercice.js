window.onload = function () {

    // store document
    var d = document;
    /*
    Storing two nodeElements and replacing the old with the new > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
    */
    //
    // PART 1
    //
    // store total number of messages
    var numberCards = d.getElementsByClassName('cards')[0].childElementCount;
    // creating new <strong class="messages_count messages_count--total">     
    var newElement = d.createElement('strong');
    // adding multiple classes newElement to node
    newElement.classList.add('messages_count', 'messages_count--total');
    // creating textNode for new total
    var newTotal = d.createTextNode(numberCards);
    // storing textNode newTotal (the number as textNode) in newElement
    newElement.appendChild(newTotal);
    //
    // PART 2
    //
    // storing the elements, new and old
    var oldElement = d.getElementsByClassName('messages__count')[0];
    // preparing the DOM position PARENT in order to msodify its' child
    var parentElement = oldElement.parentElement;
    parentElement.replaceChild(newElement, oldElement);
}; // window onload
