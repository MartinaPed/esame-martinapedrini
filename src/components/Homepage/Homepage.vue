<script setup>
import HomepageHero from './HomepageHero.vue'
import HomepagePresentazione from './HomepagePresentazione.vue'
import HomepageSezioneDue from './HomepageSezioneDue.vue'
import HomepageRecensioni from './HomepageRecensioni.vue'
import HomepageOpinioni from './HomepageOpinioni.vue'
import Footer from './Footer.vue'
import faccia6 from '../../assets/avatar/faccia6.png'
import ContattaciOra from '../ContattaciOra.vue'
</script>

<template>
  <HomepageHero />
  <HomepagePresentazione />
  <HomepageSezioneDue />
  <HomepageRecensioni />
  <HomepageOpinioni />
  <ContattaciOra />

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