import Navbar from "@/components/navbar";

export default async function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen">
      {" "}
      <Navbar />
      <div className="pt-28">{children}</div>
    </section>
  );
}
