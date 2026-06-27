<script setup>
import ChiSiamoLogo from './ChiSiamoLogo.vue'
import ChiSiamoTitolo from './ChiSiamoTitolo.vue'
import ChiSiamoPresentazione from './ChiSiamoPresentazione.vue'
import ChiSiamoNuvole from './ChiSiamoNuvole.vue'
import ContattaciOra from '../ContattaciOra.vue'
import faccia from '../../assets/chisiamo/faccia.png'
</script>

<template>
  <ChiSiamoLogo />
  <ChiSiamoTitolo />
  <ChiSiamoPresentazione />
  <ChiSiamoNuvole />
  <ContattaciOra />
  <div class="flex justify-start px-8 pb-10">
    <img :src="faccia" alt="" class="w-[350px] h-auto" />
  </div>
</template>

<style scoped>
</style>