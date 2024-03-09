const alunos = [
  { nome: "João", nota: 7.5 },
  { nome: "Maria", nota: 8.0 },
  { nome: "Pedro", nota: 4.5 },
  { nome: "Ana", nota: 9.0 },
  { nome: "Carlos", nota: 5.5 },
];

const aprovados = alunos.filter((aluno) => aluno.nota >= 6);

console.log(aprovados);
