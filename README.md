<p align="center">
    <img
        width="175"
        src="https://raw.githubusercontent.com/hinum/tinySnak/refs/heads/main/tinySnak/pack_icon.png"
        alt=""
    />
</p>
<h1 align="center">TinySnak 🐍</h1>

<h1></h1>

an attempt at making the most compact snake clone possible.
filled with very fun things like very cursed boolean/binary operations and using recursion to store positions.

## 🕹️ usage"

you can find the world demo in the release page.
the script should crash when you first join the world.

**use /reload** to start playing. the command block is for resting the playfield.
when you ran into yourself you should get a `z is not defined` error.

### controls

this pack uses the hotbar selected slot as its inputs.
however due to how the controls is implemented, the control scheme is quite strange and goes as follow.

- slot 1 to move left
- slot 2 to move right
- slot *5* to move up
- slot *6* to move down

no other slots have any effects.

### known issues

the following are issues that i'm not intetested in sloving,

- memory leaks
- apples can spawn inside the snake's body
- crash when first join the world
- cant eat the apple whe first joining the world
- weird behavior when the snake loops into itself

## 🛠️ contributing

you can find a *readable* and somewhat explained version of the code [here](https://github.com/hinum/tinySnak/blob/main/tinySnak/scripts/main.anotated.js)
feel free to submit your own solutions by submiting a pull request.
your solution needs to be better than mine for it to get merged though.

