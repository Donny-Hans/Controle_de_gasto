export interface Transacao {
    id: number;
    descricao: string;
    valor: number;
    tipo: 'receita' | 'despesa';
    pessoaId: number;
  }
  
  // Função para gerar IDs sequenciais
  let currentTransacaoId = 1;
  export const generateTransacaoId = () => currentTransacaoId++;