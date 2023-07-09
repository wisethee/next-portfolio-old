import Container from "@/components/container/container";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";

const Home = () => {
  return (
    <main>
      <Nav />

      <Container>
        <Hero />
      </Container>

      <Footer />
    </main>
  );
};

export default Home;
