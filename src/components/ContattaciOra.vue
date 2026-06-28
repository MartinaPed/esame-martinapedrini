<script setup>
import cerchio from '../assets/cta/cerchio.png'
import wh from '../assets/cta/wh.png'
import frecciaaltosx from '../assets/cta/frecciaaltosx.png'
import frecciaaltodx from '../assets/cta/frecciaaltodx.png'
import frecciabassosx from '../assets/cta/frecciabassosx.png'
import frecciabassodx from '../assets/cta/frecciabassodx.png'
</script>

<template>
  <section class="flex items-center justify-center px-8 py-20">
    <div class="relative flex items-center justify-center w-[700px] h-[400px]">

      <!-- Frecce agli angoli -->
      <img :src="frecciaaltosx"  alt="" class="absolute top-[20px] left-[20px]  w-[120px] h-auto" />
      <img :src="frecciaaltodx"  alt="" class="absolute top-[20px] right-[20px] w-[120px] h-auto" />
      <img :src="frecciabassosx" alt="" class="absolute bottom-[20px] left-[20px]  w-[120px] h-auto" />
      <img :src="frecciabassodx" alt="" class="absolute bottom-[20px] right-[20px] w-[120px] h-auto" />

      <!-- Cerchio + testo -->
      <a
        href="https://wa.me/393319079252"
        target="_blank"
        rel="noopener"
        class="relative flex items-center justify-center w-[460px] h-[280px]"
      >
        <img :src="cerchio" alt="" class="absolute inset-0 w-full h-full object-fill" />
        <div class="relative flex flex-col items-center justify-center gap-2">
          <span class="font-grande text-[60px] leading-none">CONTATTACI</span>
          <span class="flex items-center gap-3 font-grande text-[60px] leading-none">
            <img :src="wh" alt="WhatsApp" class="w-[80px] h-auto" />
            ORA!!
          </span>
        </div>
      </a>

    </div>
  </section>
</template>
