<script>
    export let player1 = "Steve";
    export let player2 = "Mark";
    let max_history = 2;
    let initial_score = 501;
    let current_score = 0;
    let current_turn = 0;
    let history = []
    const doubles = [32,20,16,8,24,36,12,4,28,10,30,50,38,34,2,22,10,26,18,14,6] // best to worst
    const possible_throws = [20,19,18,16,12,14,8,10,17,15,25,13,11,1,2,4,5,6,9,7,3] // best to worst
        .map((single) => {
            return [1,2,3].map((multiple) => {
                if (multiple == 3 && single == 25) {
                    return [0,0]
                }
                return [single, multiple]
            })
        })
        .reduce((previousValue, currentValue) => previousValue
            .some((x) => x[0]*x[1] == currentValue[0]*currentValue[1]) 
                ? previousValue // don't need this
                : previousValue.concat(currentValue), 
            []);
    console.debug("possible_throws", possible_throws);

    $: first_player = history.length == 0 
        ? player1 
        : history.filter((el) => el.turn == 0)[0].player;
    $: current_player = history.length == 0 
        ? player1 
        : history.reduce((prev,curr) => curr.turn > prev.turn ? curr : prev).player == player1 ? player2 : player1;
    $: player1_history = history
        .filter((el) => el.player == player1)
        .sort((a,b) => b.turn - a.turn)
        .slice(0, (current_player == player1 && first_player == player2 ? max_history : max_history + 1))
        .sort((a,b) => a.turn - b.turn);
    $: player2_history = history
        .filter((el) => el.player == player2)
        .sort((a,b) => b.turn - a.turn)
        .slice(0, (current_player == player2 && first_player == player1 ? max_history : max_history + 1))
        .sort((a,b) => a.turn - b.turn);
    $: player1_score = Math.max(0, history
        .filter((el) => el.player == player1)
        .reduce((partialSum, a) => partialSum - a.score, initial_score));
    $: player2_score = Math.max(0, history
        .filter((el) => el.player == player2)
        .reduce((partialSum, a) => partialSum - a.score, initial_score));
    $: player1_checkout = calculate_checkout(player1_score);
    $: player2_checkout = calculate_checkout(player2_score);

    function calculate_checkout(total) {
        if (total > 170 || [169,168,166,165,163,162,159].some(x => x == total)) {
            return "no checkout possible";
        }
        if (doubles.some(x => x == total)) {
            return `D${total/2}` 
        }
        
        return "checkout possible";
    }

    function press(event) {
        console.debug("press", event.target.value);
        event.target.disabled = true;
        current_score = parseInt(`${current_score}${event.target.value}`);
        if (current_score > 180) {
            current_score = 0;
        }
        setTimeout(() => {
            event.target.disabled = false;
        }, 250);
    }
    function backspace() {
        console.debug("backspace");
        if (current_score != 0) {
            current_score = parseInt(current_score.toString().substring(1,-1))
        }
    }
    function undo() {
        console.debug("undo");
        if (current_score == 0) {
            // don't undo when we mean to backspace
            // TODO: remove from history

            current_turn = current_turn - 1;
            current_score = 0;
        }
    }
    function submit() {
        console.debug("submit", current_score);
        if (   current_player == player1 && player1_score > current_score
            || current_player == player2 && player2_score > current_score) 
        {
            history = [...history, {
                turn: current_turn,
                player: current_player,
                score: current_score
            }];
            current_turn = current_turn + 1;
            current_score = 0;
        }
    }
</script>


<header>
    <div class="player {current_player == player1 ? 'active' : ''}">{player1}</div>
    <div class="title">501</div>
    <div class="player {current_player == player2 ? 'active' : ''}">{player2}</div>
</header>

<div class="game">
    <div class="current">
        <div>{player1_score}</div>
        <p>{player1_checkout}</p>
    </div>
    <div class="history">
        {#each player1_history as s, cnt}
            <div>{s.score}</div>
        {/each}
    </div>
    <div class="filler"></div>
    <div class="history">
        {#each player2_history as s, cnt}
            <div>{s.score}</div>
        {/each}
    </div>
    <div class="current">
        <div>{player2_score}</div>
        <p>{player2_checkout}</p>
    </div>
</div>

<div class="shortcuts">

</div>

<div class="keypad">
    <button type="button" value="1"         on:click="{press}">1</button>
    <button type="button" value="2"         on:click="{press}">2</button>
    <button type="button" value="3"         on:click="{press}">3</button>
    <button type="button" value="4"         on:click="{press}">4</button>
    <button type="button" value="5"         on:click="{press}">5</button>
    <button type="button" value="6"         on:click="{press}">6</button>
    <button type="button" value="7"         on:click="{press}">7</button>
    <button type="button" value="8"         on:click="{press}">8</button>
    <button type="button" value="9"         on:click="{press}">9</button>
    <button type="button" value="undo"      on:click="{undo}">Undo</button>
    <button type="button" value="0"         on:click="{press}">0</button>
    <button type="button" value="submit"    on:click="{backspace}">&lt;</button>
</div>

<button id="submit" type="button" value="submit" on:click="{submit}">{current_score}</button>


<style>
:global(body) {
    max-width: 1080px;
}
button {
    border-radius: 0.5rem;
}

header {
    display: inline-flex;
    width: 100%;
    font-weight: bold;
}
.title {
    width: calc(100% / 3);
    text-align: center;
    font-size: 3rem;
}
.player {
    width: calc(100% / 3);
    text-align: center;
    font-size: 1.5rem;
    padding: 0.5rem 0;
}
.active {
    text-decoration: underline;
}

.game {
    display: inline-flex;
    width: 100%;
}
.game > * {
    /* width: calc(100% / 4); */
    text-align: center;
    vertical-align: top;
}
.current {
    width: calc((100% - 9rem) / 2);
}
.current div {
    font-weight: bold;
    font-size: 2rem;
}
.current p {
    font-size: 0.75rem;
}
.history {
    min-width: 3rem;
}
.history div {
    width: 3rem;
    border-bottom: 1px dotted grey;
    padding: 0.25rem;    
}
.filler {
    width: 3rem;
}

.keypad {
    display: inline-flex;
	flex-wrap: wrap;
	width: 100%;
    font-size: 1.5rem;
}
.keypad > * {
    flex-basis: 1;
}
.keypad button {
    width: calc(100% / 3);
    padding: 0.75rem;
}
#submit {
    width: calc(100% / 3);
    padding: 0.75rem;
    margin: 0.5rem calc(100% / 3);
    background-color: forestgreen;
}
</style>