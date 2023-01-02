import { Button } from "ui";
import { trpc } from "../utils/trpc";

export default function Web() {
  const health = trpc.health.health.useQuery();

  return (
    <div>
      {health.data && <p>TRPC Health: {health.data.health}</p>}
      <h1>Web</h1>
      <Button />
    </div>
  );
}
