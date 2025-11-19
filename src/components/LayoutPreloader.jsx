import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const PRELOADER_IMAGES = [
  "https://images.unsplash.com/photo-1595777712933-a3f0b06755c9?w=500&h=500&fit=crop&q=80",
  "https://images.unsplash.com/photo-1550274455-11107a72e8a8?w=500&h=500&fit=crop&q=80",
  "https://images.unsplash.com/photo-1558769187-a2e14e5fa5b8?w=500&h=500&fit=crop&q=80",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=500&fit=crop&q=80",
];

const FINAL_IMAGE = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1000&h=800&fit=crop";

export const LayoutPreloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isZooming, setIsZooming] = useState(false);
  const [showHero, setShowHero] = useState(false);
  const [zoomRect, setZoomRect] = useState(null);

  const scrollerCardRef = useRef(null);

  useEffect(() => {
    const scrollDuration = 2300;

    const scrollTimer = setTimeout(() => {
      // Capture the current card position/size so we can scale the same square
      if (scrollerCardRef.current) {
        const rect = scrollerCardRef.current.getBoundingClientRect();
        setZoomRect({ top: rect.top, left: rect.left, width: rect.width, height: rect.height });
      }

      // Start zooming the card itself
      setIsZooming(true);

      // Reveal hero shortly after
      const heroTimer = setTimeout(() => {
        setShowHero(true);
      }, 900);

      // Remove overlay after reveal
      const removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1400);

      return () => {
        clearTimeout(heroTimer);
        clearTimeout(removeTimer);
      };
    }, scrollDuration);

    return () => clearTimeout(scrollTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Scrolling stack of images inside the square */}
      {!showHero && !isZooming && (
        <motion.div
          ref={scrollerCardRef}
          className="fixed top-1/2 left-1/2 w-80 h-80 md:w-96 md:h-96 -translate-x-1/2 -translate-y-1/2 z-[9998] rounded-2xl overflow-hidden bg-black"
          style={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)" }}
        >
          <motion.div
            className="absolute w-full"
            animate={{ y: -1500 }}
            transition={{ duration: 2.3, ease: "linear" }}
          >
            {PRELOADER_IMAGES.map((src, idx) => (
              <div key={idx} className="w-full h-80 md:h-96 overflow-hidden">
                <img src={src} alt={`Carousel ${idx}`} className="w-full h-full object-cover object-center" />
              </div>
            ))}

            <div className="w-full h-80 md:h-96 overflow-hidden">
              <img
                src={FINAL_IMAGE}
                alt="Final"
                className="w-full h-full object-cover object-center block"
                style={{ transformOrigin: "center center" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Zooming the square (container) itself from its frozen rect */}
      {isZooming && zoomRect && (
        <motion.div
          className="fixed z-[9999] rounded-2xl overflow-hidden bg-black"
          style={{
            top: zoomRect.top,
            left: zoomRect.left,
            width: zoomRect.width,
            height: zoomRect.height,
            transformOrigin: "center center",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 4 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={FINAL_IMAGE}
            alt="Zoomed"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
      )}

      {showHero && (
        <motion.div
          className="fixed inset-0 z-[9997] w-full h-full"
          style={{
            backgroundImage: `url(${FINAL_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      )}

      {isVisible && <div className="fixed inset-0 bg-black z-[9995]" />}
    </>
  );
};

export default LayoutPreloader;
