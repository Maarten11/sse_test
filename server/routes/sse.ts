export default defineEventHandler(async (event) => {
	const eventStream = createEventStream(event);

	const interval = setInterval(async () => {
		console.log(messageQueue);
		const message = messageQueue.pop();
		if (!!message) {
			await eventStream.push(message);
		}
	}, 1000);

	eventStream.onClosed(async () => {
		clearInterval(interval);
		await eventStream.close();
	});

	return eventStream.send();
});

const messageQueue: string[] = [];

export { messageQueue };
