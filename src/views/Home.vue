<template>
	<div class="home">
		<div class="img-banner"></div>
		<div class="content-center">
			<br>
			<div class="typography">
				<h2>Typography</h2>
				<h3 class="strong green">Headings:</h3>
				<div class="inlines-blocks">
					<h3 class="heading">heading 1</h3>
					<h1>Design system</h1>
				</div>
				<div class="inlines-blocks">
					<h3 class="heading">heading 2</h3>
					<h2>Design system</h2>
				</div>
				<div class="inlines-blocks">
					<h3 class="heading">heading 3</h3>
					<h3>Design system</h3>
				</div>
				<div class="inlines-blocks">
					<h3 class="heading">heading 4</h3>
					<h4>Design system</h4>
				</div>
				<div class="inlines-blocks">
					<h3 class="heading">heading 5</h3>
					<h5>Design system</h5>
				</div>
				<div class="inlines-blocks">
					<h3 class="heading">heading 6</h3>
					<h6>Design system</h6>
				</div>
			</div>
			<br>
			<br>
		</div>
	</div>
</template>

<style>
	.typography .strong {
		margin-bottom: 15px;
	}

	.typography .inlines-blocks > .heading {
		padding-right: 30px;
	}

	.typography .inlines-blocks > * {
		margin: 15px 0;
		vertical-align: middle;
	}

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
