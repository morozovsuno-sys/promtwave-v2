import { useState } from 'react'
import { prompts, genres } from '../data/prompts'

const moods = ['Все настроения', 'Energetic', 'Calm', 'Dark', 'Happy', 'Melancholic', 'Aggressive', 'Relaxed', 'Epic', 'Romantic', 'Nostalgic', 'Dreamy', 'Passionate', 'Sensual']

function PromptGenerator() {
  const [genre, setGenre] = useState('Все жанры')
  const [mood, setMood] = useState('Все настроения')
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(null)

  const filtered = prompts.filter(p => {
    const matchGenre = genre === 'Все жанры' || p.genre === genre
    const matchMood = mood === 'Все настроения' || p.mood === mood
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.text.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
    return matchGenre && matchMood && matchSearch
  })

  const handleCopy = (p) => {
    navigator.clipboard.writeText(p.text)
    setCopied(p.id)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="generator-page">
      <div className="generator-hero">
        <h1>Генератор промптов</h1>
        <p>32 профессиональных промпта для Suno AI v5 — фильтруйте и копируйте</p>
      </div>

      <div className="container">
        {/* FILTERS */}
        <div className="filters">
          <div className="filter-group">
            <label>Жанр</label>
            <div className="filter-chips">
              {genres.map(g => (
                <button
                  key={g}
                  className={`chip${genre === g ? ' active' : ''}`}
                  onClick={() => setGenre(g)}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Настроение</label>
            <div className="filter-chips">
              {moods.map(m => (
                <button
                  key={m}
                  className={`chip${mood === m ? ' active' : ''}`}
                  onClick={() => setMood(m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-group">
            <label>Поиск</label>
            <input
              type="text"
              className="search-input"
              placeholder="Название, тег, ключевое слово..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="results-header">
          <span className="results-count">Найдено: <strong>{filtered.length}</strong> промптов</span>
          {(genre !== 'Все жанры' || mood !== 'Все настроения' || search) && (
            <button className="btn btn-ghost btn-sm" onClick={() => { setGenre('Все жанры'); setMood('Все настроения'); setSearch('') }}>
              Сбросить фильтры
            </button>
          )}
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">🎵</div>
            <h3>Промпты не найдены</h3>
            <p>Попробуйте другие фильтры</p>
          </div>
        ) : (
          <div className="prompts-grid">
            {filtered.map(p => (
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
                  className={`btn btn-copy${copied === p.id ? ' copied' : ''}`}
                  onClick={() => handleCopy(p)}
                >
                  {copied === p.id ? '✓ Скопировано!' : '📋 Копировать'}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default PromptGenerator
