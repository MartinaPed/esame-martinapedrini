<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Footer from './Homepage/Footer.vue'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.set('.shop-tagline', { opacity: 0, x: -150 })
  gsap.to('.shop-tagline', {
    opacity: 1,
    x: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.shop-tagline',
      start: 'top 90%',
      end: 'top 30%',
      scrub: 1,
    }
  })

gsap.set('.shop-colleziona', { opacity: 0, x: -150 })
  gsap.to('.shop-colleziona', {
    opacity: 1,
    x: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.shop-colleziona',
      start: 'top 90%',
      end: 'top 30%',
      scrub: 1,
    }
  })
})
import logorossogrande from '../assets/shop/logorossogrande.png'
import logoorizzontale from '../assets/logoorizzontale.png'
import vecchiettaapertura from '../assets/shop/vecchiettaapertura.png'
import mockupMagliette1 from '../assets/shop/MOCKUP_MAGLIETTE_1.png'
import mockupMagliette4 from '../assets/shop/MOCKUP_MAGLIETTE_4.png'
import skate1 from '../assets/shop/skate1.png'
import skate2 from '../assets/shop/skate2.png'
import skate3 from '../assets/shop/skate3.png'
import brochure1 from '../assets/shop/BROCHURE_1.png'
import brochure3 from '../assets/shop/BROCHURE_3.png'
import spille from '../assets/shop/MOCKUP_SPILLE.png'
import cappellini from '../assets/shop/MOCKUP_CAPPELLINI.png'
import cappellini2 from '../assets/shop/MOCKUP_CAPPELLINI2.png'

</script>

<template>

  <!-- ── HERO ── -->
  <section class="relative w-full h-screen">
    <img :src="vecchiettaapertura" alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 flex flex-col items-center justify-center">
      <h1 class="font-grande text-[200px] leading-none text-black">SHOP</h1>
    </div>
    <p class="shop-tagline absolute bottom-10 left-0 right-0 text-center font-grande text-[120px] leading-none text-white">
      Portati a casa un pezzo di follia
    </p>
  </section>

  <!-- ── IL NOSTRO MERCH ── -->
  <section class="px-16 py-12">
    <h2 class="font-grande text-[96px] text-[#ff0000] mb-10">IL NOSTRO MERCH</h2>

    <!-- Foto magliette stesa -->
    <img :src="mockupMagliette1" alt="" class="w-full h-auto object-cover mb-10" />

    <!-- Tutti vogliono vestire -->
    <div class="mb-10 flex flex-col items-center">
      <p class="shop-vestire-testo font-grande text-[120px] text-center leading-none">Tutti vogliono vestire</p>
      <img :src="logoorizzontale" alt="Nadamás" class="shop-vestire-logo w-full max-w-[600px] h-auto" />
    </div>

    <!-- 3 foto skate -->
    <div class="flex gap-4 mb-16">
      <img :src="skate1" alt="" class="flex-1 h-[600px] object-cover" />
      <img :src="skate2" alt="" class="flex-1 h-[600px] object-cover" />
      <img :src="skate3" alt="" class="flex-1 h-[600px] object-cover" />
    </div>

    <!-- Maglietta prezzo -->
    <div class="flex flex-col items-center gap-8 mb-16">
      <p class="font-grande text-[120px] text-center leading-none">La tua nuova maglietta<br />preferita a soli</p>
      <p class="font-grande text-[96px] leading-none">50 €</p>
      <img :src="mockupMagliette4" alt="" class="w-full max-w-[800px] h-auto" />
    </div>

    <!-- Brochure / parole crociate -->
    <div class="mb-16">
      <p class="shop-colleziona font-grande text-[120px] leading-none mb-6">Collezionale tutte</p>

      <!-- Foto 1: centrata con testo a destra -->
      <div class="flex items-center justify-center gap-10 mb-8">
        <img :src="brochure1" alt="" class="w-[905px] h-[509px] object-cover" />
        <p class="font-grande text-[64px] leading-tight max-w-[400px]">Prova le nostre parole crociate speciali</p>
      </div>

      <!-- Foto 2: centrata con prezzo a sinistra -->
      <div class="flex items-center justify-center gap-10">
        <p class="font-grande text-[96px] leading-none">15€</p>
        <img :src="brochure3" alt="" class="w-[905px] h-[509px] object-cover" />
      </div>
    </div>

    <!-- Spille -->
    <div class="my-16">
      <p class="font-grande text-[120px] leading-none text-center mb-6">Ogni volo una spilla diversa<br />Riempi la tua salopette</p>
      <img :src="spille" alt="" class="w-full h-auto" />
    </div>

    <!-- Cappellini -->
    <!-- Foto 1: centrata con testo a destra -->
    <div class="flex items-center justify-center gap-10 mb-8">
      <img :src="cappellini" alt="" class="w-[905px] h-[509px] object-cover" />
      <p class="font-grande text-[64px] leading-tight max-w-[400px]">Non lasciarti scappare lo stile<br />Esagera con i nostri cappellini</p>
    </div>

    <!-- Foto 2: centrata con prezzo a sinistra -->
    <div class="flex items-center justify-center gap-10 mb-16">
      <p class="font-grande text-[96px] leading-none">20€</p>
      <img :src="cappellini2" alt="" class="w-[905px] h-[509px] object-cover" />
    </div>

    <!-- Logo rosso finale -->
    <div class="flex justify-center py-10">
      <img :src="logorossogrande" alt="Nadamás" class="w-full max-w-[900px] h-auto" />
    </div>

  </section>

  <Footer />

</template>
