const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-heading text-lg tracking-wider uppercase">
          Paul's <span className="text-primary">Tires & Rims</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Paul's Used Tires & Rims. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
