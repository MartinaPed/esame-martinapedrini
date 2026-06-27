<script setup>
import peperoncino from '../../assets/alba/peperoncino.png'
import bustina from '../../assets/alba/bustina.png'
import manocorna from '../../assets/alba/manocorna.png'
</script>

<template>
  <section class="flex items-center justify-center gap-8 px-16 py-10">

    <!-- Card SESSO -->
    <div class="flex flex-col items-center justify-center gap-2 border-4 border-[#FFDD32] rounded-[32px] px-6 py-4 w-[280px] h-[280px]">
      <img :src="peperoncino" alt="" class="w-[100px] h-[110px] object-contain" />
      <p class="font-fuck text-[64px]">SESSO</p>
      <div class="flex items-center gap-2">
        <span class="w-[32px] h-[12px] rounded-full bg-[#ff0000]"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
      </div>
    </div>

    <!-- Card DROGA -->
    <div class="flex flex-col items-center justify-center gap-2 border-4 border-[#FFDD32] rounded-[32px] px-6 py-4 w-[280px] h-[280px]">
      <img :src="bustina" alt="" class="w-[100px] h-[110px] object-contain" />
      <p class="font-fuck text-[64px]">DROGA</p>
      <div class="flex items-center gap-2">
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
      </div>
    </div>

    <!-- Card N ROOL -->
    <div class="flex flex-col items-center justify-center gap-2 border-4 border-[#FFDD32] rounded-[32px] px-6 py-4 w-[280px] h-[280px]">
      <img :src="manocorna" alt="" class="w-[100px] h-[110px] object-contain" />
      <p class="font-fuck text-[64px]">N ROOL</p>
      <div class="flex items-center gap-2">
        <span class="w-[32px] h-[12px] rounded-full bg-[#ff0000]"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
        <span class="w-[32px] h-[12px] rounded-full bg-gray-300"></span>
      </div>
    </div>

  </section>
</template>
