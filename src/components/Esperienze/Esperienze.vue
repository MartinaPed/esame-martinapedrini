<script setup>
import BarraEsperienza from './BarraEsperienza.vue'
import ContattaciOra from '../ContattaciOra.vue'
import Footer from '../Homepage/Footer.vue'
import vecchiettovaligia from '../../assets/esperienze/vecchiettovaligia.png'
</script>

<template>

  <!-- Titolo -->
  <section class="text-center px-4 md:px-8 py-10 md:py-16">
    <h1 class="font-grande text-[60px] md:text-[80px] lg:text-[96px] leading-tight uppercase">
      le nostre<br />esperienze
    </h1>
  </section>

  <!-- Elenco esperienze -->
  <section class="flex flex-col px-4 md:px-8 py-6 md:py-10 w-full max-w-[1200px] mx-auto">
    <hr class="border-t-2 border-black mb-4" />
    <BarraEsperienza titolo="Volo all'alba"      minuti="60 min" colore="#FFDD32" to="/alba" />
    <hr class="border-t-2 border-black my-4" />
    <BarraEsperienza titolo="Love is in the air" minuti="90 min" colore="#FF7FD4" to="/love" />
    <hr class="border-t-2 border-black my-4" />
    <BarraEsperienza titolo="Enjoint flight"     minuti="75 min" colore="#00D312" to="/enjoint" />
    <hr class="border-t-2 border-black my-4" />
    <BarraEsperienza titolo="Jump no scare"      minuti="45 min" colore="#3DD8FC" to="/jump" />
    <hr class="border-t-2 border-black mt-4" />
  </section>

  <!-- CTA -->
  <ContattaciOra />

  <!-- Immagine decorativa -->
  <section class="flex justify-end px-4 md:px-8 pb-6 md:pb-10">
    <img :src="vecchiettovaligia" alt="" class="w-[120px] md:w-[200px] h-auto" />
  </section>

  <Footer />

</template>
