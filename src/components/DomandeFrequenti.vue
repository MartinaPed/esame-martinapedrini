<script setup>
import freccianera from '../assets/freccianera.png'
</script>

<template>
  <section class="flex flex-col items-center gap-4 px-6 md:px-16 py-8 md:py-10">

    <!-- Scarico di responsabilità -->
    <router-link to="/scarico-responsabilita" class="bg-[#FFDD32] rounded-full px-4 md:px-6 py-2 cursor-pointer">
      <span class="font-grande text-[20px] md:text-[28px] lg:text-[32px] uppercase">SCARICO DI RESPONSABILITÀ</span>
    </router-link>

    <!-- Barra rossa domande frequenti -->
    <router-link to="/domande-frequenti" class="flex items-center justify-between bg-[#cc0000] rounded-full px-6 md:px-10 py-3 md:py-4 w-full cursor-pointer">
      <span class="font-fuck text-[40px] md:text-[70px] lg:text-[96px] text-white leading-none">domande frequenti</span>
      <img :src="freccianera" alt="" class="w-[80px] md:w-[150px] lg:w-[200px] h-auto rotate-[-45deg]" />
    </router-link>

  </section>
</template>
