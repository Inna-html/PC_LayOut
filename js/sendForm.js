const sendForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => error.message())
      .finally(() => {
        text.value = "";
        tel.value = "";
        email.value = "";

        console.log("Форма очищена");
      });
      alert('Отправлено')
  });
};



sendForm();
