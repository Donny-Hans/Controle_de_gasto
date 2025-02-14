import React, { useState } from 'react';
import { Transacao, generateTransacaoId } from '../../models/transacao';

interface Props {
  pessoas: { id: number; nome: string; idade: number }[];
  onAddTransacao: (transacao: Transacao) => void;
}

const TransacaoForm: React.FC<Props> = ({ pessoas, onAddTransacao }) => {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState<'receita' | 'despesa'>('receita');
  const [pessoaId, setPessoaId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!descricao || !valor || !pessoaId) return;

    const pessoaSelecionada = pessoas.find((p) => p.id === pessoaId);
    if (!pessoaSelecionada) return;

    // Validar se menores de idade só podem ter despesas
    if (pessoaSelecionada.idade < 18 && tipo === 'receita') {
      alert('Menores de idade só podem ter despesas.');
      return;
    }

    const novaTransacao: Transacao = {
      id: generateTransacaoId(),
      descricao,
      valor: parseFloat(valor),
      tipo,
      pessoaId,
    };

    onAddTransacao(novaTransacao);
    setDescricao('');
    setValor('');
    setTipo('receita');
    setPessoaId(null);
  };

  return (
    <form onSubmit={handleSubmit} className="pessoa-form">
      <h2>Cadastrar Transação</h2>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          step="0.01"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Tipo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value as 'receita' | 'despesa')}>
          <option value="receita">Receita</option>
          <option value="despesa">Despesa</option>
        </select>
      </div>
      <div>
        <label>Pessoa:</label>
        <select
          value={pessoaId || ''}
          onChange={(e) => setPessoaId(parseInt(e.target.value))}
          required
        >
          <option value="">Selecione uma pessoa</option>
          {pessoas.map((pessoa) => (
            <option key={pessoa.id} value={pessoa.id}>
              {pessoa.nome} ({pessoa.idade} anos)
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default TransacaoForm;