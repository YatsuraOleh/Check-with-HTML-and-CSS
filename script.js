let f1 = document.forms['f1']
let f2 = document.forms['f2']
let f3 = document.forms['f3']
let f4 = document.forms['f4']
let f5 = document.forms['f5']
let f6 = document.forms['f6']
let f7 = document.forms['f7']
let f8 = document.forms['f8']
let f9 = document.forms['f9']
let trr = document.getElementsByTagName('tr')
let tdd = document.getElementsByTagName('td')
let lii = document.getElementsByTagName('li')

let getclass = function (a, b) {
    return document.getElementsByClassName(a)[b]
}
let getid = function (a) {
    return document.getElementById(a)
}
f1.edit.onclick = function () {
    
    f2.style.display = 'block';
    getclass('hadga', 0).style.display = 'none'
    f2.style.display = 'block'

    f2.text.value = getclass('alah', 0).innerHTML

}


f2.save.onclick = function () {
    getclass('alah', 0).innerHTML = f2.text.value
    f2.style.display = 'none';
}

f1.style.onclick = function () {
    f2.style.display = 'none';
    getclass('hadga', 0).style.display = 'block'
}

for (let i = 0; i < f3.length; i++) {
    f3.elements[i].onclick = function () {
        if (i == 0) {

            getclass('alah', 0).style.fontSize = '12px'
        }
        if (i == 1) {

            getclass('alah', 0).style.fontSize = '14px'
        }
        if (i == 2) {

            getclass('alah', 0).style.fontSize = '16px'
        }
        if (i == 3) {

            getclass('alah', 0).style.fontSize = '18px'
        }
        if (i == 4) {

            getclass('alah', 0).style.fontSize = '20px'
        }
    }


}
f4.family.onchange = function () {
    for (let i = 0; i < f4.family.length; i++) {


        if (f4.family.options[0].selected) {

            getclass('alah', 0).style.fontFamily = 'Choose option'
        }
        if (f4.family.options[1].selected) {

            getclass('alah', 0).style.fontFamily = 'cursive'
        }
        if (f4.family.options[2].selected) {

            getclass('alah', 0).style.fontFamily = 'fantasy'
        }
        if (f4.family.options[3].selected) {

            getclass('alah', 0).style.fontFamily = 'sans-serif'
        }
        if (f4.family.options[4].selected) {

            getclass('alah', 0).style.fontFamily = 'monospace'
        }



    }
}

f5.colortxt.onclick = function () {
    getclass('col', 0).style.display = 'block'
    getclass('colbg',0).style.display = 'none'

}
getclass('ll1', 0).onclick = function () {
    getclass('alah', 0).style.color = 'red';
    getclass('col', 0).style.display = 'none'
}
getclass('ll2', 0).onclick = function () {
    getclass('alah', 0).style.color = 'green';
    getclass('col', 0).style.display = 'none'
}
getclass('ll3', 0).onclick = function () {
    getclass('alah', 0).style.color = 'blue';
    getclass('col', 0).style.display = 'none'
}
getclass('ll4', 0).onclick = function () {
    getclass('alah', 0).style.color = 'purple';
    getclass('col', 0).style.display = 'none'
}
getclass('ll5', 0).onclick = function () {
    getclass('alah', 0).style.color = 'yellow';
    getclass('col', 0).style.display = 'none'
}
getclass('ll6', 0).onclick = function () {
    getclass('alah', 0).style.color = 'black';
    getclass('col', 0).style.display = 'none'
}
getclass('ll7', 0).onclick = function () {
    getclass('alah', 0).style.color = 'grey';
    getclass('col', 0).style.display = 'none'
}
getclass('ll8', 0).onclick = function () {
    getclass('alah', 0).style.color = 'aqua';
    getclass('col', 0).style.display = 'none'
}
getclass('ll9', 0).onclick = function () {
    getclass('alah', 0).style.color = 'darkblue';
    getclass('col', 0).style.display = 'none'
}
f5.Bgraund.onclick = function () {
    getclass('colbg', 0).style.display = 'block';
    getclass('col', 0).style.display = 'none'
}


