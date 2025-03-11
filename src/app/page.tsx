import Link from "next/link";
import "./home.css"
import Person from "@/components/Person";

export default function Home() {
  const lista = [
    {
      name: "gusta",
      age: 15
    },
    {
      name: "boladao",
      age: 45
    }
  ]
  return (
    <div>
      <h1>Hello worlds</h1>
      <h2>Testando</h2>

      <Link href="/login">
        <button>Login</button>
      </Link>

      <div className="container">
        {lista.map(item) => (
          <Person nome={ClipboardItem.name} idade={item.age} />
          )}
      </div>
    </div>

  );
}
