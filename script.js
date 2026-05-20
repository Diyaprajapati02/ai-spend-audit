const x= document.getElementById("auditBtn");
const y= document.getElementById("resultText");
x.addEventListener("click", ()=> {
    const tool= document.getElementById("tool").value;
    const plan= document.getElementById("plan").value;
    const spend= document.getElementById("spend").value;
    const team= document.getElementById("team").value;
    y.innerText= `You are using ${tool} on the ${plan} plan with a monthly spend of $${spend} for a team of ${team} people.`;
});