window.onload=function(){var e=document,t=e.getElementsByClassName("cards")[0].childElementCount,a=e.createElement("strong");a.classList.add("messages_count","messages_count--total");var s=e.createTextNode(t);a.appendChild(s);var n=e.getElementsByClassName("messages__count")[0];n.parentElement.replaceChild(a,n)};