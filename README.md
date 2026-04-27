# Portfólio Profissional - Allan Garcia

Portfólio estático para GitHub Pages, criado para apresentar Allan Garcia como Analista de Sistemas e Desenvolvedor Full Stack Pleno, com foco em Flutter, Node.js, SQL, automações, integrações e experiência prática em ambiente hospitalar.

O conteúdo foi escrito para destacar uma atuação técnica e honesta: desenvolvimento web/mobile, soluções internas, análise de dados, consultas SQL, relatórios/etiquetas no Report Designer e apoio a processos operacionais sem expor dados sensíveis.

## Tecnologias usadas

- HTML5 semântico
- CSS3 responsivo
- JavaScript puro
- Google Fonts via CDN
- GitHub Pages

Não há React, Next.js, Vite, dependências obrigatórias ou etapa de build.

## Estrutura

```text
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── curriculo-allan-garcia.pdf
```

## Como editar os projetos

Os projetos são carregados dinamicamente pelo arquivo `script.js`, no array `projects`.

Cada projeto usa estes campos:

- `title`: nome do projeto
- `category`: categoria usada nos filtros
- `icon`: ícone/emoji exibido no card
- `description`: resumo do projeto
- `problem`: problema resolvido
- `solution`: solução aplicada
- `technologies`: lista de tecnologias
- `status`: status atual
- `repositoryUrl`: link do repositório, quando puder ser público
- `demoUrl`: link de demonstração, quando existir
- `featured`: destaque visual no card

Para adicionar um projeto, copie um objeto existente dentro de `projects`, cole abaixo e altere os dados.

## Cards sem imagens

Os cards não dependem de imagens reais. Cada card usa:

- Ícone grande
- Gradiente técnico
- Categoria
- Status
- Problema
- Solução
- Lista de tecnologias

Essa abordagem evita expor prints internos, telas hospitalares, dados de pacientes, informações corporativas ou imagens de sistemas privados.

## Como adicionar ou remover tecnologias

As tecnologias visíveis da seção `Tecnologias` ficam no `index.html`.

Procure pelos grupos:

- `Frontend/Mobile`
- `Backend`
- `Banco de Dados`
- `DevOps/Infra`
- `Sistemas e Ambiente Hospitalar`
- `Integrações`

Edite os itens dentro de cada bloco `.chips`.

## Como trocar links de contato

No `index.html`, procure a seção `contato` e edite:

- GitHub
- Portfólio
- Email
- LinkedIn
- WhatsApp

Os campos de email, LinkedIn e WhatsApp estão como placeholders para edição.

## Como trocar o currículo

O botão `Baixar currículo` aponta para:

```text
assets/curriculo-allan-garcia.pdf
```

Substitua esse arquivo pelo currículo atualizado mantendo o mesmo nome, ou altere o link no `index.html`.

## Como publicar no GitHub Pages

1. Envie os arquivos para o repositório `allanpes12.github.io`.
2. Acesse `Settings` no GitHub.
3. Entre em `Pages`.
4. Em `Build and deployment`, escolha:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Salve.
6. Acesse `https://allanpes12.github.io/` após o deploy.

## Segurança e privacidade

Projetos ligados ao ambiente hospitalar devem ser apresentados de forma genérica.

Não exponha:

- Nomes de pacientes
- Dados de atendimento
- Prints internos
- Telas do MV
- Consultas com dados reais
- Credenciais
- Chaves de API
- URLs internas
- Informações sigilosas de setores, regras ou integrações

Quando necessário, descreva apenas o problema, a abordagem técnica e o resultado operacional de forma segura.
