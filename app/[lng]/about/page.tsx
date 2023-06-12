import Link from "next/link";
export default function About({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <>
      <h1>About Page</h1>
      <Link href={`/${lng}`}>Back</Link>
    </>
  );
}
