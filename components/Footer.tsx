import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="flex flex-col fixed bottom-16">
      <SocialIcons />
      <p className="mt-4 md:text-2xl text-custom-brown-deep dark:text-custom-brown">
        &copy; 2023 Nasha Tech LLC
      </p>
    </footer>
  );
};

export default Footer;
