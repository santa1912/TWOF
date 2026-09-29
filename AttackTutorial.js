class AttackTutorial {

    constructor() {
        this.element = null;
        this.action = null;
        this.onComplete = null;

        this.createElement();
    }

    createElement() {

        this.element = document.createElement("div");
        this.element.id = "attackTutorial";

        this.element.innerHTML = `
      <div class="attack-tutorial-box">

        <div class="attack-tutorial-icon">
          &#x2694;&#xFE0F;
        </div>

        <div class="attack-tutorial-title">
          Action Info
        </div>

        <div class="attack-tutorial-name"></div>

        <div class="attack-tutorial-type"></div>

        <div class="attack-tutorial-description"></div>

        <div class="attack-tutorial-effect"></div>

        <button
          type="button"
          class="attack-tutorial-ok"
        >
          Got it
        </button>

      </div>
    `;

        document.body.appendChild(this.element);

        this.okButton =
            this.element.querySelector(".attack-tutorial-ok");

        this.okButton.addEventListener("click", () => {
            this.complete();
        });
    }


    getActionInfo(action) {

        const name = action.name;

        if (name === "Whomp!") {

            return {
                type: "Damage Attack",
                effect: "Deals 10 damage to the enemy."
            };

        }

        if (name === "Tomato Squeeze") {

            return {
                type: "Status / Recovery",
                effect: "Applies Saucy for 3 turns. Recovers 5 HP after your turn."
            };

        }

        if (name === "Olive Oil") {

            return {
                type: "Status Attack",
                effect: "Applies Clumsy for 3 turns. Your action may fail."
            };

        }

        if (name === "Heating Lamp") {

            return {
                type: "Status Recovery",
                effect: "Removes your current status effect."
            };

        }

        if (name === "Parmesan") {

            return {
                type: "HP Recovery",
                effect: "Restores 10 HP."
            };

        }

        return {
            type: "Action",
            effect: action.description || "Use this action during battle."
        };
    }


    open(action, onComplete) {

        // เคยสอน Action นี้แล้ว
        const tutorialKey =
            `attackTutorial_${action.name}`;

        if (
            localStorage.getItem(tutorialKey) === "true"
        ) {
            onComplete();
            return;
        }

        this.action = action;
        this.onComplete = onComplete;

        const info = this.getActionInfo(action);

        this.element.querySelector(
            ".attack-tutorial-name"
        ).innerText = action.name;

        this.element.querySelector(
            ".attack-tutorial-type"
        ).innerText = info.type;

        this.element.querySelector(
            ".attack-tutorial-description"
        ).innerText =
            action.description || "";

        this.element.querySelector(
            ".attack-tutorial-effect"
        ).innerText =
            "Effect: " + info.effect;

        this.element.style.display = "flex";
    }


    complete() {

        if (!this.action) {
            return;
        }

        const tutorialKey =
            `attackTutorial_${this.action.name}`;

        localStorage.setItem(
            tutorialKey,
            "true"
        );

        this.element.style.display = "none";

        const callback = this.onComplete;

        this.action = null;
        this.onComplete = null;

        if (callback) {
            callback();
        }
    }

    close() {
        this.element.style.display = "none";
    }
}

window.attackTutorial = new AttackTutorial();