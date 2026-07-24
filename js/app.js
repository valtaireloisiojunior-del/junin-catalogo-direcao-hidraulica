/**
 * VJ Direção Hidráulica — Aplicação Principal
 * Vanilla JS ES6+, sem frameworks
 */

// Estado global
const state = {
  dados: [],
  filtros: {
    busca: '',
    marcas: new Set(),
    tipos: new Set(),
    fabricantes: new Set()
  },
  resultadoCount: 0
};

// Referências DOM (cache)
const dom = {};

// =========================================
// AFILIADOS — Links de Monetização
// =========================================
function gerarLinkAfiliadoML(termo) {
  // Substitua SEU_ID_ML pelo seu ID de afiliado do Mercado Livre
  const afiliadoId = 'SEU_ID_ML';
  const keyword = encodeURIComponent(termo);
  return `https://www.mercadolivre.com.br/busca?afiliado=${afiliadoId}&keyword=${keyword}`;
}

function gerarLinkAfiliadoMLProduto(itemId) {
  // Link direto para produto específico no ML
  const afiliadoId = 'SEU_ID_ML';
  return `https://produto.mercadolivre.com.br/${itemId}?afiliado=${afiliadoId}`;
}

function gerarLinkBuscaKit(marca, modelo) {
  const termo = `kit reparo caixa direcao hidraulica ${marca} ${modelo}`;
  return gerarLinkAfiliadoML(termo);
}

function gerarLinkBuscaCaixaRemanufaturada(marca, modelo) {
  const termo = `caixa direcao hidraulica remanufaturada ${marca} ${modelo}`;
  return gerarLinkAfiliadoML(termo);
}



// =========================================
// INICIALIZAÇÃO
// =========================================
function init() {
  cacheDOM();
  bindEvents();

  // Carregar dados do data.js (variável global catalogoCaixasDirecao)
  if (typeof catalogoCaixasDirecao !== 'undefined') {
    state.dados = catalogoCaixasDirecao;
  } else {
    console.error('Dados não encontrados: catalogoCaixasDirecao não está definido.');
    state.dados = [];
  }

  renderSidebar();
  aplicarFiltros();
}

function cacheDOM() {
  dom.searchInput = document.getElementById('searchInput');
  dom.resultsGrid = document.getElementById('resultsGrid');
  dom.resultsCount = document.getElementById('resultsCount');
  dom.sidebarFilters = document.getElementById('sidebarFilters');
  dom.modalOverlay = document.getElementById('modalOverlay');
  dom.modalContent = document.getElementById('modalContent');
  dom.modalBody = document.getElementById('modalBody');
  dom.btnResetFilters = document.getElementById('btnResetFilters');
  dom.chips = document.querySelectorAll('.filter-chip');
}

function bindEvents() {
  // Busca em tempo real
  dom.searchInput.addEventListener('input', debounce((e) => {
    state.filtros.busca = normalizarTexto(e.target.value);
    aplicarFiltros();
  }, 150));

  // Widget de Identificação por Veículo
  bindVehicleIdEvents();

  // Widget de IA
  const aiBtn = document.getElementById('aiBtn');
  const aiInput = document.getElementById('aiInput');
  if (aiBtn && aiInput) {
    aiBtn.addEventListener('click', () => perguntarIA(aiInput.value));
    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') perguntarIA(aiInput.value);
    });
  }

  // Reset de filtros
  dom.btnResetFilters.addEventListener('click', () => {
    resetarFiltros();
  });

  // Chips de filtro rápido
  dom.chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const tipo = chip.dataset.filter;
      const valor = chip.dataset.value;
      toggleChip(chip, tipo, valor);
    });
  });

  // Fechar modal por overlay
  dom.modalOverlay.addEventListener('click', (e) => {
    if (e.target === dom.modalOverlay) {
      fecharModal();
    }
  });

  // Fechar modal com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharModal();
  });
}

