<script setup>
</script>

<template>
  <div class="flex justify-end px-16 -mt-[300px] relative z-10">
    <div class="relative flex flex-col rounded-[32px] border-2 border-black overflow-hidden w-[320px] bg-[#FFFCE0]">

      <!-- Contenuto principale -->
      <div class="flex flex-col items-center gap-3 px-6 py-12">

        <!-- Polizza annullamento -->
        <span class="font-testo text-[16px] border border-black rounded-full px-4 py-1">
          polizza annullamento
        </span>

        <!-- Scopri le date -->
        <button class="bg-[#FFDD32] rounded-[16px] px-8 py-3 font-fuck text-[64px] w-full text-center border-2 border-black">
          scopri le date
        </button>

        <!-- Prezzo -->
        <p class="font-grande text-[32px] leading-none">190 €</p>

        <!-- Paga a rate -->
        <p class="font-testo text-[16px] -mt-4">paga a rate senza interessi</p>

        <!-- Durata -->
        <p class="font-grande text-[32px] leading-none">60min</p>

      </div>

      <!-- Barra gialla in fondo -->
      <div class="bg-[#FFDD32] py-1 text-center border-t-2 border-black">
        <span class="font-fuck text-[80px] leading-none">RELAX</span>
      </div>

    </div>
  </div>
</template>
