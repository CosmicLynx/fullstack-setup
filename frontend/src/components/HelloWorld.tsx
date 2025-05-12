import axios from "axios";
import { useEffect, useState } from "react";

export default function HelloWorld() {
  const [helloWorld, setHelloWorld] = useState<string>("");
  useEffect(() => {
    axios.get("/api/hello").then((res) => {
      setHelloWorld(res.data);
    });
  });

  return <div>{helloWorld}</div>;
}