// =========================================
// IDENTIFICAÇÃO POR VEÍCULO
// =========================================
function bindVehicleIdEvents() {
  // Busca por Modelo + Ano (único campo)
  const modeloBtn = document.getElementById('modeloBtn');
  const modeloInput = document.getElementById('modeloInput');
  if (modeloBtn && modeloInput) {
    modeloBtn.addEventListener('click', () => buscarPorModelo(modeloInput.value));
    modeloInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') buscarPorModelo(modeloInput.value); });
  }
}

function buscarPorModelo(texto) {
  if (!texto || texto.trim().length < 2) {
    mostrarVehicleIdResultado('<p class="ai-error">Digite ano e modelo (ex: Palio 2012).</p>');
    return;
  }
  buscarPorTexto(texto);
}

function buscarPorTexto(texto) {
  const textoNorm = normalizarTexto(texto);
  const palavras = textoNorm.split(/\s+/).filter(p => p.length > 1);
  
  const resultados = state.dados.filter(item => {
    const campos = normalizarTexto([item.marcaVeiculo, item.modeloVeiculo, item.anos].join(' '));
    return palavras.some(p => campos.includes(p));
  });

  if (resultados.length === 0) {
    mostrarVehicleIdResultado(`<p class="ai-error">Nenhuma caixa encontrada para "${texto}". Tente "Palio 2012", "Gol 2015", etc.</p>`);
    return;
  }

  renderVehicleResults(resultados.map(r => ({caixaId: r.id})), texto);
}

function renderVehicleResults(resultados, busca) {
  const caixas = resultados.map(r => {
    const id = r.caixaId || r.id;
    return state.dados.find(c => c.id === id);
  }).filter(Boolean);

  if (caixas.length === 0) {
    mostrarVehicleIdResultado('<p class="ai-error">Nenhuma caixa encontrada.</p>');
    return;
  }

  const html = caixas.map(item => `
    <div class="vehicle-result-card" data-id="${item.id}">
      <div class="vehicle-result-header">
        <span class="vehicle-result-brand">${item.marcaVeiculo}</span>
        <span class="vehicle-result-type ${item.tipoCaixa}">${obterLabelTipo(item.tipoCaixa)}</span>
      </div>
      <h4 class="vehicle-result-title">${item.modeloVeiculo}</h4>
      <p class="vehicle-result-years">${item.anos} | ${item.fabricanteCaixa}</p>
      <p class="vehicle-result-sintoma">Sintoma: ${item.sintomasComuns[0]}</p>
      <div class="vehicle-result-price">
        <span>Kit de Reparo:</span>
        <strong>${item.precoKitReparo || 'Consultar'}</strong>
      </div>
      <button class="vehicle-result-btn" onclick="abrirModal('${item.id}')">
        Ver procedimento completo →
      </button>
    </div>
  `).join('');

  mostrarVehicleIdResultado(`
    <div class="vehicle-results-header">
      <strong>${caixas.length} caixa(s)</strong> encontrada(s) para "${busca}"
    </div>
    <div class="vehicle-results-grid">${html}</div>
  `);
}

function mostrarVehicleIdResultado(html) {
  const container = document.getElementById('vehicleIdResults');
  if (!container) return;
  container.innerHTML = html;
  container.style.display = 'block';
}

