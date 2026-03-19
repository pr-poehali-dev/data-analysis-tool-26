import type React from "react"

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          <h2>Почему <span className="highlight">Садовый Профи</span>?</h2>
        </div>
        <ul className="features-list">
          <li className="feature-item">
            <div className="feature-icon">01</div>
            <div className="feature-text">
              <h3>Свой магазин</h3>
              <p className="font-light tracking-wider">
                Техника и расходники всегда в наличии. Накладные цены — от 25% ниже рынка
              </p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-icon">02</div>
            <div className="feature-text">
              <h3>Прокат выгоднее покупки</h3>
              <p className="tracking-wider">
                Мотоблоки, снегоуборщики, бензопилы. Окупаемость за 3–5 прокатов
              </p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-icon">03</div>
            <div className="feature-text">
              <h3>Единственный сервис в районе</h3>
              <p className="tracking-wider">
                Специализированный ремонт садовой техники. Чиним любые поломки — не только то, что продали
              </p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-icon">04</div>
            <div className="feature-text">
              <h3>Партнёрство 50/50</h3>
              <p className="tracking-wider">
                Два собственника: коммерция + технадзор. Андрей и Станислав лично отвечают за результат
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default FeaturesSection
