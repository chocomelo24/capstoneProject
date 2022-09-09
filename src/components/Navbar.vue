<template>
<header>
	<div class="container-box">
		<div class="logo"><img src="https://i.postimg.cc/JzDWMMDW/j-line-logo.jpg" alt="logo"></div>
		<nav id="menu">
			<ul v-show="!mobile" class="navigation">
				<div v-if="!user">
				<li>
					<router-link class= "link" to="/">Home</router-link>
					</li>
				</div>
					<router-link class= "link" to="/about">About</router-link>
				<li>
					<router-link class= "link" to="/register">Register</router-link>
					</li>
				<li>
					<router-link class= "link" to="/products">Products</router-link>
					</li>
					<div v-if="user">
						<div class="logout">
							<button type="button" @click="logout">Logout</button>
						</div>
						</div>
				<li>
					<router-link class= "link" to="/contact">Contacts</router-link>
					</li>
				<li>
					<router-link class= "link" to="/cart">Cart</router-link>
					</li>
			</ul>
		</nav>
		<svg onclick="menuShow()" onblur="menuClose()" id="burger" fill=" #fff" viewBox="0 0 448 512" title="bars">
			<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
		</svg>
	</div>
</header>
</template>


<script>
export default {
	name: "Navbar",

};
function menuShow() {
	document.getElementById("menu").classList.toggle("show");
}
function menuClose() {
	document.getElementById("menu").classList.remove("show");
}
</script>


<style>
   
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	/* min-height: 100vh; */
	font-family: monospace;
	color: black;
	display: flex;
	flex-direction: column;
}
header {
	background-image: url("../assets/glitter logo.jpg");
	width: 100%;
	padding: 1.5em 2em 0.5em;
}
.container-box {
	width: 100%;
	max-width: 1200px;
	margin-inline: auto;
	display: flex;
	position: relative;
	justify-content: space-between;
	align-items: center;
}

.logo {
	font-weight: bold;
	font-size: 1.25rem;
	padding-bottom: 0.5em;
}
nav ul {
	list-style: none;
	display: flex;
	gap: 1.5rem;
	font-size: 20px;
}
a {
	color: inherit;
	text-decoration: none;
	width: 100%;
	height: 100%;
	font-family: emoji;
}
nav ul li {
	border-bottom: 2px solid transparent;
	padding-bottom: 0.5em;
	transition: all 200ms ease;
	cursor: pointer;
}
nav ul li:hover {
	border-bottom: 2px solid black;
}
#burger {
	display: none;
}

@media (max-width: 768px) {
	#burger {
		box-sizing: initial;
		display: block;
		width: 1rem;
		color: palevioletred;
		cursor: pointer;
		margin-bottom: 0.5em;
	}
	#burger:focus {
		border: none;
		outline: none;
	}
	nav {
		position: absolute;
		right: 0;
		top: 3em;
		background: #ff5b6f ;
		min-width: 15em;
		padding: 2em;
		box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
		clip-path: circle(0% at 100% 0);
		transition: all 500ms ease-in-out;
	}
	nav.show {
		clip-path: circle(200% at 100% 0);
		transition-duration: 300ms;
	}
	nav ul {
		flex-direction: column;
	}
}


</style>