const button= document.getElementById("auditBtn");
button.addEventListener("click", function(e) {
    e.preventDefault();
    const tool= document.getElementById("tool").value;
    const monthlySpend= Number(document.getElementById("spend").value);
    const selectedToolPrice= aiTools[tool];
    let recommendation= "";
    let savings= 0;
    let risk= "";
    if(monthlySpend>50000)
    {
        recommendation= "Your spending is high. Reduce unused AI subscriptions.";
        savings= monthlySpend*0.25;
        risk= "High";
    }
    else if(monthlySpend>20000)
    {
        recommendation= "Optimize team usage and monitor tool access.";
        savings= monthlySpend*0.15;
        risk= "Medium";
    }
    else{
        recommendation= "Your AI spending looks healthy.";
        savings= monthlySpend*0.05;
        risk="Low";
    }
    localStorage.setItem("tool", tool);
    localStorage.setItem("spend", monthlySpend);
    localStorage.setItem("recommendation", recommendation);
    localStorage.setItem("savings", "रु" + savings.toFixed(2));
    localStorage.setItem("risk", risk);
    window.location.href= "result.html";    
});
