# Portfólio Profissional - Allan Garcia

Portfólio estático criado para GitHub Pages, com foco em apresentar a atuação profissional de Allan Garcia como Analista de Sistemas e Desenvolvedor Full Stack Pleno.

O site destaca experiência prática em sistemas corporativos, ambiente hospitalar, desenvolvimento web/mobile, banco de dados, integrações e automações.

## Tecnologias usadas

- HTML5 semântico
- CSS3 responsivo
- JavaScript puro
- GitHub Pages
- Google Fonts via CDN

## Estrutura do projeto

```text
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg
    └── projects/
        ├── inventario.png
        ├── rh-crachas.png
        ├── promotinners.png
        ├── tinnerserp.png
        └── sql-hospitalar.png
```

## Como editar os projetos

Os projetos ficam no arquivo `script.js`, dentro do array `projects`.

Cada projeto usa os campos:

- `title`: nome do projeto
- `category`: categoria usada nos filtros
- `description`: resumo do projeto
- `problem`: problema resolvido
- `solution`: solução aplicada
- `technologies`: lista de tecnologias
- `status`: status atual
- `image`: caminho da imagem
- `repositoryUrl`: link do repositório, quando público
- `demoUrl`: link de demonstração, quando existir
- `featured`: destaque visual no card

Para adicionar um novo projeto, copie um objeto existente no array `projects`, cole abaixo e altere os dados.

## Como trocar imagens

- Foto profissional: substitua ou adicione a imagem em `assets/profile.jpg`.
- Imagens dos projetos: coloque os arquivos em `assets/projects/`.
- Atualize o campo `image` no `script.js` se usar outro nome de arquivo.

Caso uma imagem não exista, o site exibe um fallback visual e continua funcionando.

## Como editar contatos

No arquivo `index.html`, procure a seção `contato` e altere:

- Email
- LinkedIn
- WhatsApp
- Link do currículo em PDF

O botão de currículo aponta para:

```text
assets/curriculo-allan-garcia.pdf
```

Adicione o PDF nesse caminho ou altere o link no `index.html`.

## Como publicar no GitHub Pages

1. Acesse o repositório `allanpes12.github.io` no GitHub.
2. Envie os arquivos `index.html`, `style.css`, `script.js`, `README.md` e a pasta `assets`.
3. Abra `Settings`.
4. Acesse `Pages`.
5. Em `Build and deployment`, selecione:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Salve as alterações.
7. Acesse `https://allanpes12.github.io/` após a publicação.

## Observação sobre projetos hospitalares

Projetos e experiências ligados ao ambiente hospitalar devem usar descrições genéricas, dados fictícios e não devem expor nomes de pacientes, telas internas, credenciais, regras sigilosas ou informações sensíveis.
