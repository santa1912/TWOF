class SubmissionMenu {
  constructor({ caster, enemy, onComplete, items, replacements, battle }) {
    this.caster = caster;
    this.enemy = enemy;
    this.replacements = replacements;
    this.onComplete = onComplete;
    this.battle = battle;

    let quantityMap = {};
    items.forEach(item => {
      if (item.team === caster.team) {
        let existing = quantityMap[item.actionId];
        if (existing) {
          existing.quantity += 1;
        } else {
          quantityMap[item.actionId] = {
            actionId: item.actionId,
            quantity: 1,
            instanceId: item.instanceId,
          }
        }
      }
    })
    this.items = Object.values(quantityMap);
  }

  getPages() {

    const backOption = {
      label: "Go Back",
      description: "Return to previous page",
      handler: () => {
        this.keyboardMenu.setOptions(this.getPages().root)
      }
    };

    return {
      root: [
        {
          label: "Attack",
          description: "Choose an attack",
          handler: () => {
            //Do something when chosen...
            this.keyboardMenu.setOptions(this.getPages().attacks)
          }
        },
        {
          label: "Items",
          description: "Choose an item",
          handler: () => {
            //Go to items page...
            this.keyboardMenu.setOptions(this.getPages().items)
          }
        },
        {
          label: "Swap",
          description: "Change to another pizza",
          handler: () => {
            //See pizza options
            this.keyboardMenu.setOptions(this.getPages().replacements)
          }
        },

        {
          label: "Exit",
          description: "Leave the battle",

          handler: () => {

            this.confirmExit();

          }
        }
      ],

      attacks: [
        ...this.caster.actions.map(key => {
          const action = Actions[key];
          return {
            label: action.name,
            description: action.description,
            handler: () => {

              window.attackTutorial.open(
                action,
                () => {
                  this.menuSubmit(action)
                }
              );
            }
          }
          }),
        backOption
      ],
      items: [
        ...this.items.map(item => {
          const action = Actions[item.actionId];
          return {
            label: action.name,
            description: action.description,
            right: () => {
              return "x" + item.quantity;
            },
            handler: () => {
              this.menuSubmit(action, item.instanceId)
            }
          }
        }),
        backOption
      ],
      replacements: [
        ...this.replacements.map(replacement => {
          return {
            label: replacement.name,
            description: replacement.description,
            handler: () => {
              //Swap me in, coach!
              this.menuSubmitReplacement(replacement)
            }
          }
        }),
        backOption
      ]
    }
  }

  menuSubmitReplacement(replacement) {
    this.keyboardMenu?.end();
    this.onComplete({
      replacement
    })
  }

  confirmExit() {

    this.keyboardMenu?.end();

    const overlay =
      document.createElement("div");

    overlay.classList.add(
      "battle-exit-overlay"
    );

    overlay.innerHTML = `

    <div class="battle-exit-box">

      <div class="battle-exit-title">
        Exit Battle
      </div>

      <div class="battle-exit-text">
        Exit this battle?
      </div>

      <div class="battle-exit-buttons">

        <button
          type="button"
          class="battle-exit-cancel"
        >
          Cancel
        </button>

        <button
          type="button"
          class="battle-exit-ok"
        >
          OK
        </button>

      </div>

    </div>

  `;

    this.battle.element.appendChild(
      overlay
    );


    const cancelButton =
      overlay.querySelector(
        ".battle-exit-cancel"
      );

    const okButton =
      overlay.querySelector(
        ".battle-exit-ok"
      );


    cancelButton.addEventListener(
      "click",
      () => {

        overlay.remove();

        this.showMenu(
          this.battle.element
        );

      }
    );


    okButton.addEventListener(
      "click",
      () => {

        overlay.remove();

        this.onComplete({
          exitBattle: true
        });

      }
    );

  }

  menuSubmit(action, instanceId = null) {

    this.keyboardMenu?.end();

    this.onComplete({
      action,
      target: action.targetType === "friendly" ? this.caster : this.enemy,
      instanceId
    })
  }

  decide() {
    //TODO: Enemies should randomly decide what to do...
    this.menuSubmit(Actions[this.caster.actions[0]]);
  }

  showMenu(container) {
    this.keyboardMenu = new KeyboardMenu();
    this.keyboardMenu.init(container);
    this.keyboardMenu.setOptions(this.getPages().root)
  }

  init(container) {

    if (this.caster.isPlayerControlled) {
      //Show some UI
      this.showMenu(container)
    } else {
      this.decide()
    }
  }
}