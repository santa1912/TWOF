class GameTutorial {

  constructor() {

    this.currentPage = 0;

    this.pages = [

      {
        icon: "&#x1F3AE;",
        title: "Welcome!",
        text: "Welcome to The World of Flavors!",
        tip: "Explore the world and become a great chef."
      },

      {
        icon: "&#x1F579;",
        title: "Move",
        text: "Use the Arrow Keys or WASD to move your character.",
        tip: "Try exploring Flavoria City."
      },

      {
        icon: "&#x1F4AC;",
        title: "Talk",
        text: "Press Enter when you are near an NPC.",
        tip: "Some characters may have something important to say."
      },

      {
        icon: "&#x2694;",
        title: "Battle",
        text: "Walking into an enemy can start a battle.",
        tip: "Choose your actions carefully."
      },

      {
        icon: "&#x1F355;",
        title: "Attack",
        text: "Choose Attack to use one of your Flavor's abilities.",
        tip: "Each Flavor can have different abilities."
      },

      {
        icon: "&#x1F392;",
        title: "Items",
        text: "Choose Items to use items during battle.",
        tip: "Items can help you recover HP."
      },

      {
        icon: "&#x1F504;",
        title: "Swap",
        text: "Choose Swap to change your active Flavor.",
        tip: "You can switch to another available Flavor."
      },

      {
        icon: "&#x2764;",
        title: "HP",
        text: "HP shows how much health your Flavor has.",
        tip: "If HP reaches 0, that Flavor cannot continue fighting."
      },

      {
        icon: "&#x2B50;",
        title: "XP & Level",
        text: "Your Flavor gains XP from battles.",
        tip: "Gain enough XP to increase its level."
      },

      {
        icon: "&#x1F3C6;",
        title: "Win",
        text: "Defeat all enemy Flavor to win the battle.",
        tip: "Your Flavor can gain XP after winning."
      },

      {
        icon: "&#x2699;",
        title: "Game Menu",
        text: "Press the gear button in the top-right corner.",
        tip: "You can access game settings and other options."
      },

      {
        icon: "&#x1F50A;",
        title: "Music",
        text: "Use Music in the Game Menu to turn background music ON or OFF.",
        tip: "Your music setting is saved automatically."
      },

      {
        icon: "&#x270F;",
        title: "Chef Name",
        text: "Open Settings to change your Name.",
        tip: "Enter your name and press Save."
      },

      {
        icon: "&#x1F30E;",
        title: "Explore",
        text: "Explore different areas and discover new places.",
        tip: "Look around carefully!"
      },

      {
        icon: "&#x1F355;",
        title: "Your Adventure",
        text: "Train your Flavors team and continue your adventure.",
        tip: "Good luck, Chef!"
      },

      {
        icon: "&#x2728;",
        title: "You're Ready!",
        text: "You now know the basics of the game.",
        tip: "Have fun playing The World of Flavors!"
      }

    ];

    this.createElement();

  }


  // =========================
  // CREATE UI
  // =========================

  createElement() {

    this.element = document.createElement("div");

    this.element.id = "tutorialOverlay";

    this.element.innerHTML = `

      <div id="tutorialBox">

        <div class="tutorial-header">

          <span>How to Play</span>

          <button
            type="button"
            id="closeTutorial"
          >
            &#x274C;
          </button>

        </div>


        <div class="tutorial-content">

          <div
            id="tutorialIcon"
            class="tutorial-icon"
          >
            &#x1F3AE;
          </div>


          <h2 id="tutorialHeading">
            Welcome!
          </h2>


          <p id="tutorialText"></p>


          <div
            id="tutorialTip"
            class="tutorial-tip"
          ></div>

        </div>


        <div class="tutorial-footer">

          <button
            type="button"
            id="tutorialPrev"
          >
            &#x25C0; Back
          </button>


          <span id="tutorialPage">
            1 / 16
          </span>


          <button
            type="button"
            id="tutorialNext"
          >
            Next &#x25B6;
          </button>

        </div>

      </div>

    `;

    document.body.appendChild(this.element);


    // =========================
    // ELEMENTS
    // =========================

    this.icon =
      document.getElementById("tutorialIcon");

    this.heading =
      document.getElementById("tutorialHeading");

    this.text =
      document.getElementById("tutorialText");

    this.tip =
      document.getElementById("tutorialTip");

    this.page =
      document.getElementById("tutorialPage");

    this.prevButton =
      document.getElementById("tutorialPrev");

    this.nextButton =
      document.getElementById("tutorialNext");

    this.closeButton =
      document.getElementById("closeTutorial");


    // =========================
    // BUTTON EVENTS
    // =========================

    this.prevButton.addEventListener(
      "click",
      () => {
        this.previous();
      }
    );


    this.nextButton.addEventListener(
      "click",
      () => {
        this.next();
      }
    );


    this.closeButton.addEventListener(
      "click",
      () => {
        this.close();
      }
    );


    // =========================
    // KEYBOARD
    // =========================

    document.addEventListener(
      "keydown",
      event => {

        if (
          this.element.style.display !== "flex"
        ) {
          return;
        }


        if (event.key === "Escape") {

          this.close();

        }


        if (event.key === "ArrowRight") {

          this.next();

        }


        if (event.key === "ArrowLeft") {

          this.previous();

        }

      }
    );


    this.update();

  }


  // =========================
  // UPDATE PAGE
  // =========================

  update() {

    const current =
      this.pages[this.currentPage];


    this.icon.innerHTML =
      current.icon;


    this.heading.innerHTML =
      current.title;


    this.text.innerHTML =
      current.text;


    this.tip.innerHTML =
      "&#x1F4A1; " + current.tip;


    this.page.innerHTML =
      `${this.currentPage + 1} / ${this.pages.length}`;


    // Back

    this.prevButton.disabled =
      this.currentPage === 0;


    // Next / Finish

    if (
      this.currentPage ===
      this.pages.length - 1
    ) {

      this.nextButton.innerHTML =
        "Finish";

    } else {

      this.nextButton.innerHTML =
        "Next &#x25B6;";

    }

  }


  // =========================
  // NEXT
  // =========================

  next() {

    if (
      this.currentPage <
      this.pages.length - 1
    ) {

      this.currentPage++;

      this.update();

    } else {

      this.close();

    }

  }


  // =========================
  // PREVIOUS
  // =========================

  previous() {

    if (this.currentPage > 0) {

      this.currentPage--;

      this.update();

    }

  }


  // =========================
  // OPEN
  // =========================

  open() {

    this.currentPage = 0;

    this.update();

    this.element.style.display =
      "flex";

  }


  // =========================
  // CLOSE
  // =========================

  close() {

    this.element.style.display =
      "none";

  }

}


// =========================
// GLOBAL
// =========================

window.tutorial =
  new GameTutorial();