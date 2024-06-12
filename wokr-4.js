const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  return `
      ${tagComponent("header", "헤더부분")}
      ${tagComponent("main", "메인부분")}
      ${tagComponent("footer", "푸터부분")}
    `;
};
