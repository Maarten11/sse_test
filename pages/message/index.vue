<template>
	<h1>Send message!</h1>
	<button @click="message">Click</button>
</template>

<script setup lang="ts">
	const message = async () => await useFetch("/api/message");
</script>
<style scoped></style>
