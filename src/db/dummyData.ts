import { TNewsArticle } from "@/types/newsTypes";

let i1 = 'https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg'
let i2 = "https://plus.unsplash.com/premium_photo-1744754825046-71455f020060?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
let i3 = "https://images.unsplash.com/photo-1744877478622-a78c7a3336f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"

export const newsArticles: TNewsArticle[] = [
    {
        id: 123412,
        title: "Новые технологии в веб-разработке 2024",
        excerpt: "Открытие революционного подхода к созданию пользовательских интерфейсов...",
        date: "15 мая 2024",
        category: "Технологии",
        readTime: "4 мин",
        imageUrl: i1,
        imageAlign: 'top',
        size: 'wide'
    },
    {
        id: 123413,
        title: "Искусственный интеллект в медицине",
        excerpt: "Как ИИ помогает врачам ставить точные диагнозы и спасать жизни пациентов...",
        date: "10 июня 2024",
        category: "Наука",
        readTime: "6 мин",
        imageUrl: i2,
        imageAlign: 'left',
        size: 'medium'
    },
    {
        id: 123414,
        title: "Космический туризм: реальность ближе чем кажется",
        excerpt: "Частные компании соревнуются в создании доступных космических путешествий...",
        date: "22 июля 2024",
        category: "Космос",
        readTime: "8 мин",
        imageUrl: i3,
        imageAlign: 'right',
        size: 'big'
    },
    {
        id: 123415,
        title: "Зеленые технологии будущего",
        excerpt: "Инновационные решения для борьбы с изменением климата и сохранения экологии...",
        date: "5 августа 2024",
        category: "Экология",
        readTime: "5 мин",
        imageUrl: i1,
        imageAlign: 'bottom',
        size: 'wide'
    },
    {
        id: 123416,
        title: "Квантовые компьютеры: прорыв в вычислениях",
        excerpt: "Как квантовые технологии изменят наше представление о возможностях компьютеров...",
        date: "12 сентября 2024",
        category: "Технологии",
        readTime: "7 мин",
        imageUrl: i3,
        imageAlign: 'top',
        size: 'small'
    }
];