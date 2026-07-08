// Junin Direção Hidráulica — Banco de Dados Técnicos
// Catálogo completo de caixas de direção com procedimentos de reparo e defeitos detalhados
// Dados compilados de: Fort Distribuidora, TDS Parts, Mercado Livre, catálogos técnicos
// Gerado em: 2026-07-08
// Total de caixas: 86

// =========================================
// REFERÊNCIAS DE PEÇAS — Descrição e Preços
// =========================================
const referenciasPecas = {
  "16900162S": {
    "descricao": "Caixa de direção hidráulica TRW - Palio/Siena/Strada/Idea 2001-2016",
    "tipo": "caixa_completa",
    "precoKit": "R$ 350-650"
  },
  "5173.7077": {
    "descricao": "Kit de reparo completo caixa de direção DHB - Palio/Siena",
    "tipo": "kit_reparo",
    "precoKit": "R$ 85-150"
  },
  "5180.3201": {
    "descricao": "Caixa de direção hidráulica remanufaturada - Palio/Siena",
    "tipo": "caixa_reman",
    "precoKit": "R$ 280-450"
  },
  "PSA5202": {
    "descricao": "Caixa de direção hidráulica - Aplicações PSA/Fiat",
    "tipo": "caixa_completa",
    "precoKit": "R$ 320-580"
  },
  "TRW12030": {
    "descricao": "Caixa de direção hidráulica TRW - Linha Fiat Fire",
    "tipo": "caixa_completa",
    "precoKit": "R$ 380-620"
  },
  "DHB-12000": {
    "descricao": "Caixa de direção hidráulica DHB - Palio/Siena 1ª geração",
    "tipo": "caixa_completa",
    "precoKit": "R$ 300-550"
  },
  "5173.3010": {
    "descricao": "Kit de reparo caixa direção DHB - Palio/Siena 1ª geração",
    "tipo": "kit_reparo",
    "precoKit": "R$ 75-140"
  },
  "5173.3020": {
    "descricao": "Retentor e vedantes caixa direção DHB - Palio/Siena",
    "tipo": "kit_vedacao",
    "precoKit": "R$ 45-90"
  },
  "16900255S": {
    "descricao": "Caixa de direção hidráulica DHB/TRW - Gol/Voyage/Fox G5-G7",
    "tipo": "caixa_completa",
    "precoKit": "R$ 400-700"
  },
  "5U1.423.051": {
    "descricao": "Caixa de direção hidráulica original VW - Gol G5/G6/G7",
    "tipo": "caixa_completa",
    "precoKit": "R$ 450-800"
  },
  "5U1423051": {
    "descricao": "Caixa de direção hidráulica - Gol/Voyage/Saveiro G5-G7",
    "tipo": "caixa_completa",
    "precoKit": "R$ 380-650"
  },
  "DHB52050": {
    "descricao": "Caixa de direção hidráulica DHB - Volkswagen G5 em diante",
    "tipo": "caixa_completa",
    "precoKit": "R$ 350-600"
  },
  "DHB-52000": {
    "descricao": "Caixa de direção hidráulica DHB - Gol/Parati/Saveiro G1-G4",
    "tipo": "caixa_completa",
    "precoKit": "R$ 280-500"
  },
  "377.422.051": {
    "descricao": "Caixa de direção hidráulica original VW - Gol G1-G4",
    "tipo": "caixa_completa",
    "precoKit": "R$ 320-550"
  },
  "377422051R": {
    "descricao": "Caixa de direção hidráulica remanufaturada - Gol/Parati",
    "tipo": "caixa_reman",
    "precoKit": "R$ 250-480"
  },
  "DHB52000": {
    "descricao": "Caixa de direção hidráulica DHB - Volkswagen G1-G4",
    "tipo": "caixa_completa",
    "precoKit": "R$ 300-520"
  },
  "153504513": {
    "descricao": "Caixa de direção hidráulica DHB/Saginaw - Corsa/Celta/Classic",
    "tipo": "caixa_completa",
    "precoKit": "R$ 280-500"
  },
  "22026": {
    "descricao": "Kit de reparo completo caixa de direção - Corsa/Celta/Classic",
    "tipo": "kit_reparo",
    "precoKit": "R$ 65-120"
  },
  "22114": {
    "descricao": "Retentor e vedantes caixa direção - Corsa/Celta",
    "tipo": "kit_vedacao",
    "precoKit": "R$ 35-75"
  },
  "NCDH30003": {
    "descricao": "Caixa de direção hidráulica - Chevrolet Corsa/Celta",
    "tipo": "caixa_completa",
    "precoKit": "R$ 300-520"
  },
  "JRP1382": {
    "descricao": "Caixa de direção hidráulica - GM Corsa/Celta/Prisma",
    "tipo": "caixa_completa",
    "precoKit": "R$ 320-550"
  },
  "DHB-53000": {
    "descricao": "Caixa de direção hidráulica DHB - GM Corsa/Celta",
    "tipo": "caixa_completa",
    "precoKit": "R$ 290-510"
  },
  "93374629": {
    "descricao": "Caixa de direção hidráulica - GM Celta/Classic/Prisma",
    "tipo": "caixa_completa",
    "precoKit": "R$ 280-500"
  },
  "26042352": {
    "descricao": "Caixa de direção hidráulica - GM Chevrolet",
    "tipo": "caixa_completa",
    "precoKit": "R$ 300-520"
  },
  "JRP1427": {
    "descricao": "Caixa de direção hidráulica TRW/Ford Visteon - Ka/Fiesta",
    "tipo": "caixa_completa",
    "precoKit": "R$ 320-580"
  },
  "16900485S": {
    "descricao": "Caixa de direção hidráulica - Ford Ka/Fiesta/Ecosport",
    "tipo": "caixa_completa",
    "precoKit": "R$ 350-600"
  },
  "9S653200AB": {
    "descricao": "Caixa de direção hidráulica original Ford - Ka/Fiesta",
    "tipo": "caixa_completa",
    "precoKit": "R$ 400-680"
  },
  "26122": {
    "descricao": "Kit de reparo caixa de direção - Ford Ka/Fiesta",
    "tipo": "kit_reparo",
    "precoKit": "R$ 70-130"
  },
  "36204": {
    "descricao": "Retentor e vedantes caixa direção - Ford Ka/Fiesta",
    "tipo": "kit_vedacao",
    "precoKit": "R$ 40-85"
  },
  "VIST-12000": {
    "descricao": "Caixa de direção hidráulica Visteon - Ford Ka/Fiesta",
    "tipo": "caixa_completa",
    "precoKit": "R$ 330-570"
  },
  "2S65-3200-AD": {
    "descricao": "Caixa de direção hidráulica original Ford - Ka/Fiesta",
    "tipo": "caixa_completa",
    "precoKit": "R$ 420-700"
  },
  "2S653200AD": {
    "descricao": "Caixa de direção hidráulica - Ford Ka/Fiesta 2002-2014",
    "tipo": "caixa_completa",
    "precoKit": "R$ 350-600"
  },
  "16150844S": {
    "descricao": "Referência para caixa de direção TRW / DHB - Palio (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "CX33844": {
    "descricao": "Referência para caixa de direção TRW / DHB - Palio (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "16900566S": {
    "descricao": "Referência para caixa de direção TRW / DHB / Jtekt - Palio / Siena / Weekend",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "A0039376S": {
    "descricao": "Referência para caixa de direção TRW / DHB / Jtekt - Palio / Siena / Weekend",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "15900137S": {
    "descricao": "Referência para caixa de direção DHB / TRW - Uno (antigo)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "21245": {
    "descricao": "Referência para caixa de direção DHB / TRW - Uno (antigo)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "BA8028": {
    "descricao": "Referência para caixa de direção TRW - Punto",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "BA8005": {
    "descricao": "Referência para caixa de direção TRW - Punto",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "BA8007": {
    "descricao": "Referência para caixa de direção TRW - Punto",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "BA8140": {
    "descricao": "Referência para caixa de direção DHB / TRW - Doblo",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "BA8320": {
    "descricao": "Referência para caixa de direção DHB / TRW - Doblo",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "BA8447": {
    "descricao": "Referência para caixa de direção DHB / TRW - Doblo",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "JRM635": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Toro",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "53485992": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Toro",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "51967456": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Toro",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7117136020": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Toro",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "JRM660": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Argo / Cronos",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7097301": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Argo / Cronos",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "52178425": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Argo / Cronos",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "52221798": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Argo / Cronos",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "52022908": {
    "descricao": "Referência para caixa de direção TRW / Jtekt - Mobi",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7117136010": {
    "descricao": "Referência para caixa de direção Jtekt / TRW - Toro (mecânica p/ EPS)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "52060738": {
    "descricao": "Referência para caixa de direção Jtekt / TRW - Toro (mecânica p/ EPS)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "5U1422055A": {
    "descricao": "Referência para caixa de direção TRW - Gol G1 / G2 / G3 / G4",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "5U1422055D/G/J/K/L": {
    "descricao": "Referência para caixa de direção TRW / Yokomitsu - Gol G5 / G6",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "6415ST": {
    "descricao": "Referência para caixa de direção TRW / Yokomitsu - Gol G5 / G6",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "6416": {
    "descricao": "Referência para caixa de direção TRW / Yokomitsu - Gol G5 / G6",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "CX450255": {
    "descricao": "Referência para caixa de direção TRW / Koyo (Jtekt) - Polo (gerações até 2017)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "JRM669": {
    "descricao": "Referência para caixa de direção TRW - Polo (novo) / Virtus / T-Cross / Nivus",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "16900255S (variante)": {
    "descricao": "Referência para caixa de direção TRW - Jetta 2.0",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "1K1423051": {
    "descricao": "Referência para caixa de direção ZF / TRW - Golf (gerações anteriores)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "1K1423055": {
    "descricao": "Referência para caixa de direção ZF / TRW - Golf (gerações anteriores)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "93389866": {
    "descricao": "Referência para caixa de direção DHB / TRW - Prisma (novo) / Onix (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "93344883": {
    "descricao": "Referência para caixa de direção DHB / TRW - Prisma (novo) / Onix (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "93384074": {
    "descricao": "Referência para caixa de direção DHB / TRW - Prisma (novo) / Onix (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "13286687": {
    "descricao": "Referência para caixa de direção ZF / TRW - Cruze",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "34675": {
    "descricao": "Referência para caixa de direção ZF / TRW - Cruze",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "33401": {
    "descricao": "Referência para caixa de direção TRW / ZF - Focus",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "33402": {
    "descricao": "Referência para caixa de direção TRW / ZF - Focus",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "33409": {
    "descricao": "Referência para caixa de direção TRW / ZF - Focus",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "33405": {
    "descricao": "Referência para caixa de direção TRW - Ranger (2.5 / 3.0)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "33406": {
    "descricao": "Referência para caixa de direção TRW - Ranger (2.5 / 3.0)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "680014-DH": {
    "descricao": "Referência para caixa de direção DHB / TRW - Clio",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "680037-DH": {
    "descricao": "Referência para caixa de direção DHB / TRW - Clio",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "JRP1425": {
    "descricao": "Referência para caixa de direção TRW - Sandero / Logan (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "16900238S": {
    "descricao": "Referência para caixa de direção TRW - Sandero / Logan (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "FT3014": {
    "descricao": "Referência para caixa de direção TRW - Sandero / Logan (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "300014": {
    "descricao": "Referência para caixa de direção TRW - Sandero / Logan (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7150616001": {
    "descricao": "Referência para caixa de direção TRW - Sandero / Logan (1ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "490014306R": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Sandero / Logan (2ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "29128": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Sandero / Logan (2ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "300017ST": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Sandero / Logan (2ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "6516ST": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Sandero / Logan (2ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7150616010": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Sandero / Logan (2ª geração)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "4551002220": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Corolla (geração anterior)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "17052": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Corolla (geração anterior)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "4551002670": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) / TRW - Corolla (E140/E150)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7785000052": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) / TRW - Corolla (E140/E150)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "JRM620": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) / TRW - Corolla (E140/E150)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "NCDE70101": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) / TRW - Corolla (E140/E150)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "455100D360": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Corolla (novo)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "17059": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Corolla (novo)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7785000053": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Corolla (novo)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "7785000054": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Corolla (novo)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "NCD70103 (mecânica)": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Etios",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "17059 (elétrica)": {
    "descricao": "Referência para caixa de direção Jtekt (Koyo) - Etios",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "442000K040": {
    "descricao": "Referência para caixa de direção Koyo (Jtekt) - Hilux (Pitbull / SW4)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "442000K170": {
    "descricao": "Referência para caixa de direção Koyo (Jtekt) - Hilux (Pitbull / SW4)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "442000K230": {
    "descricao": "Referência para caixa de direção Koyo (Jtekt) - Hilux (Pitbull / SW4)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "27001": {
    "descricao": "Referência para caixa de direção Koyo (Jtekt) - Hilux (Pitbull / SW4)",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "577001S000": {
    "descricao": "Referência para caixa de direção Hyundai / Koyo (Jtekt) - HB20 / HB20S",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "50303MK": {
    "descricao": "Referência para caixa de direção Hyundai / Koyo (Jtekt) - HB20 / HB20S",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "10100205": {
    "descricao": "Referência para caixa de direção Hyundai / Koyo (Jtekt) - HB20 / HB20S",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "CX958112": {
    "descricao": "Referência para caixa de direção TRW / DHB - 206",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  },
  "INDISA": {
    "descricao": "Referência para caixa de direção TRW / DHB - 206",
    "tipo": "referencia",
    "precoKit": "R$ 80-200"
  }
};

// =========================================
// MAPEAMENTO DE VEÍCULOS → CAIXA
// =========================================
const mapeamentoVeiculos = [
  {
    "placaPrefixo": [
      "ABC",
      "DEF",
      "GHI",
      "JKL"
    ],
    "modelo": "Palio",
    "anos": "2001-2016",
    "marca": "Fiat",
    "caixaId": "fiat-palio-siena-strada-trw-01"
  },
  {
    "placaPrefixo": [
      "MNO",
      "PQR"
    ],
    "modelo": "Siena",
    "anos": "2001-2016",
    "marca": "Fiat",
    "caixaId": "fiat-palio-siena-strada-trw-01"
  },
  {
    "placaPrefixo": [
      "STU",
      "VWX"
    ],
    "modelo": "Strada",
    "anos": "2002-2016",
    "marca": "Fiat",
    "caixaId": "fiat-palio-siena-strada-trw-01"
  },
  {
    "placaPrefixo": [
      "YZA"
    ],
    "modelo": "Idea",
    "anos": "2006-2016",
    "marca": "Fiat",
    "caixaId": "fiat-palio-siena-strada-trw-01"
  },
  {
    "placaPrefixo": [
      "BCD"
    ],
    "modelo": "Palio",
    "anos": "1996-2000",
    "marca": "Fiat",
    "caixaId": "fiat-palio-siena-strada-dhb-01"
  },
  {
    "placaPrefixo": [
      "EFG",
      "HIJ"
    ],
    "modelo": "Gol",
    "anos": "2008-2022",
    "marca": "Volkswagen",
    "caixaId": "vw-gol-voyage-dhb-08"
  },
  {
    "placaPrefixo": [
      "KLM",
      "NOP"
    ],
    "modelo": "Voyage",
    "anos": "2009-2022",
    "marca": "Volkswagen",
    "caixaId": "vw-gol-voyage-dhb-08"
  },
  {
    "placaPrefixo": [
      "QRS",
      "TUV"
    ],
    "modelo": "Saveiro",
    "anos": "2009-2022",
    "marca": "Volkswagen",
    "caixaId": "vw-gol-voyage-dhb-08"
  },
  {
    "placaPrefixo": [
      "WXY"
    ],
    "modelo": "Fox",
    "anos": "2010-2014",
    "marca": "Volkswagen",
    "caixaId": "vw-gol-voyage-dhb-08"
  },
  {
    "placaPrefixo": [
      "ZAB"
    ],
    "modelo": "Gol",
    "anos": "1994-2008",
    "marca": "Volkswagen",
    "caixaId": "vw-gol-voyage-dhb-94"
  },
  {
    "placaPrefixo": [
      "CDE"
    ],
    "modelo": "Parati",
    "anos": "1996-2008",
    "marca": "Volkswagen",
    "caixaId": "vw-gol-voyage-dhb-94"
  },
  {
    "placaPrefixo": [
      "FGH"
    ],
    "modelo": "Corsa",
    "anos": "1994-2002",
    "marca": "Chevrolet",
    "caixaId": "gm-corsa-celta-dhb-94"
  },
  {
    "placaPrefixo": [
      "IJK"
    ],
    "modelo": "Celta",
    "anos": "2000-2016",
    "marca": "Chevrolet",
    "caixaId": "gm-corsa-celta-dhb-94"
  },
  {
    "placaPrefixo": [
      "LMN"
    ],
    "modelo": "Classic",
    "anos": "2002-2016",
    "marca": "Chevrolet",
    "caixaId": "gm-corsa-celta-dhb-94"
  },
  {
    "placaPrefixo": [
      "OPQ"
    ],
    "modelo": "Prisma",
    "anos": "2006-2012",
    "marca": "Chevrolet",
    "caixaId": "gm-corsa-celta-dhb-94"
  },
  {
    "placaPrefixo": [
      "RST"
    ],
    "modelo": "Agile",
    "anos": "2009-2016",
    "marca": "Chevrolet",
    "caixaId": "gm-corsa-celta-dhb-94"
  },
  {
    "placaPrefixo": [
      "UVW"
    ],
    "modelo": "Montana",
    "anos": "2011-2019",
    "marca": "Chevrolet",
    "caixaId": "gm-corsa-celta-dhb-94"
  },
  {
    "placaPrefixo": [
      "XYZ"
    ],
    "modelo": "Ka",
    "anos": "2002-2014",
    "marca": "Ford",
    "caixaId": "ford-ka-fiesta-visteon-02"
  },
  {
    "placaPrefixo": [
      "AAB"
    ],
    "modelo": "Fiesta",
    "anos": "2002-2014",
    "marca": "Ford",
    "caixaId": "ford-ka-fiesta-visteon-02"
  },
  {
    "placaPrefixo": [
      "CCD"
    ],
    "modelo": "Ecosport",
    "anos": "2003-2012",
    "marca": "Ford",
    "caixaId": "ford-ka-fiesta-visteon-02"
  }
];

// =========================================
// BASE DE DIAGNÓSTICO POR SINTOMAS
// =========================================
const baseDiagnostico = [
  {
    "sintomas": [
      "vazamento",
      "retentor",
      "cremalheira",
      "fluido",
      "oleo"
    ],
    "caixaIds": [
      "fiat-palio-siena-strada-trw-01",
      "vw-gol-voyage-dhb-08",
      "gm-corsa-celta-dhb-94",
      "ford-ka-fiesta-visteon-02"
    ],
    "defeito": "Retentor da cremalheira degradado",
    "urgencia": "alta",
    "custoEstimado": "R$ 80-150 (kit de reparo)"
  },
  {
    "sintomas": [
      "folga",
      "volante",
      "vago",
      "batida",
      "direcao solta"
    ],
    "caixaIds": [
      "fiat-palio-siena-strada-trw-01",
      "vw-gol-voyage-dhb-94",
      "gm-corsa-celta-dhb-94"
    ],
    "defeito": "Folga excessiva na cremalheira ou bucha do braço pitman",
    "urgencia": "media",
    "custoEstimado": "R$ 150-300 (ajuste ou troca)"
  },
  {
    "sintomas": [
      "direcao pesada",
      "pesada",
      "dura",
      "dificil esterçar"
    ],
    "caixaIds": [
      "fiat-palio-siena-strada-trw-01",
      "vw-gol-voyage-dhb-08",
      "ford-ka-fiesta-visteon-02"
    ],
    "defeito": "Bomba hidráulica fraca ou selim apertado demais",
    "urgencia": "media",
    "custoEstimado": "R$ 200-400 (bomba ou ajuste)"
  },
  {
    "sintomas": [
      "ruido",
      "chiado",
      "barulho",
      "rangido",
      "estrondo"
    ],
    "caixaIds": [
      "fiat-palio-siena-strada-trw-01",
      "vw-gol-voyage-dhb-94",
      "ford-ka-fiesta-visteon-02"
    ],
    "defeito": "Desgaste do pinhão ou cremalheira, ou falta de fluido",
    "urgencia": "media",
    "custoEstimado": "R$ 300-700 (reparo ou caixa nova)"
  },
  {
    "sintomas": [
      "vazamento",
      "pinhao",
      "coluna",
      "superior"
    ],
    "caixaIds": [
      "ford-ka-fiesta-visteon-02"
    ],
    "defeito": "Retentor do pinhão degradado",
    "urgencia": "alta",
    "custoEstimado": "R$ 70-140 (kit de reparo)"
  },
  {
    "sintomas": [
      "vazamento completo",
      "muito fluido",
      "poça grande"
    ],
    "caixaIds": [
      "vw-gol-voyage-dhb-94",
      "gm-corsa-celta-dhb-94"
    ],
    "defeito": "Vedação interna comprometida - necessário kit completo",
    "urgencia": "alta",
    "custoEstimado": "R$ 80-160 (kit completo)"
  },
  {
    "sintomas": [
      "luz eps",
      "eps",
      "eletrica",
      "direcao travando"
    ],
    "caixaIds": [],
    "defeito": "Falha no sistema de direção elétrica EPS - necessário scanner",
    "urgencia": "alta",
    "custoEstimado": "R$ 400-1200 (diagnóstico + reparo)"
  }
];

const catalogoCaixasDirecao = [
  {
    "id": "fiat-palio-siena-strada-trw-01",
    "marcaVeiculo": "Fiat",
    "modeloVeiculo": "Palio / Siena / Strada / Weekend / Idea",
    "anos": "2001-2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "16900162S",
      "5173.7077",
      "5180.3201",
      "PSA5202",
      "TRW12030"
    ],
    "motorizacoes": [
      "1.0 Fire",
      "1.3 Fire",
      "1.4 Fire",
      "1.6 16V",
      "1.8"
    ],
    "aplicacoes": [
      "Palio Fire 2001-2016",
      "Siena Fire 2001-2016",
      "Strada Fire 2002-2016",
      "Palio Weekend 2001-2016",
      "Idea 2006-2016"
    ],
    "sintomasComuns": [
      "Vazamento no retentor da cremalheira",
      "Folga na cremalheira",
      "Ruído ao girar o volante parado",
      "Vazamento nas borrachas de proteção"
    ],
    "observacoes": "Atentar para a posição do anel trava ao desmontar. Na reposição do retentor, usar graxa compatível com borracha NBR. A cremalheira do Fire 1.0/1.3 tem passo diferente da 1.6 16V. Sempre verificar folga axial do pinhão após montagem. O selim deve ser ajustado com torque de 3,5 a 4,5 kgf.m. Sempre trocar fluido hidráulico junto.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon (não usar ferro na carcaça)",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar os bornes negativos da bateria",
      "Elevar o veículo com cavaletes de segurança",
      "Remover as rodas dianteiras",
      "Desconectar as mangueiras de alta e baixa pressão da caixa (usar recipiente para o fluido)",
      "Desconectar o braço pitman da barra direção (marcar posição com tinta)",
      "Desconectar o terminal de direção",
      "Remover o parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm dependendo do modelo)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento no retentor da cremalheira",
        "causaRaiz": "Desgaste natural do retentor após 80.000-120.000 km. Fluido hidráulico contaminado ou uso de ATF incorreto acelera a degradação do retentor NBR.",
        "sintomasVisuais": "Poça de fluido vermelho/rosa sob a caixa de direção. Resíduo seco e empoeirado na carcaça da caixa. Nível do reservatório caindo gradualmente.",
        "diagnostico": "Elevar o veículo e inspecionar o retentor da cremalheira (lado direito da caixa). Verificar se o vazamento vem do retentor ou da junta da tampa. Diferenciar de vazamento da bomba hidráulica.",
        "solucao": "1. Substituir o retentor da cremalheira (usar retentor NBR original ou equivalente de qualidade). 2. Limpar o alojamento com thinner sem arranhar. 3. Lubrificar o novo retentor com graxa NBR antes de instalar. 4. Pressionar com ferramenta adequada. 5. Trocar todo o fluido hidráulico.",
        "tempoReparo": "1,5-2 horas",
        "custoPeca": "R$ 15-40 (retentor) + R$ 30-50 (fluido)",
        "prioridade": "alta",
        "prevenção": "Trocar fluido a cada 60.000 km. Usar ATF Dexron III ou fluido especificado pelo fabricante."
      },
      {
        "defeito": "Folga excessiva na cremalheira",
        "causaRaiz": "Desgaste do dente da cremalheira e do pinhão por uso prolongado. Ajuste inadequado do selim de pré-carga. Cremalheira com sulcos profundos no eixo.",
        "sintomasVisuais": "Volante com folga de mais de 15 graus antes de responder. Direção 'vaga' em retas. Ruído de batida ao passar em buracos.",
        "diagnostico": "Com o veículo parado, girar o volante levemente para cada lado medindo a folga. Verificar o selim de ajuste se está solto. Inspecionar o eixo da cremalheira por sulcos ao desmontar.",
        "solucao": "1. Ajustar o selim de pré-carga com torque de 3,5-4,5 kgf.m. 2. Se o eixo da cremalheira tiver sulcos profundos, substituir a caixa (reparo não garante). 3. Verificar e substituir a bucha do braço pitman se necessário.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "R$ 350-800 (caixa remanufaturada) ou R$ 800-1500 (nova)",
        "prioridade": "média",
        "prevenção": "Evitar forçar o volante no limite. Não deixar o veículo parado com o volante girado ao máximo."
      },
      {
        "defeito": "Ruído ao girar o volante parado",
        "causaRaiz": "Falta de fluido no sistema. Ar no circuito hidráulico. Desgaste do pinhão ou da cremalheira. Bomba hidráulica com desgaste.",
        "sintomasVisuais": "Ruído tipo 'grognido' ou 'chiado' ao girar o volante parado. Ruído aumenta quando o motor está em marcha lenta.",
        "diagnostico": "Verificar nível do fluido no reservatório. Se estiver normal, desligar o motor e girar o volante — se o ruído continua, é mecânico (caixa). Se o ruído some, é hidráulico (bomba ou ar no sistema).",
        "solucao": "1. Se for falta de fluido: completar, verificar vazamentos e sangrar o sistema. 2. Se for ar no sistema: sangrar pelos bicos de sangria das mangueiras. 3. Se for desgaste mecânico: abrir a caixa e inspecionar o pinhão e cremalheira.",
        "tempoReparo": "1-3 horas",
        "custoPeca": "Varia conforme a causa",
        "prioridade": "média",
        "prevenção": "Manter nível de fluido correto. Sangrar o sistema após qualquer intervenção na direção hidráulica."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "fiat-palio-siena-strada-dhb-01",
    "marcaVeiculo": "Fiat",
    "modeloVeiculo": "Palio / Siena / Strada (1ª geração)",
    "anos": "1996-2000",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "DHB-12000",
      "5173.3010",
      "5173.3020"
    ],
    "motorizacoes": [
      "1.0 MPi",
      "1.5",
      "1.6"
    ],
    "aplicacoes": [
      "Palio 1996-2000",
      "Siena 1998-2000",
      "Strada 1999-2000",
      "Palio Weekend 1997-2000"
    ],
    "sintomasComuns": [
      "Vazamento pelo eixo do pinhão",
      "Direção pesada",
      "Batida na direção ao passar em buraco"
    ],
    "observacoes": "Modelo anterior ao TRW. Pinhão com estrias menores. Na reposição de retentor do eixo, usar kit com bucha e anéis. Cuidado com a pressão de teste: não ultrapassar 70 bar. Tubos de alta pressão com rosca fina — evitar vedar com teflon. Usar fluido ATF Dexron III ou similar. A cremalheira desse modelo pode apresentar desgaste prematuro acima de 150 mil km.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "3-4 horas",
    "ferramentas": [
      "Jogo de chaves com catraca",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de pressão e retorno",
      "Desconectar braço pitman",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque recipiente para coletar fluido",
      "6. Desconecte mangueiras de pressão (chave 19mm)",
      "7. Desconecte braço pitman usando extrator",
      "8. Desconecte terminal de direção",
      "9. Remova parafuso do cardã (marque posição)",
      "10. Remova 3 parafusos do suporte da caixa",
      "11. Baixe a caixa com cuidado",
      "12. Limpe externamente antes de desmontar"
    ],
    "passoAPassoMontagem": [
      "1. Posicione na bancada com proteção",
      "2. Remova tampa do lado da cremalheira",
      "3. Retire anel trava da cremalheira",
      "4. Remova cremalheira com cuidado (apoio em V de madeira)",
      "5. Inspecione eixo da cremalheira — sulcos ou empeno?",
      "6. Retire retentor com saca de gancho",
      "7. Limpe alojamento com thinner e pano sem fiapos",
      "8. Lubrifique novo retentor com graxa NBR",
      "9. Pressione retentor com ferramenta adequada",
      "10. Monte cremalheira com graxa de alta aderência",
      "11. Instale anel trava novo",
      "12. Ajuste selim com torque de 3,5 kgf.m",
      "13. Instale tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA bata com martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento pelo eixo do pinhão",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "3-4 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "Direção pesada",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "3-4 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "vw-gol-voyage-dhb-08",
    "marcaVeiculo": "Volkswagen",
    "modeloVeiculo": "Gol / Voyage / Saveiro / Fox",
    "anos": "2008-2022",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB / TRW",
    "codigos": [
      "16900255S",
      "5U1.423.051",
      "5U1423051",
      "DHB52050"
    ],
    "motorizacoes": [
      "1.0",
      "1.6",
      "1.6 MSI",
      "1.0 TSI"
    ],
    "aplicacoes": [
      "Gol G5/G6/G7 2008-2022",
      "Voyage G5/G6/G7 2009-2022",
      "Saveiro G5/G6/G7 2009-2022",
      "Fox 2010-2014",
      "Spacefox / Crossfox"
    ],
    "sintomasComuns": [
      "Vazamento retentor cremalheira",
      "Ruído ao esterçar",
      "Folga excessiva no volante",
      "Direção pesada em baixa rotação"
    ],
    "observacoes": "Modelo DHB usado em toda linha VW G5 em diante. A cremalheira tem sistema de pré-carga ajustável. Ao desmontar, marcar a posição do selim para manter ajuste. O retentor da cremalheira é crítico — vazamento comum acima de 100 mil km. Usar fluido VW G 004 000 ou equivalente. A bucha do braço pitman pode criar folga em terrenos irregulares. Verificar também o estado da bomba hidráulica.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca",
      "Chave Torx T40 e T45",
      "Chave estrela 13mm e 16mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de pressão e retorno",
      "Desconectar braço pitman (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque recipiente para coletar fluido",
      "6. Desconecte mangueiras de pressão (chave 19mm)",
      "7. Desconecte braço pitman usando extrator — marque a posição com tinta",
      "8. Desconecte terminal de direção",
      "9. Remova parafuso do cardã (marque posição com grife)",
      "10. Remova 3 parafusos do suporte da caixa (13mm e 16mm)",
      "11. Baixe a caixa com cuidado — pesa 8-10 kg",
      "12. Limpe externamente antes de desmontar"
    ],
    "passoAPassoMontagem": [
      "1. Posicione na bancada com proteção de EVA",
      "2. Remova tampa do lado da cremalheira — cuidado com a junta de borracha",
      "3. Retire anel trava da cremalheira com alicate de anel",
      "4. Remova cremalheira apoiando em V de madeira e usando martelo de nylon",
      "5. Inspecione o eixo da cremalheira — sulcos? desgaste? empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA arranhe o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR compatível",
      "9. Pressione o retentor com ferramenta de pressão ou soquete do diâmetro EXATO",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava NOVO (nunca reutilize)",
      "12. Ajuste o selim com torque de 3,8 kgf.m — marque a posição para referência futura",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar comprimido a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-40 Nm (3,5-4,0 kgf.m)"
      },
      {
        "parte": "Cardã da coluna de direção",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão e retorno",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ MARCAR a posição do selim antes de desmontar — perdeu a referência, a direção fica ou muito pesada ou muito folgada. ⚠️ Use fluido VW G 004 000 ou equivalente — ATF comum pode degradar os selos. ⚠️ O braço pitman do Gol G5 tem posição específica — se inverter, o volante fica de lado. ⚠️ Verifique a bomba de direção — vazamento pelo selo traseiro é comum e confunde o diagnóstico. ⚠️ A bucha do braço pitman pode criar folga que parece ser da caixa.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento retentor cremalheira",
        "causaRaiz": "Retentor NBR degradado por calor e fluido contaminado. Modelo G5 em diante usa fluido específico VW G 004 000 — uso de ATF comum acelera o desgaste.",
        "sintomasVisuais": "Fluido rosa/vermelho escorrendo pela parte inferior da caixa. Resíduo seco na bandeja do motor.",
        "diagnostico": "Inspecionar visualmente o retentor da cremalheira. Verificar se o vazamento não é da bomba (selo traseiro da bomba é comum e confunde o diagnóstico).",
        "solucao": "1. Substituir retentor da cremalheira com graxa NBR. 2. Usar fluido VW G 004 000 ou equivalente. 3. Trocar fluido completo. 4. Marcar posição do selim antes de desmontar.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "R$ 20-50 (retentor) + R$ 40-80 (fluido VW)",
        "prioridade": "alta",
        "prevenção": "Sempre usar fluido especificado. Verificar nível a cada 10.000 km."
      },
      {
        "defeito": "Direção pesada em baixa rotação",
        "causaRaiz": "Bomba hidráulica com desgaste (não gera pressão suficiente em marcha lenta). Vazamento interno da caixa. Regulagem do selim muito apertada.",
        "sintomasVisuais": "Direção fica pesada ao estacionar ou em manobras lentas. Em velocidade fica normal. Pode acompanhar ruído da bomba.",
        "diagnostico": "Medir pressão da bomba com manômetro na mangueira de alta. Pressão deve ser 70-85 bar. Se estiver baixa, o problema é a bomba. Se estiver normal, verificar regulagem do selim e vazamento interno da caixa.",
        "solucao": "1. Se for bomba: substituir ou recondicionar. 2. Se for selim apertado: ajustar torque para 3,8 kgf.m. 3. Se for vazamento interno: abrir caixa e inspecionar vedações internas.",
        "tempoReparo": "2-4 horas",
        "custoPeca": "R$ 300-600 (bomba recondicionada) / R$ 150-300 (kit vedação)",
        "prioridade": "média",
        "prevenção": "Não forçar a direção no limite com o veículo parado. Verificar correia do alternador/bomba."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "vw-gol-voyage-dhb-94",
    "marcaVeiculo": "Volkswagen",
    "modeloVeiculo": "Gol / Parati / Saveiro (G1-G4)",
    "anos": "1994-2008",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB / TRW",
    "codigos": [
      "DHB-52000",
      "377.422.051",
      "377422051R",
      "DHB52000"
    ],
    "motorizacoes": [
      "1.0",
      "1.6",
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Gol G1/G2/G3/G4 1994-2008",
      "Parati 1996-2008",
      "Saveiro G1/G2/G3/G4 1998-2008",
      "Voyage G1 1994-1996"
    ],
    "sintomasComuns": [
      "Vazamento completo da caixa",
      "Direção dura",
      "Folga no braço pitman",
      "Ruído metálico ao esterçar"
    ],
    "observacoes": "Caixa DHB usada em toda linha VW por mais de uma década. Muito robusta, mas com incidência de vazamento do retentor do eixo da cremalheira. A troca do retentor exige desmontagem do braço pitman. Verificar desgaste da própria cremalheira — em casos avançados, o desgaste é irreversível. Fluido recomendado: ATF Dexron II/Dexron III. A bomba de direção também costuma apresentar vazamento pelo selo traseiro.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca",
      "Chave estrela 13mm e 17mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de pressão e retorno",
      "Desconectar braço pitman",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque recipiente para coletar fluido",
      "6. Desconecte mangueiras de pressão (chave 19mm)",
      "7. Desconecte braço pitman usando extrator",
      "8. Desconecte terminal de direção",
      "9. Remova parafuso do cardã (marque posição)",
      "10. Remova 3 parafusos do suporte da caixa",
      "11. Baixe a caixa com cuidado",
      "12. Limpe externamente antes de desmontar"
    ],
    "passoAPassoMontagem": [
      "1. Posicione na bancada com proteção",
      "2. Remova tampa do lado da cremalheira",
      "3. Retire anel trava da cremalheira",
      "4. Remova cremalheira com cuidado",
      "5. Inspecione eixo da cremalheira — sulcos ou empeno?",
      "6. Retire retentor com saca de gancho",
      "7. Limpe alojamento com thinner",
      "8. Lubrifique novo retentor com graxa NBR",
      "9. Pressione retentor com ferramenta adequada",
      "10. Monte cremalheira com graxa de alta aderência",
      "11. Instale anel trava novo",
      "12. Ajuste selim com torque de 3,5 kgf.m",
      "13. Instale tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA bata com martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento completo da caixa",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "Direção dura",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "gm-corsa-celta-dhb-94",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Corsa / Celta / Classic / Prisma / Agile / Montana / Tigra",
    "anos": "1994-2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB (Saginaw)",
    "codigos": [
      "153504513",
      "22026",
      "22114",
      "NCDH30003",
      "JRP1382",
      "DHB-53000",
      "93374629",
      "26042352"
    ],
    "motorizacoes": [
      "1.0",
      "1.4",
      "1.6",
      "1.8"
    ],
    "aplicacoes": [
      "Corsa 1994-2002",
      "Corsa Sedan 1995-2002",
      "Corsa Wagon 1997-2002",
      "Corsa Pick-up 1995-2003",
      "Celta 2000-2016",
      "Classic 2002-2016",
      "Prisma 2006-2012",
      "Agile 2009-2016",
      "Montana 2011-2019",
      "Tigra 1994-1999"
    ],
    "sintomasComuns": [
      "Vazamento de óleo pela cremalheira",
      "Folga no volante",
      "Ruído tipo estalo ao virar",
      "Direção pesada em marcha lenta"
    ],
    "observacoes": "Caixa DHB com alta incidência de vazamento do retentor da cremalheira em modelos acima de 120 mil km. O retentor é pequeno e fica exposto a detritos da rodovia. A troca de retentor exige ferramenta específica para não danificar o alojamento. O selim de ajuste da cremalheira pode emperrar com o tempo — usar WD-40 antes de tentar ajustar. Fluido recomendado: ATF Dexron III. Modelos 1.8 compartilham a mesma caixa, mas com haste do pitman mais longa.",
    "precoEstimadoPeca": 0,
    "dificuldade": "facil",
    "tempoEstimado": "1,5-2,5 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor pequeno",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor pequeno"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 6-8 kg (caixa pequena)",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta de borracha",
      "3. Retire o anel trava da cremalheira usando alicate de anel (anel pequeno)",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento (retentor pequeno, fácil de estragar o alojamento)",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor — o retentor do Corsa é pequeno, exige cuidado extra",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ ATENÇÃO: O retentor da cremalheira do Corsa/Celta é PEQUENO e o alojamento é frágil — se danificar o alojamento, a caixa vira sucata. ⚠️ O selim de ajuste pode estar emperrado com ferrugem — use WD-40 e deixe agir por 10 min antes de forçar. ⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ A posição do cardã da coluna DEVE ser mantida. ⚠️ Modelos 1.8 usam haste do pitman mais longa — não confundir na montagem. ⚠️ Teste a caixa no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento de óleo pela cremalheira",
        "causaRaiz": "Retentor pequeno e frágil exposto a detritos da rodovia. O alojamento do retentor é delicado — qualquer arranhão vira vazamento.",
        "sintomasVisuais": "Mancha de óleo na garagem. Resíduo na caixa de direção. Nível do reservatório caindo.",
        "diagnostico": "Inspecionar o retentor da cremalheira. ATENÇÃO: o retentor do Corsa é pequeno e o alojamento é frágil. Se o alojamento estiver arranhado, a caixa não tem conserto.",
        "solucao": "1. Substituir retentor com EXTREMO cuidado (usar ferramenta de pressão adequada). 2. NUNCA usar chave de fenda para retirar o retentor. 3. Usar graxa NBR. 4. Trocar fluido.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "R$ 15-35 (retentor) + R$ 25-50 (fluido)",
        "prioridade": "alta",
        "prevenção": "Limpar a caixa externamente a cada revisão. Evitar poças de lama (retentor fica exposto)."
      },
      {
        "defeito": "Folga no volante (direção vaga)",
        "causaRaiz": "Selim de ajuste emperrado com ferrugem e não regulado. Desgaste da cremalheira. Folga na bucha do braço pitman.",
        "sintomasVisuais": "Volante com folga de mais de 10 graus. Direção parece 'flutuante' em estrada. Ruído de batida ao passar em irregularidades.",
        "diagnostico": "Verificar se o selim está emperrado. Aplicar WD-40 e deixar agir 10 min. Tentar ajustar com torque. Se não adiantar, desmontar e inspecionar o eixo da cremalheira.",
        "solucao": "1. Aplicar WD-40 no selim e ajustar com torque de 3,5 kgf.m. 2. Se o eixo estiver desgastado: substituir a caixa. 3. Verificar bucha do braço pitman — muitas vezes a folga parece ser da caixa mas é da bucha.",
        "tempoReparo": "1-2 horas (ajuste) / 2-3 horas (troca de caixa)",
        "custoPeca": "R$ 20-50 (bucha) / R$ 300-700 (caixa remanufaturada)",
        "prioridade": "média",
        "prevenção": "Ajustar o selim a cada 40.000 km. Lubrificar o mecanismo de ajuste."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-ka-fiesta-visteon-02",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Ka / Fiesta / Ecosport",
    "anos": "2002-2014",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Ford Visteon",
    "codigos": [
      "JRP1427",
      "16900485S",
      "9S653200AB",
      "26122",
      "36204",
      "VIST-12000",
      "2S65-3200-AD",
      "2S653200AD"
    ],
    "motorizacoes": [
      "1.0 Zetec Rocam",
      "1.6 Zetec Rocam"
    ],
    "aplicacoes": [
      "Ford Ka 2002-2014",
      "Ford Fiesta 2002-2014",
      "Ford Fiesta Sedan 2005-2014",
      "Ford Ecosport 2003-2012"
    ],
    "sintomasComuns": [
      "Vazamento no retentor do pinhão",
      "Folga na articulação do braço pitman",
      "Direção dura ao esterçar",
      "Ruído tipo chiado ao esterçar"
    ],
    "observacoes": "Caixa Visteon com sistema de pinhão e cremalheira sem braço pitman intermediário. O retentor do pinhão fica exposto e é ponto crítico de vazamento. A cremalheira tem pré-carga fixa — não há ajuste externo. Na desmontagem, atenção ao suporte da caixa: os buchas de borracha degradam com calor. Usar fluido específico Ford ou ATF Dexron III. O retentor original é NBR reforçado — genéricos de baixa qualidade vazam em poucos meses. Verificar também estado do cilindro de alta pressão.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de pressão e retorno",
      "Desconectar braço pitman",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque recipiente para coletar fluido",
      "6. Desconecte mangueiras de pressão (chave 19mm)",
      "7. Desconecte braço pitman usando extrator",
      "8. Desconecte terminal de direção",
      "9. Remova parafuso do cardã (marque posição)",
      "10. Remova 3 parafusos do suporte da caixa",
      "11. Baixe a caixa com cuidado",
      "12. Limpe externamente antes de desmontar"
    ],
    "passoAPassoMontagem": [
      "1. Posicione na bancada com proteção",
      "2. Remova tampa do lado da cremalheira",
      "3. Retire anel trava da cremalheira",
      "4. Remova cremalheira com cuidado",
      "5. Inspecione eixo da cremalheira — sulcos ou empeno?",
      "6. Retire retentor com saca de gancho",
      "7. Limpe alojamento com thinner",
      "8. Lubrifique novo retentor com graxa NBR",
      "9. Pressione retentor com ferramenta adequada",
      "10. Monte cremalheira com graxa de alta aderência",
      "11. Instale anel trava novo",
      "12. Ajuste selim com torque de 3,5 kgf.m",
      "13. Instale tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA bata com martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento no retentor do pinhão",
        "causaRaiz": "Retentor do pinhão exposto e sem proteção. Uso de retentor genérico de baixa qualidade (NBR não reforçado).",
        "sintomasVisuais": "Fluido escorrendo pela parte superior da caixa (próximo à coluna de direção). Cheiro de fluido queimado no motor.",
        "diagnostico": "Inspecionar o retentor do eixo do pinhão. Diferenciar de vazamento do selo da bomba hidráulica. Verificar se o fluido está correto.",
        "solucao": "1. Substituir retentor do pinhão com peça original ou equivalente NBR reforçado. 2. Não usar retentores genéricos baratos — vazam em 2-3 meses. 3. Usar fluido específico Ford ou ATF Dexron III.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "R$ 25-60 (retentor original) + R$ 30-60 (fluido)",
        "prioridade": "alta",
        "prevenção": "Usar retentor de qualidade. Verificar nível do fluido a cada revisão."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-palio--1--gera--o--7",
    "marcaVeiculo": "",
    "modeloVeiculo": "Palio (1ª geração)",
    "anos": "1996–2000",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "16150844S",
      "CX33844",
      "16900162S"
    ],
    "motorizacoes": [
      "1.0",
      "1.5",
      "1.6"
    ],
    "aplicacoes": [
      "Palio",
      "Siena",
      "Weekend",
      "Strada"
    ],
    "sintomasComuns": [
      "Folga",
      "ruído",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Palio (1ª geração). Período: 1996–2000. Motorizações: 1.0 / 1.5 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-palio---siena---week-8",
    "marcaVeiculo": "",
    "modeloVeiculo": "Palio / Siena / Weekend",
    "anos": "2001–2017",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB / Jtekt",
    "codigos": [
      "16900162S",
      "16900566S",
      "A0039376S"
    ],
    "motorizacoes": [
      "1.0",
      "1.3",
      "1.4",
      "1.6",
      "1.8"
    ],
    "aplicacoes": [
      "Palio",
      "Siena",
      "Strada",
      "Idea",
      "Weekend"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB / Jtekt para Palio / Siena / Weekend. Período: 2001–2017. Motorizações: 1.0 / 1.3 / 1.4 / 1.6 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-uno--antigo--9",
    "marcaVeiculo": "",
    "modeloVeiculo": "Uno (antigo)",
    "anos": "1991–2013",
    "tipoCaixa": "mecanica",
    "fabricanteCaixa": "DHB / TRW",
    "codigos": [
      "15900137S",
      "21245"
    ],
    "motorizacoes": [
      "1.0",
      "1.3",
      "1.4",
      "1.5"
    ],
    "aplicacoes": [
      "Uno",
      "Premio",
      "Elba",
      "Fiorino"
    ],
    "sintomasComuns": [
      "Folga",
      "ruído ao esterçar"
    ],
    "observacoes": "Caixa mecanica DHB / TRW para Uno (antigo). Período: 1991–2013. Motorizações: 1.0 / 1.3 / 1.4 / 1.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído ao esterçar",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 60-120"
  },
  {
    "id": "-novo-uno---vivace----10",
    "marcaVeiculo": "",
    "modeloVeiculo": "Novo Uno / Vivace / Fiorino",
    "anos": "2010–2020",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Jtekt (Koyo)",
    "codigos": [
      "16900566S",
      "A0039376S"
    ],
    "motorizacoes": [
      "1.0",
      "1.4"
    ],
    "aplicacoes": [
      "Novo Uno",
      "Grand Siena",
      "Fiorino",
      "Novo Palio"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW / Jtekt (Koyo) para Novo Uno / Vivace / Fiorino. Período: 2010–2020. Motorizações: 1.0 / 1.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-punto-11",
    "marcaVeiculo": "",
    "modeloVeiculo": "Punto",
    "anos": "2008–2017",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "BA8028",
      "BA8005",
      "BA8007"
    ],
    "motorizacoes": [
      "1.4",
      "1.6",
      "1.8"
    ],
    "aplicacoes": [
      "Punto",
      "Linea"
    ],
    "sintomasComuns": [
      "Ruído",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica TRW para Punto. Período: 2008–2017. Motorizações: 1.4 / 1.6 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-idea-12",
    "marcaVeiculo": "",
    "modeloVeiculo": "Idea",
    "anos": "2006–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "16900162S"
    ],
    "motorizacoes": [
      "1.4",
      "1.8"
    ],
    "aplicacoes": [
      "Idea",
      "Palio",
      "Siena",
      "Strada"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW para Idea. Período: 2006–2016. Motorizações: 1.4 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-doblo-13",
    "marcaVeiculo": "",
    "modeloVeiculo": "Doblo",
    "anos": "2002–2019",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB / TRW",
    "codigos": [
      "BA8140",
      "BA8320",
      "BA8447"
    ],
    "motorizacoes": [
      "1.4",
      "1.6",
      "1.8"
    ],
    "aplicacoes": [
      "Doblo",
      "Adventure"
    ],
    "sintomasComuns": [
      "Vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica DHB / TRW para Doblo. Período: 2002–2019. Motorizações: 1.4 / 1.6 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-strada-14",
    "marcaVeiculo": "",
    "modeloVeiculo": "Strada",
    "anos": "1999–2020",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX33844",
      "16900162S"
    ],
    "motorizacoes": [
      "1.4",
      "1.6",
      "1.8"
    ],
    "aplicacoes": [
      "Palio",
      "Siena",
      "Strada",
      "Weekend"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Strada. Período: 1999–2020. Motorizações: 1.4 / 1.6 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-toro-15",
    "marcaVeiculo": "",
    "modeloVeiculo": "Toro",
    "anos": "2016–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [
      "JRM635",
      "53485992",
      "51967456",
      "7117136020"
    ],
    "motorizacoes": [
      "1.8",
      "2.0",
      "2.4"
    ],
    "aplicacoes": [
      "Toro",
      "Jeep Compass",
      "Renegade"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento",
      "ruído"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para Toro. Período: 2016–2024. Motorizações: 1.8 / 2.0 / 2.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "-argo---cronos-16",
    "marcaVeiculo": "",
    "modeloVeiculo": "Argo / Cronos",
    "anos": "2017–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [
      "JRM660",
      "7097301",
      "52178425",
      "52221798"
    ],
    "motorizacoes": [
      "1.0",
      "1.3",
      "1.8"
    ],
    "aplicacoes": [
      "Argo",
      "Cronos",
      "Mobi",
      "Uno Way"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para Argo / Cronos. Período: 2017–2024. Motorizações: 1.0 / 1.3 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "-mobi-17",
    "marcaVeiculo": "",
    "modeloVeiculo": "Mobi",
    "anos": "2016–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [
      "52022908",
      "JRM660"
    ],
    "motorizacoes": [
      "1.0"
    ],
    "aplicacoes": [
      "Mobi",
      "Argo",
      "Cronos"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para Mobi. Período: 2016–2024. Motorizações: 1.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "-toro--mec-nica-p--ep-18",
    "marcaVeiculo": "",
    "modeloVeiculo": "Toro (mecânica p/ EPS)",
    "anos": "2016–2022",
    "tipoCaixa": "mecanica",
    "fabricanteCaixa": "Jtekt / TRW",
    "codigos": [
      "7117136010",
      "52060738"
    ],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Toro",
      "Compass",
      "Renegade"
    ],
    "sintomasComuns": [],
    "observacoes": "Caixa mecanica Jtekt / TRW para Toro (mecânica p/ EPS). Período: 2016–2022. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [],
    "precoKitReparo": "R$ 60-120"
  },
  {
    "id": "-gol-g1---g2---g3---g-19",
    "marcaVeiculo": "",
    "modeloVeiculo": "Gol G1 / G2 / G3 / G4",
    "anos": "1983–2014",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "16900255S",
      "5U1422055A"
    ],
    "motorizacoes": [
      "1.0",
      "1.6",
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Gol",
      "Voyage G1",
      "Parati",
      "Saveiro",
      "Santana",
      "Quantum"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW para Gol G1 / G2 / G3 / G4. Período: 1983–2014. Motorizações: 1.0 / 1.6 / 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-gol-g5---g6-20",
    "marcaVeiculo": "",
    "modeloVeiculo": "Gol G5 / G6",
    "anos": "2008–2020",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Yokomitsu",
    "codigos": [
      "16900255S",
      "5U1422055D/G/J/K/L",
      "6415ST",
      "6416"
    ],
    "motorizacoes": [
      "1.0",
      "1.6 (EA-111",
      "EA-211)"
    ],
    "aplicacoes": [
      "Gol",
      "Voyage",
      "Saveiro",
      "Fox",
      "Spacefox",
      "Crossfox"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / Yokomitsu para Gol G5 / G6. Período: 2008–2020. Motorizações: 1.0 / 1.6 (EA-111 / EA-211).",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-voyage-g5---g6-21",
    "marcaVeiculo": "",
    "modeloVeiculo": "Voyage G5 / G6",
    "anos": "2008–2020",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "16900255S",
      "5U1422055A"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "Gol",
      "Voyage",
      "Saveiro",
      "Fox"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica TRW para Voyage G5 / G6. Período: 2008–2020. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-fox---spacefox---cro-22",
    "marcaVeiculo": "",
    "modeloVeiculo": "Fox / Spacefox / Crossfox",
    "anos": "2003–2019",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "16900255S",
      "5U1422055A"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "Fox",
      "Spacefox",
      "Crossfox",
      "Polo",
      "Gol G5",
      "Voyage",
      "Saveiro"
    ],
    "sintomasComuns": [
      "Vazamento",
      "ruído",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW para Fox / Spacefox / Crossfox. Período: 2003–2019. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-polo--gera--es-at--2-23",
    "marcaVeiculo": "",
    "modeloVeiculo": "Polo (gerações até 2017)",
    "anos": "2003–2017",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Koyo (Jtekt)",
    "codigos": [
      "16900255S",
      "CX450255"
    ],
    "motorizacoes": [
      "1.0",
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "Polo",
      "Fox",
      "Gol G5",
      "Voyage"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW / Koyo (Jtekt) para Polo (gerações até 2017). Período: 2003–2017. Motorizações: 1.0 / 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-polo--novo----virtus-24",
    "marcaVeiculo": "",
    "modeloVeiculo": "Polo (novo) / Virtus / T-Cross / Nivus",
    "anos": "2018–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "JRM669"
    ],
    "motorizacoes": [
      "1.0 TSI",
      "1.6"
    ],
    "aplicacoes": [
      "Polo",
      "Virtus",
      "T-Cross",
      "Nivus"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento",
      "folga"
    ],
    "observacoes": "Caixa eletrica TRW para Polo (novo) / Virtus / T-Cross / Nivus. Período: 2018–2024. Motorizações: 1.0 TSI / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "-jetta-2-0-25",
    "marcaVeiculo": "",
    "modeloVeiculo": "Jetta 2.0",
    "anos": "2011–2015",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "16900255S (variante)"
    ],
    "motorizacoes": [
      "2.0"
    ],
    "aplicacoes": [
      "Jetta 2.0"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW para Jetta 2.0. Período: 2011–2015. Motorizações: 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-golf--gera--es-anter-26",
    "marcaVeiculo": "",
    "modeloVeiculo": "Golf (gerações anteriores)",
    "anos": "1994–2013",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "ZF / TRW",
    "codigos": [
      "1K1423051",
      "1K1423055"
    ],
    "motorizacoes": [
      "1.6",
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Golf",
      "A3",
      "Bora",
      "Jetta"
    ],
    "sintomasComuns": [
      "Vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica ZF / TRW para Golf (gerações anteriores). Período: 1994–2013. Motorizações: 1.6 / 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "-saveiro-g5---g6---g7-27",
    "marcaVeiculo": "",
    "modeloVeiculo": "Saveiro G5 / G6 / G7",
    "anos": "2008–2024",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "16900255S"
    ],
    "motorizacoes": [
      "1.6",
      "1.8"
    ],
    "aplicacoes": [
      "Saveiro",
      "Gol",
      "Voyage",
      "Fox"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW para Saveiro G5 / G6 / G7. Período: 2008–2024. Motorizações: 1.6 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-corsa--1--gera--o--28",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Corsa (1ª geração)",
    "anos": "1994–2003",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB (Saginaw)",
    "codigos": [
      "153504513",
      "22026",
      "22114",
      "NCDH30003",
      "JRP1382"
    ],
    "motorizacoes": [
      "1.0",
      "1.4",
      "1.6"
    ],
    "aplicacoes": [
      "Corsa Hatch",
      "Sedan",
      "Wagon",
      "Pickup"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica DHB (Saginaw) para Corsa (1ª geração). Período: 1994–2003. Motorizações: 1.0 / 1.4 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "facil",
    "tempoEstimado": "1,5-2,5 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-corsa-classic-29",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Corsa Classic",
    "anos": "2003–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "153504513",
      "22026",
      "22114"
    ],
    "motorizacoes": [
      "1.0",
      "1.4",
      "1.6"
    ],
    "aplicacoes": [
      "Corsa Classic",
      "Celta",
      "Prisma",
      "Tigra"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica DHB para Corsa Classic. Período: 2003–2016. Motorizações: 1.0 / 1.4 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "facil",
    "tempoEstimado": "1,5-2,5 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-celta-30",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Celta",
    "anos": "2000–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "153504513",
      "22026",
      "22114"
    ],
    "motorizacoes": [
      "1.0",
      "1.4"
    ],
    "aplicacoes": [
      "Celta",
      "Corsa",
      "Classic",
      "Prisma",
      "Tigra"
    ],
    "sintomasComuns": [
      "Folga",
      "ruído",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica DHB para Celta. Período: 2000–2016. Motorizações: 1.0 / 1.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "facil",
    "tempoEstimado": "1,5-2,5 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "1,5-2,5 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-prisma--1--gera--o--31",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Prisma (1ª geração)",
    "anos": "2006–2012",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "153504513",
      "22026"
    ],
    "motorizacoes": [
      "1.0",
      "1.4"
    ],
    "aplicacoes": [
      "Prisma",
      "Celta",
      "Corsa",
      "Classic"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica DHB para Prisma (1ª geração). Período: 2006–2012. Motorizações: 1.0 / 1.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-prisma--novo----onix-32",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Prisma (novo) / Onix (1ª geração)",
    "anos": "2013–2019",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB / TRW",
    "codigos": [
      "93389866",
      "93344883",
      "93384074"
    ],
    "motorizacoes": [
      "1.0",
      "1.4"
    ],
    "aplicacoes": [
      "Onix",
      "Prisma",
      "Spin",
      "Sonic"
    ],
    "sintomasComuns": [
      "Folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica DHB / TRW para Prisma (novo) / Onix (1ª geração). Período: 2013–2019. Motorizações: 1.0 / 1.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "ruído",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-agile-33",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Agile",
    "anos": "2009–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "153504513",
      "22026",
      "22114"
    ],
    "motorizacoes": [
      "1.4"
    ],
    "aplicacoes": [
      "Agile",
      "Corsa",
      "Celta",
      "Montana (frente Agile)"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica DHB para Agile. Período: 2009–2016. Motorizações: 1.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-montana--frente-agil-34",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Montana (frente Agile)",
    "anos": "2011–2020",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "153504513",
      "22026"
    ],
    "motorizacoes": [
      "1.4",
      "1.8"
    ],
    "aplicacoes": [
      "Montana",
      "Agile",
      "Corsa",
      "Celta"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica DHB para Montana (frente Agile). Período: 2011–2020. Motorizações: 1.4 / 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-tigra-35",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Tigra",
    "anos": "1994–1999",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB",
    "codigos": [
      "153504513",
      "22026"
    ],
    "motorizacoes": [
      "1.6"
    ],
    "aplicacoes": [
      "Tigra",
      "Corsa",
      "Celta"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica DHB para Tigra. Período: 1994–1999. Motorizações: 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "chevrolet-onix--novo----onix-p-36",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Onix (novo) / Onix Plus",
    "anos": "2020–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.0",
      "1.2"
    ],
    "aplicacoes": [
      "Onix",
      "Onix Plus",
      "Tracker"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para Onix (novo) / Onix Plus. Período: 2020–2024. Motorizações: 1.0 / 1.2.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "chevrolet-cruze-37",
    "marcaVeiculo": "Chevrolet",
    "modeloVeiculo": "Cruze",
    "anos": "2011–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "ZF / TRW",
    "codigos": [
      "13286687",
      "34675"
    ],
    "motorizacoes": [
      "1.8"
    ],
    "aplicacoes": [
      "Cruze",
      "Tracker"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica ZF / TRW para Cruze. Período: 2011–2016. Motorizações: 1.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-ka--gera--o-zetec-ro-38",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Ka (geração Zetec Rocam)",
    "anos": "1997–2013",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Ford Visteon",
    "codigos": [
      "JRP1427",
      "16900485S",
      "9S653200AB",
      "26122",
      "36204"
    ],
    "motorizacoes": [
      "1.0",
      "1.3",
      "1.6"
    ],
    "aplicacoes": [
      "Ka",
      "Fiesta",
      "Courier"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / Ford Visteon para Ka (geração Zetec Rocam). Período: 1997–2013. Motorizações: 1.0 / 1.3 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-fiesta--gera--o-amaz-39",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Fiesta (geração Amazon)",
    "anos": "1996–2014",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Ford Visteon",
    "codigos": [
      "JRP1427",
      "16900485S",
      "9S653200AB",
      "26122"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "Fiesta",
      "Ka",
      "Ecosport",
      "Courier"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / Ford Visteon para Fiesta (geração Amazon). Período: 1996–2014. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-ecosport--gera--o-an-40",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Ecosport (geração antiga)",
    "anos": "2003–2012",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / Ford Visteon",
    "codigos": [
      "JRP1427",
      "16900485S",
      "9S653200AB"
    ],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "Ecosport",
      "Fiesta",
      "Ka"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / Ford Visteon para Ecosport (geração antiga). Período: 2003–2012. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-focus-41",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Focus",
    "anos": "2001–2013",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / ZF",
    "codigos": [
      "33401",
      "33402",
      "33409"
    ],
    "motorizacoes": [
      "1.6",
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Focus",
      "Mondeo"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / ZF para Focus. Período: 2001–2013. Motorizações: 1.6 / 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-ranger--2-5---3-0--42",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Ranger (2.5 / 3.0)",
    "anos": "1998–2012",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "33405",
      "33406"
    ],
    "motorizacoes": [
      "2.5",
      "3.0"
    ],
    "aplicacoes": [
      "Ranger",
      "Explorer"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica TRW para Ranger (2.5 / 3.0). Período: 1998–2012. Motorizações: 2.5 / 3.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "ford-ka--novo----new-fies-43",
    "marcaVeiculo": "Ford",
    "modeloVeiculo": "Ka (novo) / New Fiesta",
    "anos": "2015–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW",
    "codigos": [],
    "motorizacoes": [
      "1.0",
      "1.5"
    ],
    "aplicacoes": [
      "Ka",
      "New Fiesta",
      "Ecosport"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW para Ka (novo) / New Fiesta. Período: 2015–2024. Motorizações: 1.0 / 1.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "renault-clio-44",
    "marcaVeiculo": "Renault",
    "modeloVeiculo": "Clio",
    "anos": "1999–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "DHB / TRW",
    "codigos": [
      "680014-DH",
      "680037-DH"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "Clio",
      "Symbol"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica DHB / TRW para Clio. Período: 1999–2016. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "renault-sandero---logan--1---45",
    "marcaVeiculo": "Renault",
    "modeloVeiculo": "Sandero / Logan (1ª geração)",
    "anos": "2007–2014",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "JRP1425",
      "16900238S",
      "FT3014",
      "300014",
      "7150616001"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "Sandero",
      "Logan",
      "Stepway"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW para Sandero / Logan (1ª geração). Período: 2007–2014. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "renault-sandero---logan--2---46",
    "marcaVeiculo": "Renault",
    "modeloVeiculo": "Sandero / Logan (2ª geração)",
    "anos": "2014–2024",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [
      "490014306R",
      "29128",
      "300017ST",
      "6516ST",
      "7150616010"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "Sandero",
      "Logan",
      "Stepway"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica Jtekt (Koyo) para Sandero / Logan (2ª geração). Período: 2014–2024. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "renault-duster-47",
    "marcaVeiculo": "Renault",
    "modeloVeiculo": "Duster",
    "anos": "2011–2024",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "JRP1425",
      "16900238S"
    ],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "Duster",
      "Oroch",
      "Captur"
    ],
    "sintomasComuns": [
      "Folga",
      "vazamento"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Duster. Período: 2011–2024. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "renault-kwid-48",
    "marcaVeiculo": "Renault",
    "modeloVeiculo": "Kwid",
    "anos": "2017–2024",
    "tipoCaixa": "mecanica",
    "fabricanteCaixa": "—",
    "codigos": [],
    "motorizacoes": [
      "1.0"
    ],
    "aplicacoes": [
      "Kwid"
    ],
    "sintomasComuns": [],
    "observacoes": "Caixa mecanica — para Kwid. Período: 2017–2024. Motorizações: 1.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [],
    "precoKitReparo": "R$ 60-120"
  },
  {
    "id": "renault-fluence-49",
    "marcaVeiculo": "Renault",
    "modeloVeiculo": "Fluence",
    "anos": "2011–2019",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [
      "JRP1425"
    ],
    "motorizacoes": [
      "2.0"
    ],
    "aplicacoes": [
      "Fluence",
      "Mégane"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW para Fluence. Período: 2011–2019. Motorizações: 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "toyota-corolla--gera--o-ant-50",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Corolla (geração anterior)",
    "anos": "2003–2008",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [
      "4551002220",
      "17052"
    ],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Corolla",
      "Fielder"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica Jtekt (Koyo) para Corolla (geração anterior). Período: 2003–2008. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "toyota-corolla--e140-e150--51",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Corolla (E140/E150)",
    "anos": "2009–2014",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt (Koyo) / TRW",
    "codigos": [
      "4551002670",
      "17052",
      "7785000052",
      "JRM620",
      "NCDE70101"
    ],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Corolla 2009–2014"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento",
      "folga"
    ],
    "observacoes": "Caixa eletrica Jtekt (Koyo) / TRW para Corolla (E140/E150). Período: 2009–2014. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "toyota-corolla--novo--52",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Corolla (novo)",
    "anos": "2015–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [
      "455100D360",
      "17059",
      "7785000053",
      "7785000054"
    ],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "Corolla",
      "Corolla Cross"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Jtekt (Koyo) para Corolla (novo). Período: 2015–2024. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "toyota-etios-53",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Etios",
    "anos": "2012–2021",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [
      "NCD70103 (mecânica)",
      "17059 (elétrica)"
    ],
    "motorizacoes": [
      "1.3",
      "1.5"
    ],
    "aplicacoes": [
      "Etios",
      "Etios Sedan"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Jtekt (Koyo) para Etios. Período: 2012–2021. Motorizações: 1.3 / 1.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "toyota-yaris-54",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Yaris",
    "anos": "2018–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [],
    "motorizacoes": [
      "1.5"
    ],
    "aplicacoes": [
      "Yaris",
      "Yaris Sedan"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "folga"
    ],
    "observacoes": "Caixa eletrica Jtekt (Koyo) para Yaris. Período: 2018–2024. Motorizações: 1.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "toyota-hilux--pitbull---sw4-55",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Hilux (Pitbull / SW4)",
    "anos": "2005–2015",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Koyo (Jtekt)",
    "codigos": [
      "442000K040",
      "442000K170",
      "442000K230",
      "27001"
    ],
    "motorizacoes": [
      "2.5",
      "3.0"
    ],
    "aplicacoes": [
      "Hilux",
      "SW4"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica Koyo (Jtekt) para Hilux (Pitbull / SW4). Período: 2005–2015. Motorizações: 2.5 / 3.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "toyota-hilux--nova----sw4-56",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "Hilux (nova) / SW4",
    "anos": "2016–2024",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Koyo (Jtekt)",
    "codigos": [
      "442000K040"
    ],
    "motorizacoes": [
      "2.7",
      "2.8"
    ],
    "aplicacoes": [
      "Hilux",
      "SW4"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica Koyo (Jtekt) para Hilux (nova) / SW4. Período: 2016–2024. Motorizações: 2.7 / 2.8.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "toyota-rav4-57",
    "marcaVeiculo": "Toyota",
    "modeloVeiculo": "RAV4",
    "anos": "2006–2018",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [],
    "motorizacoes": [
      "2.0",
      "2.5"
    ],
    "aplicacoes": [
      "RAV4"
    ],
    "sintomasComuns": [
      "Vazamento / Luz EPS"
    ],
    "observacoes": "Caixa eletrica Jtekt (Koyo) para RAV4. Período: 2006–2018. Motorizações: 2.0 / 2.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento / Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "honda-civic--gera--es-6-8--58",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "Civic (gerações 6–8)",
    "anos": "1996–2006",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [],
    "motorizacoes": [
      "1.6",
      "1.7"
    ],
    "aplicacoes": [
      "Civic"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW para Civic (gerações 6–8). Período: 1996–2006. Motorizações: 1.6 / 1.7.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "honda-new-civic--g8--59",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "New Civic (G8)",
    "anos": "2007–2011",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW",
    "codigos": [],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "New Civic 2007–2011"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW para New Civic (G8). Período: 2007–2011. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "honda-civic--g9-g10--60",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "Civic (G9/G10)",
    "anos": "2012–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt / TRW",
    "codigos": [],
    "motorizacoes": [
      "1.8",
      "2.0",
      "2.0 Turbo"
    ],
    "aplicacoes": [
      "Civic",
      "Civic Touring"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento",
      "ruído"
    ],
    "observacoes": "Caixa eletrica Jtekt / TRW para Civic (G9/G10). Período: 2012–2024. Motorizações: 1.8 / 2.0 / 2.0 Turbo.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "honda-city-61",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "City",
    "anos": "2009–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt / TRW",
    "codigos": [],
    "motorizacoes": [
      "1.5"
    ],
    "aplicacoes": [
      "City",
      "Fit"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Jtekt / TRW para City. Período: 2009–2024. Motorizações: 1.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "honda-fit-62",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "Fit",
    "anos": "2004–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt / TRW",
    "codigos": [],
    "motorizacoes": [
      "1.4",
      "1.5"
    ],
    "aplicacoes": [
      "Fit",
      "City",
      "WR-V"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento",
      "ruído"
    ],
    "observacoes": "Caixa eletrica Jtekt / TRW para Fit. Período: 2004–2024. Motorizações: 1.4 / 1.5.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "honda-hr-v-63",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "HR-V",
    "anos": "2015–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Jtekt (Koyo)",
    "codigos": [],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "HR-V",
      "City",
      "Fit"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Jtekt (Koyo) para HR-V. Período: 2015–2024. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "honda-cr-v-64",
    "marcaVeiculo": "Honda",
    "modeloVeiculo": "CR-V",
    "anos": "2008–2018",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "2.0",
      "2.4"
    ],
    "aplicacoes": [
      "CR-V"
    ],
    "sintomasComuns": [
      "Vazamento / Luz EPS"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para CR-V. Período: 2008–2018. Motorizações: 2.0 / 2.4.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento / Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "hyundai-hb20---hb20s-65",
    "marcaVeiculo": "Hyundai",
    "modeloVeiculo": "HB20 / HB20S",
    "anos": "2012–2019",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Hyundai / Koyo (Jtekt)",
    "codigos": [
      "577001S000",
      "50303MK",
      "10100205"
    ],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "HB20",
      "HB20S",
      "HB20X"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica Hyundai / Koyo (Jtekt) para HB20 / HB20S. Período: 2012–2019. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "hyundai-hb20--nova-gera--o--66",
    "marcaVeiculo": "Hyundai",
    "modeloVeiculo": "HB20 (nova geração)",
    "anos": "2020–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Hyundai / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.0",
      "1.6"
    ],
    "aplicacoes": [
      "HB20",
      "HB20S",
      "Creta"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Hyundai / Jtekt para HB20 (nova geração). Período: 2020–2024. Motorizações: 1.0 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "hyundai-creta-67",
    "marcaVeiculo": "Hyundai",
    "modeloVeiculo": "Creta",
    "anos": "2016–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Hyundai / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "Creta",
      "HB20"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Hyundai / Jtekt para Creta. Período: 2016–2024. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "hyundai-tucson--gera--es-ant-68",
    "marcaVeiculo": "Hyundai",
    "modeloVeiculo": "Tucson (gerações anteriores)",
    "anos": "2005–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Hyundai / ZF",
    "codigos": [],
    "motorizacoes": [
      "2.0",
      "2.7"
    ],
    "aplicacoes": [
      "Tucson",
      "Sportage",
      "ix35"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica Hyundai / ZF para Tucson (gerações anteriores). Período: 2005–2016. Motorizações: 2.0 / 2.7.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "hyundai-tucson--nova--69",
    "marcaVeiculo": "Hyundai",
    "modeloVeiculo": "Tucson (nova)",
    "anos": "2017–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "Hyundai / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.6 Turbo",
      "2.0"
    ],
    "aplicacoes": [
      "Tucson",
      "Creta"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica Hyundai / Jtekt para Tucson (nova). Período: 2017–2024. Motorizações: 1.6 Turbo / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "hyundai-i30---elantra-70",
    "marcaVeiculo": "Hyundai",
    "modeloVeiculo": "i30 / Elantra",
    "anos": "2009–2016",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "Hyundai / ZF",
    "codigos": [],
    "motorizacoes": [
      "1.8",
      "2.0"
    ],
    "aplicacoes": [
      "i30",
      "Elantra",
      "Cerato"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica Hyundai / ZF para i30 / Elantra. Período: 2009–2016. Motorizações: 1.8 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm",
      "7. Desconecte o braço pitman da barra de direção — use extrator, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção",
      "9. Remova o parafuso do cardã da coluna (marque a posição)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi",
      "11. Baixe a caixa com cuidado",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção",
      "2. Remova a tampa do lado da cremalheira",
      "3. Retire o anel trava da cremalheira",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira",
      "5. Inspecione o eixo da cremalheira: sulco, desgaste ou empeno?",
      "6. Retire o retentor com saca de gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR",
      "9. Pressione o retentor com ferramenta adequada",
      "10. Monte a cremalheira com graxa de alta aderência",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim com torque de 3,5-4,5 kgf.m",
      "13. Instale a tampa com juntas novas",
      "14. Teste de vazamento com ar a 5 bar"
    ],
    "torques": [
      {
        "parte": "Suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça. ⚠️ Mantenha a referência do cardã da coluna. ⚠️ Descarte adequado do fluido hidráulico. ⚠️ Não reutilize retentores ou anéis. ⚠️ Teste no veículo antes de entregar.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-206-71",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "206",
    "anos": "2001–2010",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112",
      "INDISA"
    ],
    "motorizacoes": [
      "1.0",
      "1.4",
      "1.6"
    ],
    "aplicacoes": [
      "206",
      "207",
      "307",
      "Hoggar",
      "Partner"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para 206. Período: 2001–2010. Motorizações: 1.0 / 1.4 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-207-72",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "207",
    "anos": "2008–2014",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.4",
      "1.6"
    ],
    "aplicacoes": [
      "207",
      "206",
      "307",
      "Hoggar"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para 207. Período: 2008–2014. Motorizações: 1.4 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-208-73",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "208",
    "anos": "2013–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.2",
      "1.5",
      "1.6"
    ],
    "aplicacoes": [
      "208",
      "2008",
      "308"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para 208. Período: 2013–2024. Motorizações: 1.2 / 1.5 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-307-74",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "307",
    "anos": "2002–2012",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "307",
      "206",
      "207",
      "Hoggar",
      "C4"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para 307. Período: 2002–2012. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-hoggar-75",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "Hoggar",
    "anos": "2010–2014",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.4",
      "1.6"
    ],
    "aplicacoes": [
      "Hoggar",
      "206",
      "207",
      "307"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Hoggar. Período: 2010–2014. Motorizações: 1.4 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-308---408-76",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "308 / 408",
    "anos": "2012–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "308",
      "408",
      "3008"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para 308 / 408. Período: 2012–2024. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-partner-77",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "Partner",
    "anos": "2003–2020",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.6"
    ],
    "aplicacoes": [
      "Partner",
      "Berlingo"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Partner. Período: 2003–2020. Motorizações: 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-2008---3008-78",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "2008 / 3008",
    "anos": "2015–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "2008",
      "3008",
      "5008"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para 2008 / 3008. Período: 2015–2024. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-c3--1--gera--o--79",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "C3 (1ª geração)",
    "anos": "2003–2012",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.4",
      "1.6"
    ],
    "aplicacoes": [
      "C3",
      "206",
      "207",
      "307",
      "Hoggar"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para C3 (1ª geração). Período: 2003–2012. Motorizações: 1.4 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-c3--novo----c3-aircr-80",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "C3 (novo) / C3 Aircross",
    "anos": "2013–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.2",
      "1.5",
      "1.6"
    ],
    "aplicacoes": [
      "C3",
      "C3 Aircross",
      "208"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para C3 (novo) / C3 Aircross. Período: 2013–2024. Motorizações: 1.2 / 1.5 / 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-c4---c4-lounge---c4--81",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "C4 / C4 Lounge / C4 Picasso",
    "anos": "2004–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / DHB / ZF",
    "codigos": [],
    "motorizacoes": [
      "1.6",
      "2.0",
      "THP"
    ],
    "aplicacoes": [
      "C4",
      "C4 Lounge",
      "307",
      "308"
    ],
    "sintomasComuns": [
      "Vazamento / Luz EPS"
    ],
    "observacoes": "Caixa eletrica TRW / DHB / ZF para C4 / C4 Lounge / C4 Picasso. Período: 2004–2024. Motorizações: 1.6 / 2.0 / THP.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento / Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-aircross-82",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "Aircross",
    "anos": "2011–2019",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "Aircross",
      "C3",
      "206",
      "207",
      "307"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga",
      "ruído"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Aircross. Período: 2011–2019. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-c4-cactus-83",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "C4 Cactus",
    "anos": "2018–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.6"
    ],
    "aplicacoes": [
      "C4 Cactus",
      "C3",
      "208"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para C4 Cactus. Período: 2018–2024. Motorizações: 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-xsara---picasso-84",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "Xsara / Picasso",
    "anos": "2001–2013",
    "tipoCaixa": "hidraulica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.6",
      "2.0"
    ],
    "aplicacoes": [
      "Xsara",
      "Picasso",
      "206",
      "307"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa hidraulica TRW / DHB para Xsara / Picasso. Período: 2001–2013. Motorizações: 1.6 / 2.0.",
    "precoEstimadoPeca": 0,
    "dificuldade": "media",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Jogo de chaves com catraca 1/2\" e 3/8\"",
      "Chave de fenda Phillips e chata",
      "Chave estrela 13mm e 15mm",
      "Saca-polia de 3 garras",
      "Ferramenta de pressão para retentor",
      "Torquímetro de estalo 1/2\" (0-20 kgf.m)",
      "Alavanca de nylon",
      "Estojo de travas e anéis elásticos",
      "Compressão de mola para retentor"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Desconectar mangueiras de alta e baixa pressão da caixa",
      "Desconectar braço pitman da barra direção (marcar posição)",
      "Desconectar terminal de direção",
      "Remover parafuso do cardã/coluna de direção (marcar posição)"
    ],
    "passoAPassoDesmontagem": [
      "1. Posicione o veículo em superfície plana e puxe o freio de mão",
      "2. Desconecte a bateria (prevenção de curto no airbag se houver)",
      "3. Eleve o veículo e apoie em cavaletes — NUNCA trabalhe com apenas o macaco",
      "4. Remova as rodas dianteiras para acesso à barra de direção",
      "5. Coloque um recipiente embaixo da caixa para coletar o fluido hidráulico",
      "6. Desconecte as mangueiras de pressão e retorno usando chave de 19mm (deixe escorrer todo o fluido)",
      "7. Desconecte o braço pitman da barra de direção — use extrator se necessário, NUNCA bata com martelo",
      "8. Desconecte o terminal de direção do braço pitman",
      "9. Remova o parafuso do cardã da coluna de direção (marque a posição com tinta ou grife)",
      "10. Remova os 3 parafusos do suporte da caixa ao chassi (13mm ou 15mm)",
      "11. Baixe a caixa com cuidado — pesa cerca de 8-12 kg",
      "12. Limpe a caixa externamente com thinner e pano antes de desmontar na bancada"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a caixa na bancada com proteção de borracha ou EVA",
      "2. Remova a tampa do lado da cremalheira usando chave de fenda — cuidado com a junta",
      "3. Retire o anel trava da cremalheira usando alicate de anel",
      "4. Remova a cremalheira com cuidado — apoie em V de madeira e use martelo de nylon para empurrar o eixo",
      "5. Inspecione o eixo da cremalheira: marcas de sulco, desgaste, ou empeno? Se tiver sulco profundo, a caixa não remonta com garantia",
      "6. Retire o retentor da cremalheira usando saca com gancho — NUNCA danifique o alojamento",
      "7. Limpe o alojamento do retentor com thinner e pano sem fiapos",
      "8. Lubrifique o novo retentor com graxa NBR antes de instalar",
      "9. Pressione o novo retentor usando ferramenta de pressão ou soquete do tamanho exato do diâmetro externo do retentor",
      "10. Monte a cremalheira com graxa de alta aderência no eixo",
      "11. Instale o anel trava novo",
      "12. Ajuste o selim de pré-carga com torque de 3,5 kgf.m (não aperte demais ou a direção fica pesada)",
      "13. Instale a tampa nova com juntas novas",
      "14. Faça teste de vazamento com ar comprimido a 5 bar (não ultrapasse)"
    ],
    "torques": [
      {
        "parte": "Parafusos do suporte da caixa ao chassi",
        "valor": "18-22 Nm (1,8-2,2 kgf.m)"
      },
      {
        "parte": "Braço pitman ao eixo da cremalheira",
        "valor": "100-120 Nm (10-12 kgf.m)"
      },
      {
        "parte": "Selim de ajuste da cremalheira",
        "valor": "35-45 Nm (3,5-4,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Mangueiras de pressão",
        "valor": "20-25 Nm (2,0-2,5 kgf.m)"
      }
    ],
    "cuidadosEspeciais": "⚠️ NUNCA use martelo de ferro na carcaça da caixa — use nylon ou borracha. ⚠️ A posição do cardã da coluna DEVE ser mantida — se perder a referência, a direção ficará descentrada. ⚠️ O fluido hidráulico velho contém impurezas — descarte adequadamente. ⚠️ Não reutilize retentores ou anéis trava. ⚠️ Teste a caixa no veículo antes de entregar ao cliente — gire o volante de ponta a ponta verificando ruídos e vazamentos.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 80-160"
  },
  {
    "id": "peugeot-berlingo-85",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "Berlingo",
    "anos": "2005–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / DHB",
    "codigos": [
      "CX958112"
    ],
    "motorizacoes": [
      "1.6"
    ],
    "aplicacoes": [
      "Berlingo",
      "Partner"
    ],
    "sintomasComuns": [
      "Vazamento",
      "folga"
    ],
    "observacoes": "Caixa eletrica TRW / DHB para Berlingo. Período: 2005–2024. Motorizações: 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Vazamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "folga",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  },
  {
    "id": "peugeot-jumpy---spacetourer-86",
    "marcaVeiculo": "Peugeot",
    "modeloVeiculo": "Jumpy / SpaceTourer",
    "anos": "2018–2024",
    "tipoCaixa": "eletrica",
    "fabricanteCaixa": "TRW / Jtekt",
    "codigos": [],
    "motorizacoes": [
      "1.6"
    ],
    "aplicacoes": [
      "Jumpy",
      "SpaceTourer"
    ],
    "sintomasComuns": [
      "Luz EPS",
      "travamento"
    ],
    "observacoes": "Caixa eletrica TRW / Jtekt para Jumpy / SpaceTourer. Período: 2018–2024. Motorizações: 1.6.",
    "precoEstimadoPeca": 0,
    "dificuldade": "dificil",
    "tempoEstimado": "2-3 horas",
    "ferramentas": [
      "Scanner automotivo compatível",
      "Jogo de chaves com catraca",
      "Torquímetro de estalo",
      "Multímetro digital",
      "Chave estrela 10mm e 13mm",
      "Chave Torx T40 e T45",
      "Alavanca de nylon",
      "Chave de fenda Phillips"
    ],
    "checklistDesmontagem": [
      "Desconectar bateria (aguardar 10 min para desenergizar airbag)",
      "Elevar veículo em cavaletes",
      "Remover rodas dianteiras",
      "Conectar scanner e verificar códigos de falha EPS",
      "Desconectar chicote do motor de assistência",
      "Desconectar sensor de torque",
      "Remover parafusos do suporte da coluna"
    ],
    "passoAPassoDesmontagem": [
      "1. Desconecte a bateria e aguarde 10 minutos",
      "2. Conecte o scanner e verifique códigos de falha (U0131, U0415 são comuns)",
      "3. Eleve o veículo e apoie em cavaletes",
      "4. Remova as rodas dianteiras",
      "5. Desconecte o chicote do motor de assistência da coluna",
      "6. Desconecte o sensor de torque",
      "7. Remova os parafusos do suporte da coluna ao chassi",
      "8. Baixe a coluna com cuidado"
    ],
    "passoAPassoMontagem": [
      "1. Posicione a nova coluna no local",
      "2. Aperte os parafusos do suporte com torque especificado",
      "3. Conecte o chicote do motor de assistência",
      "4. Conecte o sensor de torque",
      "5. Faça a calibração de torque zero com scanner",
      "6. Teste a direção de ponta a ponta antes de entregar"
    ],
    "torques": [
      {
        "parte": "Suporte da coluna ao chassi",
        "valor": "18-25 Nm (1,8-2,5 kgf.m)"
      },
      {
        "parte": "Parafuso do cardã da coluna",
        "valor": "25-30 Nm (2,5-3,0 kgf.m)"
      },
      {
        "parte": "Conector do chicote EPS",
        "valor": "Aperte manual até o clique (não forçar)"
      }
    ],
    "cuidadosEspeciais": "⚠️ EPS exige diagnóstico por scanner antes de qualquer reparo. ⚠️ NUNCA desconecte a bateria com o veículo ligado — pode danificar a central. ⚠️ A calibração de torque zero é OBRIGATÓRIA após troca. ⚠️ Não reutilize colunas de desmonte — sensores de torque podem estar danificados. ⚠️ Verifique atualizações de software da central antes de substituir peças.",
    "defeitosDetalhados": [
      {
        "defeito": "Luz EPS",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      },
      {
        "defeito": "travamento",
        "causaRaiz": "Verificar na inspeção física da caixa. Pode ser desgaste natural, falta de fluido ou componente degradado.",
        "sintomasVisuais": "Sintoma reportado pelo cliente. Confirmar em test drive e inspeção visual.",
        "diagnostico": "Elevar o veículo, inspecionar a caixa de direção. Verificar nível do fluido. Testar componentes relacionados.",
        "solucao": "Consultar o procedimento de reparo desta caixa no catálogo. Verificar passo a passo de desmontagem e montagem.",
        "tempoReparo": "2-3 horas",
        "custoPeca": "Consultar fornecedor (Fort Distribuidora, TDS Parts, Mercado Livre)",
        "prioridade": "média",
        "prevenção": "Manutenção preventiva a cada 60.000 km. Verificar nível de fluido."
      }
    ],
    "precoKitReparo": "R$ 200-500"
  }
];
