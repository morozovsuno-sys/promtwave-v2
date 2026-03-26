import React, { useState } from 'react'

function PromptGenerator() {
  const [selectedPrompt, setSelectedPrompt] = useState(null)

  return (
    <div className="prompt-generator">
      <div className="hero">
        <h1>Генератор промптов</h1>
        <p>321 профессиональный промпт для Suno AI v5</p>
      </div>
      <div className="container">
        <div className="prompt-grid">
          <div className="prompt-card">
            <h3>Пример промпта 1</h3>
            <p>Electronic, Ambient, Chill</p>
            <button>Использовать</button>
          </div>
          <div className="prompt-card">
            <h3>Пример промпта 2</h3>
            <p>Rock, Energy, Powerful</p>
            <button>Использовать</button>
          </div>
          <div className="prompt-card">
            <h3>Пример промпта 3</h3>
            <p>Jazz, Smooth, Relaxing</p>
            <button>Использовать</button>
          </div>
        </div>
        <p>Больше промптов будет добавлено позже...</p>
      </div>
    </div>
  )
}

export default PromptGenerator
