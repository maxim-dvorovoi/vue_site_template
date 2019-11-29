<template>
	<div class="home">
		<div class="img-banner"></div>
		<div class="content-center">
			<h2>Basic elements</h2>
			<h3>Buttons</h3>
			<h5>PICK YOUR SIZE</h5>
			<h5>PICK YOUR COLOR</h5>
			<h5>OUTLINE</h5>
		</div>
	</div>
</template>

<style>
	.img-banner {
		height: 650px;
		width: 100%;
		background-image: url("https://images.unsplash.com/photo-1491552222800-c124480c9b02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2117&q=80;");
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	@media (max-width: 1024px) {
		.img-banner {
			height: 450px;
		}
	}

	@media (max-width: 768px) {
		.img-banner {
			height: 350px;
		}
	}
</style>

<script>
export default {
	name: 'home',
	methods: {

	},
}
</script>
