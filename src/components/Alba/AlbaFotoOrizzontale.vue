<script setup>
import foreveryoung from '../../assets/alba/foreveryoung.png'
</script>

<template>
  <section class="flex items-end justify-center px-16 py-10 gap-0">

    <!-- Rettangolo giallo sx -->
    <div class="bg-[#FFDD32] rounded-[32px] flex flex-col items-center justify-center px-10 py-12 shrink-0 w-[360px] mb-20">
      <p class="font-fuck text-[96px] leading-tight text-center">Volo ALBA</p>
      <p class="font-testo text-[24px] leading-tight mt-4 text-center">Vola<br />nell'esperienza</p>
    </div>

    <!-- Foto dx -->
    <div class="w-[600px] shrink-0 -ml-1">
      <img :src="foreveryoung" alt="" class="w-full h-auto rounded-[32px] object-cover" />
    </div>

  </section>
</template>
