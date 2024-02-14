const changingPlans = function () {
  const toggle = document.querySelector(".circle");

  let Ann = true;
  const moveToggle = function () {
    const priceEl = document.querySelectorAll(".price");
    const price = document.querySelectorAll(".price");
    const ann = document.querySelectorAll(".ann");
    if (Ann) {
      toggle.style.transform = `translate(-${120}%, ${16.5}%)`;
      const pitEl = document.querySelector(".pit");

      pitEl.style.backgroundColor = "";
      // **** another way , without transition **** //
      //   const annPrice = [199.99, 249.99, 399.99];
      //   annPrice.forEach((ann, i) => {
      //     priceEl[i].innerHTML = ann;
      //   });
      //------------------------------------------ //
      price.forEach((p) => {
        p.style.transition = ` all ${0}s`;
        p.style.opacity = 0;
      });
      ann.forEach((a) => {
        a.style.transition = ` all ${0.7}s`;
        a.style.opacity = 100;
      });
    } else {
      toggle.style.transform = `translate(-${13.5}%, ${16.5}%)`;
      const pitEl = document.querySelector(".pit");
      pitEl.style.backgroundColor = "";
      // **** another way , without transition **** //

      //   const moPrice = [19.99, 24.99, 39.99];
      //   moPrice.forEach((mo, i) => {
      //     priceEl[i].innerHTML = mo;
      //   });
      //------------------------------------------ //
      price.forEach((p) => {
        p.style.transition = ` all ${0.7}s`;
        p.style.opacity = 100;
      });
      ann.forEach((a) => {
        a.style.transition = ` all ${0}s`;
        a.style.opacity = 0;
      });
    }
    Ann = !Ann;
  };
  toggle.addEventListener("click", moveToggle);

  window.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      moveToggle();
    }
  });
};

const toggleBckground = function () {
  const toggle = document.querySelector(".circle");

  toggle.addEventListener("mouseover", function () {
    const pitEl = document.querySelector(".pit");
    pitEl.style.backgroundColor = "#c4c7f5";
  });
  toggle.addEventListener("mouseout", function () {
    const pitEl = document.querySelector(".pit");
    pitEl.style.backgroundColor = "";
  });
};

const initial = function () {
  changingPlans();
  toggleBckground();
};

initial();
