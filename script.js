// ============================================================
// Projetos do portfólio
// Edite este array para adicionar, remover ou ajustar projetos.
//
// Campos usados pelos cards:
// title, category, icon, description, problem, solution,
// technologies, status, repositoryUrl, demoUrl e featured.
//
// Para projetos hospitalares, use descrições genéricas e nunca exponha
// dados sensíveis, nomes de pacientes, prints internos ou telas do MV.
// ============================================================
const projects = [
  {
    title: "Consultas SQL para Etiquetas Hospitalares",
    category: "Hospitalar",
    icon: "🏥",
    description: "Ajuste e desenvolvimento de consultas SQL utilizadas em relatórios e etiquetas hospitalares no Report Designer.",
    problem: "Necessidade de corrigir, validar ou melhorar informações exibidas em etiquetas e relatórios utilizados em rotinas hospitalares.",
    solution: "Análise das tabelas envolvidas, revisão de joins, filtros, campos calculados e regras de exibição no Report Designer, respeitando a estrutura dos sistemas MV e a privacidade dos dados.",
    technologies: ["Oracle SQL", "MV Soul", "MVPEP", "Report Designer", "Banco de Dados", "Relatórios Hospitalares"],
    status: "Experiência profissional",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "App de Inventário com Google Sheets e Drive",
    category: "Mobile",
    icon: "📱",
    description: "Aplicativo Flutter para coleta de inventário patrimonial, envio de dados para Google Sheets e upload de fotos para Google Drive.",
    problem: "Processo manual de registro de inventário, com risco de retrabalho, perda de informações e dificuldade de organização.",
    solution: "Aplicativo mobile integrado ao Google Sheets e Google Drive, facilitando a coleta, organização e consulta das informações.",
    technologies: ["Flutter", "Dart", "Google Sheets API", "Google Drive API", "OAuth", "Google Cloud"],
    status: "Projeto interno",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "App para RH — Impressão de Crachás",
    category: "Automação",
    icon: "🪪",
    description: "Solução criada sob demanda para facilitar a organização e impressão de imagens de crachás.",
    problem: "Processo manual e repetitivo para localizar, organizar e imprimir imagens de crachás.",
    solution: "Aplicação simples para agilizar a seleção e impressão das imagens, reduzindo retrabalho operacional.",
    technologies: ["Flutter", "Dart", "Automação de Processos", "Interface Interna"],
    status: "Projeto interno",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "PromoTinners",
    category: "Web",
    icon: "🛒",
    description: "Plataforma de divulgação de promoções com site, backend, encurtador de links e integração com canais de envio.",
    problem: "Necessidade de centralizar promoções, gerar links rastreáveis e automatizar a publicação em canais.",
    solution: "Site com backend Node.js, banco de dados, API REST, links curtos e integração com WhatsApp/Telegram.",
    technologies: ["Node.js", "Express", "Next.js", "MySQL", "Prisma", "PM2", "Cloudflare"],
    status: "Em desenvolvimento",
    repositoryUrl: "",
    demoUrl: "",
    featured: false
  },
  {
    title: "TinnersERP",
    category: "Backend",
    icon: "🧩",
    description: "ERP em desenvolvimento com módulos de clientes, produtos, vendas, estoque, financeiro e estrutura fiscal.",
    problem: "Necessidade de uma solução modular para gestão empresarial com suporte a multiempresa e multifilial.",
    solution: "Backend estruturado com NestJS, MySQL, autenticação JWT, permissões e módulos de negócio.",
    technologies: ["NestJS", "TypeScript", "MySQL", "Drizzle ORM", "JWT", "Swagger", "Flutter"],
    status: "Em desenvolvimento",
    repositoryUrl: "",
    demoUrl: "",
    featured: false
  },
  {
    title: "Consultas SQL e Validações Operacionais",
    category: "Banco de Dados",
    icon: "🗄️",
    description: "Criação de consultas SQL para conferência, validação e apoio à tomada de decisão em rotinas operacionais.",
    problem: "Necessidade de consultar dados de forma confiável para entender inconsistências, apoiar setores e validar informações do sistema.",
    solution: "Construção de consultas SQL, análise de relacionamentos entre tabelas, filtros e regras de negócio para apoiar decisões técnicas e operacionais.",
    technologies: ["SQL", "Oracle", "PostgreSQL", "MySQL", "Análise de Dados", "Banco de Dados"],
    status: "Experiência profissional",
    repositoryUrl: "",
    demoUrl: "",
    featured: false
  }
];

