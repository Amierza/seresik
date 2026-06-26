export function useSmoothScroll() {
  const scrollToSection = (event: Event, href: string) => {
    event.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return {
    scrollToSection,
  }
}
