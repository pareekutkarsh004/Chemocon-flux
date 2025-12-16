export function Sponsors() {
  const sponsors = [
    {
      name: "ANRF",
      fullName: "Anusandhan National Research Foundation",
      logo: "https://anrf.res.in/images/logo.png",
      type: "Primary Sponsor",
    },
  ];

  const partners = [
    {
      name: "AspenTech",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Aspen_Technology_logo.svg/320px-Aspen_Technology_logo.svg.png",
      type: "Industry Partner",
    },
    {
      name: "MATLAB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/200px-Matlab_Logo.png",
      type: "Software Partner",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-conference-gold font-medium mb-2 tracking-wider text-sm uppercase">Supported By</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Sponsors & Partners
          </h2>
        </div>

        {/* Primary Sponsor */}
        <div className="mb-16">
          <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Primary Sponsor
          </p>
          <div className="flex justify-center">
            {sponsors.map((sponsor) => (
              <div 
                key={sponsor.name}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-conference-gold/50 hover:shadow-xl transition-all duration-300 max-w-md w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="h-20 flex items-center justify-center mb-4">
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-h-full max-w-[200px] object-contain dark:brightness-0 dark:invert"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden font-display text-3xl font-bold text-conference-gold">{sponsor.name}</span>
                  </div>
                  <p className="text-foreground font-semibold text-lg">{sponsor.fullName}</p>
                  <span className="mt-2 px-3 py-1 bg-conference-gold/10 text-conference-gold text-xs font-medium rounded-full">
                    {sponsor.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div>
          <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-wider">
            Industry & Software Partners
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="group bg-card border border-border rounded-xl p-6 hover:border-conference-gold/50 hover:shadow-lg transition-all duration-300 w-64"
              >
                <div className="flex flex-col items-center">
                  <div className="h-14 flex items-center justify-center mb-3">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-h-full max-w-[140px] object-contain dark:brightness-0 dark:invert"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="hidden font-display text-2xl font-bold text-primary">{partner.name}</span>
                  </div>
                  <p className="text-foreground font-medium">{partner.name}</p>
                  <span className="mt-1 text-muted-foreground text-xs">{partner.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
