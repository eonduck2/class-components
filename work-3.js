const component = () => {
  const obj = { name: "이종수", lv: 999, job: "어쌔신" };

  const innerFunc = () => {};

  return `
        <h1>${obj.name}</h1>
        `;
};

console.log(component());
