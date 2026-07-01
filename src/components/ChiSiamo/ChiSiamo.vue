<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
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

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // titolo entra da destra
  gsap.set('.chisiamo-titolo', { opacity: 0, x: 200 })
  gsap.to('.chisiamo-titolo', {
    opacity: 1,
    x: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.chisiamo-titolo',
      start: 'top 90%',
      end: 'top 50%',
      scrub: 1,
    }
  })

  // le nuvole appaiono in sequenza dal basso
  gsap.utils.toArray('.chisiamo-nuvola').forEach((el, i) => {
    gsap.set(el, { opacity: 0, y: 60 })
    gsap.to(el, {
      opacity: 1,
      y: 0,
      ease: 'none',
      delay: i * 0.1,
      scrollTrigger: {
        trigger: '.chisiamo-nuvole-wrapper',
        start: 'top 85%',
        end: 'top 40%',
        scrub: 1,
      }
    })
  })
})
</script>

<template>

  <!-- Logo rosso grande -->
  <section class="flex justify-center px-4 md:px-8 py-8 md:py-10">
    <img :src="logorossogrande" alt="Nadamás" class="w-full max-w-[900px] h-auto" />
  </section>

  <!-- Titolo -->
  <section class="text-center px-4">
    <h1 class="chisiamo-titolo font-grande font-normal text-[50px] md:text-[100px] lg:text-[150px] leading-tight md:leading-[129px]">
      <span class="block">CHI TI ACCOMPAGNA</span>
      <span class="block">
        NEI NOSTRI VOLI<img :src="pdidomanda" alt="?" class="inline-block w-[30px] md:w-[60px] align-baseline" />
      </span>
    </h1>
  </section>

  <!-- Presentazione -->
  <section class="flex flex-col md:flex-row items-start gap-8 md:gap-[40px] px-6 md:px-[80px] mt-10 md:mt-[80px]">
    <img :src="mongolfiere" alt="Mongolfiere" class="w-[180px] md:w-[300px] shrink-0 mx-auto md:mx-0" />
    <div class="font-testo text-[18px] md:text-[28px] lg:text-[32px] w-full md:w-[831px]">
      <p>
        Un branco di ragazzi tra i 18 e i 20 anni, pieni di energia,
        ironia e totale incoscienza emotiva. Sono loro la nostra crew:
        giovani, entusiasti e sorprendentemente pronti a gestire racconti
        di guerra, amori proibiti e ricordi che iniziano sempre con "ai miei tempi…".
      </p>
      <p class="mt-4">
        Li troverai a gonfiare mongolfiere, servire brindisi, ascoltare
        storie epiche e ridere insieme a chi ha vissuto più vite di loro.
        Un incontro generazionale ad alta quota, dove convive
        l'esperienza con la sfrontatezza e nessuno capisce davvero chi sta accompagnando chi.
      </p>
    </div>
  </section>

  <!-- Nuvole -->
  <section class="mt-10 md:mt-[60px]">
    <h2 class="font-grande font-normal text-[40px] md:text-[70px] lg:text-[96px] text-center px-4">
      VOLA CON NOI SOLO SE CERCHI:
    </h2>
    <div class="chisiamo-nuvole-wrapper relative w-full h-[300px] md:h-[500px]">
      <img :src="bocca" alt="" class="chisiamo-nuvola absolute top-[10px] left-[20px] w-[80px] md:w-[160px] h-auto" />
      <img :src="bustina" alt="" class="chisiamo-nuvola absolute top-[80px] right-[30px] w-[65px] md:w-[130px] h-auto rotate-[10deg]" />
      <img :src="manocorna" alt="" class="chisiamo-nuvola absolute bottom-[10px] left-[90px] w-[70px] md:w-[140px] h-auto" />
      <div class="chisiamo-nuvola absolute top-[1px] left-[100px] md:left-[200px] w-[200px] md:w-[400px]">
        <img :src="nuvola1" alt="" class="w-full" />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+20px)] md:-translate-y-[calc(50%+40px)] font-fuck text-[50px] md:text-[100px] whitespace-nowrap">SESSO</span>
      </div>
      <div class="chisiamo-nuvola absolute top-[-40px] md:top-[-80px] right-[100px] md:right-[250px] w-[200px] md:w-[400px]">
        <img :src="nuvola2" alt="" class="w-full" />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-20px)] md:-translate-y-[calc(50%-40px)] font-fuck text-[50px] md:text-[100px] whitespace-nowrap">DROGA</span>
      </div>
      <div class="chisiamo-nuvola absolute top-[50px] md:top-[100px] left-1/2 -translate-x-1/2 w-[250px] md:w-[500px]">
        <img :src="stella" alt="" class="w-full" />
        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-fuck text-[40px] md:text-[80px] whitespace-nowrap">ROCK'N'ROLL</span>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <ContattaciOra />

  <!-- Faccia decorativa -->
  <div class="flex justify-start px-4 md:px-8 pb-6 md:pb-10">
    <img :src="faccia" alt="" class="w-[180px] md:w-[350px] h-auto" />
  </div>
  <Footer />

</template>
