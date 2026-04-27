
// ============================================================
// Projetos do portfolio
// Edite este array para adicionar, remover ou alterar projetos.
// Campos esperados:
// title, category, description, problem, solution, technologies,
// status, image, repositoryUrl, demoUrl e featured.
// Para projetos hospitalares, use descricoes genericas e nunca exponha
// dados sensiveis, nomes de pacientes ou telas internas.
// ============================================================
const projects = [
  {
    title: "App RL Ponto",
    category: "Automação",
    description: "Aplicação Flutter para coleta, organização e conferência de registros de relógios de ponto, com leitura de AFD, enriquecimento de usuários e exportação de dados.",
    problem: "Rotinas de ponto exigiam conferência manual, tratamento de arquivos e validação de registros com risco de erro operacional.",
    solution: "Interface interna para centralizar coleta, histórico, logs, configuração de equipamentos, cruzamento de identificadores e exportação de informações.",
    technologies: ["Flutter", "Dart", "Windows", "AFD", "API Control iD", "JSON local", "Automação"],
    status: "Repositório privado",
    image: "assets/projects/app-rl-ponto.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    privateReason: "Repositório privado por envolver integrações e rotinas internas."
  },
  {
    title: "Inventário TI",
    category: "Mobile",
    description: "Aplicativo Flutter para coleta de inventário patrimonial, leitura de QR Code, envio de dados para Google Sheets e apoio ao controle de ativos.",
    problem: "Processo manual de registro de inventário, com risco de retrabalho, perda de informações e dificuldade de conferência em campo.",
    solution: "Aplicativo mobile integrado a planilhas, autenticação Google e armazenamento local para facilitar coleta, organização, validação e consulta das informações.",
    technologies: ["Flutter", "Dart", "Google Sheets API", "Google Drive API", "OAuth", "QR Code", "Google Cloud"],
    status: "Projeto interno",
    image: "assets/projects/inventario-ti.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    privateReason: "Repositório privado por conter configuração de integração Google e dados operacionais."
  },
  {
    title: "LogicaMobileGO Flutter - branch Pos_add",
    category: "Mobile",
    description: "Modificações na branch Pos_add do LogicaMobileGO Flutter para adaptação do aplicativo a máquinas de cartão de crédito/POS, com foco em fluxo de pagamento e operação comercial.",
    problem: "O aplicativo precisava atender cenários de venda com máquina de cartão, integrando o fluxo mobile ao processo comercial sem quebrar a operação já existente.",
    solution: "Evolução específica da branch Pos_add com telas, modelos e integrações voltadas ao checkout, pagamento e uso em dispositivos POS/maquininhas.",
    technologies: ["Flutter", "Dart", "ERP", "APIs REST", "Cielo Smart POS", "Webservices", "Mobile"],
    status: "Projeto privado",
    image: "assets/projects/logicamobilego.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    privateReason: "Repositório mantido privado por conter chaves, certificado de assinatura e integrações comerciais."
  },
  {
    title: "Promo Bot",
    category: "Backend",
    description: "Bot Node.js para busca, ranqueamento, formatação e envio de promoções em canais como Telegram e WhatsApp, com deduplicação e integrações de marketplaces.",
    problem: "Era necessário automatizar a captura de ofertas, converter links, evitar promoções repetidas e publicar cards em múltiplos canais.",
    solution: "Pipeline com scrapers, conversores, cache de envios, formatação de mensagens, filas e conectores para Telegram/WhatsApp.",
    technologies: ["Node.js", "JavaScript", "Telegram Bot API", "WPPConnect", "Scraping", "Automação", "APIs"],
    status: "Projeto privado",
    image: "assets/projects/promo-bot.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    privateReason: "Repositório privado por envolver tokens, canais e configurações de operação."
  },
  {
    title: "Promo Site",
    category: "Web",
    description: "Plataforma web para divulgação de promoções com frontend, backend, API pública, autenticação por chave, encurtamento e redirecionamento de links.",
    problem: "As promoções precisavam de uma vitrine centralizada, URLs rastreáveis, API para cadastro e estrutura para publicação automatizada.",
    solution: "Site com backend Node.js/Express, frontend Next.js, banco MySQL/Prisma, documentação OpenAPI e rotas de promoção, categoria e redirecionamento.",
    technologies: ["Node.js", "Express", "Next.js", "MySQL", "Prisma", "OpenAPI", "Cloudflare"],
    status: "Em desenvolvimento",
    image: "assets/projects/promo-site.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    privateReason: "Repositório privado por conter estrutura de API, chaves de publicação e configurações de deploy."
  },
  {
    title: "App Card",
    category: "Automação",
    description: "Aplicativo Flutter para edição visual, montagem e impressão de cartões/crachás com templates, campos de texto, imagens, códigos de barras e pré-visualização.",
    problem: "Processos de criação e impressão de crachás exigiam ajuste manual, repetição de layout e pouca padronização.",
    solution: "Editor interno com elementos arrastáveis e redimensionáveis, armazenamento de layout e serviço de impressão para agilizar a produção.",
    technologies: ["Flutter", "Dart", "Impressão", "Templates", "Barcode", "Automação de processos"],
    status: "Projeto interno",
    image: "assets/projects/app-card.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true,
    privateReason: "Projeto interno, sem exposição de modelos, dados ou layouts reais de identificação."
  }
];

const categories = ["Todos", "Web", "Mobile", "Backend", "Banco de Dados", "Automação", "Hospitalar"];

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
  if (activeCategory === "Todos") {
    return true;
  }

  if (activeCategory === "Banco de Dados") {
    return project.category === "Banco de Dados" || project.technologies.some((tech) => tech.toLowerCase().includes("sql"));
  }

  return project.category === activeCategory;
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

  const imageWrap = createElement("div", "project-image");
  const image = document.createElement("img");
  image.src = project.image;
  image.alt = `Imagem do projeto ${project.title}`;
  image.loading = "lazy";
  image.addEventListener("error", () => {
    image.classList.add("is-hidden");
  });

  const placeholder = createElement("div", "project-placeholder", project.title);
  imageWrap.append(image, placeholder);

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
    links.appendChild(createElement("span", "", project.privateReason || "Projeto interno ou privado"));
  }

  body.append(meta, title, description, problem, solution, technologies, links);
  article.append(imageWrap, body);

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

function setupImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.classList.add("is-hidden");
    });

    if (image.complete && image.naturalWidth === 0) {
      image.classList.add("is-hidden");
    }
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
  setupImageFallbacks();
  observeRevealElements();
}

document.addEventListener("DOMContentLoaded", init);
