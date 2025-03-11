import Link from "next/link";
import "./home.css";
import Person from "@/components/Person";

export default function Home() {
  const lista = [
    {
      name: "Gustavo",
      age: 27
    },
    {
      name: "Maria",
      age: 20
    },
    {
      name: "João",
      age: 40
    }
  ]

  return (
    <div>
      <h1>Hello Worlds</h1>
      <h2>teste</h2>

      <Link href="/login">
        <button>LOGIN</button>
      </Link>

      <div className="container">
        {lista.map((item) => (
          < Person nome={item.name} idade={item.age} key={item.name} />
        ))}
      </div>
    </div>
  );
}