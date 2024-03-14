import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function Countdown({ from }) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (from === 0) return <p>Blast off!</p>;
  return (
    <Suspense fallback={from}>
      <Countdown from={from - 1} />
    </Suspense>
  );
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-center my-8">
        The World's Least Efficient Countdown
      </h1>
      <div className="text-6xl text-center">
        <Countdown from={10} />
      </div>
    </>
  );
}
