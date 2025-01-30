export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center py-12">
        <h1 className="mb-4 max-w-prose text-6xl">Home Page</h1>
        <p className="max-w-prose">
          Use your home page to test and experiment or to display alternative
          strategies to rendering content.{" "}
          <em>
            Consider making a reusable PageHeader component using props for the
            title and description.
          </em>
        </p>
      </header>
      <div></div>
    </>
  );
}
