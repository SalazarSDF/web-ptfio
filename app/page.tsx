import Particles from "./componets/stars";
export default function Home() {
  return (
    <>
      <h1>Hoome page</h1>
      <Particles className="stars" quantity={100} refresh={true} />
    </>
  );
}
