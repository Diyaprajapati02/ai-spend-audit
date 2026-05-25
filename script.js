const button= document.getElementById("auditBtn");
button.addEventListener("click", function(e) {
    button.innerText= "Analyzing...";
    setTimeout(function() {
        const tool= document.getElementById("tool").value;
        window.location.href= "result.html";
    }, 2000);
    e.preventDefault();
    const tool= document.getElementById("tool").value;
    const monthlySpend= Number(document.getElementById("spend").value);
    const selectedToolPrice= aiTools[tool];
    let recommendation= "";
    let savings= 0;
    let risk= "";
    if(monthlySpend>50000)
    {
        recommendation= "Reduce unused AI subscriptions and switch to optimized plans.";
        savings= monthlySpend*0.30;
        risk= "High";
    }
    else if(monthlySpend>20000)
    {
        recommendation= "Monitor team AI usage and remove duplicate tools.";
        savings= monthlySpend*0.20;
        risk= "Medium";
    }
    else{
        recommendation= "Your AI spending looks healthy.";
        savings= monthlySpend*0.10;
        risk="Low";
    }
    localStorage.setItem("tool", tool);
    localStorage.setItem("spend", monthlySpend);
    localStorage.setItem("recommendation", recommendation);
    localStorage.setItem("savings", "रु" + savings.toFixed(2));
    localStorage.setItem("risk", risk);
    window.location.href= "result.html";    
});
