<script setup>
import frecciacurva from '../../assets/frecciacurva.png'
import HomepageCarosello from './HomepageCarosello.vue'
</script>

<template>
  <section class="flex flex-col items-center px-8 py-20 gap-20">
    <!-- Titolo della sezione -->
    <h2 class="font-grande text-[150px] leading-none text-center uppercase">
      le nostre esperienze<br />più odiate
    </h2>

    <!-- Due colonne: carosello a sinistra, testo a destra -->
    <div class="flex items-start justify-center gap-16 w-full max-w-[1600px]">

      <!-- COLONNA SINISTRA: carosello -->
      <div class="flex-1">
        <HomepageCarosello />
      </div>

      <!-- COLONNA DESTRA: testo + scoprile tutte -->
      <div class="flex-1 flex flex-col gap-16">
        <!-- Testo descrittivo -->
        <p class="font-testo text-[32px] leading-relaxed">
          Ogni volo è diverso, ogni persona pure. C'è chi parte all'alba e chi aspetta il tramonto. Chi vuole stare in silenzio e chi vuole fare casino.<br />
          Scopri quale fa per te.
        </p>

        <!-- Scoprile tutte + freccia (freccia a SINISTRA) -->
        <div class="flex items-center gap-8 -ml-32">
          <img :src="frecciacurva" alt="" class="w-[400px] h-auto" />
          <router-link to="/esperienze" class="group relative block cursor-pointer font-grande text-[150px] leading-none text-center">
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