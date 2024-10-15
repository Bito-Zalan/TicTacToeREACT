import { useState } from "react";
import "./App.css";
import Jatekter from "./components/Jatekter";

function App() {
  //react state leirja a program állapotát, ha a stateben megadott változó értéke változik
  //akkor a react frissiti az oldal tartalmát azon a részen, amelyik a változótol függ
  const [lista, setLista] = useState(["", "", "", "", "", "", "", "", ""]);
  const [lepes, setLepes] = useState(0);

  function katt(adat) {
    //Itt akarjuk lekezelni hogy melyik elemre kattintottunk és mit irjunk a listába
    const segedLista = [...lista]; // ne referenciát adjunk át, hanem másolatot készítsünk
    if (lepes % 2 === 0) {
      segedLista[adat] = "X";
    } else {
      segedLista[adat] = "0";
    }
    console.log(lepes);
    let sv = lepes;
    sv++;
    setLepes(sv);
    setLista([...segedLista]);

    console.log(lista);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TicTacToe</h1>
      </header>
      <article>
        <Jatekter lista={lista} katt={katt} />
      </article>
      <footer>
        <p>Bitó Zalán</p>
      </footer>
    </div>
  );
}

export default App;