// =========================================
// WIDGET: MECÂNICO VIRTUAL (IA)
// =========================================
function perguntarIA(pergunta) {
  if (!pergunta || pergunta.trim().length < 3) {
    mostrarAIResultado('<p class="ai-error">Descreva o problema com mais detalhes.</p>');
    return;
  }

  const perguntaNorm = normalizarTexto(pergunta);
  const palavras = perguntaNorm.split(/\s+/).filter(p => p.length > 2);

  // Busca primeiro na base de diagnóstico
  let diagnosticoMatches = [];
  if (typeof baseDiagnostico !== 'undefined') {
    diagnosticoMatches = baseDiagnostico.filter(d => {
      return d.sintomas.some(s => palavras.some(p => s.includes(p)));
    });
  }

  // Busca no catálogo
  const caixaMatches = state.dados.map(item => {
    let score = 0;
    const textoItem = normalizarTexto([
      item.marcaVeiculo,
      item.modeloVeiculo,
      item.anos,
      item.fabricanteCaixa,
      ...(item.sintomasComuns || []),
      ...(item.defeitosDetalhados || []).map(d => d.defeito),
      item.observacoes
    ].join(' '));

    for (const palavra of palavras) {
      if (textoItem.includes(palavra)) score += 1;
    }

    if (perguntaNorm.includes('vazamento') && item.sintomasComuns.some(s => s.toLowerCase().includes('vazamento'))) score += 3;
    if (perguntaNorm.includes('folga') && item.sintomasComuns.some(s => s.toLowerCase().includes('folga'))) score += 3;
    if (perguntaNorm.includes('pesada') && item.sintomasComuns.some(s => s.toLowerCase().includes('pesada'))) score += 3;
    if (perguntaNorm.includes('ruido') && item.sintomasComuns.some(s => s.toLowerCase().includes('ruído'))) score += 3;

    return { item, score };
  }).filter(r => r.score > 0).sort((a, b) => b.score - a.score).slice(0, 5);

  if (diagnosticoMatches.length === 0 && caixaMatches.length === 0) {
    mostrarAIResultado(`
      <div class="ai-empty">
        <p>Não encontrei no catálogo uma caixa que corresponda exatamente a essa descrição.</p>
        <p><strong>Tente:</strong> "vazamento no retentor do Gol G5", "direção pesada do Palio", "folga na caixa do Corsa"</p>
      </div>
    `);
    return;
  }

  // Renderiza diagnóstico primeiro
  let diagnosticoHtml = '';
  if (diagnosticoMatches.length > 0) {
    diagnosticoHtml = `
      <div class="ai-diagnostico-section">
        <div class="ai-diagnostico-title">🔧 Diagnóstico Preliminar</div>
        ${diagnosticoMatches.map(d => `
          <div class="ai-diagnostico-card">
            <div class="ai-diagnostico-defeito">${d.defeito}</div>
            <div class="ai-diagnostico-meta">
              <span class="ai-diagnostico-urgencia ${d.urgencia}">Urgência: ${d.urgencia.toUpperCase()}</span>
              <span class="ai-diagnostico-custo">Custo: ${d.custoEstimado}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  const caixaHtml = caixaMatches.map(r => {
    const item = r.item;
    const defeitosRelevantes = (item.defeitosDetalhados || []).filter(d => {
      const textoDefeito = normalizarTexto(d.defeito + ' ' + d.causaRaiz + ' ' + d.sintomasVisuais);
      return palavras.some(p => textoDefeito.includes(p));
    }).slice(0, 2);

    const defeitosHtml = defeitosRelevantes.length > 0 ? `
      <div class="ai-defeitos-match">
        <strong>Defeitos relacionados:</strong>
        <ul>${defeitosRelevantes.map(d => `<li>• ${d.defeito} — ${d.solucao.substring(0, 80)}...</li>`).join('')}</ul>
      </div>
    ` : '';

    return `
      <div class="ai-result-card" data-id="${item.id}">
        <div class="ai-result-header">
          <span class="ai-result-brand">${item.marcaVeiculo}</span>
          <span class="ai-result-score">${r.score} match</span>
        </div>
        <h4 class="ai-result-title">${item.modeloVeiculo}</h4>
        <p class="ai-result-years">${item.anos} | ${item.fabricanteCaixa}</p>
        <p class="ai-result-sintoma">Sintoma: ${item.sintomasComuns[0]}</p>
        <div class="ai-result-price">
          <span>Kit Reparo:</span> <strong>${item.precoKitReparo || 'Consultar'}</strong>
        </div>
        ${defeitosHtml}
        <button class="ai-result-btn" onclick="abrirModal('${item.id}')">
          Ver procedimento completo →
        </button>
      </div>
    `;
  }).join('');

  mostrarAIResultado(`
    ${diagnosticoHtml}
    <div class="ai-results-header">
      <strong>${caixaMatches.length} caixa(s)</strong> relacionada(s) a "${pergunta}"
    </div>
    <div class="ai-results-grid">${caixaHtml}</div>
  `);
}

function mostrarAIResultado(html) {
  const container = document.getElementById('aiResults');
  if (!container) return;
  container.innerHTML = html;
  container.style.display = 'block';
}

// =========================================
// FUNÇÕES UTILITÁRIAS
// =========================================
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function formatarPreco(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function obterLabelTipo(tipo) {
  const map = {
    hidraulica: 'Hidráulica',
    mecanica: 'Mecânica',
    eletrica: 'Elétrica EPS'
  };
  return map[tipo] || tipo;
}

function obterIconeTipo(tipo) {
  const map = {
    hidraulica: 'droplet',
    mecanica: 'cog',
    eletrica: 'zap'
  };
  return map[tipo] || 'box';
}

function obterLabelDificuldade(dificuldade) {
  const map = {
    facil: 'Fácil',
    media: 'Média',
    dificil: 'Difícil'
  };
  return map[dificuldade] || 'Média';
}

// =========================================
// SIDEBAR — FILTROS
// =========================================
function renderSidebar() {
  const marcas = extrairValoresUnicos('marcaVeiculo');
  const tipos = extrairValoresUnicos('tipoCaixa');
  const fabricantes = extrairValoresUnicos('fabricanteCaixa');

  const grupos = [
    { label: 'Marca do Veículo', key: 'marca', options: marcas },
    { label: 'Tipo de Caixa', key: 'tipo', options: tipos },
    { label: 'Fabricante', key: 'fabricante', options: fabricantes }
  ];

  dom.sidebarFilters.innerHTML = grupos.map(grupo => `
    <div class="filter-group">
      <div class="filter-group-label">${grupo.label}</div>
      <div class="filter-options" data-group="${grupo.key}">
        ${grupo.options.map(opt => `
          <label class="filter-option" data-value="${opt}">
            <input type="checkbox" value="${opt}" data-group="${grupo.key}">
            <span class="filter-name">${opt}</span>
            <span class="filter-count">${contarPorFiltro(grupo.key, opt)}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Bind eventos nos checkboxes
  dom.sidebarFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const grupo = e.target.dataset.group;
      const valor = e.target.value;
      const checked = e.target.checked;

      const setMap = {
        marca: state.filtros.marcas,
        tipo: state.filtros.tipos,
        fabricante: state.filtros.fabricantes
      };

      if (checked) {
        setMap[grupo].add(valor);
      } else {
        setMap[grupo].delete(valor);
      }

      aplicarFiltros();
    });
  });
}

