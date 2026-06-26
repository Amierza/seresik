<template>
  <section id="pricing" class="py-32 px-6 lg:px-16">
    <div class="max-w-[1200px] mx-auto">
      <div class="text-center mb-16 reveal active">
        <p class="text-[#2563eb] font-bold tracking-widest uppercase text-sm mb-4">HARGA</p>
        <h2 class="text-4xl md:text-5xl font-bold text-[#191c1e]">Pilih Paket Terbaikmu</h2>
        <p class="text-base text-[#434655] mt-4">
          Paket paling diminati untuk sepatu kesayangan kamu
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="plan in store.pricingPlans"
          :key="plan.id"
          class="reveal active bg-white p-10 rounded-[2.5rem] border flex flex-col h-full hover:shadow-xl transition-shadow relative"
          :class="[
            plan.isPopular
              ? 'border-[#2563eb] scale-105 z-10 shadow-2xl shadow-[rgba(37,99,235,0.1)]'
              : 'border-[#c3c6d7]',
          ]"
        >
          <div
            v-if="plan.isPopular && plan.badge"
            class="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563eb] text-white px-4 py-1 rounded-full text-sm font-bold"
          >
            {{ plan.badge }}
          </div>

          <p
            class="text-sm font-bold mb-4 tracking-widest uppercase"
            :class="plan.isPopular ? 'text-[#2563eb]' : 'text-[#485767]'"
          >
            {{ plan.name }}
          </p>

          <div class="flex items-baseline mb-8">
            <span class="text-4xl font-bold text-[#191c1e]"
              >Rp {{ plan.price.toLocaleString('id-ID') }}</span
            >
            <span class="text-[#434655] ml-2">{{ plan.unit }}</span>
          </div>

          <ul class="space-y-4 mb-10 flex-grow">
            <li
              v-for="(feature, index) in plan.features"
              :key="index"
              class="flex items-center gap-3 text-[#434655]"
            >
              <span class="material-symbols-outlined text-[#2563eb] text-xl">check_circle</span>
              {{ feature }}
            </li>
          </ul>

          <!-- FIX: Gunakan method untuk generate WhatsApp link -->
          <a
            :href="getWhatsAppLink(plan.name)"
            target="_blank"
            class="w-full py-4 rounded-xl font-bold transition-all text-center no-underline inline-block"
            :class="
              plan.isPopular
                ? 'bg-blue-gradient text-white shadow-lg hover:scale-105'
                : 'border-2 border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white'
            "
          >
            Booking {{ plan.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'

const store = useAppStore()

// Method untuk generate WhatsApp link
const getWhatsAppLink = (packageName: string) => {
  const message = `Halo Seresik Wash, saya mau booking paket ${packageName}`
  const phone = store.businessInfo.whatsapp // contoh: 6281234567890
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
</script>
