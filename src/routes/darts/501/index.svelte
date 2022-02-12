<script>
    export let player1 = "Steve";
    export let player2 = "Mark";
    let max_history = 2;
    let initial_score = 501;
    let current_score = 0;
    let current_throw = 0;
    let history = []
    $: first_player = history.length == 0 
        ? player1 
        : history.filter((el) => el.throw == 0)[0].player;
    $: current_player = history.length == 0 
        ? player1 
        : history.reduce((prev,curr) => curr.throw > prev.throw ? curr : prev).player == player1 ? player2 : player1;
    $: player1_history = history
        .filter((el) => el.player == player1)
        .sort((a,b) => b.throw - a.throw)
        .slice(0, (current_player == player1 && first_player == player2 ? max_history : max_history + 1))
        .sort((a,b) => a.throw - b.throw);
    $: player2_history = history
        .filter((el) => el.player == player2)
        .sort((a,b) => b.throw - a.throw)
        .slice(0, (current_player == player2 && first_player == player1 ? max_history : max_history + 1))
        .sort((a,b) => a.throw - b.throw);
    $: player1_score = Math.max(0, history
        .filter((el) => el.player == player1)
        .reduce((partialSum, a) => partialSum - a.score, initial_score));
    $: player2_score = Math.max(0, history
        .filter((el) => el.player == player2)
        .reduce((partialSum, a) => partialSum - a.score, initial_score));

    function press(value) {
        console.debug("press", value);
        current_score = parseInt(`${current_score}${value}`);
        if (current_score > 180) {
            current_score = 0;
        }
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

            current_throw = current_throw - 1;
            current_score = 0;
        }
    }
    function submit() {
        console.debug("submit", current_score);
        if (   current_player == player1 && player1_score > current_score
            || current_player == player2 && player2_score > current_score) 
        {
            history = [...history, {
                throw: current_throw,
                player: current_player,
                score: current_score
            }];
            current_throw = current_throw + 1;
            current_score = 0;
        }
    }
</script>

<header>
    <div class="player {current_player == player1 ? 'active' : ''}">{player1}</div>
    <div class="title">501</div>
    <div class="player {current_player == player2 ? 'active' : ''}">{player2}</div>
</header>

<div class="container">
    <div class="current">
        <div>{player1_score}</div>
        <p>No checkout available</p>
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
        <p>No checkout available</p>
    </div>
</div>

<div class="shortcuts">

</div>

<div class="keypad">
    <button type="button" value="1"         on:click="{() => press(1)}">1</button>
    <button type="button" value="1"         on:click="{() => press(2)}">2</button>
    <button type="button" value="1"         on:click="{() => press(3)}">3</button>
    <button type="button" value="1"         on:click="{() => press(4)}">4</button>
    <button type="button" value="1"         on:click="{() => press(5)}">5</button>
    <button type="button" value="1"         on:click="{() => press(6)}">6</button>
    <button type="button" value="1"         on:click="{() => press(7)}">7</button>
    <button type="button" value="1"         on:click="{() => press(8)}">8</button>
    <button type="button" value="1"         on:click="{() => press(9)}">9</button>
    <button type="button" value="undo"      on:click="{undo}">Undo</button>
    <button type="button" value="1"         on:click="{() => press(0)}">0</button>
    <button type="button" value="submit"    on:click="{backspace}">&lt;</button>
</div>

<button id="submit" type="button" value="submit" on:click="{submit}">{current_score}</button>

<style>
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

.container {
    display: inline-flex;
    width: 100%;
}
.container > * {
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