import NavAside from "@/app/componets/NavAside";
export default async function Projects({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <>
      <NavAside active="projects" lng={lng} />
      <h1>Projects Page</h1>
    </>
  );
}
