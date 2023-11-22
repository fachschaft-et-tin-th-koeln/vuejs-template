<template>
	<template v-if="isAuthenticated">
		<div class="content">
			<router-view></router-view>
		</div>
	</template>
	<template v-else>
		<div class="content">
			<router-view />
		</div>
	</template>
</template>

<script src="./index.layout.ts"></script>,