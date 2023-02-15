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

    let lista = document.getElementsByTagName("li")
    let i;
    for(i= 0; i < lista.length; i++){
        let btn = document.createElement("button");
        let txt = document.createTextNode("x");
        btn.className = "close";
        btn.appendChild(txt);
        lista[i].appendChild(btn);
        let close = document.getElementsByClassName("close");
        for(i=0; i < close.length; i++){
            close[i].onclick = function(){
                let cl = this.parentElement;
                cl.style.display = "none";
            }
        }
    }

// CHECK
    let check = document.querySelector("ul");
    check.addEventListener('click', function(ev){
        if(ev.target.nodeName == "li"){
            ev.target.classList.toggle('checked');
        }
    })
}
