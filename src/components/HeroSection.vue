<template>
  <section
    id="home"
    class="relative overflow-hidden pt-16 pb-32 px-6 lg:px-16 max-w-[1200px] mx-auto"
  >
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="reveal active">
        <h1 class="text-4xl md:text-6xl font-bold text-[#191c1e] leading-tight mb-6">
          Jasa Cuci <span class="text-[#2563eb]">Sepatu Professional</span> Terbaik
        </h1>
        <p class="text-lg text-[#434655] mb-10 max-w-lg">
          Kembalikan sepatu kesayanganmu jadi fresh, bersih, dan seperti baru lagi dengan layanan
          cleaning profesional kami. Hasil dijamin memuaskan!
        </p>

        <div class="flex flex-wrap gap-4">
          <a
            :href="`https://wa.me/${store.businessInfo.whatsapp}?text=${encodeURIComponent('Halo Seresik Wash, saya mau booking sekarang')}`"
            target="_blank"
            class="bg-blue-gradient text-white px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:scale-105 transition-transform no-underline inline-block"
          >
            Booking Sekarang
          </a>
          <button
            @click="(e: Event) => scrollToSection(e, '#pricing')"
            class="border-2 border-[#c3c6d7] text-[#191c1e] px-8 py-4 rounded-xl font-semibold text-base hover:bg-[#f2f4f6] transition-colors bg-white"
          >
            Lihat Harga
          </button>
        </div>

        <div class="mt-12 flex items-center gap-4">
          <!-- Avatar group dengan gambar nyata -->
          <div class="flex -space-x-3">
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="Customer"
              class="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt="Customer"
              class="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              alt="Customer"
              class="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <!-- Tambahan: jumlah customer -->
            <div
              class="w-10 h-10 rounded-full border-2 border-white bg-[#2563eb] flex items-center justify-center text-white text-xs font-bold"
            >
              5K+
            </div>
          </div>
          <div>
            <p class="text-sm font-medium text-[#434655]">Dipercaya 5.000+ pelanggan</p>
            <div class="flex items-center gap-1">
              <span class="material-symbols-outlined text-yellow-400 text-sm">star</span>
              <span class="text-xs text-[#434655]">4.9 (350+ reviews)</span>
            </div>
          </div>
        </div>
      </div>

      <div class="relative reveal active">
        <div
          class="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[rgba(37,99,235,0.05)] rounded-full blur-3xl"
        ></div>
        <img
          :src="heroImage"
          alt="Proses cuci sepatu"
          class="w-full h-auto rounded-3xl shadow-2xl object-cover"
        />

        <div
          class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-[#c3c6d7]"
        >
          <div
            class="w-12 h-12 bg-[rgba(37,99,235,0.1)] rounded-full flex items-center justify-center text-[#2563eb]"
          >
            <span class="material-symbols-outlined">verified</span>
          </div>
          <div>
            <p class="text-sm font-bold text-[#191c1e]">100% Bergaransi</p>
            <p class="text-sm text-[#434655]">Hasil bersih dijamin</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSmoothScroll } from '@/composables/useSmoothScroll'
import { useAppStore } from '@/stores/app'

const store = useAppStore()
const { scrollToSection } = useSmoothScroll()

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA7PcLXJyZtDoNjs8MZ2-sVuOI0S5QnsC1vmEwd8KUw7WWODfwakWDa2wilWd9mYzTwqnJl0o8CVkdR34Y7B55m6-4dGuhXEd-EL6uiZJjKVW2zz0_wdDJjTOemrcqS-p2DZCI06D_-HGwYpEp-9W3kXqxAujHo9K2EUQN-LoS0vJBxm1qxV0UUVpTT2HENKSFohr84EzPsuFHNQf_OrKfOGuwzzj7_5l_xFQ-HRdurYStHyFL5OfBLwfdOKr-zHXqtO20aIiglJoI'
</script>
