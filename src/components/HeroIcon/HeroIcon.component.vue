<template>
	<template v-if="this.icon">
		<component :is="getIcon(this.icon, this.variant)" />
	</template>
	<template v-else>
		<HomeIcon />
	</template>
</template>

<script src="./HeroIcon.component.ts"></script>