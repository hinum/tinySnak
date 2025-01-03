<p align="center">
    <img
        width="175"
        src="https://raw.githubusercontent.com/hinum/tinySnak/refs/heads/main/tinySnak/pack_icon.png"
    />
</p>
<h1 align="center">TinySnak 🐍</h1>

An attempt at making the most compact snake clone (in minecraft) possible.
Filled with very fun things like very cursed boolean/binary operations and using recursion to store positions.
I'm only able to get it to 378 bytes, you can see the code [here](https://github.com/hinum/tinySnak/blob/main/tinySnak/scripts/main.js).

## 🕹️ usage

You can find the demo world on the release page.
The script should crash when you first join the world.

**Use /reload** to start playing. The command block is for resting the playfield after an error.
When you ran into yourself you should get a `z is not defined` error.

### controls

This pack uses the hotbar selected slot as its inputs.
However due to how the controls are implemented, the control scheme is quite strange and goes as follow.

- slot 1 to move left
- slot 2 to move right
- slot *5* to move up
- slot *6* to move down

no other slots have any effects.

### known issues

The following are issues that i'm not intetested in sloving,

- memory leaks
- apples can spawn inside the snake's body
- crash when first join the world
- cant eat the apple whe first joining the world
- weird behavior when the snake loops into itself

## 🛠️ contributing

You can find a somewhat *readable* and explained version of the code [here](https://github.com/hinum/tinySnak/blob/main/tinySnak/scripts/main.anotated.js).
Feel free to submit your own solutions by submiting a pull request.
Note that your solution needs to be better than the pervious one for it to be merged though.

