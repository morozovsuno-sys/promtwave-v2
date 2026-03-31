coimport { useState } from 'react'

nst examplesData = [
  {
    genre: 'EDM',
    prompt: '[Intro][Synth pad] Building anticipation with atmospheric sounds[Verse 1]Pulsing bassline, crisp hi-hats, catchy vocal hooks[Pre-Chorus]Rising tension, layered synths[Chorus][Drop]Explosive synth lead, powerful kick, energetic melody[Verse 2]Variation on the verse theme, added elements[Bridge][Breakdown]Stripped-back, emotional, preparing for final drop[Chorus][Drop]Final explosive drop with all elements[Outro]Gradual fade-out, atmospheric conclusion',
    description: 'Энергичный EDM трек с мощным дропом'
  },
  {
    genre: 'Hip-Hop',
    prompt: '[Intro]Atmospheric sample, subtle drums[Verse 1]Strong drum pattern, deep 808 bass, confident flow[Hook]Catchy melodic phrase, memorable lyrics[Verse 2]Continued flow, variation in delivery[Bridge]Instrumental break, different texture[Hook]Return to catchy hook with added energy[Outro]Fading drums, concluding atmosphere',
    description: 'Классический хип-хоп с глубоким басом и запоминающимся хуком'
  },
  {
    genre: 'Pop',
    prompt: '[Intro]Catchy instrumental hook[Verse 1]Clear vocals, light instrumentation, storytelling[Pre-Chorus]Building tension, layered harmonies[Chorus]Memorable melody, full instrumentation, emotional peak[Verse 2]Continued story, slight variation[Chorus]Repeated chorus with added energy[Bridge]Contrasting section, emotional depth[Chorus]Final chorus with all elements[Outro]Gentle fade-out',
    description: 'Современный поп-трек с запоминающейся мелодией'
  },
  {
    genre: 'Rock',
    prompt: '[Intro][Guitar riff]Powerful opening riff[Verse 1]Driving drums, bass guitar, rhythmic guitar, expressive vocals[Chorus]Energetic, full band, memorable hook[Verse 2]Continued energy, variation in guitar work[Bridge][Guitar Solo]Technical and emotional solo section[Chorus]Final powerful chorus[Outro]Gradual intensity decrease, concluding riff',
    description: 'Энергичный рок-трек с мощным гитарным соло'
  },
  {
    genre: 'Ambient',
    prompt: '[Intro]Gentle pad sounds, subtle textures[Section A]Slowly evolving soundscape, minimal percussion[Section B]Added melodic elements, more layers[Section C]Peak complexity, rich harmonic texture[Section D]Gradual simplification, return to minimal[Outro]Fading to silence, peaceful resolution',
    description: 'Атмосферный эмбиент трек с эволюционирующими текстурами'
  },
  {
    genre: 'Trap',
    prompt: '[Intro]Dark atmospheric sounds, 808 preview[Verse 1]Hard-hitting 808s, rapid hi-hat rolls, synth melody[Hook]Catchy vocal phrase, memorable melody[Verse 2]Continued trap beat, variation in flow[Bridge][Build-Up]Rising tension, filtered elements[Hook]Final hook with maximum energy[Outro]Fading 808s, atmospheric conclusion',
    description: 'Современный трэп с мощными 808 и быстрыми хай-хэтами'
  }
]

function Examples() {
  const [copied, setCopied] = useState(null)

  const copyPrompt = (prompt, index) => {
    navigator.clipboard.writeText(prompt)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="examples-page">
      <div className="examples-container">
        <h1>Примеры промтов</h1>
        <p className="examples-subtitle">Готовые примеры промтов для разных жанров</p>
        
        <div className="examples-grid">
          {examplesData.map((example, index) => (
            <div key={index} className="example-card">
              <div className="example-header">
                <h3>🎵 {example.genre}</h3>
                <button
                  className="example-copy-btn"
                  onClick={() => copyPrompt(example.prompt, index)}
                >
                  {copied === index ? '✓' : '📋'}
                </button>
              </div>
              <p className="example-description">{example.description}</p>
              <div className="example-prompt">
                <pre>{example.prompt}</pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Examples
