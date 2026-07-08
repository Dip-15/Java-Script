async function getdata() {
  let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  let data = await x.json();
  return data;
}

//Promise settle means resolve and reject
//Resolve means promise has settled successfully
//Reject means promise has not settled succesfully

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
