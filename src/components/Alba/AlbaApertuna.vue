<script setup>
import albaorizzontale from '../../assets/alba/albaorizzontale.png'
import cerchio from '../../assets/alba/cerchio.png'
</script>

<template>
  <section class="relative w-full h-screen">

    <!-- Foto di sfondo -->
    <img :src="albaorizzontale" alt="" class="absolute inset-0 w-full h-full object-cover" />

    <!-- Cerchio rosso + titolo -->
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="relative flex items-center justify-center w-[500px] h-[300px]">
        <img :src="cerchio" alt="" class="absolute inset-0 w-full h-full object-fill" />
        <p class="relative font-grande text-[96px] leading-none text-center text-white">
          VOLO<br />ALL'ALBA
        </p>
      </div>
    </div>

    <!-- Barra gialla in basso -->
    <div class="absolute bottom-10 left-10">
      <div class="flex items-center gap-4 bg-[#FFDD32] rounded-full px-8 py-4">
        <span class="text-[40px]">👥</span>
        <span class="font-testo text-[28px]">Viaggio aperto per <strong>60-99</strong></span>
      </div>
    </div>

  </section>
</template>
