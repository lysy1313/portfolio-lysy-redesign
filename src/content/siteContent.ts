export type Language = "ru" | "en";
export type SectionId = "home" | "projects" | "skills" | "about" | "contact";
export type IconName =
  | "arrow-down"
  | "arrow-up-right"
  | "check"
  | "code"
  | "copy"
  | "database"
  | "github"
  | "layers"
  | "mail"
  | "menu"
  | "close"
  | "spark"
  | "tools";

export interface Project {
  id: "tmdb" | "todo" | "shop" | "portfolio" | "legacy-portfolio";
  index: string;
  year: string;
  repository: string;
  live: string;
  stack: readonly string[];
  image?: string;
  previewLabel?: string;
  badge?: Record<Language, string>;
  title: Record<Language, string>;
  category: Record<Language, string>;
  description: Record<Language, string>;
  detail: Record<Language, string>;
}

export interface SkillGroup {
  icon: IconName;
  title: Record<Language, string>;
  description: Record<Language, string>;
  items: readonly string[];
}

interface SiteCopy {
  meta: {
    title: string;
    description: string;
  };
  skip: string;
  navigationLabel: string;
  menuOpen: string;
  menuClose: string;
  changeLanguage: string;
  navigation: ReadonlyArray<{ id: SectionId; label: string }>;
  status: string;
  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    scrollHint: string;
    consoleFile: string;
    consoleLines: readonly string[];
    badges: readonly string[];
    stats: ReadonlyArray<{ value: string; label: string }>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    live: string;
    source: string;
    current: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    marqueeLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    paragraphs: readonly string[];
    educationLabel: string;
    education: string;
    approachLabel: string;
    approach: string;
    factsLabel: string;
    facts: readonly string[];
    codeLabel: string;
    codeLines: readonly string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailLabel: string;
    discordLabel: string;
    copyEmail: string;
    copied: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailFieldLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    formHint: string;
    sent: string;
    failed: string;
  };
  footer: {
    note: string;
    backToTop: string;
  };
}

export const EMAIL = "lysy.ilya1313@gmail.com";
export const DISCORD = "lysy.i";
export const GITHUB_URL = "https://github.com/lysy1313";

