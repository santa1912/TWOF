class GameSettings {

  constructor() {
    this.characterName =
      localStorage.getItem("characterName") || "Hero";

    this.createElement();
  }


  // ============================================
  // Create Settings UI
  // ============================================

  createElement() {

    this.element = document.createElement("div");

    this.element.id = "settingsOverlay";

    this.element.innerHTML = `

      <div id="settingsBox">

        <div class="settings-header">

          <span>Settings</span>

          <button
            type="button"
            id="closeSettings"
          >
            ×
          </button>

        </div>


        <div class="settings-content">

          <label for="characterNameInput">
            Character Name
          </label>

          <input
            type="text"
            id="characterNameInput"
            maxlength="16"
            autocomplete="off"
          />

          <p class="settings-hint">
            Enter your character name.
          </p>

          <button
            type="button"
            id="saveCharacterName"
          >
            Save
          </button>

        </div>

      </div>

    `;

    document.body.appendChild(this.element);


    // Elements

    this.input =
      this.element.querySelector(
        "#characterNameInput"
      );

    this.closeButton =
      this.element.querySelector(
        "#closeSettings"
      );

    this.saveButton =
      this.element.querySelector(
        "#saveCharacterName"
      );


    // ============================================
    // Close
    // ============================================

    this.closeButton.addEventListener(
      "click",
      () => {

        this.close();

      }
    );


    // ============================================
    // Save
    // ============================================

    this.saveButton.addEventListener(
      "click",
      () => {

        this.save();

      }
    );


    // ============================================
    // Enter = Save
    // ============================================

    this.input.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {

          event.preventDefault();

          this.save();

        }

      }
    );


    // ============================================
    // Escape = Close
    // ============================================

    this.element.addEventListener(
      "keydown",
      event => {

        if (event.key === "Escape") {

          this.close();

        }

      }
    );


    // ============================================
    // Click outside
    // ============================================

    this.element.addEventListener(
      "click",
      event => {

        if (event.target === this.element) {

          this.close();

        }

      }
    );

  }


  // ============================================
  // Open Settings
  // ============================================

  open() {

    this.input.value =
      this.characterName;

    this.element.style.display =
      "flex";

    setTimeout(() => {

      this.input.focus();

      this.input.select();

    }, 50);

  }


  // ============================================
  // Close Settings
  // ============================================

  close() {

    this.element.style.display =
      "none";

    this.input.blur();

  }


  // ============================================
  // Save Character Name
  // ============================================

  save() {

    let name =
      this.input.value.trim();


    // Empty name

    if (!name) {

      name = "Hero";

    }


    // Save locally

    this.characterName = name;

    localStorage.setItem(
      "characterName",
      name
    );


    // Update game

    if (window.playerState) {

      window.playerState.characterName =
        name;

    }


    // Send event

    if (window.utils) {

      utils.emitEvent(
        "CharacterNameUpdated"
      );

    }


    this.close();

  }


  // ============================================
  // Get Name
  // ============================================

  getName() {

    return this.characterName;

  }

}


// ============================================
// Create Global Settings
// ============================================

window.gameSettings =
  new GameSettings();