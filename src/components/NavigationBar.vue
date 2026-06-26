<template>
  <nav
    class="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)]"
  >
    <div class="flex justify-between items-center w-full px-6 lg:px-16 max-w-[1200px] mx-auto h-20">
      <div class="flex items-center gap-3">
        <img
          :src="store.businessInfo.logo || '/logo.png'"
          alt="Seresik Wash Logo"
          class="h-10 w-10 object-contain"
        />
        <span class="text-2xl font-bold text-[#2563eb] tracking-tight">Seresik Wash</span>
      </div>

      <div class="hidden md:flex gap-8 items-center">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="(e: Event) => handleNavClick(e, link.href)"
          class="text-[#434655] font-medium hover:text-[#2563eb] transition-colors duration-300"
        >
          {{ link.label }}
        </a>
      </div>

      <a
        :href="`https://wa.me/${store.businessInfo.whatsapp}?text=${encodeURIComponent('Halo Seresik Wash, saya mau booking')}`"
        target="_blank"
        class="bg-[#2563eb] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#1e40af] transition-colors no-underline"
      >
        Booking Now
      </a>

      <button @click="store.toggleNav()" class="md:hidden text-[#191c1e]">
        <span class="material-symbols-outlined text-3xl">{{
          store.isNavOpen ? 'close' : 'menu'
        }}</span>
      </button>
    </div>

    <div v-if="store.isNavOpen" class="md:hidden bg-white border-t border-[#c3c6d7]">
      <div class="flex flex-col px-6 py-4 gap-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="
            (e: Event) => {
              handleNavClick(e, link.href)
              store.closeNav()
            }
          "
          class="text-[#434655] font-medium hover:text-[#2563eb] transition-colors duration-300 py-2"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { useSmoothScroll } from '@/composables/useSmoothScroll'

const store = useAppStore()
const { scrollToSection } = useSmoothScroll()

const navLinks = [
  { label: 'Beranda', href: '#home' },
  { label: 'Layanan', href: '#services' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Galeri', href: '#gallery' },
  { label: 'Testimoni', href: '#testimonials' },
  { label: 'Lokasi', href: '#contact' },
]

const handleNavClick = (event: Event, href: string) => {
  scrollToSection(event, href)
}
</script>
