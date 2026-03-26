import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>PromtWave v2</h1>
        <p>Professional Suno AI v5 Prompt Generator</p>
        <p>Создавайте идеальные промпты для генерации музыки</p>
        <Link to="/generator">
          <button>Начать генерацию</button>
        </Link>
      </div>
      <div className="container">
        <h2>321 готовых промптов для Suno AI</h2>
        <p>Модернизированная архитектура с React, Vite и Railway Backend</p>
      </div>
    </div>
  )
}

export default Home
