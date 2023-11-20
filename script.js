var citaty = ["Představte si to ticho, kdyby lidé říkali jen to, co vědí.", "Čtenář prožije tisíc životů, než zemře. Člověk, jenž nikdy nečte, prožije jen jeden.", "Mějte dobrou náladu. Dobrá nálada vaše problémy sice nevyřeší, ale naštve tolik lidí kolem, že stojí za to si ji užít.", "Žít, to je nejvzácnější věc na světě, neboť většina lidí jenom existuje.", "Svět patří těm, co se neposerou.", "Na světě nejsou nejkrásnější věci, ale okamžiky.", "Peklo je prázdné, ďáblové jsou mezi námi.", "Ne všichni, kdo bloudí, jsou ztraceni", "Člověk je sám i mezi lidmi.", "Nikdy neodkládám na zítřek, co lze udělat pozítří."]
var last = []
let named = false

function listAdd() {
    var itemList = document.getElementById("itemList");
    var item = citaty[Math.floor(Math.random()*citaty.length)]
    if (item == last) {
        return;
    } else {
        last.length = 0;
        document.getElementById("text").innerHTML = item;
        last.push(item);
        const deleteButton = document.createElement("button");//<button></button>
            deleteButton.className = "btn btn-danger";//<button class="btn btn-danger"></button>
            deleteButton.innerText = "Smazat";//<button class="btn btn-danger">Smazat</button>
            deleteButton.onclick = function () { //<button click="deleteItem(listItem, newItem)" class="btn btn-danger"></button>
            };
        for (let i = 0; i < citaty.length; i++) {
            if (named == false) {
            const node = document.createElement("li");
                    const textnode = document.createTextNode(citaty[i]);
                    node.appendChild(textnode);
                    node.appendChild(deleteButton);
                    document.getElementById("itemList").appendChild(node);
            }
        }
        named = true
    }
}