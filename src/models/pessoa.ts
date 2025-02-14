export interface Pessoa{
    id: number;
    nome: string;
    idade: number;
}


let currentId = 1;
export const generateId = () => currentId++;