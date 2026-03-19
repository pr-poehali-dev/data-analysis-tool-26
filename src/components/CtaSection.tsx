import type React from "react"

const CtaSection: React.FC = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">
        <h2 className="cta-title text-center">Звоните!</h2>
        <p className="cta-subtitle">
          Работаем ежедневно с 9:00 до 20:00. Д. Терентьево, Новый проезд, 2 — 10 минут от центра Малоярославца. Удобный подъезд, парковка.
        </p>
        <div className="cta-buttons">
          <a href="tel:+74843123456" className="cta-button">
            +7 (48431) 2-34-56
          </a>
          <a
            href="https://yandex.ru/maps/?text=Терентьево+Новый+проезд+2"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            Проложить маршрут
          </a>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
