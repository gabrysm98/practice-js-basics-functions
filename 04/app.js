function runTimer(){
    let count = 0;
    
    const timerStop = setInterval(function(){
        const time = new Date().toLocaleTimeString();
        
        console.log("czas: " + time); 
        count++;

        if(count >= 5){
            clearInterval(timerStop);
        }
    }, 5000);

}

runTimer();

