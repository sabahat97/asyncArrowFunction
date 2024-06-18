let arrow = async () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Hello Arrow Function");
      rej("Hello General Function");
    }, 2000);
  });
};

let response = await arrow();
console.log(response);
