 let hamSandwiches = 0 
 let tunaSandwiches = 0
 let vegetarianSandwiches = 0





while (breadCount >= 2 && hamCount >= 1) { 
    breadCount -= 2;   
    hamCount -= 1;     
    hamSandwiches += 1; 
    }
    
    while (breadCount >= 2 && tunaCount >= 1 && saladCount >= 2) { 
    breadCount -= 2; 
    tunaCount -= 1;    
    saladCount -= 2;   
    tunaSandwiches += 1; 
    } 
    
    while (breadCount >= 2 && saladCount >= 1 && tomatoCount >= 2) { 
    breadCount -= 2;     
    saladCount -= 1;     
    tomatoCount -= 2;    
    vegetarianSandwiches += 1; 
    }
    
   
   displayThisText("Ham Sandwiches " + hamSandwiches)
   displayThisText("Tuna Sandchwiches " + tunaSandwiches)
   displayThisText("Vegetarian Sandchwiches " + vegetarianSandwiches)
   
   
   
   displayIngredients(breadCount + hamCount + tunaCount + saladCount + tomatoCount)
  
