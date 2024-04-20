import UsePaginatedFetch from "./UsePaginatedFetch";
const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";

function App() {
  const [loading, data] = UsePaginatedFetch(url, 3);

  return <div className="container">Hello World</div>;
}

export default App;
