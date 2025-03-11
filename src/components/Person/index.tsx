import "./styles.css";

type PersonProps = {
  nome: string;
  idade: number;
}

export default function Person({ nome, idade }: PersonProps) {
    return (
        <div className="item">
          <strong>Nome: {nome}</strong>
          <span>Idade: {idade}</span>
        </div>
    )
}