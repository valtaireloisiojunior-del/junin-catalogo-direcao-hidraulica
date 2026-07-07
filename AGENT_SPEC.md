# Dicatec Direção Hidráulica — Especificação

## Objetivo
Sistema HTML offline tipo "Dicatec" para consulta técnica de caixas de direção hidráulica, mecânica e elétrica (EPS) dos veículos nacionais e mais vendidos no Brasil.

## Stack
- HTML5 puro, CSS3, Vanilla JS (ES6+)
- Sem framework (leve, offline, roda em qualquer navegador)
- Dados em JSON embutido no JS (pode ser substituído por API futuramente)
- Fonte: Google Fonts (Inter)
- Ícones: Lucide CDN ou SVG inline

## Arquitetura de Dados

```typescript
interface CaixaDirecao {
  id: string;
  marcaVeiculo: string;        // Fiat, VW, GM, Ford, Renault, Toyota, Honda...
  modeloVeiculo: string;       // Palio, Gol, Onix, Ka, Sandero...
  anos: string;              // "2001-2016"
  tipoCaixa: "hidraulica" | "mecanica" | "eletrica";
  fabricanteCaixa: string;     // DHB, TRW, Koyo, ZF, Jtekt, Bosch...
  codigos: string[];         // Referências originais
  motorizacoes: string[];    // 1.0, 1.4, 1.6, 1.8...
  aplicacoes: string[];      // Modelos similares que usam a mesma caixa
  sintomasComuns: string[];   // Vazamento, direção dura, folga...
  observacoes: string;        // Dicas técnicas, cuidados
  precoEstimadoPeca: number; // R$ (média mercado)
  imagem?: string;           // URL ou base64
}
```

## Interface

### Tela Principal
- **Header fixo:** Logo + campo de busca global + filtros rápidos
- **Sidebar:** Filtros por marca, tipo de caixa, fabricante
- **Grid principal:** Cards de caixa com info resumida
- **Modal de detalhes:** Tudo sobre a caixa selecionada

### Filtros
- Marca do veículo (Fiat, VW, GM, Ford, Renault, Toyota, Honda, Hyundai, Peugeot, Citroën...)
- Tipo de caixa (Hidráulica / Mecânica / Elétrica EPS)
- Fabricante da caixa (DHB, TRW, Koyo, ZF, Bosch...)
- Ano do veículo

### Busca
- Busca inteligente: modelo, marca, código, ano
- Resultados em tempo real (filtra conforme digita)

### Cards de Resultado
```
[FIAT] Palio / Siena / Strada Fire (2001-2016)
Tipo: Hidráulica | Caixa: TRW
Códigos: 5173... / 5180...
Motorizações: 1.0 / 1.3 / 1.4 / 1.6
Sintomas: Vazamento retentor, folga cremalheira
[Ver detalhes]
```

### Modal de Detalhes
- Todos os dados da interface
- Lista de aplicações (quais mais carros usam essa caixa)
- Dicas de reparo
- Referências cruzadas

## Pesquisa de Dados — O que reunir

### Marcas prioritárias (nacionais + populares)
- Fiat (Palio, Siena, Uno, Strada, Punto, Cronos, Argo, Mobi, Toro)
- Volkswagen (Gol, Voyage, Fox, Polo, Virtus, T-Cross, Nivus, Jetta, Golf)
- Chevrolet (Onix, Prisma, Corsa, Celta, Classic, Agile, Montana, Spin)
- Ford (Ka, Fiesta, Ecosport, Focus, Ranger, Maverick)
- Renault (Clio, Sandero, Logan, Duster, Captur, Kwid)
- Toyota (Corolla, Etios, Yaris, Hilux, SW4)
- Honda (Civic, City, Fit, HR-V)
- Hyundai (HB20, Creta, i30, Tucson)
- Peugeot (206, 207, 208, 307, 308, Hoggar)
- Citroën (C3, C4, C4 Lounge, Aircross)
- Nissan (March, Versa, Sentra, Kicks)

### Tipos de caixa a mapear
- DHB (Delphi / Nexteer)
- TRW (ZF TRW)
- Koyo / Jtekt
- ZF (ZF Lenksysteme)
- Bosch
- Visteon
- Magneti Marelli

### Fontes de pesquisa
- Catálogos de distribuidoras (Fort, Kargil, OLG, BrasCam)
- Fóruns de mecânicos (Fórum Mecânica, Clube do Carro)
- Sites de peças (Mercado Livre, AutoParts, GapRio)
- Manuais técnicos de montadoras
- Datasheets de fabricantes de caixa

## Formato de Entrega
- Diretório: `sistema-dicatec-direcao/`
- `index.html` — Página principal
- `css/style.css` — Estilos
- `js/app.js` — Lógica e dados
- `js/data.js` — Banco de dados em JSON (pode ser separado em múltiplos arquivos por marca)
- README.md — Como usar

## Contrato entre Pesquisador e Implementador
- Pesquisador: Gera `data_raw.md` com tabelas de dados brutos
- Implementador: Converte em `js/data.js` + cria interface
- Main agent: Integra, valida e entrega
