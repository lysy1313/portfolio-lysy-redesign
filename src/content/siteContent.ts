export type Language = "ru" | "en";
export type SectionId = "home" | "projects" | "skills" | "about" | "contact";
export type IconName =
  | "arrow-down"
  | "arrow-up-right"
  | "check"
  | "code"
  | "copy"
  | "database"
  | "file"
  | "github"
  | "layers"
  | "linkedin"
  | "mail"
  | "menu"
  | "close"
  | "spark"
  | "telegram"
  | "tools";

export interface Project {
  id: "tmdb" | "todo" | "shop" | "portfolio";
  index: string;
  year: string;
  repository: string;
  live: string;
  archiveUrl?: string;
  archiveLabel?: Record<Language, string>;
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
    cvAction: string;
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
export const TELEGRAM_HANDLE = "@lysy_I";
export const TELEGRAM_URL = "https://t.me/lysy_I";
export const LINKEDIN_HANDLE = "in/ilya-lysy";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ilya-lysy";
export const DISCORD = "lysy.i";
export const GITHUB_URL = "https://github.com/lysy1313";
export const CV_FILE = "cv.pdf";

export const projects: readonly Project[] = [
  {
    id: "tmdb",
    index: "01",
    year: "2025",
    repository: "https://github.com/lysy1313/tmdb-kinopoisk-lysy",
    live: "https://tmdb-kinopoisk-lysy.vercel.app/",
    image: "projects/tmdb.webp",
    stack: ["React", "TypeScript", "RTK Query", "React Router", "Zod", "SCSS"],
    title: { ru: "TMDB Кинопоиск", en: "TMDB Cinema" },
    category: {
      ru: "Киносервис · API и фильтрация",
      en: "Movie discovery · API & filters",
    },
    description: {
      ru: "Клиент каталога фильмов и сериалов с живым поиском, комбинированной фильтрацией, пагинацией и детальными карточками тайтлов.",
      en: "A movie and TV catalog client with live search, combined filters, pagination and detailed title pages.",
    },
    detail: {
      ru: "Кэширование и дедупликация запросов вынесены в RTK Query, ответы API валидируются схемами Zod на границе сети, а параметры фильтров синхронизированы с URL.",
      en: "Request caching and deduplication are handled by RTK Query, API responses are validated with Zod at the network boundary, and filter state is synced with the URL.",
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
    category: {
      ru: "Менеджер задач · CRUD и формы",
      en: "Task management · CRUD & forms",
    },
    description: {
      ru: "Многосписочный таск-менеджер с авторизацией, статусами выполнения, фильтрацией по категориям и мгновенным откликом UI.",
      en: "A multi-list task manager with authentication, completion states, category filtering and responsive UI feedback.",
    },
    detail: {
      ru: "Формы построены на React Hook Form + Zod со строгой типизацией ошибок, а мутации списков и задач синхронизируются с сервером через RTK Query.",
      en: "Forms are built on React Hook Form + Zod with strictly typed validation errors, while list and task mutations sync with the server via RTK Query.",
    },
  },
  {
    id: "shop",
    index: "03",
    year: "2024",
    repository:
      "https://github.com/lysy1313/product-catalog-with-shopping-cart",
    live: "https://product-catalog-with-shopping-cart.vercel.app/#/product-catalog-with-shopping-cart/catalog",
    image: "projects/shop.webp",
    previewLabel: "shop.vercel.app",
    stack: ["React", "TypeScript", "Redux", "React Router", "SCSS"],
    title: { ru: "Магазин", en: "E-commerce" },
    category: {
      ru: "E-commerce · каталог и корзина",
      en: "E-commerce · catalog & cart",
    },
    description: {
      ru: "Витрина интернет-магазина с поиском, сортировкой по цене и категориям, карточками наличия и расчётом корзины.",
      en: "An e-commerce storefront with search, price and category sorting, stock badges and cart calculation.",
    },
    detail: {
      ru: "Бизнес-логика корзины, подсчёт позиций и фильтрация изолированы в Redux-сторе отдельно от UI-компонентов.",
      en: "Cart business logic, item totals and filtering are isolated in the Redux store cleanly separated from presentational components.",
    },
  },
  {
    id: "portfolio",
    index: "04",
    year: "2026",
    repository: "https://github.com/lysy1313/portfolio-lysy-redesign",
    live: "#home",
    archiveUrl: "https://lysy1313.github.io/portfolio-lysy/#/portfolio-lysy/",
    archiveLabel: {
      ru: "Архив v1 (2025)",
      en: "Archive v1 (2025)",
    },
    stack: [
      "React 19",
      "TypeScript 6",
      "Vite 8",
      "CSS Scroll Timeline",
      "a11y",
    ],
    title: { ru: "Портфолио v2", en: "Portfolio v2" },
    category: { ru: "Дизайн-система · v1 → v2", en: "Design system · v1 → v2" },
    description: {
      ru: "Полный редизайн личного сайта с переходом от многостраничного шаблона v1 к быстрой одностраничной архитектуре (100/100 Lighthouse).",
      en: "A complete redesign of my personal site moving from the multi-page v1 template to a fast single-page architecture (100/100 Lighthouse).",
    },
    detail: {
      ru: "Нативные CSS scroll-driven анимации с фолбэками на IntersectionObserver, rAF-троттлинг pointer-эффектов, полная клавиатурная доступность и ссылка на старую версию v1 для сравнения.",
      en: "Native CSS scroll-driven animations with IntersectionObserver fallbacks, rAF-throttled pointer effects, full keyboard accessibility and a direct link to v1 for comparison.",
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
      cvAction: "Скачать CV",
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
        { value: "04", label: "ключевых проекта" },
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
      approach:
        "Сначала задача и пользовательский сценарий — затем технология.",
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
      failed:
        "Не удалось отправить сообщение. Попробуйте ещё раз или напишите на email.",
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
      cvAction: "Download CV",
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
        { value: "04", label: "featured projects" },
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
      approach:
        "Start with the problem and user flow — choose the technology afterwards.",
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
      failed:
        "The message could not be sent. Please try again or email me directly.",
    },
    footer: {
      note: "Designed and built with care for the details.",
      backToTop: "Back to top",
    },
  },
};
