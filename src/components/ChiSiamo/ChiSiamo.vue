<script setup>
import ContattaciOra from '../ContattaciOra.vue'
import Footer from '../Homepage/Footer.vue'
import logorossogrande from '../../assets/chisiamo/logorossogrande.png'
import pdidomanda from '../../assets/chisiamo/pdidomanda.png'
import mongolfiere from '../../assets/chisiamo/mongolfiere.png'
import nuvola1 from '../../assets/chisiamo/nuvola1.png'
import nuvola2 from '../../assets/chisiamo/nuvola2.png'
import stella from '../../assets/chisiamo/stella.png'
import bocca from '../../assets/chisiamo/bocca.png'
import bustina from '../../assets/chisiamo/bustina.png'
import manocorna from '../../assets/chisiamo/manocorna.png'
import faccia from '../../assets/chisiamo/faccia.png'
</script>

<template>

  <!-- Logo rosso grande -->
  <section class="flex justify-center px-8 py-10">
    <img :src="logorossogrande" alt="Nadamás" class="w-full max-w-[900px] h-auto" />
  </section>

  <!-- Titolo -->
  <section class="text-center">
    <h1 class="font-grande font-normal text-[150px] leading-[129px]">
      <span class="block">CHI TI ACCOMPAGNA</span>
      <span class="block">
        NEI NOSTRI VOLI<img :src="pdidomanda" alt="?" class="inline-block w-[60px] align-baseline" />
      </span>
    </h1>
  </section>

  <!-- Presentazione -->
  <section class="flex items-start gap-[40px] px-[80px] mt-[80px]">
    <img :src="mongolfiere" alt="Mongolfiere" class="w-[300px] shrink-0" />
    <div class="font-testo text-[32px] w-[831px]">
      <p>
        Un branco di ragazzi tra i 18 e i 20 anni, pieni di energia,
        ironia e totale incoscienza emotiva. Sono loro la nostra crew:
        giovani, entusiasti e sorprendentemente pronti a gestire racconti
        di guerra, amori proibiti e ricordi che iniziano sempre con "ai miei tempi…".
      </p>
      <p>
        Li troverai a gonfiare mongolfiere, servire brindisi, ascoltare
        storie epiche e ridere insieme a chi ha vissuto più vite di loro.
        Un incontro generazionale ad alta quota, dove convive
        l'esperienza con la sfrontatezza e nessuno capisce davvero chi sta accompagnando chi.
      </p>
    </div>
  </section>

  <!-- Nuvole -->
  <section class="mt-[60px]">
    <h2 class="font-grande font-normal text-[96px] text-center">
      VOLA CON NOI SOLO SE CERCHI:
    </h2>
    <div class="relative w-full h-[500px]">
      <img :src="bocca" alt="" class="absolute top-[20px] left-[40px] w-[160px] h-auto" />
      <img :src="bustina" alt="" class="absolute top-[160px] right-[60px] w-[130px] h-auto rotate-[10deg]" />
      <img :src="manocorna" alt="" class="absolute bottom-[20px] left-[180px] w-[140px] h-auto" />
      <div class="absolute top-[2px] left-[200px] w-[400px]">
        <img :src="nuvola1" alt="" class="w-full" />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+40px)] font-fuck text-[100px] whitespace-nowrap">SESSO</span>
      </div>
      <div class="absolute top-[-80px] right-[250px] w-[400px]">
        <img :src="nuvola2" alt="" class="w-full" />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-40px)] font-fuck text-[100px] whitespace-nowrap">DROGA</span>
      </div>
      <div class="absolute top-[100px] left-1/2 -translate-x-1/2 w-[500px]">
        <img :src="stella" alt="" class="w-full" />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-fuck text-[80px] whitespace-nowrap">ROCK'N'ROLL</span>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <ContattaciOra />

  <!-- Faccia decorativa -->
  <div class="flex justify-start px-8 pb-10">
    <img :src="faccia" alt="" class="w-[350px] h-auto" />
  </div>
  <Footer />

</template>
