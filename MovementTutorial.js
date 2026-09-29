class MovementTutorial {

  constructor() {
    this.completed = false;

    this.createElement();
    this.checkMovement();

    // ถ้าเคยดูแล้ว ให้ซ่อนทันที
    if (localStorage.getItem("movementTutorialSeen") === "true") {
      this.close();
      this.completed = true;
    }
  }

  createElement() {
    this.element = document.createElement("div");
    this.element.id = "movementTutorial";

    this.element.innerHTML = `
      <div class="movement-tutorial-box">

        <div class="movement-tutorial-title">
          How to Move
        </div>

        <div class="movement-tutorial-text">
          Use the Arrow Keys or WASD
          to move your character
        </div>

        <div class="keyboard-demo">

          <div class="key-row">
            <div class="move-key" data-key="up">&#x25B2;</div>
          </div>

          <div class="key-row">
            <div class="move-key" data-key="left">&#x25C0;</div>
            <div class="move-key" data-key="down">&#x25BC;</div>
            <div class="move-key" data-key="right">&#x25B6;</div>
          </div>

        </div>

        <div class="movement-tutorial-hint">
          Move in any direction to continue
        </div>

      </div>
    `;

    document.body.appendChild(this.element);

    // สำคัญ: ซ่อนไว้ก่อน
    this.element.style.display = "none";
  }

  checkMovement() {

    this.keyHandler = (event) => {

      if (this.completed) return;

      const keys = [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "w",
        "W",
        "a",
        "A",
        "s",
        "S",
        "d",
        "D"
      ];

      if (keys.includes(event.key)) {
        this.complete();
      }
    };

    document.addEventListener("keydown", this.keyHandler);
  }

  complete() {

    if (this.completed) return;

    this.completed = true;

    // จำว่าเคยผ่าน Movement Tutorial แล้ว
    localStorage.setItem(
      "movementTutorialSeen",
      "true"
    );

    this.element.classList.add(
      "movement-tutorial-hide"
    );

    setTimeout(() => {

      if (this.element) {
        this.element.remove();
      }

      document.removeEventListener(
        "keydown",
        this.keyHandler
      );

    }, 400);
  }

  open() {

    // ถ้าเคยดูแล้ว ห้ามเปิดอีก
    if (
      this.completed ||
      localStorage.getItem("movementTutorialSeen") === "true"
    ) {
      return;
    }

    this.element.style.display = "flex";
  }

  close() {

    if (this.element) {
      this.element.style.display = "none";
    }

  }

}

window.movementTutorial = new MovementTutorial();