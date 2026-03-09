import { memo, useCallback, useEffect, useLayoutEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false
    return window.matchMedia(query).matches
  })

  useIsomorphicLayoutEffect(() => {
    const mql = window.matchMedia(query)
    const handler = () => setMatches(mql.matches)
    handler()
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [query])

  return matches
}

const CylinderCarousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: ReturnType<typeof useAnimation>
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isSmall = useMediaQuery("(max-width: 640px)")
    const cylinderWidth = isSmall ? 1100 : 1800
    const faceCount = cards.length
    const faceWidth = (cylinderWidth / faceCount)
    const radius = cylinderWidth / (2 * Math.PI)
    const rotation = useMotionValue(0)
    const transform = useTransform(rotation, (val) => {
      return `rotate3d(0, 1, 0, ${val}deg)`
    })

    return (
      <div
        className="flex h-full items-center justify-center"
        style={{
          perspective: "1000px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full w-full items-center justify-center"
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) => {
            if (isCarouselActive) {
              rotation.set(rotation.get() + info.offset.x * 0.05)
            }
          }}
          onDragEnd={(_, info) => {
            if (isCarouselActive) {
              controls.start({
                rotateY: rotation.get() + info.velocity.x * 0.05,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 30,
                  mass: 0.1,
                },
              })
            }
          }}
          animate={controls}
        >
          {cards.map((imgUrl, i) => {
            const angle = i * (360 / faceCount)
            return (
              <motion.div
                key={`card-${i}`}
                className="absolute flex h-full origin-center items-center justify-center rounded-xl p-2"
                style={{
                  width: `${faceWidth}px`,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                }}
                onClick={() => handleClick(imgUrl, i)}
              >
                <img
                  src={imgUrl}
                  alt={`carousel-${i}`}
                  className="pointer-events-none h-full w-full rounded-xl object-cover shadow-lg transition-all duration-300 hover:scale-105"
                  draggable={false}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    )
  }
)

CylinderCarousel.displayName = "CylinderCarousel"

function ThreeDPhotoCarousel({ images }: { images: string[] }) {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const controls = useAnimation()

  const handleClick = useCallback((imgUrl: string, _index: number) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }, [controls])

  const handleClose = useCallback(() => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }, [])

  return (
    <motion.div layout className="relative">
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/70 backdrop-blur-md rounded-xl cursor-pointer"
            onClick={handleClose}
          >
            <motion.img
              src={activeImg}
              alt="Expanded view"
              className="max-h-[80%] max-w-[90%] rounded-xl object-contain shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.15, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative h-[250px] md:h-[350px] w-full overflow-hidden rounded-xl">
        <CylinderCarousel
          handleClick={handleClick}
          controls={controls}
          cards={images}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  )
}

export { ThreeDPhotoCarousel }
