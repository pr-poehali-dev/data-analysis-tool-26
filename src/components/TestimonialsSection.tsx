import type React from "react"

const testimonials = [
  {
    quote: "Взял в прокат мотоблок на три дня — за сезон сэкономил на огороде больше 15 тысяч. Ребята объяснили как пользоваться, техника в отличном состоянии.",
    initials: "ВП",
    name: "Василий П.",
    role: "Садовод, СНТ «Берёзка»",
  },
  {
    quote: "Принесла газонокосилку — другие говорили что не починить. Станислав разобрался за два дня, цена адекватная. Теперь только к ним.",
    initials: "НК",
    name: "Наталья К.",
    role: "Жительница Малоярославца",
  },
  {
    quote: "Купил триммер — дали скидку 10% по акции. Расходники тоже дешевле, чем в городе. Удобно что всё в одном месте — купил, поломалось, починили.",
    initials: "АФ",
    name: "Андрей Ф.",
    role: "Фермер, Малоярославецкий р-н",
  },
]

const TestimonialsSection: React.FC = () => {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Нам доверяют</h2>
        <div className="testimonials-marquee">
          {doubled.map((t, i) => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
