<script setup>
import frecciacurva from '../../assets/frecciacurva.png'
import HomepageCarosello from './HomepageCarosello.vue'
</script>

<template>
  <section class="flex flex-col items-center px-4 md:px-8 py-10 md:py-20 gap-10 md:gap-20">
    <!-- Titolo della sezione -->
    <h2 class="font-grande text-[50px] md:text-[100px] lg:text-[150px] leading-none text-center uppercase">
      le nostre esperienze<br />più odiate
    </h2>

    <!-- Due colonne: carosello a sinistra, testo a destra -->
    <div class="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-16 w-full max-w-[1600px]">

      <!-- COLONNA SINISTRA: carosello -->
      <div class="flex-1 w-full">
        <HomepageCarosello />
      </div>

      <!-- COLONNA DESTRA: testo + scoprile tutte -->
      <div class="flex-1 flex flex-col gap-8 md:gap-16">
        <!-- Testo descrittivo -->
        <p class="font-testo text-[20px] md:text-[28px] lg:text-[32px] leading-relaxed">
          Ogni volo è diverso, ogni persona pure. C'è chi parte all'alba e chi aspetta il tramonto. Chi vuole stare in silenzio e chi vuole fare casino.<br />
          Scopri quale fa per te.
        </p>

        <!-- Scoprile tutte + freccia -->
        <div class="flex items-center gap-4 md:gap-8 md:-ml-32">
          <img :src="frecciacurva" alt="" class="w-[150px] md:w-[300px] lg:w-[400px] h-auto" />
          <router-link to="/esperienze" class="group relative block cursor-pointer font-grande text-[70px] md:text-[110px] lg:text-[150px] leading-none text-center">
            <p class="group-hover:opacity-0 transition-opacity">
              scoprile<br />tutte
            </p>
            <p class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[#ff0000]">
              clicca<br />qui
            </p>
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>