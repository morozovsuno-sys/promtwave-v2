import { useState } from 'react'

const structureTags = [
  {
    tag: 'Intro',
    title: 'Вступление',
    description: 'Начало трека, задаёт атмосферу.',
    icon: '🎵'
  },
  {
    tag: 'Verse',
    title: 'Куплет',
    description: 'Основная повествовательная часть.',
    icon: '📝'
  },
  {
    tag: 'Pre-Chorus',
    title: 'Пре-хорус',
    description: 'Переход к припеву, нарастание.',
    icon: '🌊'
  },
  {
    tag: 'Chorus',
    title: 'Припев',
    description: 'Самая яркая и запоминающаяся секция.',
    icon: '🎤'
  },
  {
    tag: 'Bridge',
    title: 'Бридж',
    description: 'Контрастная секция перед финалом.',
    icon: '🌉'
  },
  {
    tag: 'Drop',
    title: 'Дроп',
    description: 'Кульминация с максимальным басом.',
    icon: '💥'
  },
  {
    tag: 'Build-Up',
    title: 'Билд-ап',
    description: 'Нарастание перед дропом.',
    icon: '📈'
  },
  {
    tag: 'Breakdown',
    title: 'Брейкдаун',
    description: 'Разрядка после кульминации.',
    icon: '🌙'
  },
  {
    tag: 'Outro',
    title: 'Аутро',
    description: 'Завершение, угасание энергии.',
    icon: '🌅'
  },
  {
    tag: 'Solo',
    title: 'Соло',
    description: 'Инструментальное соло.',
    icon: '🎸'
  },
  {
    tag: 'Hook',
    title: 'Хук',
    description: 'Повторяющийся запоминающийся фрагмент.',
    icon: '🎣'
  },
  {
    tag: 'Interlude',
    title: 'Интерлюдия',
    description: 'Связка между основными секциями.',
    icon: '🎹'
  }
]

function Structure() {
  const [structure, setStructure] = useState([])
  const [copied, setCopied] = useState(false)

  const addTag = (tag) => {
    setStructure([...structure, tag])
  }

  const clearStructure = () => {
    setStructure([])
  }

  const copyStructure = () => {
    const text = structure.map(t => `[${t}]`).join(' ')
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="structure-page">
      <div className="structure-hero">
        <h1>📐 Мета-теги Структуры</h1>
        <p>Кликните на тег, чтобы добавить его в структуру</p>
      </div>

      <div className="structure-grid">
        {structureTags.map((item, idx) => (
          <div 
            key={idx}
            className="structure-card"
            onClick={() => addTag(item.tag)}
          >
            <span className="structure-pill">[{item.tag}]</span>
            <div className="structure-icon">{item.icon}</div>
            <div className="structure-title">{item.title}</div>
            <div className="structure-desc">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="structure-result">
        <div className="structure-result-header">
          <div>
            <div className="structure-result-label">📋 Текущая структура</div>
            <div className="structure-result-sub">Сохраненная последовательность тегов</div>
          </div>
          <div style={{display: 'flex', gap: '8px'}}>
            <button 
              className="structure-btn"
              onClick={copyStructure}
              disabled={structure.length === 0}
            >
              {copied ? '✓ Скопировано' : '📋 Копировать'}
            </button>
            <button 
              className="structure-btn structure-btn-clear"
              onClick={clearStructure}
              disabled={structure.length === 0}
            >
              ✕ Очистить
            </button>
          </div>
        </div>
        <div className="structure-result-text">
          {structure.length === 0 ? (
            <div style={{color: 'var(--text3)', fontStyle: 'italic'}}>
              Пусто — кликните на теги выше.
            </div>
          ) : (
            <div style={{fontFamily: 'var(--mono)', fontSize: '0.95rem', lineHeight: '1.8'}}>
              {structure.map((t, i) => <span key={i}>[{t}] </span>)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Structure
