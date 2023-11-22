import { Options, Vue } from 'vue-class-component'

// Components

@Options({
	name: "VueLayout",
	components: {

	}
})
export default class VueLayout extends Vue {
	public isAuthenticated = true;
}