export const projects: readonly Project[] = [
  {
    id: "tmdb",
    index: "01",
    year: "2025",
    repository: "https://github.com/lysy1313/tmdb-kinopoisk-lysy",
    live: "https://tmdb-kinopoisk-lysy.vercel.app/",
    image: "projects/tmdb.webp",
    stack: [
      "React",
      "TypeScript",
      "RTK Query",
      "React Router",
      "Zod",
      "SCSS",
    ],
    title: { ru: "TMDB Кинопоиск", en: "TMDB Cinema" },
    category: { ru: "Киносервис", en: "Movie discovery app" },
    description: {
      ru: "Современный интерфейс для поиска фильмов и сериалов с детальными страницами, фильтрами и асинхронными данными.",
      en: "A modern interface for discovering movies and TV shows with detail pages, filters and asynchronous data.",
    },
    detail: {
      ru: "Архитектура построена вокруг типизированных API-запросов, валидации данных и предсказуемой навигации.",
      en: "The architecture is built around typed API requests, data validation and predictable navigation.",
    },
  },
  {
    id: "todo",
    index: "02",
    year: "2025",
    repository: "https://github.com/lysy1313/todolist",
    live: "https://todolist-indol-ten-37.vercel.app/",
    image: "projects/todo.webp",
    stack: [
      "React",
      "TypeScript",
      "MUI",
      "RTK Query",
      "React Hook Form",
      "Zod",
    ],
    title: { ru: "Список дел", en: "Task Manager" },
    category: { ru: "Менеджер задач", en: "Task management" },
    description: {
      ru: "Менеджер задач с категориями, фильтрацией, формами и понятным состоянием интерфейса.",
      en: "A task manager with categories, filtering, forms and clear interface states.",
    },
    detail: {
      ru: "Фокус проекта — удобные пользовательские сценарии, строгая схема форм и работа с серверным состоянием.",
      en: "The project focuses on smooth user flows, strict form schemas and server-state management.",
    },
  },
  {
    id: "shop",
    index: "03",
    year: "2024",
    repository: "https://github.com/lysy1313/product-catalog-with-shopping-cart",
    live: "https://product-catalog-with-shopping-cart.vercel.app/#/product-catalog-with-shopping-cart/catalog",
    image: "projects/shop.webp",
    previewLabel: "shop.vercel.app",
    stack: ["React", "TypeScript", "Redux", "React Router", "SCSS"],
    title: { ru: "Магазин", en: "E-commerce" },
    category: { ru: "Каталог и корзина", en: "Catalog and cart" },
    description: {
      ru: "Интернет-магазин с каталогом товаров, маршрутизацией и полноценным сценарием добавления в корзину.",
      en: "An online store with a product catalog, routing and a complete add-to-cart flow.",
    },
    detail: {
      ru: "Состояние корзины отделено от представления, а интерфейс адаптируется под разные размеры экрана.",
      en: "Cart state is separated from presentation, while the interface adapts to different screen sizes.",
    },
  },
  {
    id: "portfolio",
    index: "04",
    year: "2026",
    repository: "https://github.com/lysy1313/portfolio-lysy",
    live: "#home",
    stack: ["React", "TypeScript", "Vite", "CSS Motion", "Accessibility"],
    title: { ru: "Портфолио", en: "Portfolio" },
    category: { ru: "Личный сайт", en: "Personal website" },
    description: {
      ru: "Одностраничное портфолио, в котором типографика, цвет и движение работают как единая система.",
      en: "A one-page portfolio where typography, color and motion work as one coherent system.",
    },
    detail: {
      ru: "Scroll-driven анимации дополнены fallback-логикой, reduced motion и доступной навигацией с клавиатуры.",
      en: "Scroll-driven animations are backed by fallbacks, reduced-motion support and accessible keyboard navigation.",
    },
  },
  {
    id: "legacy-portfolio",
    index: "05",
    year: "2025",
    repository: "https://github.com/lysy1313/portfolio-lysy",
    live: "https://lysy1313.github.io/portfolio-lysy/#/portfolio-lysy/",
    image: "projects/legacy-portfolio.webp",
    previewLabel: "portfolio-lysy / archive",
    badge: {
      ru: "Архив · старая версия",
      en: "Archive · previous version",
    },
    stack: [
      "React",
      "TypeScript",
      "React Router",
      "styled-components",
      "EmailJS",
    ],
    title: { ru: "Старое портфолио", en: "Previous portfolio" },
    category: {
      ru: "Архив / предыдущая версия",
      en: "Archive / previous version",
    },
    description: {
      ru: "Предыдущая многостраничная версия портфолио с роутингом, фиолетовой темой и отдельными экранами проектов.",
      en: "The previous multi-page portfolio with routing, a purple theme and separate project screens.",
    },
    detail: {
      ru: "Оставил проект в подборке как честный архив: он показывает, как изменились мой визуальный язык, архитектурные решения и внимание к деталям.",
      en: "I keep it here as an honest archive showing how my visual language, architecture decisions and attention to detail have evolved.",
    },
  },
];

export const skillGroups: readonly SkillGroup[] = [
  {
    icon: "code",
    title: { ru: "Основа", en: "Core" },
    description: {
      ru: "Семантика, типы и предсказуемое поведение браузера.",
      en: "Semantics, types and predictable browser behavior.",
    },
    items: ["TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: "layers",
    title: { ru: "React-экосистема", en: "React ecosystem" },
    description: {
      ru: "Компоненты, маршрутизация, формы и управление состоянием.",
      en: "Components, routing, forms and state management.",
    },
    items: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "React Router",
      "React Hook Form",
      "Zod",
    ],
  },
  {
    icon: "database",
    title: { ru: "Данные и UI", en: "Data & UI" },
    description: {
      ru: "Работа с данными и создание масштабируемого визуального слоя.",
      en: "Working with data and building a scalable visual layer.",
    },
    items: ["PostgreSQL", "MongoDB", "MUI", "styled-components", "Sass / SCSS"],
  },
  {
    icon: "tools",
    title: { ru: "Процесс", en: "Workflow" },
    description: {
      ru: "Инструменты для быстрой разработки, дизайна и контроля версий.",
      en: "Tools for fast development, design and version control.",
    },
    items: ["Git", "Vite", "Figma", "VS Code", "Git Bash"],
  },
];

