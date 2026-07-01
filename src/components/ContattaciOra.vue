<script setup>
import cerchio from '../assets/cta/cerchio.png'
import wh from '../assets/cta/wh.png'
import frecciaaltosx from '../assets/cta/frecciaaltosx.png'
import frecciaaltodx from '../assets/cta/frecciaaltodx.png'
import frecciabassosx from '../assets/cta/frecciabassosx.png'
import frecciabassodx from '../assets/cta/frecciabassodx.png'
</script>

<template>
  <section class="flex items-center justify-center px-4 md:px-8 py-12 md:py-20">
    <div class="relative flex items-center justify-center w-[280px] h-[180px] md:w-[500px] md:h-[300px] lg:w-[700px] lg:h-[400px]">

      <!-- Frecce agli angoli -->
      <img :src="frecciaaltosx"  alt="" class="absolute top-[10px] left-[10px]  w-[50px] md:w-[90px] lg:w-[120px] h-auto" />
      <img :src="frecciaaltodx"  alt="" class="absolute top-[10px] right-[10px] w-[50px] md:w-[90px] lg:w-[120px] h-auto" />
      <img :src="frecciabassosx" alt="" class="absolute bottom-[10px] left-[10px]  w-[50px] md:w-[90px] lg:w-[120px] h-auto" />
      <img :src="frecciabassodx" alt="" class="absolute bottom-[10px] right-[10px] w-[50px] md:w-[90px] lg:w-[120px] h-auto" />

      <!-- Cerchio + testo -->
      <a
        href="https://wa.me/393319079252"
        target="_blank"
        rel="noopener"
        class="relative flex items-center justify-center w-[180px] h-[110px] md:w-[320px] md:h-[200px] lg:w-[460px] lg:h-[280px]"
      >
        <img :src="cerchio" alt="" class="absolute inset-0 w-full h-full object-fill" />
        <div class="relative flex flex-col items-center justify-center gap-1">
          <span class="font-grande text-[24px] md:text-[44px] lg:text-[60px] leading-none">CONTATTACI</span>
          <span class="flex items-center gap-2 font-grande text-[24px] md:text-[44px] lg:text-[60px] leading-none">
            <img :src="wh" alt="WhatsApp" class="w-[30px] md:w-[55px] lg:w-[80px] h-auto" />
            ORA!!
          </span>
        </div>
      </a>

    </div>
  </section>
</template>
