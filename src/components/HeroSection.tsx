import type React from "react"

interface HeroSectionProps {
  currentText: string
}

const HeroSection: React.FC<HeroSectionProps> = ({ currentText }) => {
  return (
    <section className="info-section">
      <div className="left-part">
        <h1>
          <span className="d-flex">
            {["С", "А", "Д", "Т", "Е", "Х", "Н", "И", "К", "У"].map((char, index) => (
              <span key={index} className="char tracking-tighter" style={{ animationDelay: `${index * 0.08}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <span className="text tracking-tighter">{currentText}</span>
        </h1>
        <p className="tracking-widest">
          Газонокосилки, мотоблоки, бензопилы — продажа, прокат и ремонт в Малоярославецком районе. Свой сервис, честные цены.
        </p>
        <a href="tel:+74843123456" className="book-link">
          <span className="linktext tracking-tighter text-3xl">Позвонить нам</span>
          <span className="arrow">
            <span></span>
          </span>
        </a>
      </div>
      <div className="right-part">
        <div className="particles-container">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>
        <div className="bg-line">
          <img
            src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
            alt="Line"
            style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
          />
          <img
            src="https://www.yudiz.com/codepen/photography-banner/wave.svg"
            alt="Line"
            style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
          />
        </div>
        <div className="bg-dash-circle">
          <img
            src="https://www.yudiz.com/codepen/photography-banner/dash-circle.svg"
            alt="dash-circle"
            style={{ filter: "hue-rotate(280deg) saturate(1.5)" }}
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
