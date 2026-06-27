<script setup>
import nuvola1 from '../../assets/chisiamo/nuvola1.png'
import nuvola2 from '../../assets/chisiamo/nuvola2.png'
import stella from '../../assets/chisiamo/stella.png'
import bocca from '../../assets/chisiamo/bocca.png'
import bustina from '../../assets/chisiamo/bustina.png'
import manocorna from '../../assets/chisiamo/manocorna.png'
</script>

<template>
  <section class="mt-[60px]">
    <!-- Titoletto -->
    <h2 class="font-grande font-normal text-[96px] text-center">
      VOLA CON NOI SOLO SE CERCHI:
    </h2>

    <!-- Contenitore relativo -->
    <div class="relative w-full h-[500px]">

      <!-- Decorazioni -->
      <img :src="bocca" alt="" class="absolute top-[20px] left-[40px] w-[160px] h-auto" />
      <img :src="bustina" alt="" class="absolute top-[160px] right-[60px] w-[130px] h-auto rotate-[10deg]" />
      <img :src="manocorna" alt="" class="absolute bottom-[20px] left-[180px] w-[140px] h-auto" />

      <!-- Nuvola SESSO -->
      <div class="absolute top-[2px] left-[200px] w-[400px]">
        <img :src="nuvola1" alt="" class="w-full" />
        <span
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)] font-fuck text-[100px] whitespace-nowrap"
        >SESSO</span>
      </div>

      <!-- Nuvola DROGA -->
      <div class="absolute top-[-80px] right-[250px] w-[400px]">
        <img :src="nuvola2" alt="" class="w-full" />
        <span
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-40px)] font-fuck text-[100px] whitespace-nowrap"
        >DROGA</span>
      </div>

      <!-- Stella ROCK'N'ROLL -->
      <div class="absolute top-[100px] left-1/2 -translate-x-1/2 w-[500px]">
        <img :src="stella" alt="" class="w-full" />
        <span
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-fuck text-[80px] whitespace-nowrap"
        >ROCK'N'ROLL</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
</style>