/* eslint-disable react/prop-types */
export default function PageHeader({ title, description }) {
  return (
    <header className="flex flex-col justify-center py-12">
      <h1 className="mb-4 max-w-prose text-6xl">{title}</h1>
      <p className="max-w-prose">{description}</p>
    </header>
  );
}