export const siteCopy: Record<Language, SiteCopy> = {
  ru: {
    meta: {
      title: "Lysy — Frontend Developer",
      description:
        "Портфолио Lysy — frontend-разработчика, который создаёт быстрые, доступные и выразительные React-интерфейсы.",
    },
    skip: "Перейти к содержимому",
    navigationLabel: "Основная навигация",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    changeLanguage: "Переключить язык на английский",
    navigation: [
      { id: "projects", label: "Проекты" },
      { id: "skills", label: "Навыки" },
      { id: "about", label: "Обо мне" },
      { id: "contact", label: "Контакты" },
    ],
    status: "Открыт к предложениям",
    hero: {
      eyebrow: "Frontend developer · React / TypeScript",
      titleLead: "Создаю интерфейсы,",
      titleAccent: "которые хочется прокрутить до конца.",
      description:
        "Соединяю чистую архитектуру, выразительный визуал и аккуратное движение — без ущерба скорости, адаптивности и доступности.",
      primaryAction: "Смотреть проекты",
      secondaryAction: "Открыть GitHub",
      scrollHint: "Листайте, здесь начинается история",
      consoleFile: "portfolio.tsx",
      consoleLines: [
        "const developer = {",
        "  name: 'Lysy',",
        "  focus: ['React', 'TypeScript'],",
        "  caresAbout: ['UX', 'motion', 'clean code'],",
        "  available: true,",
        "};",
      ],
      badges: ["React", "TypeScript", "Motion"],
      stats: [
        { value: "05", label: "основных проектов" },
        { value: "100%", label: "адаптивный подход" },
        { value: "BNTU", label: "техническое образование" },
      ],
    },
    projects: {
      eyebrow: "Избранные работы",
      title: "Не просто карточки. Истории, собранные в интерфейс.",
      description:
        "Каждый проект решает свою задачу: от работы с API и состоянием до форм, каталогов и продуманной навигации.",
      live: "Открыть демо",
      source: "Исходный код",
      current: "Вы уже здесь",
    },
    skills: {
      eyebrow: "Стек и подход",
      title: "Инструменты — только средство. Важен результат.",
      description:
        "Выбираю технологии под задачу, держу границы компонентов ясными и не добавляю сложность без причины.",
      marqueeLabel: "Технологии в движении",
    },
    about: {
      eyebrow: "Человек за кодом",
      title: "Люблю порядок в коде и характер в интерфейсе.",
      description:
        "Я frontend-разработчик, которому одинаково важны логика приложения и то, какие ощущения оно оставляет у пользователя.",
      paragraphs: [
        "Работаю с React и TypeScript, проектирую компоненты, состояние и формы так, чтобы код было легко читать, проверять и развивать.",
        "В визуальной части ценю ритм, сильную типографику и анимации с понятной целью. Движение должно помогать навигации, а не отвлекать от контента.",
      ],
      educationLabel: "Образование",
      education: "Белорусский национальный технический университет",
      approachLabel: "Рабочий принцип",
      approach: "Сначала задача и пользовательский сценарий — затем технология.",
      factsLabel: "Немного вне кода",
      facts: [
        "Зима > лето",
        "Велосипедные поездки",
        "Пицца и паста",
        "Любимый фильм — «Зелёная миля»",
      ],
      codeLabel: "developer.config.ts",
      codeLines: [
        "quality: 'non-negotiable'",
        "details: true",
        "overengineering: false",
        "learning: 'continuous'",
      ],
    },
    contact: {
      eyebrow: "Начнём диалог",
      title: "Есть идея? Давайте превратим её в работающий интерфейс.",
      description:
        "Я заинтересован в возможностях трудоустройства и открыт к обсуждению проектов, задач и сотрудничества.",
      emailLabel: "Email",
      discordLabel: "Discord",
      copyEmail: "Скопировать email",
      copied: "Email скопирован",
      formTitle: "Расскажите о задаче",
      nameLabel: "Ваше имя",
      namePlaceholder: "Как к вам обращаться?",
      emailFieldLabel: "Ваш email",
      emailPlaceholder: "name@example.com",
      subjectLabel: "Тема",
      subjectPlaceholder: "Например: Frontend-позиция или новый проект",
      messageLabel: "Сообщение",
      messagePlaceholder: "Коротко о проекте, роли или задаче...",
      submit: "Отправить сообщение",
      sending: "Отправляю...",
      formHint: "Форма отправит сообщение напрямую через EmailJS.",
      sent: "Сообщение отправлено. Спасибо — отвечу как можно скорее.",
      failed: "Не удалось отправить сообщение. Попробуйте ещё раз или напишите на email.",
    },
    footer: {
      note: "Спроектировано и собрано с вниманием к деталям.",
      backToTop: "Наверх",
    },
  },
  en: {
    meta: {
      title: "Lysy — Frontend Developer",
      description:
        "Lysy's portfolio — fast, accessible and expressive React interfaces built with care.",
    },
    skip: "Skip to content",
    navigationLabel: "Primary navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    changeLanguage: "Switch language to Russian",
    navigation: [
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    status: "Open to opportunities",
    hero: {
      eyebrow: "Frontend developer · React / TypeScript",
      titleLead: "I build interfaces",
      titleAccent: "worth scrolling all the way through.",
      description:
        "I combine clean architecture, expressive visuals and thoughtful motion — without sacrificing speed, responsiveness or accessibility.",
      primaryAction: "Explore projects",
      secondaryAction: "Open GitHub",
      scrollHint: "Scroll down — the story starts here",
      consoleFile: "portfolio.tsx",
      consoleLines: [
        "const developer = {",
        "  name: 'Lysy',",
        "  focus: ['React', 'TypeScript'],",
        "  caresAbout: ['UX', 'motion', 'clean code'],",
        "  available: true,",
        "};",
      ],
      badges: ["React", "TypeScript", "Motion"],
      stats: [
        { value: "05", label: "featured projects" },
        { value: "100%", label: "responsive mindset" },
        { value: "BNTU", label: "technical education" },
      ],
    },
    projects: {
      eyebrow: "Selected work",
      title: "Not just cards. Stories shaped into interfaces.",
      description:
        "Each project solves a different problem — from APIs and state to forms, catalogs and intentional navigation.",
      live: "Open live demo",
      source: "View source",
      current: "You are here",
    },
    skills: {
      eyebrow: "Stack & mindset",
      title: "Tools are only a means. The outcome is what matters.",
      description:
        "I choose technology for the task, keep component boundaries clear and avoid complexity without a reason.",
      marqueeLabel: "Technologies in motion",
    },
    about: {
      eyebrow: "The human behind the code",
      title: "I like order in code and character in interfaces.",
      description:
        "I am a frontend developer who cares equally about application logic and the feeling it leaves with the user.",
      paragraphs: [
        "I work with React and TypeScript, shaping components, state and forms so the code remains easy to read, test and extend.",
        "Visually, I value rhythm, strong typography and motion with a clear purpose. Animation should guide people, not distract them from content.",
      ],
      educationLabel: "Education",
      education: "Belarusian National Technical University",
      approachLabel: "Working principle",
      approach: "Start with the problem and user flow — choose the technology afterwards.",
      factsLabel: "A little beyond code",
      facts: [
        "Winter > summer",
        "Cycling with friends",
        "Pizza and pasta",
        "Favorite movie — The Green Mile",
      ],
      codeLabel: "developer.config.ts",
      codeLines: [
        "quality: 'non-negotiable'",
        "details: true",
        "overengineering: false",
        "learning: 'continuous'",
      ],
    },
    contact: {
      eyebrow: "Start a conversation",
      title: "Have an idea? Let’s turn it into a working interface.",
      description:
        "I am interested in employment opportunities and open to discussing projects, roles and collaborations.",
      emailLabel: "Email",
      discordLabel: "Discord",
      copyEmail: "Copy email",
      copied: "Email copied",
      formTitle: "Tell me about the task",
      nameLabel: "Your name",
      namePlaceholder: "How should I address you?",
      emailFieldLabel: "Your email",
      emailPlaceholder: "name@example.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "For example: Frontend role or a new project",
      messageLabel: "Message",
      messagePlaceholder: "A few words about the project, role or task...",
      submit: "Send message",
      sending: "Sending...",
      formHint: "The form sends your message directly through EmailJS.",
      sent: "Message sent. Thank you — I will reply as soon as possible.",
      failed: "The message could not be sent. Please try again or email me directly.",
    },
    footer: {
      note: "Designed and built with care for the details.",
      backToTop: "Back to top",
    },
  },
};
