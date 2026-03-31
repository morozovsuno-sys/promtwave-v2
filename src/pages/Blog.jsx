import { useState } from 'react'

const articles = [
  {
    id: 1,
    title: 'Как создать идеальный промт для Suno AI',
    date: '15 апреля 2025',
    category: 'Гайды',
    excerpt: 'Разбираем структуру промта: жанр, настроение, инструменты, темп. Узнайте, как написать промт, который создаст именно ту музыку, которую вы хотите.',
    content: 'Промт для Suno AI — это не просто описание. Это точная инструкция для нейросети. Начните с жанра: укажите стиль (pop, rock, jazz, electronic). Затем добавьте настроение (energetic, melancholic, dark, uplifting). Опишите инструменты и темп. Чем конкретнее промт — тем лучше результат.',
    tags: ['промты', 'гайд', 'Suno AI']
  },
  {
    id: 2,
    title: 'Топ-5 жанров для Suno AI в 2025',
    date: '10 апреля 2025',
    category: 'Рейтинги',
    excerpt: 'Какие жанры лучше всего генерирует Suno AI? Мы протестировали сотни промтов и составили рейтинг самых успешных стилей.',
    content: 'На первом месте — Electronic и Synthwave. Нейросеть отлично справляется с электронной музыкой, создавая плотные биты и атмосферные пады. На втором — Cinematic и Orchestral. Эпические саундтреки с оркестровыми аранжировками получаются очень убедительно. Далее идут Pop, Rock и Lo-fi.',
    tags: ['жанры', 'рейтинг', 'электронная музыка']
  },
  {
    id: 3,
    title: 'Suno AI vs Udio: сравнение нейросетей',
    date: '5 апреля 2025',
    category: 'Обзоры',
    excerpt: 'Два главных AI-музыкальных инструмента 2025 года. Где качество лучше? Где промты работают точнее? Полное сравнение.',
    content: 'Suno AI выигрывает в вокале и поп-музыке. Udio лучше справляется с инструментальными жанрами. Оба инструмента поддерживают кастомные промты. Suno предлагает более удобный интерфейс, Udio — больше контроля над деталями аранжировки.',
    tags: ['сравнение', 'Udio', 'обзор']
  },
  {
    id: 4,
    title: 'Промты для саундтреков к видео',
    date: '1 апреля 2025',
    category: 'Гайды',
    excerpt: 'Создаём фоновую музыку для YouTube, TikTok и подкастов с помощью Suno AI. Готовые шаблоны промтов для разных форматов.',
    content: 'Для YouTube-видео подходят инструментальные треки в стиле cinematic или lo-fi. Для TikTok — короткие энергичные треки с чётким битом. Для подкастов — ambient и jazz-фон без резких перепадов. Используйте теги [instrumental], [no vocals] для генерации без вокала.',
    tags: ['видео', 'YouTube', 'TikTok', 'инструментальная']
  },
  {
    id: 5,
    title: 'Секреты mood-тегов в Suno AI',
    date: '28 марта 2025',
    category: 'Советы',
    excerpt: 'Как настроение промта влияет на результат? Разбираем теги energetic, dark, melancholic, aggressive и их комбинации.',
    content: 'Mood-теги кардинально меняют звучание. "Energetic" добавляет быстрый темп и яркие аккорды. "Dark" создаёт минорную атмосферу с тяжёлыми басами. "Melancholic" даёт медленный темп и лиричную мелодию. Комбинируйте теги: "dark energetic" создаёт агрессивную электронику.',
    tags: ['mood', 'теги', 'настроение']
  },
  {
    id: 6,
    title: 'Как монетизировать музыку из Suno AI',
    date: '20 марта 2025',
    category: 'Бизнес',
    excerpt: 'Легально ли продавать музыку, созданную нейросетью? Разбираем авторские права, лицензии и способы заработка.',
    content: 'По условиям Suno AI, пользователи Pro и Premier планов получают коммерческие права на созданную музыку. Её можно продавать на стоках (AudioJungle, Pond5), использовать в рекламе, YouTube-каналах. Важно: всегда указывайте источник и проверяйте актуальные условия лицензии.',
    tags: ['монетизация', 'авторские права', 'заработок']
  }
]

function Blog() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('Все')

  const categories = ['Все', ...new Set(articles.map(a => a.category))]
  const filtered = filter === 'Все' ? articles : articles.filter(a => a.category === filter)

  if (selected) {
    const article = articles.find(a => a.id === selected)
    return (
      <div className="blog-page">
        <div className="blog-article-full">
          <button className="btn-back" onClick={() => setSelected(null)}>← Назад к блогу</button>
          <div className="article-meta">
            <span className="article-category">{article.category}</span>
            <span className="article-date">{article.date}</span>
          </div>
          <h1>{article.title}</h1>
          <p className="article-content">{article.content}</p>
          <div className="article-tags">
            {article.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>Блог о Suno AI</h1>
        <p>Гайды, советы и новости о создании музыки с помощью нейросетей</p>
      </div>
      <div className="blog-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="blog-grid">
        {filtered.map(article => (
          <div key={article.id} className="blog-card" onClick={() => setSelected(article.id)}>
            <div className="blog-card-header">
              <span className="article-category">{article.category}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <div className="article-tags">
              {article.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <button className="btn-read">Читать далее →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