const categories = ["Todos", "Mobile", "Web", "Backend", "Banco de Dados", "Automação", "Hospitalar"];

const filtersContainer = document.querySelector("#project-filters");
const projectsGrid = document.querySelector("#projects-grid");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const backToTopButton = document.querySelector(".back-to-top");
const yearElement = document.querySelector("#current-year");

let activeCategory = "Todos";

function createElement(tag, className, textContent) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

function isProjectVisible(project) {
  return activeCategory === "Todos" || project.category === activeCategory;
}

function renderFilters() {
  filtersContainer.innerHTML = "";

  categories.forEach((category) => {
    const button = createElement("button", "filter-button", category);
    button.type = "button";
    button.setAttribute("aria-pressed", String(category === activeCategory));

    if (category === activeCategory) {
      button.classList.add("is-active");
    }

    button.addEventListener("click", () => {
      activeCategory = category;
      renderFilters();
      renderProjects();
    });

    filtersContainer.appendChild(button);
  });
}

function createProjectCard(project) {
  const article = createElement("article", `project-card reveal${project.featured ? " featured" : ""}`);

  const visual = createElement("div", "project-visual");
  const icon = createElement("div", "project-icon", project.icon || "💻");
  icon.setAttribute("aria-hidden", "true");

  const visualMeta = createElement("div", "project-visual-meta");
  visualMeta.append(
    createElement("strong", "", project.category),
    createElement("span", "", project.featured ? "Destaque" : "Projeto técnico")
  );
  visual.append(icon, visualMeta);

  const body = createElement("div", "project-body");
  const meta = createElement("div", "project-meta");
  meta.append(
    createElement("span", "project-category", project.category),
    createElement("span", "project-status", project.status)
  );

  const title = createElement("h3", "", project.title);
  const description = createElement("p", "project-description", project.description);
  const problem = createProjectDetail("Problema", project.problem);
  const solution = createProjectDetail("Solução", project.solution);

  const technologies = createElement("div", "project-tech");
  project.technologies.forEach((technology) => {
    technologies.appendChild(createElement("span", "", technology));
  });

  const links = createElement("div", "project-links");
  if (project.repositoryUrl) {
    const repoLink = createElement("a", "", "Repositório");
    repoLink.href = project.repositoryUrl;
    repoLink.target = "_blank";
    repoLink.rel = "noopener noreferrer";
    links.appendChild(repoLink);
  }

  if (project.demoUrl) {
    const demoLink = createElement("a", "", "Demo");
    demoLink.href = project.demoUrl;
    demoLink.target = "_blank";
    demoLink.rel = "noopener noreferrer";
    links.appendChild(demoLink);
  }

  if (!project.repositoryUrl && !project.demoUrl) {
    links.appendChild(createElement("span", "", "Sem link público por sigilo ou contexto interno"));
  }

  body.append(meta, title, description, problem, solution, technologies, links);
  article.append(visual, body);

  return article;
}

function createProjectDetail(label, text) {
  const detail = createElement("div", "project-detail");
  detail.append(createElement("strong", "", label), createElement("p", "", text));
  return detail;
}

function renderProjects() {
  const visibleProjects = projects.filter(isProjectVisible);
  projectsGrid.innerHTML = "";

  visibleProjects.forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project));
  });

  observeRevealElements();
}

function toggleMenu(forceClose = false) {
  const shouldOpen = forceClose ? false : !navMenu.classList.contains("is-open");

  navMenu.classList.toggle("is-open", shouldOpen);
  menuToggle.classList.toggle("is-active", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  document.body.classList.toggle("menu-open", shouldOpen);
}

function setupNavigation() {
  menuToggle.addEventListener("click", () => toggleMenu());

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(true));
  });
}

function setupBackToTop() {
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
  }, { passive: true });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function observeRevealElements() {
  const revealElements = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach((element) => observer.observe(element));
}

function init() {
  yearElement.textContent = new Date().getFullYear();
  renderFilters();
  renderProjects();
  setupNavigation();
  setupBackToTop();
  observeRevealElements();
}

document.addEventListener("DOMContentLoaded", init);
