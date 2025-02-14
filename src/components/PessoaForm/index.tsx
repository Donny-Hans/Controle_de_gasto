import React, { useState } from 'react';
import { Pessoa, generateId } from '../../models/pessoa';

interface Props {
  onAddPessoa: (pessoa: Pessoa) => void;
}

const PessoaForm: React.FC<Props> = ({ onAddPessoa }) => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !idade) return;

    const novaPessoa: Pessoa = {
      id: generateId(),
      nome,
      idade: parseInt(idade),
    };

    onAddPessoa(novaPessoa);
    setNome('');
    setIdade('');
  };

  return (
    <form onSubmit={handleSubmit} className="pessoa-form">
      <h2>Cadastrar Pessoa</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Idade:</label>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default PessoaForm;