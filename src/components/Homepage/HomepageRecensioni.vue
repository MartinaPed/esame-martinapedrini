<script setup>
import faccia1 from '../../assets/avatar/faccia1.png'
import faccia2 from '../../assets/avatar/faccia2.png'
import faccia3 from '../../assets/avatar/faccia3.png'
import nuvoletta from '../../assets/nuvoletta.png'
import logo from '../../assets/logo.png'
</script>

<template>
  <section class="flex flex-col items-center px-4 md:px-8 py-10 md:py-20 gap-10 md:gap-20">
    <!-- Titolo -->
    <h2 class="font-grande text-[60px] md:text-[110px] lg:text-[150px] leading-none text-center uppercase">
      dicono di noi
    </h2>

    <div class="flex flex-col w-full max-w-[1800px]">

      <!-- ===== COPPIA 1 ===== -->
      <div class="flex flex-col">
        <!-- Recensione cliente -->
        <div class="flex items-center gap-3 md:gap-6 self-start w-[90%] md:w-[85%]">
          <img :src="faccia3" alt="" class="w-[70px] md:w-[180px] h-auto shrink-0" />
          <div class="relative flex-1">
            <img :src="nuvoletta" alt="" class="w-full h-auto" />
            <p class="absolute inset-0 flex items-start justify-center text-center font-grande text-[16px] sm:text-[24px] md:text-[44px] lg:text-[64px] leading-tight px-[14%] pt-[26%]">
              Lassù mi sono sentita di nuovo una ragazzina. Non so cosa mettono nel cestino del pic-nic ma voglio la ricetta
            </p>
          </div>
        </div>
        <!-- Risposta NadaMas -->
        <div class="flex items-center gap-3 md:gap-6 self-end w-[90%] md:w-[85%] -mt-[8%] md:-mt-[20%] opacity-50 hover:opacity-100 transition-opacity">
          <div class="relative flex-1">
            <img :src="nuvoletta" alt="" class="w-full h-auto scale-x-[-1]" />
            <p class="absolute inset-0 flex items-start justify-center text-center font-grande text-[16px] sm:text-[24px] md:text-[44px] lg:text-[64px] leading-tight px-[14%] pt-[26%]">
              Il segreto è nell'altitudine. E nel vino
            </p>
          </div>
          <img :src="logo" alt="NadaMas" class="w-[55px] md:w-[150px] h-auto shrink-0" />
        </div>
      </div>

      <!-- ===== COPPIA 2 ===== -->
      <div class="flex flex-col -mt-[4%] md:-mt-[12%]">
        <!-- Recensione cliente -->
        <div class="flex items-center gap-3 md:gap-6 self-start w-[90%] md:w-[85%]">
          <img :src="faccia2" alt="" class="w-[70px] md:w-[180px] h-auto shrink-0" />
          <div class="relative flex-1">
            <img :src="nuvoletta" alt="" class="w-full h-auto" />
            <p class="absolute inset-0 flex items-start justify-center text-center font-grande text-[16px] sm:text-[24px] md:text-[44px] lg:text-[64px] leading-tight px-[14%] pt-[26%]">
              Il bungee jumping mi ha tolto venti anni. Mia moglie dice che torno a casa con una faccia che non vede dai tempi del luna di miele
            </p>
          </div>
        </div>
        <!-- Risposta NadaMas -->
        <div class="flex items-center gap-3 md:gap-6 self-end w-[90%] md:w-[85%] -mt-[8%] md:-mt-[20%] opacity-50 hover:opacity-100 transition-opacity">
          <div class="relative flex-1">
            <img :src="nuvoletta" alt="" class="w-full h-auto scale-x-[-1]" />
            <p class="absolute inset-0 flex items-start justify-center text-center font-grande text-[16px] sm:text-[24px] md:text-[44px] lg:text-[64px] leading-tight px-[14%] pt-[26%]">
              Effetto collaterale documentato. Non rimborsiamo i matrimoni
            </p>
          </div>
          <img :src="logo" alt="NadaMas" class="w-[55px] md:w-[150px] h-auto shrink-0" />
        </div>
      </div>

      <!-- ===== COPPIA 3 ===== -->
      <div class="flex flex-col -mt-[4%] md:-mt-[12%]">
        <!-- Recensione cliente -->
        <div class="flex items-center gap-3 md:gap-6 self-start w-[90%] md:w-[85%]">
          <img :src="faccia1" alt="" class="w-[70px] md:w-[180px] h-auto shrink-0" />
          <div class="relative flex-1">
            <img :src="nuvoletta" alt="" class="w-full h-auto" />
            <p class="absolute inset-0 flex items-start justify-center text-center font-grande text-[16px] sm:text-[24px] md:text-[44px] lg:text-[64px] leading-tight px-[14%] pt-[26%]">
              Ho incontrato un signore sulla mongolfiera. Siamo atterrati insieme. Non aggiungo altro
            </p>
          </div>
        </div>
        <!-- Risposta NadaMas -->
        <div class="flex items-center gap-3 md:gap-6 self-end w-[90%] md:w-[85%] -mt-[8%] md:-mt-[20%] opacity-50 hover:opacity-100 transition-opacity">
          <div class="relative flex-1">
            <img :src="nuvoletta" alt="" class="w-full h-auto scale-x-[-1]" />
            <p class="absolute inset-0 flex items-start justify-center text-center font-grande text-[16px] sm:text-[24px] md:text-[44px] lg:text-[64px] leading-tight px-[14%] pt-[26%]">
              Atterraggio morbido. Per entrambi
            </p>
          </div>
          <img :src="logo" alt="NadaMas" class="w-[55px] md:w-[150px] h-auto shrink-0" />
        </div>
      </div>

    </div>
  </section>
</template>
