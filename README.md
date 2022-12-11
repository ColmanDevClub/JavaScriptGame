# JavaScriptGame

You will need to create fun interactive game using JS.

![image](https://user-images.githubusercontent.com/34707669/206923131-88bd771d-e231-4de9-bbc4-fedc88f70cdf.png)


This game is about jonny the brave, he needs to go from the starting point to the finish line. 
The game contains board and jonny the brave can move between the board slots.
You will have the board that with good things like items to make jonny stronger but also monsters.

Can you arrive to the destination point before getting killed by monsters?  

The game will contain:
-

- A board of 25x25 slots with the player/monsters on the board slots.
- A player can move using the arrow keys, he will move 1 slot for every key pressed.
- The board will contain your player, monsters and pick up items (+1 hp, +1 attack).
- Each pick up item will upgrade the player status.
- Player wil start with 3 lifes.
- When the player will move into a slot with monster on it he will enter combat, each turn the player will attack the monster, the monster will attack the player vice verca.
The battle will end when one of sided will run out of hp.

- Game over:
  - Game lost when player run out of hp
  - Game won when player arrives detination (it can be generated randomly or static)


------

You must implement those thing:
-

1. 25*25 matrix representing the board.
2. save,show and update the game status after every move (player hp, if he is in battle, attack points).
3. When the player will enter a battle you will need to print all the attacks between the player and the monster +
    combat lost/won.
4.Slots containing monsters/items will be marks with ? or ant other thing you like (the point is that the player will not know if he is about to enter combat or get item).
---

Bonus
-

Add some UI for the game and not just a console game.

