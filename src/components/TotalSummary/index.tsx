import React from 'react';
import { Pessoa } from '../../models/pessoa';
import { Transacao } from '../../models/transacao';

interface Props {
  pessoas: Pessoa[];
  transacoes: Transacao[];
}

const TotalSummary: React.FC<Props> = ({ pessoas, transacoes }) => {
  const calcularTotais = () => {
    const totaisPorPessoa: { [key: number]: { receitas: number; despesas: number } } = {};

    pessoas.forEach((pessoa) => {
      totaisPorPessoa[pessoa.id] = { receitas: 0, despesas: 0 };
    });

    transacoes.forEach((transacao) => {
      if (transacao.tipo === 'receita') {
        totaisPorPessoa[transacao.pessoaId].receitas += transacao.valor;
      } else {
        totaisPorPessoa[transacao.pessoaId].despesas += transacao.valor;
      }
    });

    return totaisPorPessoa;
  };

  const totais = calcularTotais();

  const totalGeralReceitas = Object.values(totais).reduce(
    (acc, { receitas }) => acc + receitas,
    0
  );
  const totalGeralDespesas = Object.values(totais).reduce(
    (acc, { despesas }) => acc + despesas,
    0
  );
  const saldoLiquido = totalGeralReceitas - totalGeralDespesas;

  return (
    <div className="total-summary">
      <h2 className='Titulo__totais'>Totais por Pessoa</h2>
      <ul>
        {pessoas.map((pessoa) => {
          const { receitas, despesas } = totais[pessoa.id];
          const saldo = receitas - despesas;
          return (
            <li key={pessoa.id}>
              <strong>{pessoa.nome}</strong>
              <div>Receitas: R$ {receitas.toFixed(2)}</div>
              <div>Despesas: R$ {despesas.toFixed(2)}</div>
              <div>Saldo: R$ {saldo.toFixed(2)}</div>
            </li>
          );
        })}
      </ul>
      <h3>Total Geral</h3>
      <div>Receitas Totais: R$ {totalGeralReceitas.toFixed(2)}</div>
      <div>Despesas Totais: R$ {totalGeralDespesas.toFixed(2)}</div>
      <div>Saldo Líquido: R$ {saldoLiquido.toFixed(2)}</div>
    </div>
  );
};

export default TotalSummary;