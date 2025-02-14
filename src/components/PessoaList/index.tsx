import React from 'react';
import { Pessoa } from '../../models/pessoa';

interface Props {
  pessoas: Pessoa[];
  onDelete: (id: number) => void;
}

const PessoaList: React.FC<Props> = ({ pessoas, onDelete }) => {
  return (
    <div className="pessoa-list">
      <h2>Lista de Pessoas</h2>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            <span>{pessoa.nome} ({pessoa.idade} anos)</span>
            <button onClick={() => onDelete(pessoa.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PessoaList;