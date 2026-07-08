# Junin Direção Hidráulica — Evolução do Site
## Especificação de Arquitetura v1.0

## Visão do Projeto
Transformar o catálogo técnico offline em uma **plataforma de consulta online** que:
1. Identifica a caixa de direção correta pelo veículo (placa, chassi, ano/modelo)
2. Faz pré-diagnóstico por sintomas (IA local baseada no catálogo)
3. Mostra referências de peças com descrição e link para compra
4. Gera receita via comissão em vendas + anúncios

## Requisitos Funcionais

### RF1 — Identificação por Veículo
- Input: placa do veículo (Mercosul/brasileira), chassi, ou ano+modelo
- Output: caixa de direção compatível, com foto, código, preço estimado
- Fonte de dados: tabela FIPE + mapeamento manual de modelos → caixas

### RF2 — Pré-diagnóstico com IA
- Input: sintomas descritos pelo cliente ("direção pesada", "vazamento")
- Output: possível defeito, caixa afetada, procedimento sugerido, custo estimado
- Tecnologia: matching de palavras-chave + scoring no catálogo local (sem API externa)

### RF3 — Referências de Peças
- Cada código de referência (ex: 16900162S) tem descrição clara
- Click no código → abre busca no Google em nova aba
- Exemplo: "16900162S — Caixa de direção hidráulica TRW Palio/Siena 2001-2016"

### RF4 — Preços de Kit de Reparo
- As caixas só abrem com kit inteiro (retentor + bucha + anéis + vedantes)
- Preços exibidos são de kit completo, não só retentor
- Fonte: preços médios de Mercado Livre, Fort Distribuidora, TDS Parts

### RF5 — Monetização
- Call-to-action para compra da caixa (links de afiliado)
- Espaços para anúncios Google AdSense
- Formulário de contato para orçamento

## Arquitetura Técnica

### Stack
- Frontend: HTML5 + CSS3 + Vanilla JS (ES6+)
- Hospedagem: GitHub Pages (gratuito)
- Dados: JSON estático (data.js)
- Não há backend — tudo roda no cliente

### Estrutura de Dados
```javascript
// Novo campo: mapeamento veículo → caixa
const mapeamentoVeiculos = [
  { placaPrefixo: ["ABC", "DEF"], modelo: "Palio", ano: "2001-2016", caixaId: "fiat-palio-siena-strada-trw-01" },
  // ...
];

// Novo campo: referências com descrição
const referenciasPecas = {
  "16900162S": { descricao: "Caixa de direção hidráulica TRW Palio/Siena/Strada 2001-2016", tipo: "caixa_completa", precoKit: "R$ 350-600" },
  "5173.7077": { descricao: "Kit de reparo caixa de direção DHB Palio/Siena", tipo: "kit_reparo", precoKit: "R$ 80-150" },
  // ...
};

// Novo campo: sintomas → defeitos (base para IA)
const baseDiagnostico = [
  { sintomas: ["vazamento", "retentor", "cremalheira"], caixaIds: ["fiat-palio-...", "vw-gol-..."], defeito: "Retentor da cremalheira degradado", urgencia: "alta" },
  // ...
];
```

## Equipe de Agentes

### Agente 1: Arquiteto de Dados
- Tarefa: Expandir data.js com mapeamento de veículos, referências de peças, preços de kit, base de diagnóstico
- Arquivos: js/data.js

### Agente 2: Frontend — Identificação por Veículo
- Tarefa: Criar interface de input (placa/chassi/ano-modelo) e lógica de match
- Arquivos: index.html, js/app.js, css/style.css

### Agente 3: Frontend — Pré-diagnóstico IA
- Tarefa: Melhorar o widget "Mecânico Virtual" com scoring inteligente e resposta estruturada
- Arquivos: js/app.js, css/style.css

### Agente 4: Frontend — Referências e Monetização
- Tarefa: Criar cards de referências com descrição, preço de kit, link Google, CTA de compra, espaços de anúncio
- Arquivos: index.html, js/app.js, css/style.css

## Integração
- Todos os agentes trabalham no mesmo repo
- Merge final: index.html unificado, app.js modularizado, data.js expandido
- Validação: site deve abrir localmente e no GitHub Pages

## Próximos Passos
1. Criar branch para evolução
2. Delegar tarefas para agentes
3. Integrar mudanças
4. Testar e subir
