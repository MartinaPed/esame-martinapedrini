<script setup>
import foto1 from '../../assets/alba/vecchifesta.png'
import foto2 from '../../assets/alba/f57e201c-7236-4342-82a8-25e752f173ea.png'
import foto3 from '../../assets/alba/foreveryoung.png'
import faccia2 from '../../assets/alba/faccia2.png'
import faccia5 from '../../assets/alba/faccia5.png'
import logogiallo from '../../assets/logocolorato/logogiallo.png'
</script>

<template>
  <section class="flex flex-col px-8 py-10 gap-8">

    <!-- Titolo -->
    <h2 class="font-grande text-[96px] leading-tight text-center uppercase">
      Ecco un assaggio dei<br />nostri voli
    </h2>

    <!-- 3 foto affiancate -->
    <div class="flex gap-2 w-full">
      <img :src="foto1" alt="" class="flex-1 h-[400px] object-cover" />
      <img :src="foto2" alt="" class="flex-1 h-[400px] object-cover" />
      <img :src="foto3" alt="" class="flex-1 h-[400px] object-cover" />
    </div>

    <!-- Footer: facce + logo -->
    <div class="flex items-center justify-between px-8">
      <img :src="faccia2" alt="" class="w-[200px] h-auto" />
      <img :src="logogiallo" alt="Nadamás" class="w-[200px] h-auto" />
      <img :src="faccia5" alt="" class="w-[200px] h-auto" />
    </div>

  </section>
</template>
