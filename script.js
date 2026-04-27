
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
    title: "App de Inventário com Google Sheets e Drive",
    category: "Mobile",
    description: "Aplicativo Flutter para coleta de inventário patrimonial, envio de dados para Google Sheets e upload de fotos para Google Drive.",
    problem: "Processo manual de registro de inventário, com risco de retrabalho e perda de informações.",
    solution: "Aplicativo mobile integrado ao Google Sheets e Google Drive, facilitando a coleta, organização e consulta das informações.",
    technologies: ["Flutter", "Dart", "Google Sheets API", "Google Drive API", "OAuth", "Google Cloud"],
    status: "Em uso / Projeto interno",
    image: "assets/projects/inventario.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "App para RH — Impressão de Crachás",
    category: "Automação",
    description: "Solução criada sob demanda para facilitar a impressão de imagens de crachás do setor de RH.",
    problem: "Processo manual e repetitivo para localizar, organizar e imprimir imagens de crachás.",
    solution: "Aplicação simples para agilizar a seleção e impressão das imagens, reduzindo retrabalho operacional.",
    technologies: ["Flutter", "Dart", "Automação de processos", "Interface interna"],
    status: "Projeto interno",
    image: "assets/projects/rh-crachas.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "PromoTinners",
    category: "Web",
    description: "Plataforma de divulgação de promoções com site, backend, encurtador de links e integração com canais de envio.",
    problem: "Necessidade de centralizar promoções, gerar links rastreáveis e automatizar publicação em canais.",
    solution: "Site com backend Node.js, banco de dados, API REST, links curtos e integração com WhatsApp/Telegram.",
    technologies: ["Node.js", "Express", "Next.js", "MySQL", "Prisma", "PM2", "Cloudflare"],
    status: "Em desenvolvimento",
    image: "assets/projects/promotinners.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "TinnersERP",
    category: "Backend",
    description: "ERP em desenvolvimento com módulos de clientes, produtos, vendas, estoque, financeiro e estrutura fiscal.",
    problem: "Necessidade de uma solução modular para gestão empresarial com suporte a multiempresa e multifilial.",
    solution: "Backend estruturado com NestJS, MySQL, autenticação JWT, permissões e módulos de negócio.",
    technologies: ["NestJS", "TypeScript", "MySQL", "Drizzle ORM", "JWT", "Swagger", "Flutter"],
    status: "Em desenvolvimento",
    image: "assets/projects/tinnerserp.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
  },
  {
    title: "Consultas SQL e Automações Hospitalares",
    category: "Hospitalar",
    description: "Criação de consultas SQL, análises de dados e automações para apoio a rotinas administrativas e assistenciais em ambiente hospitalar.",
    problem: "Necessidade de investigar inconsistências, conferir dados e apoiar decisões operacionais com informações confiáveis.",
    solution: "Consultas SQL, análise de tabelas, validações e apoio técnico respeitando segurança e privacidade dos dados.",
    technologies: ["Oracle SQL", "MV Soul", "MVPEP", "Banco de Dados", "Análise de Sistemas"],
    status: "Experiência profissional",
    image: "assets/projects/sql-hospitalar.png",
    repositoryUrl: "",
    demoUrl: "",
    featured: true
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
    links.appendChild(createElement("span", "", "Projeto interno ou privado"));
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
