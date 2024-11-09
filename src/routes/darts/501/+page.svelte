<script>
	let player1 = 'Steve';
	let player2 = 'Mark';

	let max_history = 2;
	let initial_score = 501;
	let current_score = 0;
	let current_turn = 0;
	let history = [];
	const doubles = [32, 40, 16, 8, 24, 20, 36, 12, 4, 28, 10, 30, 50, 38, 34, 2, 22, 26, 18, 14, 6]; // best to worst
	const possible_throws = [1, 3, 2]
		.map((multiple) => {
			return [20, 19, 18, 16, 12, 14, 8, 10, 17, 15, 25, 13, 11, 1, 2, 4, 5, 6, 9, 7, 3].map(
				(single) => {
					if (multiple == 3 && single == 25) {
						return [0, 0];
					}
					return [single, multiple];
				}
			);
		})
		.reduce(
			(previousValue, currentValue) =>
				previousValue.some((x) => x[0] * x[1] == currentValue[0] * currentValue[1])
					? previousValue // don't need this
					: previousValue.concat(currentValue),
			[]
		);
	//console.debug('possible_throws', possible_throws);

	$: first_player = history.length == 0 ? player1 : history.filter((el) => el.turn == 0)[0].player;
	$: current_player =
		history.length == 0
			? player1
			: history.reduce((prev, curr) => (curr.turn > prev.turn ? curr : prev)).player == player1
			? player2
			: player1;
	$: player1_history = history
		.filter((el) => el.player == player1)
		.sort((a, b) => b.turn - a.turn)
		.slice(0, current_player == player1 && first_player == player2 ? max_history : max_history + 1)
		.sort((a, b) => a.turn - b.turn);
	$: player2_history = history
		.filter((el) => el.player == player2)
		.sort((a, b) => b.turn - a.turn)
		.slice(0, current_player == player2 && first_player == player1 ? max_history : max_history + 1)
		.sort((a, b) => a.turn - b.turn);
	$: player1_score = Math.max(
		0,
		history
			.filter((el) => el.player == player1)
			.reduce((partialSum, a) => partialSum - a.score, initial_score)
	);
	$: player2_score = Math.max(
		0,
		history
			.filter((el) => el.player == player2)
			.reduce((partialSum, a) => partialSum - a.score, initial_score)
	);
	$: player1_checkout = calculate_checkout(player1_score);
	$: player2_checkout = calculate_checkout(player2_score);
	$: player1_180s = player1_history.filter((el) => el.score == 180).length;
	$: player1_140s = player1_history.filter((el) => el.score >= 140 && el.score < 180).length;
	$: player1_100s = player1_history.filter((el) => el.score >= 100 && el.score < 140).length;
	$: player1_avg =
		player1_history.length == 0
			? 0
			: Math.round(
					(100 * player1_history.reduce((a, b) => a + b.score, 0)) / player1_history.length
			  ) / 100;
	// Alternative approach // https://jrsinclair.com/articles/2019/five-ways-to-average-with-js-reduce/#5.singlepasswithcumulativeaveragecalculation
	$: player2_180s = player2_history.filter((el) => el.score == 180).length;
	$: player2_140s = player2_history.filter((el) => el.score >= 140 && el.score < 180).length;
	$: player2_100s = player2_history.filter((el) => el.score >= 100 && el.score < 140).length;
	$: player2_avg =
		player2_history.length == 0
			? 0
			: Math.round(
					(100 * player2_history.reduce((a, b) => a + b.score, 0)) / player2_history.length
			  ) / 100;

	function calculate_checkout(total) {
		if (total == 0) {
			return '';
		}
		if (total > 170 || [169, 168, 166, 165, 163, 162, 159].some((x) => x == total)) {
			return 'no checkout';
		}
		if (total == 50) {
			return 'Bull';
		}
		if (doubles.some((x) => x == total)) {
			return `D${total / 2}`;
		}
		const is_three_darter = total >= 110 || [107, 104, 101].some((x) => x == total);
		const two_dart_total = is_three_darter ? total - 60 : total;

		let two = doubles
			.map((d) =>
				possible_throws.map((t) => {
					return { double: d, number: t[0], hits: t[1] };
				})
			)
			.flat()
			.filter((x) => x.double + x.number * x.hits == two_dart_total);

		if (two.length > 0) {
			return `${is_three_darter ? 'T20 ' : ''} ${to_sdt(two[0].hits)}${two[0].number} ${
				two[0].double == 50 ? 'Bull' : 'D' + two[0].double / 2
			}`;
		}

		return 'checkout possible';
	}
	function to_sdt(num) {
		switch (num) {
			case 3:
				return 'T';
			case 2:
				return 'D';
			default:
				return '';
		}
	}

	function press(event) {
		console.debug('press', event.target.value);
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
		console.debug('backspace');
		if (current_score != 0) {
			current_score = parseInt(current_score.toString().substring(1, -1));
		}
	}
	function undo() {
		console.debug('undo');
		if (current_score == 0) {
			// don't undo when we mean to backspace
			// TODO: remove from history

			current_turn = current_turn - 1;
			current_score = 0;
		}
	}
	function submit(score) {
		console.debug('submit', score);
		if (
			(current_player == player1 && player1_score >= score && player1_score != score + 1) ||
			(current_player == player2 && player2_score >= score && player2_score != score + 1)
		) {
			history = [
				...history,
				{
					turn: current_turn,
					player: current_player,
					score: score
				}
			];
			current_turn = current_turn + 1;
			current_score = 0;
		}
	}
