// write js code here corresponding to matches.html
var mat=JSON.parse(localStorage.getItem("schedule"))
displayData(mat)
var favourate=JSON.parse(localStorage.getItem("favourites")) || []

function displayData(data){
    document.querySelector('tbody').innerHTML=""
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
        td6.innerText="Add as Favourites"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            fav(ele)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
    function fav(ele){
        console.log(ele)
        favourate.push(ele)
        localStorage.setItem("favourites",JSON.stringify(favourate))
        //window.location.href="favourites.html"
    }
  
