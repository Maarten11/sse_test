<template>
	<!-- <h1>{{ teams }}</h1> -->
	<li v-for="message in messages">
		<ul>
			{{
				message
			}}
		</ul>
	</li>
</template>

<script setup lang="ts">
	const messages: Ref<any[]> = ref([]);

	// const { data: teams } = await useFetch("/api/teams");
	let eventSource: EventSource;

	onMounted(() => {
		eventSource = new EventSource("sse");

		eventSource.onmessage = (event) => {
			console.log(event.data);
			messages.value.push(event.data);
		};
	});

	onBeforeUnmount(() => eventSource!.close());
</script>

<style scoped></style>
