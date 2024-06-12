const component = (name, age, job) => {
  const obj = {
    name: name,
    age: age,
    job: job,
  };

  const innerFunc = () => {
    if (obj.age > 20) {
      return `여름엔 역시 맥주가 최고지!`;
    } else {
      return `여름엔 역시 요구르트가 최고지!`;
    }
  };

  const anotherFunc = () => {
    if (obj.job > `닌자`) {
      return `지구 최강의 닌자`;
    } else {
      return `지구 최악의 닌자`;
    }
  };

  return `
        <h1>${obj.name}</h1>
        <h2>${innerFunc()}</h2>
        <h2>${anotherFunc()}</h2>
        `;
};

console.log(component());