getclass('llc1', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'red';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc2', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'green';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc3', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'blue';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc4', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'purple';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc5', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'yellow';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc6', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'black';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc7', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'grey';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc8', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'aqua';
    getclass('colbg', 0).style.display = 'none'
}
getclass('llc9', 0).onclick = function () {
    getclass('alah', 0).style.backgroundColor = 'darkblue';
    getclass('colbg', 0).style.display = 'none'
}
f6.onclick = function () {
    for (let i = 0; i < f6.length; i++) {

        if (f6[i].checked == false) {
            getclass('alah', 0).style.fontWeight = 'normal'
            getclass('alah', 0).style.fontStyle = ' normal'
        }
        if (f6.elements[0].checked == true) {
            getclass('alah', 0).style.fontWeight = 'bold'
        }



        if (f6.elements[1].checked == true) {
            getclass('alah', 0).style.fontStyle = 'italic'
        }
    }
}

f2.add.onclick = function () {
    getclass('menu', 0).style.display = 'block'
    getclass('container', 0).style.display = 'none'
}

for (let i = 0; i < f7.length; i++) {
    f7.elements[i].onclick = function () {
        if (f7.elements[i].checked == true) {

            getclass('tableredakt', 0).style.display = 'block'
            getclass('listconstruckt', 0).style.display = 'none'
            
        }
         if (i == 1) {

            getclass('tableredakt', 0).style.display = 'none'
            getclass('listconstruckt', 0).style.display = 'block'
             

        }
    }
}


let tr = function () {

    return document.createElement('tr')
}
let td = function () {

    return document.createElement('td')
}






f8.tablebtn.onclick = function () {





    for (let i = 1; i <= f8.CountTr.value; i++) {

        tr()
        getclass('tablerr', 0).appendChild(tr())
    }
    for (let i = 1; i <= f8.CountTd.value; i++) {

        td()


        for (let i = 0; i < trr.length; i++) {
            trr[i].appendChild(td())
        }
    }
    for (let i = 0; i < tdd.length; i++) {
     
let bortt = 'border:'+f8.borderwth.value+'px'+" "+ f8.stylebord.value+" "+ f8.colortable.value+';'
let fat = 'width:'+f8.widthoftd.value + 'px'+';'
let fad = 'height:'+f8.heigthtd.value + 'px'

 tdd[i].setAttribute('style',bortt+fat+fad);



  }
   getclass('alah',0).innerHTML = f2.text.value
    f2.text.value += getclass('tablepostr',0).innerHTML
    getclass('container', 0).style.display = 'block'
    f2.style.display = 'block';
    getclass('for', 0).style.display = 'block';
    getclass('tableredakt', 0).style.display = 'none';
    getclass('menu', 0).style.display = 'none';


f8.CountTr.value = '';
f8.CountTd.value = '';
f8.widthoftd.value = '';
f8.heigthtd.value = '';
f8.borderwth.value = '';


    



}

let li = function(){
    return document.createElement('li')
}
f9.createlist.onclick = function(){
    
    
    
         f2.text.value += getclass('list', 0).innerHTML
    
    for(let i = 0;i<f9.coutnli.value;i++){
    li()
    getclass('spisock',0).appendChild(li())
}
    for(let i = 0;i<lii.length;i++){
    let liststyle = 'list-style-type: '+f9.typeofmarks.value
 lii[i].setAttribute('style',liststyle);   
    }
    f2.text.value += getclass('list', 0).innerHTML
   
     getclass('container', 0).style.display = 'block'
     f2.style.display = 'block';
     getclass('for', 0).style.display = 'block';
     getclass('listconstruckt', 0).style.display = 'none';
     getclass('menu', 0).style.display = 'none';
    f9.coutnli.value = '';
    
}



