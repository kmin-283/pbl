const worker = () => new Promise(() => {
  setTimeout(() => {
    console.log('some_data');
  }, 1000);
})

async function main() {
  await worker();
}

main();

let sum = 0;
for (let i=0; i<100000000; i++) {
    sum += i;
}

console.log(sum);