function extrairValoresUnicos(campo) {
  const valores = new Set(state.dados.map(item => item[campo]));
  return Array.from(valores).sort();
}

function contarPorFiltro(grupo, valor) {
  const campoMap = {
    marca: 'marcaVeiculo',
    tipo: 'tipoCaixa',
    fabricante: 'fabricanteCaixa'
  };
  return state.dados.filter(item => item[campoMap[grupo]] === valor).length;
}

// =========================================
// CHIPS (FILTROS RÁPIDOS DO HEADER)
// =========================================
function toggleChip(chip, tipo, valor) {
  const ativo = chip.classList.toggle('active');
  const setMap = {
    marca: state.filtros.marcas,
    tipo: state.filtros.tipos,
    fabricante: state.filtros.fabricantes
  };

  if (ativo) {
    setMap[tipo].add(valor);
  } else {
    setMap[tipo].delete(valor);
  }

  // Sincronizar com checkbox da sidebar
  sincronizarCheckbox(tipo, valor, ativo);
  aplicarFiltros();
}

function sincronizarCheckbox(tipo, valor, checked) {
  const checkbox = dom.sidebarFilters.querySelector(`input[data-group="${tipo}"][value="${valor}"]`);
  if (checkbox) checkbox.checked = checked;
}

// =========================================
// FILTROS — LÓGICA PRINCIPAL
// =========================================
function aplicarFiltros() {
  const filtrados = state.dados.filter(item => {
    // Busca textual
    if (state.filtros.busca) {
      const textoBusca = state.filtros.busca;
      const campos = [
        item.marcaVeiculo,
        item.modeloVeiculo,
        item.anos,
        item.fabricanteCaixa,
        ...item.codigos,
        ...item.motorizacoes
      ].join(' ').toLowerCase();
      const textoNormalizado = normalizarTexto(campos);
      if (!textoNormalizado.includes(textoBusca)) return false;
    }

    // Filtros de marca
    if (state.filtros.marcas.size > 0 && !state.filtros.marcas.has(item.marcaVeiculo)) {
      return false;
    }

    // Filtros de tipo
    if (state.filtros.tipos.size > 0 && !state.filtros.tipos.has(item.tipoCaixa)) {
      return false;
    }

    // Filtros de fabricante
    if (state.filtros.fabricantes.size > 0 && !state.filtros.fabricantes.has(item.fabricanteCaixa)) {
      return false;
    }

    return true;
  });

  state.resultadoCount = filtrados.length;
  renderResultados(filtrados);
  atualizarContador();
}

