// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",myFun)
var arr=JSON.parse(localStorage.getItem("schedule"))||[]
function myFun(){
    event.preventDefault()
    var obj={
        MatchNumber:masaiForm.matchNum.value,
        selectTeamA:masaiForm.teamA.value,
        selectTeamB:masaiForm.teamB.value,
        date:masaiForm.date.value,
        venue:masaiForm.venue.value,

    }
    arr.push(obj)
    console.log(arr)
    localStorage.setItem("schedule",JSON.stringify(arr))
    window.location.href="matches.html"
}