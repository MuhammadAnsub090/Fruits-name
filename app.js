const div=document.querySelector('div')
const p=document.querySelector('p')


let fruitsArray=["Cherry","Papaya","Pomegranate","Apple","Kiwi","Banana","Blackberry","peach","Apricot"
,"Mango","Pineapple","plum","Fig"]


let fruits=["Cherry,","Papaya,","Pomegranate,","Apple,","Kiwi,","Banana,","Blackberry,","peach,","Apricot,"
,"Mango,","Pineapple,","plum,","Fig,"]

for (let i = 0; i < fruitsArray.length; i++) {
    div.innerHTML+=`<button class="btn" onclick="print(${[i]})">${fruitsArray[i]}</button>`
    
}


function print(i) {
//    console.log(fruitsArray[i])
 p.innerHTML+= fruits[i]
 }