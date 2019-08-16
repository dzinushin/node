const task = async (num) => {
    console.log('start task: ', num);
    await new Promise(resolve => setTimeout(() => console.log('finished: ', num), 5000));
    console.log('finish task: ', num);
}


for(let i=0; i< 100; i++)
    task(i+1);

console.log('tasks started');