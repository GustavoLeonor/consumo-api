import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";
import Post from "./post";
// import Contador from "./contador";
function App() {
  const [entradasBlog, setEntradasBlog] = useState([]);

  useEffect(() => {
    //obtener registro de una appi
    const leerPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        { method: "GET", header: { "Content-type": "application/json" } }
      );
      const data = await response.json();
      setEntradasBlog(data);
    };

    leerPosts();
  });

  return entradasBlog.map((elemento) => {
    return (
      <Post key={elemento.id} title={elemento.title} body={elemento.body} />
    );
  });

  // return <Contador/>
}

export default App;
