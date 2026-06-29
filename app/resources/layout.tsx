import "./resources.css";

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="rsc">{children}</div>;
}
