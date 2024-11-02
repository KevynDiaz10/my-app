import FooterHome from "@/components/ui/FooterHome/FooterHome";
import MainHome from "@/components/ui/MainHome/MainHome";
import NavbarHome from "@/components/ui/NavbarHome/NavbarHome";

function HomePage() {
  return (
    <div className="dark:bg-secondary">
      <NavbarHome/>
      <MainHome />
      <FooterHome />
    </div>
  );
}

export default HomePage;
