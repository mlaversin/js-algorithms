const arr = [12, 255, 2, 722, 59, 101, 89, 41];

const largest = arr.reduce((x,y) => {
    return (x > y) ? x : y;
});

console.log(largest);