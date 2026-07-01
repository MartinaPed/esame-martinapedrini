<script setup>
import { RouterLink } from 'vue-router'
import logoorizzontale from '../../assets/logoorizzontale.png'
</script>

<template>
  <footer class="bg-[#FFFCE0] px-8 md:px-[60px] py-10 md:py-[60px] border-t-2 border-black">

    <!-- Logo + payoff -->
    <img :src="logoorizzontale" alt="Nadamás" class="h-[70px] md:h-[100px] w-auto mb-2 md:mb-[8px]" />
    <p class="font-testo text-[16px] md:text-[20px] text-black mb-8 md:mb-[40px]">too old to die · too high to care</p>

    <!-- Corpo footer: 3 colonne -->
    <div class="flex flex-col md:flex-row gap-10 md:gap-20 mb-8 md:mb-[40px]">

      <!-- Navigazione -->
      <div class="flex flex-col gap-2">
        <p class="font-grande text-[20px] md:text-[24px] text-black mb-2">VOLA CON NOI</p>
        <RouterLink to="/chi-siamo" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">Chi Siamo</RouterLink>
        <RouterLink to="/esperienze" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">Esperienze</RouterLink>
        <RouterLink to="/shop" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">Shop</RouterLink>
      </div>

      <!-- Contatti -->
      <div class="flex flex-col gap-2">
        <p class="font-grande text-[20px] md:text-[24px] text-black mb-2">PARLIAMONE</p>
        <a href="https://wa.me/393319079252" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">WhatsApp: +39 3319079252</a>
        <a href="mailto:ciao@nadamas.it" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">ciao@nadamas.it</a>
        <p class="font-testo text-[12px] md:text-[14px] text-gray-500">(rispondiamo tra un volo e l'altro)</p>
      </div>

      <!-- Social -->
      <div class="flex flex-col gap-2">
        <p class="font-grande text-[20px] md:text-[24px] text-black mb-2">SEGUICI IN QUOTA</p>
        <a href="https://instagram.com/nadamas.balloons" target="_blank" rel="noopener" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">Instagram @nadamas.balloons</a>
        <a href="https://tiktok.com/@nadamas" target="_blank" rel="noopener" class="font-testo text-[14px] md:text-[16px] hover:text-[#FF0000] transition-colors">TikTok @nadamas</a>
      </div>

    </div>

    <!-- Dati legali -->
    <div class="border-t border-gray-400 pt-4 md:pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
      <p class="font-testo text-[11px] md:text-[13px] text-gray-500">Nadamás S.r.l. · P.IVA 0999 0999 099 · Sede legale: tra le nuvole, Bergamo</p>
      <p class="font-testo text-[11px] md:text-[13px] text-gray-500">
        <a href="#" class="hover:text-[#FF0000] transition-colors">Privacy Policy</a> ·
        <a href="#" class="hover:text-[#FF0000] transition-colors">Termini &amp; Condizioni</a> ·
        <a href="#" class="hover:text-[#FF0000] transition-colors">Cookie (quelli buoni)</a>
      </p>
    </div>

  </footer>
</template>
