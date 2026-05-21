const button= document.getElementById("auditBtn");
const recommendationText= document.getElementById("recommendation");
const savingsText= document.getElementById("savings");
button.addEventListener("click", function(e) {
    e.preventDefault();
    const monthlySpend= Number(document.getElementById("spend").value);
    let recommendation= "";
    let savings= 0;
    if(monthlySpend>50000)
    {
        recommendation= "Your spending is high. Reduce unused AI subscription.";
        savings= monthlySpend*0.25;
    }
    else if(monthlySpend>20000)
    {
        recommendation= "Optimize team usage and monitor tool access.";
        savings= monthlySpend*0.15;
    }
    else{
        recommendation= "Your AI spending looks healthy.";
        savings= monthlySpend*0.05;
    }
    recommendationText.innerText= recommendation;
    savingsText.innerText= "रु" + savings.toFixed(2) + " per month";
});