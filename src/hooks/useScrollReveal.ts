import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(itemCount: number) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const itemRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((item, index) => {
      if (!item) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index))
            }
          })
        },
        {
          threshold: 0.2,
          rootMargin: '0px 0px -100px 0px'
        }
      )

      observer.observe(item)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [itemCount])

  return { visibleItems, itemRefs }
}
