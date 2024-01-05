//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.
function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}

sleep(500).then((millis) => console.log(`Slept for ${millis} milliseconds`));
