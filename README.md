# The World of Flavors 🍕🌎

**The World of Flavors** is a web-based 2D Role-Playing Game (RPG) with a food-themed adventure. Players take the role of a chef who enters a fantasy world of flavors and explores different locations, interacts with NPCs, and battles enemies using pizza-based abilities.

## 🎮 About the Project

The project was developed as part of a Software Engineering project.

The main purpose is to create an interactive 2D RPG experience that combines:

* Character exploration
* NPC interaction
* Turn-based battles
* Pizza-based combat abilities
* Items and recovery systems
* Character leveling and XP
* Game progress saving
* Tutorial systems
* Game menu and settings

## ✨ Features

### 🗺️ Exploration

Players can explore the game world using:

* Arrow Keys
* WASD

Players can move around the map and discover different areas.

### 💬 NPC Interaction

Players can approach NPCs and press **Enter** to interact with them and progress through conversations and events.

### ⚔️ Turn-Based Battle

When encountering an enemy, the player enters a turn-based battle.

The battle menu includes:

* **Attack** – Use available abilities
* **Items** – Use items during battle
* **Swap** – Change the active pizza
* **Exit** – Leave the battle after confirmation

### 🍕 Battle Abilities

Each ability has a different effect.

| Ability            | Type              | Effect                                                            |
| ------------------ | ----------------- | ----------------------------------------------------------------- |
| **Whomp!**         | Damage            | Deals 10 damage to the target                                     |
| **Tomato Squeeze** | Status / Recovery | Applies Saucy for 3 turns and recovers 5 HP after the user's turn |
| **Olive Oil**      | Status            | Applies Clumsy for 3 turns, giving a chance for an action to fail |

The game also provides an **Action Info** tutorial when an ability is selected for the first time.

### 🎒 Items

Players can use items during battle.

Current items include:

* **Heating Lamp** – Removes the current status effect
* **Parmesan** – Restores 10 HP

### ⭐ XP and Level System

Players gain XP by defeating enemies.

When enough XP is collected:

* XP resets
* The character's level increases
* The XP requirement is updated
* The battle HUD is updated

### 💾 Save System

The game uses **Local Storage** to save game progress.

Saved information includes:

* Current map
* Player position
* Player direction
* Pizza data
* Team lineup
* Items
* Story flags

This allows the player to continue the game after refreshing the page.

### 📚 Tutorial System

The game includes tutorials to help new players understand the controls and gameplay.

Tutorials include:

* How to move
* How to interact with NPCs
* How battles work
* How to attack
* How to use items
* How to swap characters
* HP and XP information
* Game menu
* Other basic gameplay systems

## 🛠️ Technologies

* HTML5
* CSS3
* JavaScript
* HTML5 Canvas
* Firebase Authentication
* Local Storage

## 🚀 How to Run

### 1. Clone or download the repository

Download the project to your computer.

### 2. Open the project folder

```powershell
cd C:\TWOF
```

### 3. Start a local web server

```powershell
python -m http.server 8000
```

### 4. Open the game

Open your browser and go to:

```text
http://localhost:8000/login.html
```

After logging in, the game will open automatically.

## 🎯 Controls

| Key           | Action                         |
| ------------- | ------------------------------ |
| Arrow Keys    | Move character                 |
| W / A / S / D | Move character                 |
| Enter         | Talk / Interact / Select       |
| Escape        | Navigate menus where supported |

## 💡 Game Concept

The player takes the role of a chef who enters a fantasy world through an old cookbook.

In this world, food is part of the adventure. The player can explore different locations, collect resources, interact with characters, fight enemies, improve their Pizza team, and progress through the story.

### Main Locations

* **Flavoria City**
* **Sweet Hills**
* **Spice Forest**
* **Ocean Bay**
* **Mountain Village**

## 🎓 Project Purpose

This project demonstrates the application of Software Engineering concepts through the development of an interactive web-based game.

The project focuses on:

* Object-oriented programming concepts
* JavaScript-based game development
* Event-driven programming
* User interface design
* Game state management
* Local data persistence
* Modular code organization
* Interactive gameplay systems

## 👩‍💻 Development

**Project:** The World of Flavors
**Type:** Web-Based 2D RPG
**Platform:** Web Browser
**Development Environment:** Visual Studio Code
**Language:** JavaScript, HTML, CSS

## 📌 Project Status

The project is currently under development. Gameplay systems, battle mechanics, tutorials, maps, UI, and save functionality are being developed and integrated.

## 📄 License

This project is developed for educational purposes.
