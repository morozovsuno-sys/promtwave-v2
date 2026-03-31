import { useState } from 'react'

const masteringOptions = [
  {
    category: 'Громкость',
    title: 'Уровень громкости',
    options: ['Тихий', 'Средний', 'Громкий', 'Очень громкий'],
    icon: '🔊'
  },
  {
    category: 'Динамика',
    title: 'Динамический диапазон',
    options: ['Узкий', 'Средний', 'Широкий', 'Очень широкий'],
    icon: '📊'
  },
  {
    category: 'Частоты',
    title: 'Частотный баланс',
    options: ['Много басов', 'Сбалансированный', 'Много высоких', 'Яркий'],
    icon: '🎚️'
  },
  {
    category: 'Пространство',
    title: 'Пространственность',
    options: ['Моно', 'Узкое стерео', 'Широкое стерео', 'Объемный'],
    icon: '🌐'
  },
  {
    category: 'Компрессия',
    title: 'Уровень компрессии',
    options: ['Без компрессии', 'Легкая', 'Средняя', 'Сильная'],
    icon: '⚙️'
  },
  {
    category: 'Реверберация',
    title: 'Количество реверберации',
    options: ['Сухой', 'Немного', 'Средний', 'Много'],
    icon: '🌊'
  }
]

function Mastering() {
  const [mastering, setMastering] = useState([])
  const [copied, setCopied] = useState(false)

  const toggleMastering = (option) => {
    setMastering(prev => {
      const exists = prev.find(m => m.category === option.category)
      if (exists && exists.value === option.value) {
        return prev.filter(m => m.category !== option.category)
      }
      return [
        ...prev.filter(m => m.category !== option.category),
        { category: option.category, value: option.value }
      ]
    })
  }

  const copyMastering = () => {
    const text = mastering.map(m => `${m.value}`).join(', ')
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const clearMastering = () => {
    setMastering([])
  }

  return (
    <div className="mastering-page">
      <div className="mastering-container">
        <h1>Мастеринг</h1>
        <p className="mastering-subtitle">Настройте параметры мастеринга для вашего трека</p>
        
        <div className="mastering-grid">
          {masteringOptions.map((option, index) => (
            <div key={index} className="mastering-category">
              <div className="mastering-category-header">
                <span className="mastering-icon">{option.icon}</span>
                <h3>{option.title}</h3>
              </div>
              <div className="mastering-options">
                {option.options.map((opt, i) => {
                  const isSelected = mastering.some(
                    m => m.category === option.category && m.value === opt
                  )
                  return (
                    <button
                      key={i}
                      className={`mastering-option ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleMastering({ category: option.category, value: opt })}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mastering-result">
          <div className="mastering-result-header">
            <h3>Выбранные параметры</h3>
          </div>
          <div className="mastering-result-sub">Выберите параметры мастеринга выше</div>
          <div style={{display: 'flex', gap: '8px'}}>
            <button
              className="mastering-btn"
              onClick={copyMastering}
              disabled={mastering.length === 0}
            >
              {copied ? '✓ Скопировано' : '📋 Копировать'}
            </button>
            <button
              className="mastering-btn mastering-btn-clear"
              onClick={clearMastering}
              disabled={mastering.length === 0}
            >
              × Очистить
            </button>
          </div>
          <div className="mastering-result-text">
            {mastering.length === 0 ? (
              <div style={{color: 'var(--text)', fontStyle: 'italic'}}>
                Пусто — кликните на параметры выше.
              </div>
            ) : (
              <div style={{fontFamily: 'var(--mono)', fontSize: '0.95rem', lineHeight: '1.8'}}>
                {mastering.map((m, i) => <span key={i}>{m.value}</span>)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mastering
