<script setup>
import mongolfiere from '../../assets/chisiamo/mongolfiere.png'
</script>

<template>
  <section class="flex items-start gap-[40px] px-[80px] mt-[80px]">
    <!-- Mongolfiere (PNG unico) - LARGHEZZA PROVVISORIA, dammi il valore Figma -->
    <img
      :src="mongolfiere"
      alt="Mongolfiere"
      class="w-[300px] shrink-0"
    />

    <!-- Testo a destra in LineSeed 32px, larghezza 831px da Figma -->
    <div class="font-testo text-[32px] w-[831px]">
      <p>
        Un branco di ragazzi tra i 18 e i 20 anni, pieni di energia,
        ironia e totale incoscienza emotiva. Sono loro la nostra crew:
        giovani, entusiasti e sorprendentemente pronti a gestire racconti
        di guerra, amori proibiti e ricordi che iniziano sempre con "ai
        miei tempi…".
      </p>
      <p>
        Li troverai a gonfiare mongolfiere, servire brindisi, ascoltare
        storie epiche e ridere insieme a chi ha vissuto più vite di loro.
        Un incontro generazionale ad alta quota, dove convive
        l'esperienza con la sfrontatezza e nessuno capisce davvero chi sta
        accompagnando chi.
      </p>
    </div>
  </section>
</template>

<style scoped>
</style>