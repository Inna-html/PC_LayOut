const modalFun = () => {
  const modalBtn = document.querySelector(".modal__button");
  const modal = document.querySelector(".modal");

  const modalInner = modal.querySelector(".modal__inner");
  // const closeBtn = document.querySelector(".modal__close");

  modalInner.style.position = "relative";

  addCloseBtn = () => {
    const closeBtn = document.createElement("div");

    closeBtn.classList.add("close-button");
    closeBtn.innerHTML = "&times";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "20px";
    closeBtn.style.top = "20px";
    closeBtn.style.width = "40px";
    closeBtn.style.height = "40px";
    closeBtn.style.fontSize = "46px";
    closeBtn.style.cursor = "pointer";
    closeBtn.style.display = "flex";
    closeBtn.style.justifyContent = "center";
    closeBtn.style.alignItems = "center";

    modalInner.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
      modal.style.display = "";
    });
  };
  addCloseBtn();

  modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", (event) => {
    const modalContent = event.target.closest(".modal__inner");

    // console.log(modalContent);

    if (!modalContent) {
      modal.style.display = "";
    }
  });

  // #########################################

  const toUp = document.querySelector(".toUp");
  
  toUp.addEventListener("click", () => {
    seamless.scrollIntoView(document.querySelector("#header"), {
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });

  var previousPosition = window.pageYOffset || document.documentElement.scrollTop;
  window.onscroll = function () {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (previousPosition > currentPosition) {
      // console.log("scrolling up");
      toUp.style.display = "";
    } else {
      // console.log("scrolling down");
      toUp.style.display = "flex";
    }
    previousPosition = currentPosition;
  };
};

modalFun();
