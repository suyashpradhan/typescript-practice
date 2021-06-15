import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  name: string;
  age: number;
};

async function getData() {
  const response = await axios.get<User>(
    "https://test.suyashpradhan.repl.co/test"
  );
  return response.data;
}

export const API = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getData();
      setUser(data);
    })();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>API CALLS USING TS</h1>

      <h1>Welcome {user?.name}</h1>
      <h2>Your are {user?.age} years old </h2>
    </>
  );
};
