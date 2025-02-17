# Sistema de Controle de Gastos

O sistema desenvolvido  web desenvolvido em React e typerscript que permite gerenciar pessoas  e suas transações financeiras. 
Ele oferece algumas funcionalidades funcionalidades como: 

Cadastrar e listar pessoas.

Registrar transações (receitas e despesas) associadas a cada pessoa.

Exibir resumos financeiros individuais e totais.


## Funcionalidades Do Aplicativo

Cadastro de Pessoas : Adicionar e remover pessoas no sistema.
Registro de Transações : Associar receitas ou despesas a uma pessoa específica.
Resumo Financeiro : Mostrar totais de receitas, despesas e saldos por pessoa e globalmente.

## Estrutura do Projeto

src/
├── components/       # Componentes React reutilizáveis
│   ├── PessoaForm.tsx    # Formulário para adicionar pessoas
│   ├── PessoaList.tsx    # Lista de pessoas cadastradas
│   ├── TransacaoForm.tsx # Formulário para registrar transações
│   └── TotalSummary.tsx  # Resumo financeiro
├── models/           # Modelos de dados
│   ├── pessoa.ts         # Interface e lógica para gerar IDs de pessoas
│   └── transacao.ts      # Interface e lógica para gerar IDs de transações
└── pages/            # Páginas principais
    └── Home.tsx          # Página principal do sistema

3. Descrição dos Componentes

3.1. PessoaForm
Responsabilidade : Permite o cadastro de novas pessoas no sistema.
Props :
onAddPessoa: Função chamada ao submeter o formulário, passando os dados da nova pessoa.
Estado Interno :
nome: Nome da pessoa.
idade: Idade da pessoa.
Fluxo :
O usuário preenche o nome e a idade.
Ao submeter, uma nova Pessoa é criada com um ID único (usando generateId) e enviada ao componente pai via onAddPessoa.
3.2. PessoaList
Responsabilidade : Exibe uma lista de pessoas cadastradas e permite excluir uma pessoa.
Props :
pessoas: Array de objetos Pessoa a serem exibidos.
onDelete: Função chamada ao clicar no botão "Excluir", passando o ID da pessoa a ser removida.
Fluxo :
Itera sobre o array pessoas e exibe cada pessoa com seu nome e idade.
Um botão "Excluir" permite remover a pessoa do sistema.
3.3. TransacaoForm
Responsabilidade : Permite registrar transações (receitas ou despesas) associadas a uma pessoa.
Props :
pessoas: Array de objetos Pessoa para selecionar a pessoa associada à transação.
onAddTransacao: Função chamada ao submeter o formulário, passando os dados da nova transação.
Fluxo :
O usuário seleciona uma pessoa, insere uma descrição, valor e tipo (receita/despesa).
Ao submeter, uma nova Transacao é criada com um ID único (usando generateTransacaoId) e enviada ao componente pai via onAddTransacao.
3.4. TotalSummary
Responsabilidade : Exibe resumos financeiros individuais e globais.
Props :
pessoas: Array de objetos Pessoa.
transacoes: Array de objetos Transacao.
Lógica Interna :
Calcula receitas, despesas e saldo para cada pessoa.
Calcula totais gerais de receitas, despesas e saldo líquido.
Fluxo :
Itera sobre as transações para calcular valores por pessoa.
Exibe os resultados em uma lista e no resumo geral.
3.5. Home
Responsabilidade : Página principal que integra todos os componentes.
Estado :
pessoas: Array de objetos Pessoa.
transacoes: Array de objetos Transacao.
Funções :
handleAddPessoa: Adiciona uma nova pessoa ao estado.
handleDeletePessoa: Remove uma pessoa e suas transações associadas.
handleAddTransacao: Adiciona uma nova transação ao estado.
Fluxo :
Renderiza os componentes PessoaForm, PessoaList, TransacaoForm e TotalSummary.
Gerencia o estado centralizado de pessoas e transações.


## Para Fazer Download Das Depencias do Projeto

faça o clone do arquivo depois dentro da pasta
abra o terminal no seu vscode e escreva `npm install`
e para ver o projeto funcionando digite no terminal `npm run dev`