</script>

<header>
	<div class="player">
		{player1}
		{#if current_player == player1}
			<img src="/dart.svg" alt="dart-icon" height="20" />
		{/if}
	</div>
	<div class="title">501</div>
	<div class="player">
		{player2}
		{#if current_player == player2}
			<img src="/dart.svg" alt="dart-icon" height="20" />
		{/if}
	</div>
</header>

<div class="game">
	<div class="game-score">
		<h1>{player1_score}</h1>
		<p>{player1_checkout}</p>
	</div>
	<div class="history-container">
		<div class="history">
			{#each player1_history as s, cnt}
				<div>{s.score}</div>
			{/each}
		</div>
		<div class="history">
			{#each player2_history as s, cnt}
				<div>{s.score}</div>
			{/each}
		</div>
	</div>
	<div class="game-score">
		<h1>{player2_score}</h1>
		<p>{player2_checkout}</p>
	</div>
</div>

<div class="keypad">
	<button type="button" value="1" on:click={press}>1</button>
	<button type="button" value="2" on:click={press}>2</button>
	<button type="button" value="3" on:click={press}>3</button>
	<button type="button" value="4" on:click={press}>4</button>
	<button type="button" value="5" on:click={press}>5</button>
	<button type="button" value="6" on:click={press}>6</button>
	<button type="button" value="7" on:click={press}>7</button>
	<button type="button" value="8" on:click={press}>8</button>
	<button type="button" value="9" on:click={press}>9</button>
	<button type="button" value="undo" on:click={undo}>Undo</button>
	<button type="button" value="0" on:click={press}>0</button>
	<button type="button" value="submit" on:click={backspace}>&lt;</button>
	<button id="submit" type="button" value="submit" on:click={() => submit(current_score)}
		>{current_score}</button
	>
</div>

<div class="keypad">
	<button type="button" on:click={() => submit(60)}>60</button>
	<button type="button" on:click={() => submit(100)}>100</button>
	<button type="button" on:click={() => submit(180)}>180</button>
</div>

<div class="match">
	<table>
		<tbody>
			<tr><td>avg</td><td>{player1_avg}</td></tr>
			<tr><td>180s</td><td>{player1_180s}</td></tr>
			<tr><td>140s</td><td>{player1_140s}</td></tr>
			<tr><td>100s</td><td>{player1_100s}</td></tr>
		</tbody>
	</table>
	<div class="filler"></div>
	<table>
		<tbody>
			<tr><td>avg</td><td>{player2_avg}</td></tr>
			<tr><td>180s</td><td>{player2_180s}</td></tr>
			<tr><td>140s</td><td>{player2_140s}</td></tr>
			<tr><td>100s</td><td>{player2_100s}</td></tr>
		</tbody>
	</table>
</div>

{#if 0 == player1_score || 0 == player2_score}
	<div class="modal">
		<div>
			{0 == player1_score ? player1 : player2} wins!
			<br /><br />
			<button
				class="button"
				on:click={() => {
					history = [];
					current_turn = 0;
				}}>Restart</button
			>
		</div>
	</div>
{/if}

<style>
	:global(body) {
		max-width: 810px;
		margin: auto;
	}
	button {
		border-radius: 0.5rem;
		touch-action: manipulation;
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
		position: relative;
	}
	.player img {
		position: absolute;
		margin: 0 1rem;
	}

	.match {
		display: inline-flex;
		width: 100%;
	}
	.match > * {
		text-align: center;
		vertical-align: top;
		width: calc(100% / 3);
		min-width: calc(100% / 3);
	}

	.game {
		display: inline-flex;
		width: 100%;
	}
	.game > * {
		width: calc(100% / 3);
		min-width: calc(100% / 3);
		text-align: center;
		vertical-align: top;
	}
	.game-score h1 {
		font-weight: bold;
	}
	.history-container {
		display: inline-flex;
	}
	.history {
		/* min-width: 3rem; */
		width: 50%;
		text-align: center;
	}
	.history div {
		width: 3rem;
		border-bottom: 1px dotted grey;
		padding: 0.25rem;
		margin: auto;
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
		color: white;
	}

	.modal {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background-color: rgba(64, 64, 64, 50);
		color: white;
	}
	.modal div {
		width: 10rem;
		margin: 10rem auto;
		text-align: center;
	}
	.modal button {
		padding: 1rem;
	}
</style>
