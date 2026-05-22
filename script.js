const button= document.getElementById("auditBtn");
const recommendationText= document.getElementById("recommendation");
const savingsText= document.getElementById("savings");
const toolName= document.getElementById("tool-name");
const riskText= document.getElementById("risk");
button.addEventListener("click", function(e) {
    e.preventDefault();
    const tool= document.getElementById("tool").value;
    const monthlySpend= Number(document.getElementById("spend").value);
    let recommendation= "";
    let savings= 0;
    let risk= "";
    if(monthlySpend>50000)
    {
        recommendation= "Your spending is high. Reduce unused AI subscriptions.";
        savings= monthlySpend*0.25;
        risk= "High";
        riskText.className= "high-risk";
    }
    else if(monthlySpend>20000)
    {
        recommendation= "Optimize team usage and monitor tool access.";
        savings= monthlySpend*0.15;
        risk= "Medium";
        riskText.className= "medium-risk";
    }
    else{
        recommendation= "Your AI spending looks healthy.";
        savings= monthlySpend*0.05;
        risk="Low";
        riskText.className= "low-risk"
    }
    toolName.innerText= tool;
    recommendationText.innerText= recommendation;
    savingsText.innerText= "रु" + savings.toFixed(2) + " per month";
    riskText.innerText= risk;
});