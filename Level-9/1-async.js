async function getdata() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

async function main() {
  console.log("Helo world");

  console.log("Do something else");

  console.log("Loading data");

  let data = await getdata();

  console.log(data);

  console.log("Loaded data");

  console.log("processe data");

  console.log("task2");
}

main();
