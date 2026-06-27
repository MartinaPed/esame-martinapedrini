<script setup>
import nadamas from '../../assets/logoorizzontale.png'
</script>

<template>
  <section class="flex flex-col items-center justify-center px-8 py-20">
    <!-- Titolo Nadamás (immagine PNG) -->
    <img :src="nadamas" alt="Nadamás" class="w-full max-w-[1100px] h-auto" />

    <!-- Payoff in FontGrande 150px -->
    <p class="font-grande text-[150px] leading-none text-center -mt-56">
      too old to die<br />
      too high to care
    </p>
  </section>
</template>