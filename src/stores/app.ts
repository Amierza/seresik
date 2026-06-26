import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {
  Service,
  Feature,
  PricingPlan,
  Testimonial,
  GalleryImage,
  BusinessInfo,
} from '@/types'

export const useAppStore = defineStore('app', () => {
  const isNavOpen = ref(false)

  const services = ref<Service[]>([
    {
      id: '1',
      icon: 'cleaning_services',
      title: 'Outer Clean',
      description: 'Pembersihan bagian luar sepatu untuk noda ringan dan kotoran permukaan.',
      startingPrice: 20000,
    },
    {
      id: '2',
      icon: 'dry_cleaning',
      title: 'Deep Clean',
      description: 'Pembersihan menyeluruh bagian luar dan dalam sepatu dengan sabun premium.',
      startingPrice: 25000,
    },
    {
      id: '3',
      icon: 'handyman',
      title: 'Hard Deep Clean',
      description: 'Pembersihan intensif untuk sepatu dengan noda membandel dan kotoran berat.',
      startingPrice: 35000,
    },
    {
      id: '4',
      icon: 'bolt',
      title: 'One Day Service',
      description: 'Layanan ekspres selesai dalam 1 hari untuk semua jenis pembersihan.',
      startingPrice: 35000,
    },
    {
      id: '5',
      icon: 'auto_fix_high',
      title: 'Sepatu Kanvas/Mesh Putih',
      description: 'Perawatan khusus sepatu kanvas dan mesh putih agar kembali cerah.',
      startingPrice: 30000,
    },
    {
      id: '6',
      icon: 'new_releases',
      title: 'Unyellowing',
      description: 'Menghilangkan efek kuning pada sol sepatu agar kembali bening.',
      startingPrice: 45000,
    },
    {
      id: '7',
      icon: 'star',
      title: 'Hard Unyellowing',
      description: 'Perawatan unyellowing intensif untuk sol yang sudah sangat menguning.',
      startingPrice: 55000,
    },
    {
      id: '8',
      icon: 'format_paint',
      title: 'Repaint',
      description: 'Pengecatan ulang profesional untuk sepatu yang warnanya sudah pudar.',
      startingPrice: 85000,
    },
    {
      id: '9',
      icon: 'palette',
      title: 'Recolor',
      description: 'Ganti warna sepatu sesuai keinginan dengan hasil rapi dan tahan lama.',
      startingPrice: 100000,
    },
    {
      id: '10',
      icon: 'water_drop',
      title: 'Rewhitening',
      description: 'Mencerahkan kembali sepatu putih yang sudah kusam.',
      startingPrice: 40000,
    },
    {
      id: '11',
      icon: 'checkroom',
      title: 'Hat Deep Clean',
      description: 'Pembersihan mendalam untuk topi kesayangan dari noda dan kotoran.',
      startingPrice: 20000,
    },
    {
      id: '12',
      icon: 'brush',
      title: 'Hat Repaint',
      description: 'Pengecatan ulang topi dengan warna original atau custom.',
      startingPrice: 50000,
    },
    {
      id: '13',
      icon: 'style',
      title: 'Hat Recolor',
      description: 'Ganti warna topi sesuai style yang kamu mau.',
      startingPrice: 80000,
    },
    {
      id: '14',
      icon: 'shopping_bag',
      title: 'Sling Bag/Waistbag',
      description: 'Pembersihan tas selempang dan waistbag dari noda dan debu.',
      startingPrice: 25000,
    },
    {
      id: '15',
      icon: 'local_mall',
      title: 'Totebag',
      description: 'Cuci bersih totebag kesayangan biar kinclong lagi.',
      startingPrice: 40000,
    },
    {
      id: '16',
      icon: 'backpack',
      title: 'Backpack',
      description: 'Pembersihan menyeluruh untuk tas ransel dari segala jenis kotoran.',
      startingPrice: 50000,
    },
  ])

  const features = ref<Feature[]>([
    {
      id: '1',
      icon: 'handyman',
      title: 'Peralatan Profesional',
      description: 'Menggunakan alat cleaning grade premium dan sonic cleaner khusus.',
    },
    {
      id: '2',
      icon: 'groups',
      title: 'Tim Berpengalaman',
      description: 'Sudah menangani 10.000+ pasang sepatu dengan hasil memuaskan.',
    },
    {
      id: '3',
      icon: 'schedule',
      title: 'Pengerjaan Cepat',
      description: 'Pembersihan standar selesai dalam 24-48 jam.',
    },
    {
      id: '4',
      icon: 'payments',
      title: 'Harga Terjangkau',
      description: 'Hasil premium dengan harga yang ramah di kantong.',
    },
  ])

  const pricingPlans = ref<PricingPlan[]>([
    {
      id: 'basic',
      name: 'OUTER CLEAN',
      price: 20000,
      unit: '/ pasang',
      features: ['Pembersihan bagian luar', 'Sikat permukaan', 'Lap sole', 'Selesai 1-2 hari'],
    },
    {
      id: 'standard',
      name: 'DEEP CLEAN',
      price: 25000,
      unit: '/ pasang',
      features: [
        'Semua layanan Outer Clean',
        'Pembersihan bagian dalam',
        'Cuci insole & tali',
        'Penghilang bau standar',
        'Selesai 2-3 hari',
      ],
      isPopular: true,
      badge: 'PALING DIMINATI 🔥',
    },
    {
      id: 'premium',
      name: 'UNYELLOWING',
      price: 45000,
      unit: '/ pasang',
      features: [
        'Semua layanan Deep Clean',
        'Perawatan sol menguning',
        'Kembalikan warna bening sol',
        'Perlindungan UV',
        'Selesai 3-5 hari',
      ],
    },
  ])

  const testimonials = ref<Testimonial[]>([
    {
      id: '1',
      name: 'Mirza',
      role: 'Sneakerhead',
      rating: 5,
      text: 'Gila sih bersihnya parah! Jordan 1 gue yang udah 2 tahun kotor banget sekarang kayak baru lagi. Auto langganan deh!',
    },
    {
      id: '2',
      name: 'Aril',
      role: 'Mahasiswa',
      rating: 5,
      text: 'Awalnya ragu sih, tapi pas liat hasilnya beneran worth it banget. Sepatu NB 550 gue yang udah dekil jadi fresh lagi. Gas pol!',
    },
    {
      id: '3',
      name: 'Ifal',
      role: 'Content Creator',
      rating: 5,
      text: 'Mantep jiwa pelayanannya! Fast response, hasil rapi, packing aman. Koleksi sepatu gue sekarang selalu bersih-sih. Rekomen banget!',
    },
  ])

  const galleryImages = ref<GalleryImage[]>([
    {
      id: '1',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFp-q4q9zSQYfH3D6seToVER-IbTBbaHkEClXly39hcxmYTK5DVRYdLsy3zrT08OrvgXn7dWqRSBoQ8uHZhNJFS4T8kDkfZOGVEH0STlrj84uzzzrFyu8ELquHEXcryoOl9eWwSBBWj9VizukJFJPSYh03kOhQ_1p1bdIoxjAdu-WrPT3q8WoG6XRPiUaLSrjZU8NTHXAhcpMq8osuQ6BBQ9sfGmiFHcZ_KiDZWsTcXYfzYdn5k8M3lrKBMhJyBIGGA05172CPhaA',
      alt: 'Restorasi Air Jordan 1 Chicago',
      title: 'Air Jordan 1 "Chicago"',
      description: 'Deep Clean + Unyellowing',
      isLarge: true,
    },
    {
      id: '2',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5uIoV7LDLo43JkFzMcv18QD7jwvR__Atxvq2SksF7suD35qzeL1Iiwc9rkv5jOd2OEWxsoItOotJyYNSUGGvgg4pOXwwhJ6InOxFjm1vfazfez7_Wh3hZDsbJVqvrujGaaVK1gGTAj-HdU_rKazcuaBRNwzxAXGfpy_bi2jYMLOa5-6vZ-pK66TYKYSeopTxoalRO7P_3NTE1cYMJOiSix3Uhmjgaf8pBnC-8NjaEN4akgbw490a62TcRJYPyK6NLdpyga8IZG0',
      alt: 'Perbandingan sepatu kotor dan bersih',
      title: 'Deep Clean Detail',
    },
    {
      id: '3',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDX0ToFfyrGfXMNKlQrHttqv1DlyaAbhp9Kc470WgolFvum59JvGl90lpJxM8LJoNIsXy5UzU9dT7lFZcAw7rKY85vpYN1vfuPTRysPM6eZuXzC7jQeJ2T47OV303UCQvSVCR9bP5SsLSqtsVEslTjDgwvx3LL4MZPiM4Yg8TOqt_Ppi4Eg0penznf60DP6YP6Cq6FUQ7XdOVpxY80ccsnEjk2rVFviuxSu7aX4HhzIZCKGaiMOqG79jO10nZVxl2KbN3N8YJndZ24',
      alt: 'Suede premium setelah deep cleaning',
      title: 'Restorasi Suede',
    },
    {
      id: '4',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7nEfBZ6C1EaHnfOvlzVN4NIbRCC9aMJB7yWeHwp6ahlM-mMZqyjkyGRf3O4Kv5FvhSrnYkbjUeRcVRdrSh4sIE-OIN5kQRd6gy41--Gxsxtdys_ULvQbUBL8353ZGD-V4sEOLjrvDQC0aCDpYtkdJXKM1QBBiNqCy1FoAg9TJHsBtF4bsVgen7AR71lN_HM9R1FGRU28RX4kw0ovHolAnols6q85rupvLFdjsQ8JUm08m2-ZOYPPDSAHpdoawtw1RiMZmEiGg44Y',
      alt: 'Sol sepatu sebelum dan sesudah unyellowing',
      title: 'Perawatan Ice Sole',
    },
    {
      id: '5',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6H8lfh4m4BMd_-NwzZOp3jCnE4sEjfynbEEtTwNeeCk8mXbB8aDTBJiQxUz1XGjjcTJuu81drycqLDeIOMEp-RsSqFfkwiBFmVLM5T5YBW4uQ2NlsQF_C4pCrhSzXkzjwfHdrmM0PV_hchefcgjAwcyNV7M8ATQu7pHlMBQXhY37M4Cc7leNqVJLdyK2oMImQWyLBGwxRi6qfYlBE7eXj9XKdMH2ipaqrEIVD7ISInn8Y1krmy8uIR7PS9dgWHJcAWmNPffU093Y',
      alt: 'Proses detailing sepatu premium',
      title: 'Protective Coating',
    },
  ])

  const businessInfo = ref<BusinessInfo>({
    name: 'Seresik Wash',
    logo: '/logo.png',
    address:
      'Gg. Kinco, Ngaglik Timur, Sukorejo, Kec. Lamongan, Kabupaten Lamongan, Jawa Timur 62215',
    whatsapp: '6285733125721',
    email: 'hello@aurasoles.com',
    mapsLink: 'https://maps.app.goo.gl/PwMhGpLdnJGSrrX27',
    hours: {
      'Senin - Jumat': '09:00 - 19:00',
      Sabtu: '10:00 - 17:00',
      Minggu: 'Tutup',
    },
  })

  const toggleNav = () => {
    isNavOpen.value = !isNavOpen.value
  }

  const closeNav = () => {
    isNavOpen.value = false
  }

  return {
    isNavOpen,
    services,
    features,
    pricingPlans,
    testimonials,
    galleryImages,
    businessInfo,
    toggleNav,
    closeNav,
  }
})
