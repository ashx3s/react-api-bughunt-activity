import PageHeader from "../../components/PageHeader";

const headerContent = {
  title: "Home Page",
  description:
    "Use your home page to test and experiment or to display alternative strategies to rendering content. Consider making a reusable PageHeader component using props for the title and description.",
};
export default function Home() {
  return (
    <>
      <PageHeader {...headerContent} />
      <div></div>
    </>
  );
}
