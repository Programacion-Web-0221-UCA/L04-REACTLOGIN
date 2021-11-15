import { useUserContext } from "./Contexts/UserContext";

export default function Test() {
  const context = useUserContext();
  console.log({ context });
  return <div>Soy el test</div>;
}
