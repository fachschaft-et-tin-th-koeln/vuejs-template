import { Options, Vue } from 'vue-class-component'

// Components
import NavbarComponent from '@/components/navbar/navbar.component.vue'

@Options({
	name: "HeaderComponent",
	components: {
		NavbarComponent
	}
})
export default class HeaderComponent extends Vue {

}
