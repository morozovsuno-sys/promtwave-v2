import { Link } from 'react-router-dom'
import { prompts } from '../data/prompts'

const features = [
  { icon: '♪', title: '32 жанра', desc: 'От электроники до классики' },
  { icon: '🎙', title: 'Suno AI v5', desc: 'Оптимизировано под последнюю версию' },
  { icon: '📋', title: 'Одним кликом', desc: 'Копируйте и вставляйте в Suno' },
  { icon: '🔍', title: 'Фильтрация', desc: 'По жанру, настроению, тегам' },
]

const featured = prompts.slice(0, 6)

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">♪ Professional Suno AI v5 Prompt Generator</div>
          <h1 className="hero-title">
            Создавайте музыку <span className="gradient-text">с помощью AI</span>
          </h1>
          <p className="hero-sub">
            32 профессиональных промпта для Suno AI. Подбирайте по жанру, настроению и копируйте одним кликом.
          </p>
          <div className="hero-actions">
            <Link to="/generator" className="btn btn-primary">Распахнуть промпты</Link>
            <a href="https://suno.com" target="_blank" rel="noreferrer" className="btn btn-outline">Открыть Suno AI ↗</a>
          </div>
          <div className="hero-stats">
            <div><strong>32</strong> <span>промпта</span></div>
            <div><strong>12</strong> <span>жанров</span></div>
            <div><strong>Suno v5</strong> <span>поддержка</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="vinyl-disc">
            <div className="vinyl-inner">♪</div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Почему PromtWave?</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROMPTS */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Популярные промпты</h2>
            <Link to="/generator" className="btn btn-ghost">Смотреть все →</Link>
          </div>
          <div className="prompts-grid">
            {featured.map(p => (
              <div key={p.id} className="prompt-card">
                <div className="prompt-card-header">
                  <span className="prompt-genre">{p.genre}</span>
                  <span className="prompt-mood">{p.mood}</span>
                </div>
                <h3>{p.title}</h3>
                <p className="prompt-text">{p.text}</p>
                <div className="prompt-tags">
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                <button
                  className="btn btn-copy"
                  onClick={() => navigator.clipboard.writeText(p.text)}
                >
                  📋 Копировать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="howto-section">
        <div className="container">
          <h2 className="section-title">Как использовать</h2>
          <div className="steps">
            <div className="step"><div className="step-num">1</div><p>Откройте вкладку «Генератор»</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">2</div><p>Выберите жанр и настроение</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">3</div><p>Нажмите «Копировать»</p></div>
            <div className="step-arrow">→</div>
            <div className="step"><div className="step-num">4</div><p>Вставьте в Suno AI</p></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Готовы создать музыку?</h2>
          <p>Начните с готового промпта за секунды</p>
          <Link to="/generator" className="btn btn-primary btn-large">Начать →</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
