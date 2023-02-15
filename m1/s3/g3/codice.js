//AGGIUNGI TASK

function btn(){
    let li = document.createElement("li");
    let input = document.getElementById("input").value;
    let text = document.createTextNode(input);
    li.appendChild(text);
    if(input === ""){
        return
    }else{
        document.getElementById("lista").appendChild(li);
    }
    document.getElementById("input").value = "";

    let btn = document.createElement("button");
    let txt = document.createTextNode("x");
    btn.className = "close";
    btn.appendChild(txt);
    li.appendChild(btn);
    btn.onclick = function(){
        li.remove();
    }
    }

/*// CHECK
    let check = document.querySelector("ul");
    check.addEventListener('click', function(ev){
        if(ev.target.nodeName == "li"){
            ev.target.classList.toggle('checked');
        }
    })
} */
