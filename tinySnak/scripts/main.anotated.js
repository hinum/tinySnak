
let {world:W, system:S} = await import("@minecraft/server"), //import stuffs

    // place blocks then return the position
    b = (p,b)=>W.getDimension("overworld").setBlockType({x:p>>4,y:-60, z:p & 15}, b + "_concrete") || p,

    d = 1, // move direction
    h = 0, // head position
    a = 3, // apple position
    s = 1, // score aka length

    f = c=> S.runTimeout(_=>{

        // update direction if the new direction is valid
        d = (d&3? d|48: d|3) & 1<< W.getPlayers()[0].selectedSlotIndex || d

        // update head position place the apple then update the body
        c(b(h = h + (d & 17) - (d/2 & 17) & 255), "green")^b(a, "red")? s: ++s)

        let p = h // save the position

        // recursion
        f(n=>
            n? p^h? c(n-1):z : // checks for collision
            h^a?b(p, "white"):a = Math.random() * 256 | 0) // update tails (generate apple pos / removing tail blocks)
      },4)

f(_=>_) // start the loop

// note:
// position is this format: 0bXxxxYyyy
// aka the first 4 bit represent the X part and the last 4 bit represent the Y part

// you can basically think of a^b as a!=b