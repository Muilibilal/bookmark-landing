let hamOpen = document.querySelector(".ham");
let featured = document.querySelectorAll(".featured");
let changeFeature = document.querySelector(".feature-change");
let faqs = document.querySelectorAll(".faq-que");
let faqsImg = document.querySelectorAll(".faq-que img");

hamOpen.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
});

featured.forEach((feature) => {
  feature.addEventListener("click", (e) => {
    e.preventDefault();
    if (feature.classList.contains("bookmark-select")) {
      changeFeature.innerHTML = `
      <div class="features-img">
            <img
              src="images/illustration-features-tab-1.svg"
              alt="Illustration1"
            />
            <div class="background-ill second"></div>
          </div>
          <div class="bookmark-text">
            <h2 class="titles">Bookmark in one click</h2>
            <p class="grey-text">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button class="blue-btn">More Info</button>
          </div>
      `;
    } else if (feature.classList.contains("searching")) {
      changeFeature.innerHTML = `
       <div class="features-img">
              <img
                src="images/illustration-features-tab-2.svg"
                alt="Illustration2"
              />
              <div class="background-ill second"></div>
            </div>
            <div class="bookmark-text">
              <h2 class="titles">Intelligent search</h2>
              <p class="grey-text">
                Our powerful search feature will help you find saved sites in no
                time at all. No need to trawl through all of your bookmarks.
              </p>
              <button class="blue-btn">More Info</button>
            </div>
      `;
    } else if (feature.classList.contains("sharing")) {
      changeFeature.innerHTML = `
      <div class="features-img">
              <img
                src="images/illustration-features-tab-3.svg"
                alt="Illustration3"
              />
              <div class="background-ill second"></div>
            </div>
            <div class="bookmark-text">
              <h2 class="titles">Share your bookmarks</h2>
              <p class="grey-text">
                Easily share your bookmarks and collections with others. Create
                a shareable link that you can send at the click of a button.
              </p>
              <button class="blue-btn">More Info</button>
            </div>
      `;
    }
  });
});

faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("faq-block");

    faqsImg[index].classList.toggle("rot-img");
  });
});

const validateEmail = function (email) {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
};

let input = document.querySelector("input[type = email]");

document.querySelector(".contact").addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(input.value)) {
    document.querySelector(".error").innerHTML =
      "Whoops, make sure it's an email";
  }

  document.querySelector(".error").innertext = "Email Accepted";

  document.querySelector(".error").style.backgroundColor = "green";
});
