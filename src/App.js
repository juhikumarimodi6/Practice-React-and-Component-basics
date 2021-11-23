import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "books", amount: 500, date: new Date(2021, 2, 28) },
    { title: "grocery", amount: 1000, date: new Date(2021, 5, 14) },
    { title: "furniture", amount: 1500, date: new Date(2021, 4, 10) },
    { title: "fruits", amount: 700, date: new Date(2021, 6, 16) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses = {expenses}> </Expenses>
    </div>
  );
}

export default App;
