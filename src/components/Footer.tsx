const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <p className="font-heading text-lg tracking-wider uppercase">
            Paul's <span className="text-primary">Tires & Rims</span>
          </p>
          <span className="text-muted-foreground text-sm">- dev by</span>
          <a href="https://www.paukuntong.xyz" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80 transition-opacity">
            <img src="/paukuntong-logo.jpg" alt="PK Logo" className="h-6 w-auto rounded" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Paul's Used Tires & Rims. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