function resetarFiltros() {
  state.filtros.busca = '';
  state.filtros.marcas.clear();
  state.filtros.tipos.clear();
  state.filtros.fabricantes.clear();

  dom.searchInput.value = '';
  dom.chips.forEach(c => c.classList.remove('active'));
  dom.sidebarFilters.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });

  aplicarFiltros();
}

// =========================================
// RENDERIZAÇÃO — GRID
// =========================================
function renderResultados(lista) {
  if (lista.length === 0) {
    dom.resultsGrid.innerHTML = renderEmptyState();
    return;
  }

  dom.resultsGrid.innerHTML = lista.map((item, idx) => renderCard(item, idx)).join('');

  // Bind cliques nos cards
  dom.resultsGrid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      abrirModal(id);
    });
  });
}

function renderCard(item, idx) {
  const delay = Math.min(idx * 0.05, 0.5);
  const tipoLabel = obterLabelTipo(item.tipoCaixa);
  const tipoIcone = obterIconeTipo(item.tipoCaixa);
  const codigosVisiveis = item.codigos.slice(0, 3);
  const maisCodigos = item.codigos.length > 3 ? `+${item.codigos.length - 3}` : '';

  return `
    <article class="card" data-id="${item.id}" style="animation-delay: ${delay}s">
      <div class="card-header">
        <span class="card-brand">${item.marcaVeiculo}</span>
        <span class="card-type ${item.tipoCaixa}">
          <span class="chip-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${getLucideIcon(tipoIcone)}</svg></span>
          ${tipoLabel}
        </span>
      </div>
      <h3 class="card-title">${item.modeloVeiculo}</h3>
      <div class="card-years">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        ${item.anos}
      </div>
      <div class="card-info">
        <div class="card-info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span class="info-label">Caixa:</span>
          <span class="info-value">${item.fabricanteCaixa}</span>
        </div>
        <div class="card-info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
          <span class="info-label">Motor:</span>
          <span class="info-value">${item.motorizacoes.slice(0, 3).join(', ')}${item.motorizacoes.length > 3 ? '...' : ''}</span>
        </div>
        <div class="card-info-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <span class="info-label">Sintoma:</span>
          <span class="info-value">${item.sintomasComuns[0]}</span>
        </div>
      </div>
      <div class="card-codes">
        ${codigosVisiveis.map(c => `<span class="code-tag">${c}</span>`).join('')}
        ${maisCodigos ? `<span class="code-tag">${maisCodigos}</span>` : ''}
      </div>
      <div class="card-affiliate">
        <a href="${gerarLinkBuscaKit(item.marcaVeiculo, item.modeloVeiculo)}" target="_blank" rel="noopener" class="card-affiliate-btn" onclick="event.stopPropagation();">
          <span>🛒</span>
          <span>Comprar Kit de Reparo</span>
        </a>
      </div>
      <div class="card-footer">
        <div class="card-meta">
          <span class="difficulty-badge ${item.dificuldade || 'media'}">${obterLabelDificuldade(item.dificuldade)}</span>
          <span class="time-estimate">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${item.tempoEstimado || '-'}
          </span>
        </div>
        <button class="card-btn" aria-label="Ver detalhes">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          Detalhes
        </button>
      </div>
    </article>
  `;
}

