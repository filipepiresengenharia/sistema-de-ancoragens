# Sistema de Ancoragens — Continuidade REV 00

## Estado em 27/11/2026
- REV 00 de testes publicada em https://sistema-de-ancoragens.vercel.app/.
- Código integral publicado recuperado e versionado em index.html.
- GitHub exclusivo: este repositório. Vercel: projeto sistema-de-ancoragens, implantação inicial dpl_Dpa1TbgmcmmXAWqfHjgPWvRqdW44. Vinculação Git automática ainda não confirmada.
- Não modificar outros projetos ou repositórios.
- Requisitos 01–14 consolidados preliminarmente; 15 repositório criado; 16 protótipo; 17 publicado; 18 testes pendentes; 19 teste prático; 20 finalização pendente.

## Requisitos
Dois módulos independentes e integrados: memorial de cálculo e relatório de ensaio. Interface simples, quatro opções principais e formulários contínuos. Perfis editáveis Brasmetal e Pepes; pré-carregar dados institucionais confirmados, RT e CREA; solicitar dados variáveis de obra, projeto, ART e condições reais. Não publicar informações pessoais ou de clientes no repositório público.
Quantidades e cargas variáveis, pontos por pavimento/localização, etiqueta individual única e estável, cadastro em lote, fotos e resultados reais. Preservar histórico. Carga requerida usual 1500 kgf editável dentro dos requisitos aplicáveis; carga de ensaio independente. Olhal industrializado inicialmente; caranguejo e vergalhão U aguardam memoriais específicos. Biblioteca editável com fontes documentadas; WQE 500 Plus 1/2 UNC de referência, furo 14 mm, hef 110 mm, h 140 mm, c 45 mm, s 60 mm, fck 30 MPa, torque 35 Nm, carga última nominal 8365 kgf. Não interpretar como capacidade aprovada. Verificar olhal/haste/rosca/fixação/concreto e ações; não transpor dados métricos M12 para 1/2 UNC. Cálculos completos e critérios de ensaio devem ser validados antes de emissão definitiva. Documentos editáveis dentro do sistema, prévia, PDF, capa, sumário, revisões, anexos, desenhos SVG e JSON versionado. Estrutura global sob responsabilidade do RT estrutural; ensaio não substitui cálculo.

## Próximos passos
1. Vincular repositório ao projeto Vercel existente (não criar outro projeto).
2. Validar navegador, persistência, cálculos nominais, importação/exportação, etiquetas e impressão.
3. Corrigir histórico, dados institucionais/logos, biblioteca, desenhos, anexação PDF e apresentação documental.
4. Validar metodologia e fontes normativas, bloqueando aprovação sem dados essenciais.
5. Implementar demais tipos após receber memoriais. Atualizar este documento e o CHANGELOG a cada revisão.

## Limitações REV 00
A publicação pronta não comprova funcionamento. Sem dimensionamento completo validado, sem sumário/paginação final, anexos PDF relacionados mas não incorporados, sem geração de etiqueta física, sem histórico completo, cadastro institucional pendente. Usar somente dados fictícios em testes iniciais. O armazenamento é local no navegador; exportar JSON para backup.

## Atualização — REV 01 (27/11/2026)
Conexão GitHub/Vercel confirmada no projeto original. Quatro defeitos corrigidos: alvo zero específico, tensão negativa, geometria de rosca inválida e uso de fórmula UNC em outros tipos. Testes isolados executados em cópias das funções centrais: REV 00 12/16 e REV 01 16/16. Script de regressão que extrai funções do HTML registrado em tests/core.test.cjs; execução integral desse script no checkout ainda pendente. Publicação automática comprovada (deployment dpl_ExErorHcNNV5ebvWqLN8N1BXGYH1, commit aeb7b20c2891ea4799d326b84d2ba4db5ec706fc, HTTP 200 e HTML idêntico). Etapa 18 parcial. Próximos: testes reais no navegador, persistência/JSON, estabilidade das etiquetas, biblioteca e modelos de documento, validação de engenharia. Repositório público; não registrar dados pessoais/clientes. Não liberar para uso.

## REV 02 — modelo documental
Usuário rejeitou a apresentação genérica da REV 01. Recuperado o HTML PEP Laudos Cremalheira REV 04Q, ID 1oc6vTBgoSqHPV7QkmhNQXJVmVQDt-HJS, analisados estilos e paginação. Adaptados capa, cabeçalho/rodapé, numeração, sumário calculado, capítulos, registros fotográficos e editor de textos. Commit 0dc5232f18ecef07455eaf0b762a70997ed1f3c7, Vercel dpl_F18AVRcKbYav56UqkkqrKeMwTPFK READY. Ainda validar visual real, quebras de páginas, tabelas grandes, impressão, editor completo e anexação PDF; não declarar equivalência visual integral ao modelo original. Não alterados os sistemas de referência.

## REV 03 — Editor documental por tags
Usuário solicitou explicitamente a estrutura da APR Cremalheira, enviou imagem e URL https://pep-apr-cremalheira.vercel.app/. Consultado HTML publicado HTTP 200, aproximadamente 7,36 MB, funções chapterPage, walkChapters, chapterReport, chapterTOC e docEditingToolbar. Adaptado editor hierárquico com pesquisa, capítulos/subtópicos, reordenação, formatação, inserção de tags e prévia vinculada, marcação de revisão, modelo independente por módulo, padrão salvo localmente e modelos por projeto exportados no JSON. Tags de blocos geram tabelas, desenhos, fotos e verificações, sem inventar resultados. Commit 606f6d2a3a83cb8e2d764f916fd11f040a11a02f, Vercel dpl_CBgceT3kK24LhF3QiKYm56t4axWa READY. Ainda validar editor no navegador e paginação; não há importação de referência histórica nem edição integral de capa/cabeçalho/rodapé, nem exportação independente de modelo padrão. Não modificados sistemas de referência. Etapa 18 parcial.
