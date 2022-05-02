// write js code here corresponding to favourites.html
var favArr=JSON.parse(localStorage.getItem("favourates"))
displayData(favArr)
function displayData(data){
    
    data.forEach(function(ele){
        var tr=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=ele.MatchNumber

        var td2=document.createElement("td")
        td2.innerText=ele.selectTeamA

        var td3=document.createElement("td")
        td3.innerText=ele.selectTeamB

        var td4=document.createElement("td")
        td4.innerText=ele.date

        var td5=document.createElement("td")
        td5.innerText=ele.venue

        var td6=document.createElement("td")
        td6.innerText="Delete"
        td6.setAttribute("class","deleteText")
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deleteItem(ele,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
    function deleteItem(ele,index){
        favArr.splice(index,1);
        localStorage.setItem("favourates",JSON.stringify(favArr))
        window.location.reload()
       
    }
