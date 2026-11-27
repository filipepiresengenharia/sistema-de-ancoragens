# Histórico de revisões

## REV 00 — 27/11/2026
- Protótipo HTML/CSS/JS, dois módulos, pontos e etiquetas, configuração química nominal, desenhos de corte, biblioteca, perfis de empresa, fotos, anexos, JSON, IndexedDB e impressão.
- Publicação direta Vercel; código integral recuperado e versionado no GitHub.
- Validação de engenharia e testes de navegador pendentes. Não liberar para uso.

## REV 01 — 27/11/2026
- Correção de carga específica zero, tensão por carga negativa, geometria impossível de rosca e aplicação indevida de equação UNC a outros dispositivos.
- Validação isolada das funções copiadas do código: REV 00 12/16, REV 01 16/16. Teste de navegador e engenharia ainda pendentes.
- Conexão GitHub/Vercel confirmada; testes de regressão registrados em tests/core.test.cjs.

## REV 02 — 27/11/2026
- Referência efetivamente consultada: PEP Laudos Cremalheira REV 04Q (HTML original), em especial capa, estilos documentais e algoritmo de paginação lPaginate.
- Novo gerador: capa, sumário com páginas, cabeçalho, rodapé, tabelas, revisão, capítulos, fórmulas nominais, fotos por etiqueta e anexos. Editor textual ampliado.
- Paginação implementada, mas impressão e casos de tabelas/fotos extensas ainda não validados em navegador. Sem alteração do motor de cálculo; aprovação técnica continua bloqueada.

## REV 03 — 27/11/2026
- Referência: código publicado da APR Cremalheira, com árvore de capítulos, subtópicos, edição por tags, formatação e revisão individual.
- Modelos independentes por módulo, tags escalares e de blocos (tabelas, desenhos, fotos, cálculos), prévia vinculada, edição de estrutura, salvamento como padrão local e inclusão dos modelos no JSON.
- Validação funcional e visual do editor, paginação e relatórios ainda pendente. Não equivale à totalidade dos recursos da APR.

## REV 04 — 27/11/2026
- Três documentos independentes: memorial, caderno técnico e relatório de ensaio. Cadastro comum, metadados e modelos próprios.
- Conteúdo técnico reestruturado; preservados editor por tags, layout e cálculo/critério de resultados existentes.
- 14/14 testes isolados aprovados. Modelos antigos personalizados preservados; novos textos via restauração explícita após backup. Validação de navegador, impressão e engenharia pendente.

## REV 05 — 27/11/2026
Por correção do usuário, caderno técnico e relatório de ensaio são o mesmo documento. Dois módulos ativos independentes: memorial de cálculo e caderno técnico — relatório de ensaio de carga. Detalhes de instalação e desenhos no modelo inicial do memorial; modelo de ensaio mantém resultados, fotos e editor por tags. Modelos/metadados da antiga aba técnica REV 04 são preservados no JSON, sem terceira aba. Avisos fixos removidos do corpo e da capa; aviso de conferência fica na interface, não impresso. PDF ainda é de conferência, não emissão tecnicamente validada. 12/12 verificações isoladas aprovadas. Commit código 1b0e74950ad5c95fb0747820c10b9df9c595e7b3. Teste visual, validação de engenharia e anexação PDF continuam pendentes.
