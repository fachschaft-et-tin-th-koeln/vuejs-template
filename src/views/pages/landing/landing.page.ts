import { Options, Vue } from 'vue-class-component'

// Layouts

// Components

// Sections
import HeroSection from '@/views/sections/landing/hero/hero.section.vue';
import FeatureSection from '@/views/sections/landing/features/features.section.vue';
import TestimonialSection from '@/views/sections/landing/testimonials/testimonials.section.vue';
import CallToActionSection from '@/views/sections/landing/callToAction/callToAction.section.vue';

@Options({
	name: "LandingPage",
	components: {
		HeroSection,
		FeatureSection,
		TestimonialSection,
		CallToActionSection
	}
})
export default class LandingPage extends Vue {

}
