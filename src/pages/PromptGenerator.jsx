import { useState } from 'react'

const genres = ['Electronic', 'Rock', 'Jazz', 'Hip-Hop', 'Classical', 'Pop', 'Metal', 'Ambient', 'Folk', 'R&B', 'Country', 'Cinematic']

const moods = [
  { icon: '⚡', label: 'Энергичное' },
  { icon: '🔥', label: 'Мощное' },
  { icon: '🌙', label: 'Сырое' },
  { icon: '😎', label: 'Хаотичное' },
  { icon: '💫', label: 'Пульсирующее' },
  { icon: '🌟', label: 'Счастливое' },
  { icon: '🌀', label: 'Драйвовое' },
  { icon: '💫', label: 'Лихорадочное' },
  { icon: '🎭', label: 'Веселое' },
  { icon: '🎨', label: 'Радостное' },
  { icon: '🎪', label: 'Грустное' }
]

const vibes = [
  { icon: '🎵', label: 'Воодушевляющее' },
  { icon: '🌊', label: 'Надежда' },
  { icon: '🎯', label: 'Игривое' },
  { icon: '🔮', label: 'Принудливое' },
  { icon: '✨', label: 'Радостное' },
  { icon: '🌙', label: 'Грустное' }
]

function PromptGenerator() {
  const [trackName, setTrackName] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectedMoods, setSelectedMoods] = useState([])
  const [selectedVibes, setSelectedVibes] = useState([])
  const [activeTab, setActiveTab] = useState('free')
  const [copied, setCopied] = useState(false)

  const toggleMood = (mood) => {
    setSelectedMoods(prev => 
      prev.includes(mood) ? prev.filter(m => m !== mood) : [...prev, mood]
    )
  }

  const toggleVibe = (vibe) => {
    setSelectedVibes(prev => 
      prev.includes(vibe) ? prev.filter(v => v !== vibe) : [...prev, vibe]
    )
  }

  const generatePrompt = () => {
    const parts = []
    if (selectedGenre) parts.push(selectedGenre)
    if (selectedMoods.length) parts.push(selectedMoods.join(', '))
    if (selectedVibes.length) parts.push(selectedVibes.join(', '))
    return parts.join(' • ')
  }

  const handleCopy = () => {
    const prompt = generatePrompt()
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const prompt = generatePrompt()

  return (
    <div className="constructor-page">
      <div className="constructor-container">
        <div className="constructor-left">
          <div className="constructor-header">
            <div className="constructor-icon">⚡</div>
            <div>
              <h2>Конструктор промта</h2>
              <p>Настройте параметры трека</p>
            </div>
          </div>

          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'free' ? 'active' : ''}`}
              onClick={() => setActiveTab('free')}
            >
              💾 Free
            </button>
            <button 
              className={`tab ${activeTab === 'premium' ? 'active' : ''}`}
              onClick={() => setActiveTab('premium')}
            >
              ⭐ Premium 🔒
            </button>
          </div>

          <div className="form-group">
            <label>НАЗВАНИЕ ТРЕКА</label>
            <input
              type="text"
              placeholder="Опционально"
              value={trackName}
              onChange={(e) => setTrackName(e.target.value)}
              className="text-input"
            />
          </div>

          <div className="form-group">
            <label>ЖАНР</label>
            <select 
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="select-input"
            >
              <option value="">Выберите жанр...</option>
              {genres.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label>⚡ ЭНЕРГИЯ</label>
            <div className="badge-grid">
              {moods.map((mood, i) => (
                <button
                  key={i}
                  className={`badge ${selectedMoods.includes(mood.label) ? 'selected' : ''}`}
                  onClick={() => toggleMood(mood.label)}
                >
                  {mood.icon} {mood.label}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>🎨 НАСТРОЕНИЕ</label>
            <div className="badge-grid">
              {vibes.map((vibe, i) => (
                <button
                  key={i}
                  className={`badge ${selectedVibes.includes(vibe.label) ? 'selected' : ''}`}
                  onClick={() => toggleVibe(vibe.label)}
                >
                  {vibe.icon} {vibe.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="constructor-right">
          <div className="result-header">
            <div className="result-icon">📋</div>
            <div>
              <h2>Результат</h2>
              <p>Готово к вставке в Suno</p>
            </div>
          </div>

          <div className="result-section">
            <div className="result-label">STYLE OF MUSIC</div>
            <div className="result-content">
              {prompt || 'Выберите параметры и нажмите «Сгенерировать»'}
            </div>
            <button className="copy-btn-small" onClick={handleCopy}>copy</button>
          </div>

          <div className="result-section">
            <div className="result-label">LYRICS STRUCTURE</div>
            <div className="result-content result-placeholder">
              Добавьте теги в разделе «Структура»
            </div>
            <button className="copy-btn-small">copy</button>
          </div>

          <div className="result-section">
            <div className="result-label">FULL PROMPT</div>
            <div className="result-content result-full">
              {prompt || '--'}
            </div>
            <button className="copy-btn-small" onClick={handleCopy}>copy</button>
          </div>

          <button className="save-btn">
            ⭐ Сохранить в кабинете
          </button>

          <div className="premium-notice">
            🔒 Режимы Продвинутый и Pro — только в Premium
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptGenerator
