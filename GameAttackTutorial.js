class GameAttackTutorial {

    constructor() {

        this.currentPage = 0;

        this.pages = [

            // =========================
            // PAGE 1
            // =========================

            {
                icon: "&#x2694;&#xFE0F;",
                title: "Turn-Based Battle",
                text: "When you encounter an enemy, you enter a turn-based battle.",
                tip: "Choose one action at a time and think carefully before your turn."
            },


            // =========================
            // PAGE 2
            // =========================

            {
                icon: "&#x1F3AE;",
                title: "Battle Menu",
                text: "The battle menu gives you four choices: Attack, Items, Swap, and Exit.",
                tip: "Attack uses abilities, Items use battle items, Swap changes your active Flavor, and Exit leaves the battle after confirmation."
            },


            // =========================
            // PAGE 3
            // =========================

            {
                icon: "&#x1F4A5;",
                title: "Whomp!",
                text: "Whomp! is a damage attack that deals 10 damage to the enemy.",
                tip: "Use Whomp! when you want to deal direct damage and reduce the enemy's HP."
            },


            // =========================
            // PAGE 4
            // =========================

            {
                icon: "&#x1F345;",
                title: "Tomato Squeeze",
                text: "Tomato Squeeze applies Saucy to the enemy for 3 turns and restores 5 HP after your turn.",
                tip: "It combines a status effect with recovery, making it useful in different situations."
            },


            // =========================
            // PAGE 5
            // =========================

            {
                icon: "&#x1FAD2;",
                title: "Olive Oil",
                text: "Olive Oil applies Clumsy to the enemy for 3 turns. The enemy's action may fail.",
                tip: "Use it to make the enemy less reliable during battle."
            },


            // =========================
            // PAGE 6
            // =========================

            {
                icon: "&#x1F9C0;",
                title: "Parmesan",
                text: "Parmesan restores 10 HP to your active Flavor.",
                tip: "Use Parmesan when your Flavor needs more HP."
            }
        ];

        this.createElement();
    }


    // =========================
    // CREATE UI
    // =========================

    createElement() {

        this.element = document.createElement("div");

        this.element.id = "gameAttackTutorial";

        this.element.innerHTML = `

      <div id="gameAttackTutorialBox">

        <div class="game-attack-header">

          <span>Attack Tutorial</span>

          <button
            type="button"
            id="closeGameAttackTutorial"
          >
            &#x274C;
          </button>

        </div>


        <div class="game-attack-content">

          <div
            id="gameAttackIcon"
            class="game-attack-icon"
          >
            &#x2694;&#xFE0F;
          </div>


          <h2 id="gameAttackHeading">
            Turn-Based Battle
          </h2>


          <p id="gameAttackText"></p>


          <div
            id="gameAttackTip"
            class="game-attack-tip"
          ></div>

        </div>


        <div class="game-attack-footer">

          <button
            type="button"
            id="gameAttackPrev"
          >
            &#x25C0; Back
          </button>


          <span id="gameAttackPage">
            1 / 6
          </span>


          <button
            type="button"
            id="gameAttackNext"
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
            document.getElementById("gameAttackIcon");

        this.heading =
            document.getElementById("gameAttackHeading");

        this.text =
            document.getElementById("gameAttackText");

        this.tip =
            document.getElementById("gameAttackTip");

        this.page =
            document.getElementById("gameAttackPage");

        this.prevButton =
            document.getElementById("gameAttackPrev");

        this.nextButton =
            document.getElementById("gameAttackNext");

        this.closeButton =
            document.getElementById(
                "closeGameAttackTutorial"
            );


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
            (event) => {

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
    // UPDATE
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


        this.prevButton.disabled =
            this.currentPage === 0;


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

window.gameAttackTutorial =
    new GameAttackTutorial();