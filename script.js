const selectPlan = (planNumber) => {
    const plan1 = document.getElementById ("plan1")
    const plan2 = document.getElementById ("plan2")
    const plan3 = document.getElementById ("plan3")

    if (planNumber == 1) {
    plan1.classList.add ("plan--selected")
    plan2.classList.remove ("plan--selected") 
    plan3.classList.remove ("plan--selected")    
    }
    else if (planNumber == 2) {
        plan2.classList.add ("plan--selected")
        plan1.classList.remove ("plan--selected") 
        plan3.classList.remove ("plan--selected")    
    
    } 
    else if (planNumber == 3) {
        plan3.classList.add ("plan--selected")
        plan2.classList.remove ("plan--selected") 
        plan1.classList.remove ("plan--selected")    
    
    }
}

