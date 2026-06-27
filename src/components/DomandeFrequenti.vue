<script setup>
import freccianera from '../assets/freccianera.png'
</script>

<template>
  <section class="flex flex-col items-center gap-4 px-16 py-10">

    <!-- Scarico di responsabilità -->
    <div class="bg-[#FFDD32] rounded-full px-6 py-2">
      <span class="font-grande text-[32px] uppercase">SCARICO DI RESPONSABILITÀ</span>
    </div>

    <!-- Barra rossa domande frequenti -->
    <div class="flex items-center justify-between bg-[#cc0000] rounded-full px-10 py-4 w-full">
      <span class="font-fuck text-[96px] text-white leading-none">domande frequenti</span>
      <img :src="freccianera" alt="" class="w-[200px] h-auto rotate-[-45deg]" />
    </div>

  </section>
</template>
