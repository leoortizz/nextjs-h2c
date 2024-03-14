import { Suspense } from "react";

async function TimeoutComponent({ timeout = 5000 }: { timeout?: number }) {
  await new Promise((resolve) => setTimeout(resolve, timeout));

  return <p>Rendered after timeout of {timeout}!</p>;
}

export default function Page() {
  return (
    <Suspense fallback={<p>Suspense loading...</p>}>
      <TimeoutComponent />
    </Suspense>
  );
}
