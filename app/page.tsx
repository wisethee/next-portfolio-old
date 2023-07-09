import Container from "@/components/container/container";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import SocialNav from "@/components/social-nav/social-nav";
import SectionSkills from "@/components/section-skills/section-skills";

const Home = () => {
  return (
    <main>
      <Nav />
      <SocialNav />

      <Container>
        <Hero />
        <SectionSkills />
      </Container>

      <Footer />
    </main>
  );
};

export default Home;
