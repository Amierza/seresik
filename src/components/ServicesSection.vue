<template>
  <section id="services" class="py-32 px-6 lg:px-16 bg-white">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16 reveal active">
        <p class="text-[#2563eb] font-bold tracking-widest uppercase text-sm mb-4">LAYANAN KAMI</p>
        <h2 class="text-3xl font-bold text-[#191c1e] mb-4">Harga Spesial Buat Kamu!</h2>
        <p class="text-base text-[#434655] max-w-2xl mx-auto">
          Mulai dari sepatu daily sampai koleksi premium, kami siap rawat dengan treatment terbaik.
        </p>
      </div>

      <!-- Kategori: SHOES TREATMENT -->
      <div class="mb-16 reveal active">
        <h3 class="text-2xl font-bold text-[#191c1e] mb-8 flex items-center gap-3">
          <span class="material-symbols-outlined text-[#2563eb]">steps</span>
          Shoes Treatment
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in shoesServices"
            :key="service.id"
            class="reveal active bg-white p-8 rounded-3xl border border-[#c3c6d7] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] hover:border-transparent transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 bg-[#f2f4f6] flex items-center justify-center rounded-2xl text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors mb-6"
            >
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
            <h4 class="text-xl font-semibold text-[#191c1e] mb-3">{{ service.title }}</h4>
            <p class="text-base text-[#434655] mb-6">{{ service.description }}</p>
            <p class="text-2xl font-bold text-[#2563eb]">
              Rp {{ service.startingPrice.toLocaleString('id-ID') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Kategori: HAT TREATMENT -->
      <div class="mb-16 reveal active">
        <h3 class="text-2xl font-bold text-[#191c1e] mb-8 flex items-center gap-3">
          <span class="material-symbols-outlined text-[#2563eb]">checkroom</span>
          Hat Treatment
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in hatServices"
            :key="service.id"
            class="reveal active bg-white p-8 rounded-3xl border border-[#c3c6d7] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] hover:border-transparent transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 bg-[#f2f4f6] flex items-center justify-center rounded-2xl text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors mb-6"
            >
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
            <h4 class="text-xl font-semibold text-[#191c1e] mb-3">{{ service.title }}</h4>
            <p class="text-base text-[#434655] mb-6">{{ service.description }}</p>
            <p class="text-2xl font-bold text-[#2563eb]">
              Rp {{ service.startingPrice.toLocaleString('id-ID') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Kategori: BAG TREATMENT -->
      <div class="reveal active">
        <h3 class="text-2xl font-bold text-[#191c1e] mb-8 flex items-center gap-3">
          <span class="material-symbols-outlined text-[#2563eb]">backpack</span>
          Bag Treatment
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="service in bagServices"
            :key="service.id"
            class="reveal active bg-white p-8 rounded-3xl border border-[#c3c6d7] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.08)] hover:border-transparent transition-all duration-300 group"
          >
            <div
              class="w-14 h-14 bg-[#f2f4f6] flex items-center justify-center rounded-2xl text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors mb-6"
            >
              <span class="material-symbols-outlined">{{ service.icon }}</span>
            </div>
            <h4 class="text-xl font-semibold text-[#191c1e] mb-3">{{ service.title }}</h4>
            <p class="text-base text-[#434655] mb-6">{{ service.description }}</p>
            <p class="text-2xl font-bold text-[#2563eb]">
              Rp {{ service.startingPrice.toLocaleString('id-ID') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'

const store = useAppStore()

const shoesServices = computed(() =>
  store.services.filter((s) =>
    [
      'Outer Clean',
      'Deep Clean',
      'Hard Deep Clean',
      'One Day Service',
      'Sepatu Kanvas/Mesh Putih',
      'Unyellowing',
      'Hard Unyellowing',
      'Repaint',
      'Recolor',
      'Rewhitening',
    ].includes(s.title),
  ),
)

const hatServices = computed(() => store.services.filter((s) => s.title.startsWith('Hat')))

const bagServices = computed(() =>
  store.services.filter((s) => ['Sling Bag/Waistbag', 'Totebag', 'Backpack'].includes(s.title)),
)
</script>
