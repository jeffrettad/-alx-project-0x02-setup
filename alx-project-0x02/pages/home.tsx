import Card from "@/components/common/Card";
const Home = () => {
  return (
    <main className="p-6">
      <h1 className="text-3x1 font-bold mb-4">Home Page</h1>
      <div className="ggrid gap-4">
        <Card title="welcome" content=" This is a reusable card component. "/>
        <Card title="About the App" content="Tthis app is built with Next.js and typescript."/>
        <Card title="Get Started" content="Expore the site using the navigation link above."/>
      </div>
    </main>
  );
};

export default Home;