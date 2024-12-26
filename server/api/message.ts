import { messageQueue } from "../routes/sse";

export default eventHandler((event) => {
	messageQueue.push("New message");
	console.log("From message route", messageQueue);
	return "ok";
});
