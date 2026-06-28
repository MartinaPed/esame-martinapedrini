<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import HomepageHero from './HomepageHero.vue'
import HomepagePresentazione from './HomepagePresentazione.vue'
import HomepageSezioneDue from './HomepageSezioneDue.vue'
import HomepageRecensioni from './HomepageRecensioni.vue'
import HomepageOpinioni from './HomepageOpinioni.vue'
import Footer from './Footer.vue'
import faccia6 from '../../assets/avatar/faccia6.png'
import ContattaciOra from '../ContattaciOra.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.gsap-fade').forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 60,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      }
    })
  })
})
</script>

<template>
  <HomepageHero />
  <div class="gsap-fade"><HomepagePresentazione /></div>
  <div class="gsap-fade"><HomepageSezioneDue /></div>
  <div class="gsap-fade"><HomepageRecensioni /></div>
  <div class="gsap-fade"><HomepageOpinioni /></div>
  <div class="gsap-fade"><ContattaciOra /></div>

  <!-- Footer + faccia6 affiancati -->
  <div class="flex items-end overflow-hidden">
    <div class="flex-1">
      <Footer />
    </div>
    <img
      :src="faccia6"
      alt=""
      class="w-[320px] h-auto shrink-0 rotate-12 translate-x-10 translate-y-16"
    />
  </div>
</template>