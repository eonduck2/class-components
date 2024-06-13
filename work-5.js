const formComponent = (action, method, content) => {
  return `
            <form action= "${action}" method="${method}" id ="user-form">
                ${content}
                <button type="button" id="submit-button">콘솔 확인하기!</button>
            </form>
            `;
};

const inputComponent = (label, id, name, value) => {
  return `
              <label for= "${id}">${label}:</label>
                  <input type="text" id="${id}" name="${name}" value="${value}" required>
              </label>
              `;
};

const component = (name, age, job) => {
  const obj = {
    name: name,
    age: age,
    job: job,
  };

  const formContent = `
                    ${inputComponent(`이름`, `name`, `name`, obj.name)}
                    ${inputComponent(`나이`, `age`, `age`, obj.age)}
                    ${inputComponent(`직업`, `job`, `job`, obj.job)}
                    `;

  return `
            ${formComponent(`/submit`, `post`, formContent)}
            `;
};

const renderApp = () => {
  const root = document.getElementById(`root`);
  root.innerHTML = component(`이종수`, 28, `닌자`);

  const submitButton = document.getElementById(`submit-button`);

  submitButton.onclick = () => {
    const form = document.getElementById(`user-form`);
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log(data);
  };
};

window.addEventListener(`DOMContentLoaded`, renderApp);
