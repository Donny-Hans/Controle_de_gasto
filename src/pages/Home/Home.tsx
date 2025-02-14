import React, { useState } from 'react';
import PessoaForm from '../../components/PessoaForm';
import PessoaList from '../../components/PessoaList';
import TransacaoForm from '../../components/TransacaoForm';
import TotalSummary from '../../components/TotalSummary';
import { Pessoa } from '../../models/pessoa';
import { Transacao } from '../../models/transacao';

const Home: React.FC = () => {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  const handleAddPessoa = (novaPessoa: Pessoa) => {
    setPessoas([...pessoas, novaPessoa]);
  };

  const handleDeletePessoa = (id: number) => {
    setPessoas(pessoas.filter((pessoa) => pessoa.id !== id));
    setTransacoes(transacoes.filter((transacao) => transacao.pessoaId !== id));
  };

  const handleAddTransacao = (novaTransacao: Transacao) => {
    setTransacoes([...transacoes, novaTransacao]);
  };

  return (
    <div className="app">
      <h1>Sistema de Controle de Gastos Residenciais</h1>
      <PessoaForm onAddPessoa={handleAddPessoa} />
      <PessoaList pessoas={pessoas} onDelete={handleDeletePessoa} />
      <TransacaoForm pessoas={pessoas} onAddTransacao={handleAddTransacao} />
      <TotalSummary pessoas={pessoas} transacoes={transacoes} />
    </div>
  );
};

export default Home;