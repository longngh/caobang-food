let goodFood = [
  {
    image: "./images/BDa.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    image: "./images/BGa1.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
  {
    image: "./images/BCL2.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
  },
];

let news = [
  {
    image: "./images/BDa.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus. In hac habitasse platea dictumst. ",
  },
  {
    image: "./images/BDa.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus. In hac habitasse platea dictumst. ",
  },
  {
    image: "./images/BDa.jpg",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fermentum et sollicitudin ac orci phasellus egestas tellus. In hac habitasse platea dictumst. ",
  },
];

class FoodContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = goodFood.map((food, index) => {
      return ` 
      <div class="d-flex" id="food-list"> 
      <div class="food-list-pic">
      <img src=${food.image} alt="" />
     </div>
    <div class="text-left ml-5">
      ${food.title}
    </div>
    </div>`;
    });
  }
}
class NewContent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = news.map((obj, index) => {
      return ` 
      <div class="d-flex">
      <div class="new-list-pic">
       <img src=${obj.image} />
      </div>
      <div class="text-left ml-5">
     <p>
        ${obj.title}
       </p>
      <p>
           ${obj.description}
        </p>
         </div>
         </div>
        </div>`;
    });
  }
}

customElements.define("food-content", FoodContent);
customElements.define("new-content", NewContent);
