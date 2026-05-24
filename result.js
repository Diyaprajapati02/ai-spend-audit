document.getElementById("tool").innerText= localStorage.getItem("tool");
document.getElementById("spend").innerText= "रु" + localStorage.getItem("spend") + " per month";
document.getElementById("recommendation").innerText= localStorage.getItem("recommendation");
document.getElementById("savings").innerText= localStorage.getItem("savings");
document.getElementById("risk").innerText= localStorage.getItem("risk");
const risk= localStorage.getItem("risk");
document.getElementById("risk").innerText= risk;
if (risk=== "High")
{
    document.getElementById("risk").className= "high-risk";
}
else if(risk=== "medium")
{
    document.getElementById("risk").className= "medium-risk";
}
else{
    document.getElementById("risk").className= "low-risk";
}
