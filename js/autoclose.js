// Prevents buildup of new tabs, automatically closes.

console.log("Autoclose started");

var timer;

// Start timer to close window if not focused currently.
document.addEventListener('visibilitychange', function(){
    if (document.hidden)
    {
        if (timer !== undefined)
            return;

        timer = window.setTimeout(() => window.close(), 3000);
        console.log("Close timer started");
    }
    else
    {
        if (timer === undefined)
            return;

        window.clearTimeout(timer);
        timer = undefined;
        console.log("Close timer stopped");
    }
});
