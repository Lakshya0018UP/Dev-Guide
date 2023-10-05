let myleads=[]
let oldLeads=[]









const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const saveBtn=document.getElementById("save-btn")
const topic=document.getElementById("topic")
const catt=document.getElementById("cate")


let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myleads=leadsFromLocalStorage
    render(myleads)
}




saveBtn.addEventListener("click",function(){
    //console.log(tabs[0].url)
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs)

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)

        
    })
    
})





inputBtn.addEventListener("click",function(){
    console.log("Button Clicked")
    myleads.push(inputEl.value)
    
    
    inputEl.value=""

    

    
    localStorage.setItem("myleads",JSON.stringify(myleads))
     console.log(myleads)
     render(myleads)


     console.log(localStorage.getItem("myleads"))

})


function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        listItems +="<li><a target='_blank' href='"+leads[i]+"'>"+leads[i]+"</a></li>"
    }

ulEl.innerHTML=listItems
}


deleteBtn.addEventListener("dblclick",function(){
    console.log("Double Click")
    localStorage.clear()
    myleads=[]
    render(myleads)
})






