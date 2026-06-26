<template>
  <nav
    class="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)]"
  >
    <div class="flex justify-between items-center w-full px-6 lg:px-16 max-w-[1200px] mx-auto h-20">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img
          :src="store.businessInfo.logo || '/logo.png'"
          alt="Seresik Wash Logo"
          class="h-10 w-10 object-contain"
        />
        <span class="text-2xl font-bold text-[#2563eb] tracking-tight">Seresik Wash</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex gap-8 items-center">
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

      <!-- Desktop CTA -->
      <a
        :href="`https://wa.me/${store.businessInfo.whatsapp}?text=${encodeURIComponent('Halo Seresik Wash, saya mau booking')}`"
        target="_blank"
        class="hidden lg:inline-block bg-[#2563eb] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-[#1e40af] transition-colors no-underline"
      >
        Booking Now
      </a>

      <!-- Mobile Hamburger Button -->
      <button
        @click="store.toggleNav()"
        class="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-[#191c1e]"
        :class="{ 'fixed right-6': store.isNavOpen }"
      >
        <span class="material-symbols-outlined text-3xl transition-transform duration-300">
          {{ store.isNavOpen ? 'close' : 'menu' }}
        </span>
      </button>
    </div>

    <!-- Overlay Background -->
    <!-- <div
      v-if="store.isNavOpen"
      @click="store.closeNav()"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
    ></div> -->

    <!-- Floating Mobile Menu -->
    <div
      v-if="store.isNavOpen"
      class="fixed top-24 right-4 left-4 bg-white rounded-3xl shadow-2xl z-40 lg:hidden border border-[#c3c6d7] overflow-hidden transform transition-all duration-300 animate-slide-down"
    >
      <!-- Menu Header -->
      <div class="p-6 border-b border-[#c3c6d7] bg-gradient-to-r from-[#2563eb] to-[#1e40af]">
        <p class="text-white font-bold text-lg">Menu</p>
        <p class="text-white/70 text-sm">Pilih layanan yang kamu butuhkan</p>
      </div>

      <!-- Menu Links -->
      <div class="flex flex-col p-4 gap-2">
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
          class="flex items-center gap-4 px-4 py-3 rounded-xl text-[#434655] font-medium hover:bg-[#f2f4f6] hover:text-[#2563eb] transition-all duration-200 group"
        >
          <span
            class="material-symbols-outlined text-[#2563eb] group-hover:scale-110 transition-transform"
          >
            {{ getIconForLink(link.label) }}
          </span>
          <span class="flex-grow">{{ link.label }}</span>
          <span
            class="material-symbols-outlined text-[#c3c6d7] group-hover:text-[#2563eb] group-hover:translate-x-1 transition-all"
          >
            arrow_forward
          </span>
        </a>
      </div>

      <!-- Menu Footer -->
      <div class="p-4 border-t border-[#c3c6d7]">
        <a
          :href="`https://wa.me/${store.businessInfo.whatsapp}?text=${encodeURIComponent('Halo Seresik Wash, saya mau booking')}`"
          target="_blank"
          @click="store.closeNav()"
          class="flex items-center justify-center gap-2 bg-[#2563eb] text-white px-6 py-3 rounded-xl font-medium text-base hover:bg-[#1e40af] transition-colors no-underline w-full"
        >
          <span class="material-symbols-outlined">chat</span>
          Booking Sekarang
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

// Icon untuk setiap menu
const getIconForLink = (label: string): string => {
  const icons: Record<string, string> = {
    Beranda: 'home',
    Layanan: 'cleaning_services',
    Harga: 'sell',
    Galeri: 'collections',
    Testimoni: 'reviews',
    Lokasi: 'location_on',
  }
  return icons[label] || 'circle'
}

const handleNavClick = (event: Event, href: string) => {
  scrollToSection(event, href)
}
</script>

<style scoped>
/* Animasi slide down untuk mobile menu */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-slide-down {
  animation: slideDown 0.3s ease-out;
}
</style>
