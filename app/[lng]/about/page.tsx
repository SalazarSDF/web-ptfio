import Link from "next/link";
import { useTranslation } from "@/app/i18n";
export default async function About({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "about-page");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}`}>Back</Link>
    </>
  );
}
