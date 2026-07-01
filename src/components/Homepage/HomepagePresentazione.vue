<script setup>
import cerchio from '../../assets/cerchio.png'
import frecciacurva from '../../assets/frecciacurva.png'
</script>

<template>
  <section class="flex flex-col items-center px-4 md:px-8 py-12 md:py-20 gap-8 md:gap-16">
    <!-- Cerchio con scritta CHI SIAMO -->
    <div class="relative inline-block w-full max-w-[900px]">
      <img :src="cerchio" alt="" class="w-full h-auto" />
      <h2 class="absolute inset-0 flex items-center justify-center font-grande text-[80px] md:text-[140px] lg:text-[200px] leading-none uppercase">
        chi siamo
      </h2>
    </div>

    <!-- Paragrafo descrizione -->
    <p class="font-testo text-[20px] md:text-[28px] lg:text-[32px] leading-relaxed text-center max-w-[1100px] -mt-8 md:-mt-24">
      Agenzia di viaggi per over 60 che punta tutto su avventura, ironia e vivacità: mongolfiere, adrenalina e zero stereotipi sulla terza età. Il divertimento è l'unica regola.
    </p>

    <!-- Freccia + scopri di più -->
    <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
      <img :src="frecciacurva" alt="" class="w-[200px] md:w-[400px] h-auto" />

      <router-link to="/chi-siamo" class="group relative block cursor-pointer font-grande text-[70px] md:text-[110px] lg:text-[150px] leading-none text-center">
        <p class="group-hover:opacity-0 transition-opacity">
          Scopri<br />di più
        </p>
        <p class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-[#ff0000]">
          Dai<br />clicca
        </p>
      </router-link>
    </div>
  </section>
</template>
