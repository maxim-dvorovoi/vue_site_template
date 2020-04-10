<template>
	<button
		:type="submit != null ? 'submit' : 'button'"
		:class="classes"
		:disabled="disabled || loading"
		@click="onClick"
	>
		<span v-if="!loading">
			<slot name="icon"></slot>
			<i v-if="icon" class="fa fa-fw" :class="'fa-' + icon"></i>
		</span>
		<span><i v-if="loading" class="fa fa-fw fa-spinner spin-fast"></i></span>
		<slot></slot>
		<div class="btn-drop-layer"></div>
	</button>
</template>

<script>
	export default {
		name: "btn",
		props: ['type', 'color', 'size', 'hidden', 'disabled', 'loading', 'submit', 'icon'],
		computed: {
			classes() {
				let COLORS = ['green', 'blue', 'grey', 'orange', 'red', 'white'];
				let SIZES = ['normal', 'small', 'large'];

				let color = COLORS.indexOf(this.color) !== -1 ? this.color : COLORS[0];
				let size = SIZES.indexOf(this.size) !== -1 ? this.size : SIZES[0];

				let classes = ['btn', 'btn-' + color, 'btn-' + size, 'nowrap'];
				if (this.hidden) {
					classes.push('btn-hidden');
				}

				return classes.join(' ');
			},
		},
		methods: {
			onClick(e) {
				this.$emit('click', e);
			}
		}
	}
</script>

<style scoped>
	.btn {
		position: relative;
		display: inline-block;
		overflow: hidden;
		color: #fff;
		border-radius: 5px;
		text-transform: uppercase;
		font-weight: 500;
		cursor: pointer;
		border: none;
		user-select: none;
		outline: none;
		transition: .1s;
		-webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
		-moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.3);
	}

	.btn:hover {
		transform: translateY(-1px);
		-webkit-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
		-moz-box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
	}

	.btn.btn-hidden {
		visibility: hidden;
		opacity: 0;
	}

	.btn.btn-large {
		padding: 15px 20px;
		font-size: 16px;
	}

	.btn.btn-normal {
		padding: 10px 15px;
		font-size: 14px;
	}

	.btn.btn-small {
		padding: 5px 10px;
	}

	.btn.btn-blue {
		background-color: #70a6e8;
	}

	.btn.btn-grey {
		background-color: #a7a7a7;
	}

	.btn.btn-green {
		background-color: #45826b;
	}

	.btn.btn-orange {
		background-color: #ffa51f;
	}

	.btn.btn-red {
		background-color: #ec225a;
	}

	.btn.btn-white {
		background-color: white;
		color: black;
	}

	.btn .btn-drop-layer {
		visibility: hidden;
		opacity: 0;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.3);
		transition: .1s;
	}
</style>