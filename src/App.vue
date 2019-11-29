<template>
	<div id="app">
		<div v-if="loading" id="loader" class="loader">
			<div class="dot-1"></div>
			<div class="dot-2"></div>
			<div class="dot-3"></div>
		</div>

		<div id="index" :class="'main' + (loading ? '' : '-active')">
			<div :class="'side' + ($store.state.sideBar ? ' active' : '')">
				<Header/>
				<div class="content" id="content">
					<router-view/>
				</div>
				<Footer/>
			</div>
			<SideBar/>
		</div>
	</div>
</template>

<style>
	#app {
		height: 100%;
		background-color: white;
	}

	* {
		font-family: 'Poppins', sans-serif;
	}

	html {
		height: 100%;
	}

	body {
		margin: 0;
		height: 100%;
		background-color: white;
		-webkit-tap-highlight-color: transparent;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #3e3e3e;
		line-height: 1.3;
		font-weight: 300;
	}

	hr {
		border: none;
		color: lightgray;
		background-color: lightgray;
		height: 1px;
	}

	a {
		text-decoration: none;
	}

	.h1, h1 {
		font-size: 2.5rem;
	}

	.h2, h2 {
		font-size: 2rem;
	}

	.h3, h3 {
		font-size: 1.75rem;
	}

	.h4, h4 {
		font-size: 1.5rem;
	}

	.h5, h5 {
		font-size: 1.25rem;
	}

	.h6, h6 {
		font-size: 1rem;
	}

	.strong {
		font-weight: 500;
	}

	.bold {
		font-weight: 600;
	}

	.heading {
		letter-spacing: .025em;
		font-size: .95rem;
		text-transform: uppercase;
		font-weight: 400;
	}

	.inlines-blocks > * {
		display: inline-block;
	}

	.green {
		color: rgba(54,99,86,1)
	}

	.main {
		position: absolute;
		overflow: hidden;
		opacity: 0;
		height: 0;
	}

	.main-active {
		height: 100%;
		position: static;
		opacity: 1;
		transition: opacity .5s ease-in-out;
	}

	.main-active > .side {
		display: flex;
		flex-direction: column;
		min-height: 100%;
		background-color: white;
		transition: transform .4s ease-in-out;
		transform: translateX(0px);
		z-index: 1;
		position: relative;
	}

	.content-center {
		max-width: 1024px;
		margin: 0 auto;
		padding: 0 20px;
	}

	.content {
		flex: 1 0 auto;
		box-sizing: border-box;
	}

	.loader {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 220px;
		height: 220px;
		margin-top: -110px;
		margin-left: -110px;
		border-radius: 2px;
		color: #009688;
	}

	.dot-1 {
		position: absolute;
		z-index: 3;
		width: 30px;
		height: 30px;
		top: 95px;
		left: 95px;
		background-color: #009688;
		border-radius: 50%;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation: jump-jump-1 1s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
		animation: jump-jump-1 1s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
	}

	.dot-2 {
		position: absolute;
		z-index: 2;
		width: 60px;
		height: 60px;
		top: 80px;
		left: 80px;
		background-color: #009688;
		border-radius: 50%;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation: jump-jump-2 1s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
		animation: jump-jump-2 1s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
	}

	.dot-3 {
		position: absolute;
		z-index: 1;
		width: 90px;
		height: 90px;
		top: 65px;
		left: 65px;
		background-color: #009688;
		border-radius: 50%;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
		-webkit-animation: jump-jump-3 1s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
		animation: jump-jump-3 1s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
	}

	@-webkit-keyframes jump-jump-1 {
		0%, 70% {
			-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	@keyframes jump-jump-1 {
		0%, 70% {
			-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@-webkit-keyframes jump-jump-2 {
		0%, 40% {
			-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@keyframes jump-jump-2 {
		0%, 40% {
			-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@-webkit-keyframes jump-jump-3 {
		0%, 10% {
			-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}
	@keyframes jump-jump-3 {
		0%, 10% {
			-webkit-box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
			-webkit-transform: scale(0);
			transform: scale(0);
		}
		100% {
			-webkit-box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
			-webkit-transform: scale(1);
			transform: scale(1);
		}
	}

	::-webkit-scrollbar {
		width: 4px;
		height: 4px;
	}

	::-webkit-scrollbar-button {
		width: 0;
		height: 0;
	}

	::-webkit-scrollbar-thumb {
		background-color: #555;
		border: 0 none #fff;
		border-radius: 2px;
		transition: all 0.5s;
	}

	:hover::-webkit-scrollbar-thumb {
		background-color: #333;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #000;
	}

	::-webkit-scrollbar-thumb:active {
		background-color: #000;
	}

	::-webkit-scrollbar-track {
		background-color: transparent;
		border: 0 none #fff;
		border-radius: 5px;
	}

	::-webkit-scrollbar-track:hover {
		background-color: transparent;
	}

	::-webkit-scrollbar-track:active {
		background-color: transparent;
	}

	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	@media (max-width: 1024px) {
		.main-active > .side.active {
			transform: translateX(-250px);
		}
	}
</style>

<script>
	import Header from '@/components/Header.vue'
	import SideBar from '@/components/SideBar.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		components: {
			Header,
			SideBar,
			Footer
		},
		data() {
			return {
				loading: true
			};
		},
		methods: {
			setLoading() {
				setTimeout(() => this.loading = false, 700);
			},
		},
		mounted() {
			window.onload = () => this.setLoading();
		}
	}
</script>