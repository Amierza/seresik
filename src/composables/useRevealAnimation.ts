import { onMounted, onUnmounted, ref } from 'vue'

export function useRevealAnimation() {
  const observer = ref<IntersectionObserver | null>(null)

  const observeElements = () => {
    // Disconnect observer lama jika ada
    if (observer.value) {
      observer.value.disconnect()
    }

    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    // Observe semua elemen dengan class reveal
    document.querySelectorAll('.reveal:not(.active)').forEach((el) => {
      observer.value?.observe(el)
    })
  }

  onMounted(() => {
    // Delay sedikit untuk memastikan semua komponen sudah di-render
    setTimeout(() => {
      observeElements()
    }, 100)
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  return {
    observeElements,
  }
}
