import { Options, Vue } from 'vue-class-component';

import * as HeroIconsOutline from '@heroicons/vue/outline';
import * as HeroIconsSolid from '@heroicons/vue/solid';

type HeroiconName = 'HomeIcon' | 'BeakerIcon' | 'AdjustmentsIcon' | 'AcademicCapIcon'; // Beispielhafte Icon-Namen

// Components

@Options({
	name: "HeroIcon",
	components: {

	},
	props: {
		icon: {
			type: String,
			required: true
		},
		variant: {
			type: String as () => 'Solid' | 'Outline',
			required: false,
			validator(value: string) {
				return ['Solid', 'Outline'].includes(value);
			},
			default: 'Solid'
		}
	}
})
export default class HeroIcon extends Vue {
	icon!: string;
	variant!: string;

	getIcon(iconName: string, variant: string) {
		const iconMap: Record<string, typeof HeroIconsSolid | typeof HeroIconsOutline> = {
			'Solid': HeroIconsSolid,
			'Outline': HeroIconsOutline,
		};

		if (variant in iconMap && typeof iconMap[variant][iconName as keyof typeof HeroIconsSolid] === 'function') {
			return iconMap[variant][iconName as keyof typeof HeroIconsSolid];
		}

		return null;
	}
}
