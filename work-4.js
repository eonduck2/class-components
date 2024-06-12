const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  const dateObj = new Date().getHours();

  if (dateObj < 12) {
    return `
      ${tagComponent("header", "헤더부분")}
      ${tagComponent("div", "AM")}
      ${tagComponent("footer", "푸터부분")}
    `;
  } else {
    return `
      ${tagComponent("header", "헤더부분")}
      ${tagComponent("div", "PM")}
      ${tagComponent("footer", "푸터부분")}
    `;
  }
};

container();
