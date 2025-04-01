function runTimer(){
    let count = 0;
    
    const timerStop = setInterval(function(){
        const time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        console.log("czas: " + hours + ":" + minutes + ":" + seconds); 
        count++;

        if(count >= 5){
            clearInterval(timerStop);
        }
    }, 5000);

}

runTimer();

