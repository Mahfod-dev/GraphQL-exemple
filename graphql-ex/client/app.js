function greeting() {
	return fetch('http://localhost:4000/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query: '{ greeting }' }),
	})
		.then((res) => res.json())
		.then((res) => {
			document.getElementById('greeting').innerText = res.data.greeting;
		})
		.catch((err) => console.error(err));
}

window.onload = greeting;