function renderEmptyState() {
  return `
    <div class="empty-state" style="grid-column: 1 / -1;">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <h3>Nenhum resultado encontrado</h3>
      <p>Tente ajustar os filtros ou usar termos diferentes na busca. Você pode buscar por marca, modelo, código ou ano.</p>
    </div>
  `;
}

function atualizarContador() {
  dom.resultsCount.innerHTML = `<strong>${state.resultadoCount}</strong> ${state.resultadoCount === 1 ? 'caixa encontrada' : 'caixas encontradas'}`;
}

// =========================================
// MODAL
// =========================================
function abrirModal(id) {
  const item = state.dados.find(d => d.id === id);
  if (!item) return;

  dom.modalBody.innerHTML = renderModalContent(item);
  dom.modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Bind botão fechar
  const btnFechar = document.getElementById('btnModalClose');
  if (btnFechar) btnFechar.addEventListener('click', fecharModal);

  // Bind tabs
  bindModalTabs();
}

function fecharModal() {
  dom.modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

function renderDefeitosDetalhados(item) {
  const defeitos = item.defeitosDetalhados || [];
  if (defeitos.length === 0) {
    return `<div class="modal-section"><div class="dev-warning"><p>Defeitos detalhados em desenvolvimento para este modelo.</p></div></div>`;
  }
  return defeitos.map((d, i) => `
    <div class="defeito-card">
      <div class="defeito-header">
        <span class="defeito-numero">${i + 1}</span>
        <h3 class="defeito-titulo">${d.defeito}</h3>
        <span class="defeito-prioridade ${d.prioridade}">${d.prioridade.toUpperCase()}</span>
      </div>
      <div class="defeito-body">
        <div class="defeito-row">
          <span class="defeito-label">Causa Raiz:</span>
          <span class="defeito-text">${d.causaRaiz}</span>
        </div>
        <div class="defeito-row">
          <span class="defeito-label">Sintomas Visuais:</span>
          <span class="defeito-text">${d.sintomasVisuais}</span>
        </div>
        <div class="defeito-row">
          <span class="defeito-label">Diagnóstico:</span>
          <span class="defeito-text">${d.diagnostico}</span>
        </div>
        <div class="defeito-row">
          <span class="defeito-label">Solução:</span>
          <span class="defeito-text">${d.solucao}</span>
        </div>
        <div class="defeito-meta">
          <span class="defeito-tag tempo">⏱ ${d.tempoReparo}</span>
          <span class="defeito-tag custo">💰 ${d.custoPeca}</span>
        </div>
        ${d.prevenção ? `<div class="defeito-prevention"><strong>Prevenção:</strong> ${d.prevenção}</div>` : ''}
      </div>
    </div>
  `).join('');
}

function renderModalContent(item) {
  const tipoLabel = obterLabelTipo(item.tipoCaixa);
  const temProcedimentos = item.checklistDesmontagem && item.checklistDesmontagem.length > 0;

  const fichaTecnica = `
    <div class="modal-section">
      <div class="modal-info-grid">
        <div class="modal-info-item">
          <div class="label">Anos</div>
          <div class="value">${item.anos}</div>
        </div>
        <div class="modal-info-item">
          <div class="label">Tipo</div>
          <div class="value">${tipoLabel}</div>
        </div>
        <div class="modal-info-item">
          <div class="label">Fabricante</div>
          <div class="value">${item.fabricanteCaixa}</div>
        </div>
        <div class="modal-info-item">
          <div class="label">Dificuldade</div>
          <div class="value"><span class="difficulty-badge ${item.dificuldade || 'media'}">${obterLabelDificuldade(item.dificuldade)}</span></div>
        </div>
        <div class="modal-info-item">
          <div class="label">Tempo Estimado</div>
          <div class="value">${item.tempoEstimado || '-'}</div>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>
        Referências de Peças — Clique para buscar no Google
      </div>
      <div class="referencias-list">
        ${item.codigos.map(c => {
          const ref = typeof referenciasPecas !== 'undefined' ? referenciasPecas[c] : null;
          const desc = ref ? ref.descricao : 'Referência de peça';
          const preco = ref ? ref.precoKit : 'Consultar';
          const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(c + ' ' + desc)}`;
          return `
            <a href="${googleUrl}" target="_blank" rel="noopener" class="referencia-item">
              <div class="referencia-code">${c}</div>
              <div class="referencia-desc">${desc}</div>
              <div class="referencia-preco">Kit: ${preco}</div>
              <div class="referencia-action">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                Buscar
              </div>
            </a>
          `;
        }).join('')}
      </div>
      <div class="referencias-kit-info">
        <strong>⚠️ Importante:</strong> As caixas de direção deste modelo devem ser reparadas com o <strong>kit completo</strong> (retentor + bucha + anéis + vedantes). Preço do kit: <strong>${item.precoKitReparo || 'Consultar'}</strong>
      </div>
      <div class="modal-affiliate-section">
        <div class="modal-affiliate-title">🛒 Compre as Peças para este Modelo</div>
        <div class="modal-affiliate-grid">
          <a href="${gerarLinkBuscaKit(item.marcaVeiculo, item.modeloVeiculo)}" target="_blank" rel="noopener" class="modal-affiliate-btn modal-affiliate-ml">
            <span class="modal-affiliate-icon">🛍️</span>
            <div class="modal-affiliate-text">
              <strong>Kit de Reparo</strong>
              <span>Mercado Livre — Frete Grátis</span>
            </div>
            <span class="modal-affiliate-arrow">→</span>
          </a>
          <a href="${gerarLinkBuscaCaixaRemanufaturada(item.marcaVeiculo, item.modeloVeiculo)}" target="_blank" rel="noopener" class="modal-affiliate-btn modal-affiliate-ml">
            <span class="modal-affiliate-icon">🔧</span>
            <div class="modal-affiliate-text">
              <strong>Caixa Remanufaturada</strong>
              <span>Mercado Livre — Garantia</span>
            </div>
            <span class="modal-affiliate-arrow">→</span>
          </a>
          <a href="https://www.google.com/search?q=${encodeURIComponent('kit reparo caixa direcao ' + item.marcaVeiculo + ' ' + item.modeloVeiculo)}" target="_blank" rel="noopener" class="modal-affiliate-btn modal-affiliate-google">
            <span class="modal-affiliate-icon">🔍</span>
            <div class="modal-affiliate-text">
              <strong>Comparar Preços</strong>
              <span>Google — Melhor oferta</span>
            </div>
            <span class="modal-affiliate-arrow">→</span>
          </a>
        </div>
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        Motorizações
      </div>
      <div class="tags-list">
        ${item.motorizacoes.map(m => `<span class="tag motor">${m}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
        Aplicações Compatíveis
      </div>
      <div class="aplicacoes-list">
        ${item.aplicacoes.map(a => `
          <div class="aplicacao-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            ${a}
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
        Sintomas Comuns
      </div>
      <div class="tags-list">
        ${item.sintomasComuns.map(s => `<span class="tag symptom">${s}</span>`).join('')}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        Dicas Técnicas e Observações
      </div>
      <div class="observacoes-box">
        ${item.observacoes}
      </div>
    </div>
  `;

  const procedimentos = temProcedimentos ? `
    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Checklist Pré-Desmontagem
      </div>
      <div class="checklist-list">
        ${item.checklistDesmontagem.map((chk, i) => `
          <label class="checklist-item">
            <input type="checkbox" id="chk-${item.id}-${i}">
            <span class="checklist-text">${chk}</span>
          </label>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/></svg>
        Passo a Passo — Desmontagem
      </div>
      <ol class="step-list">
        ${item.passoAPassoDesmontagem.map(p => `<li>${p.replace(/^\d+\.\s*/, '')}</li>`).join('')}
      </ol>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/></svg>
        Passo a Passo — Montagem
      </div>
      <ol class="step-list">
        ${item.passoAPassoMontagem.map(p => `<li>${p.replace(/^\d+\.\s*/, '')}</li>`).join('')}
      </ol>
    </div>
  ` : `
    <div class="modal-section">
      <div class="dev-warning">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <p>Procedimento em desenvolvimento. Consulte a ficha técnica.</p>
      </div>
    </div>
  `;

  const torquesEFerramentas = `
    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        Ferramentas Necessárias
      </div>
      <div class="tools-list">
        ${item.ferramentas && item.ferramentas.length > 0 ? item.ferramentas.map(f => `
          <div class="tool-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            ${f}
          </div>
        `).join('') : '<p class="empty-text">Nenhuma ferramenta listada.</p>'}
      </div>
    </div>

    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        Torques de Aperto
      </div>
      <div class="torque-table-wrapper">
        <table class="torque-table">
          <thead>
            <tr><th>Peça / Componente</th><th>Torque</th></tr>
          </thead>
          <tbody>
            ${item.torques && item.torques.length > 0 ? item.torques.map(t => `<tr><td>${t.parte}</td><td>${t.valor}</td></tr>`).join('') : '<tr><td colspan="2">Nenhum torque listado.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>

    ${item.cuidadosEspeciais ? `
    <div class="modal-section">
      <div class="modal-section-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        Cuidados Especiais
      </div>
      <div class="cuidados-box">
        ${item.cuidadosEspeciais}
      </div>
    </div>
    ` : ''}
  `;

  return `
    <div class="modal-header">
      <div class="modal-title-area">
        <span class="modal-brand-badge">${item.marcaVeiculo}</span>
        <h2 class="modal-title">${item.modeloVeiculo}</h2>
      </div>
      <button class="modal-close" id="btnModalClose" aria-label="Fechar">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="modal-tabs">
      <button class="modal-tab active" data-tab="ficha">Ficha Técnica</button>
      <button class="modal-tab" data-tab="defeitos">Defeitos Detalhados</button>
      <button class="modal-tab" data-tab="procedimentos">Procedimentos</button>
      <button class="modal-tab" data-tab="torques">Torques e Ferramentas</button>
    </div>
    <div class="modal-body">
      <div class="modal-tab-panel active" data-panel="ficha">
        ${fichaTecnica}
      </div>
      <div class="modal-tab-panel" data-panel="defeitos">
        ${renderDefeitosDetalhados(item)}
      </div>
      <div class="modal-tab-panel" data-panel="procedimentos">
        ${procedimentos}
      </div>
      <div class="modal-tab-panel" data-panel="torques">
        ${torquesEFerramentas}
      </div>
    </div>
    <div class="modal-footer">
      <button class="modal-btn" onclick="fecharModal()">Fechar</button>
      <button class="modal-btn primary" onclick="window.print()">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        Imprimir
      </button>
    </div>
  `;
}

// =========================================
// MODAL TABS
// =========================================
function bindModalTabs() {
  const tabs = dom.modalBody.querySelectorAll('.modal-tab');
  const panels = dom.modalBody.querySelectorAll('.modal-tab-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = dom.modalBody.querySelector(`[data-panel="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });
}

// =========================================
// LUCIDE ICONS (SVG PATHS INLINE)
// =========================================
function getLucideIcon(name) {
  const icons = {
    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
    cog: '<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.93 19.07l1.41-1.41"/><path d="M17.66 6.34l1.41-1.41"/>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'
  };
  return icons[name] || icons.box;
}

// =========================================
// START
// =========================================
document.addEventListener('DOMContentLoaded', init);

