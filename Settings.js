class GameSettings {

    constructor() {

        // =========================
        // Pizza ที่กำลังใช้งาน
        // =========================

        this.pizzaId = "s001";


        // =========================
        // โหลดชื่อ Pizza
        // =========================

        const savedName =
            localStorage.getItem(
                `pizzaName_${this.pizzaId}`
            );

        this.pizzaName =
            savedName ||
            window.Pizzas[this.pizzaId].name;


        // =========================
        // Create Settings UI
        // =========================

        this.createElement();
    }


    // =========================
    // Create Element
    // =========================

    createElement() {

        this.element =
            document.createElement("div");

        this.element.id =
            "settingsOverlay";


        this.element.innerHTML = `

      <div id="settingsBox">

        <!-- Header -->

        <div class="settings-header">

          <span>
            Settings
          </span>

          <button
            type="button"
            id="closeSettings"
          >
            &#x274C;
          </button>

        </div>


        <!-- Content -->

        <div class="settings-content">

          <label
            for="pizzaNameInput"
          >
            &#x2712;&#xFE0F; Chef Name
          </label>


          <input
            type="text"
            id="pizzaNameInput"
            maxlength="16"
            placeholder="Enter pizza name"
            autocomplete="off"
          >

          <button
            type="button"
            id="savePizzaName"
          >
            Save
          </button>

        </div>

      </div>

    `;


        document.body.appendChild(
            this.element
        );


        // =========================
        // Get Elements
        // =========================

        this.input =
            document.getElementById(
                "pizzaNameInput"
            );


        this.closeButton =
            document.getElementById(
                "closeSettings"
            );


        this.saveButton =
            document.getElementById(
                "savePizzaName"
            );


        // =========================
        // Close Button
        // =========================

        this.closeButton.addEventListener(
            "click",
            () => {

                this.close();

            }
        );


        // =========================
        // Save Button
        // =========================

        this.saveButton.addEventListener(
            "click",
            () => {

                this.save();

            }
        );


        // =========================
        // Keyboard
        // =========================

        this.input.addEventListener(
            "keydown",
            event => {

                // Enter = Save

                if (event.key === "Enter") {

                    event.preventDefault();

                    this.save();

                }

                // Escape = Close

                if (event.key === "Escape") {

                    event.preventDefault();

                    this.close();

                }

            }
        );

    }


    // =========================
    // Open Settings
    // =========================

    open() {

        // โหลดชื่อปัจจุบันอีกครั้ง

        const savedName =
            localStorage.getItem(
                `pizzaName_${this.pizzaId}`
            );


        if (savedName) {

            this.pizzaName =
                savedName;

        }


        // ใส่ชื่อใน Input

        this.input.value =
            this.pizzaName;


        // แสดงหน้าต่าง

        this.element.style.display =
            "flex";


        // Focus Input

        this.input.focus();

        this.input.select();

    }


    // =========================
    // Close Settings
    // =========================

    close() {

        this.element.style.display =
            "none";


        this.input.blur();

    }


    // =========================
    // Save Pizza Name
    // =========================

    save() {

        let name =
            this.input.value.trim();


        // ถ้าไม่ได้กรอกชื่อ

        if (!name) {

            return;

        }


        // =========================
        // Update Settings
        // =========================

        this.pizzaName =
            name;


        // =========================
        // Update PlayerState
        // =========================

        const pizzaId =
            this.pizzaId;


        const playerPizzaId =
            Object.keys(
                window.playerState.pizzas
            ).find(
                id =>
                    window.playerState.pizzas[id].pizzaId
                    === pizzaId
            );


        if (playerPizzaId) {

            window.playerState.pizzas[
                playerPizzaId
            ].name = name;

        }


        // =========================
        // Save LocalStorage
        // =========================

        localStorage.setItem(
            `pizzaName_${pizzaId}`,
            name
        );


        // =========================
        // Update HUD
        // =========================

        utils.emitEvent(
            "PlayerStateUpdated"
        );


        // =========================
        // Close
        // =========================

        this.close();


        console.log(
            "Pizza name changed:",
            name
        );

    }


    // =========================
    // Get Pizza Name
    // =========================

    getName() {

        return this.pizzaName;

    }


    // =========================
    // Get Pizza ID
    // =========================

    getPizzaId() {

        return this.pizzaId;

    }

}


// =========================
// Global Settings
// =========================

window.gameSettings =
    new GameSettings();