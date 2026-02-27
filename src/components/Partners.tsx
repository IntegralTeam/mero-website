import canton from '../assets/canton-logo-white.svg';
import midnight from '../assets/midnight-logo.svg';
import polygon from '../assets/polygon-logo.svg';

export function Partners() {
  const logos = [
    { src: canton, alt: "Canton" },
    { src: midnight, alt: "Midnight" },
    { src: polygon, alt: "Polygon" },
    { src: canton, alt: "Canton" },
    { src: midnight, alt: "Midnight" },
    { src: polygon, alt: "Polygon" },
  ];

  return (
    <section id="partners" className="overflow-hidden py-12 md:py-16 lg:py-20 bg-black">
      <div className="container mb-8 w-full max-w-lg px-[5%] md:mb-10 lg:mb-12">
        <h1 className="text-center text-base font-bold leading-[1.2] md:text-md md:leading-[1.2] text-white">
          Trusted by leading financial institutions
        </h1>
      </div>
      <div className="logo-marquee pt-7 md:pt-0">
        {[0, 1].map((lane) => (
          <div
            key={`lane-${lane}`}
            className="logo-marquee-group"
            aria-hidden={lane === 1 ? "true" : undefined}
          >
            {logos.map((logo, index) => (
              <img
                key={`${lane}-${logo.alt}-${index}`}
                className="logo-marquee-item"
                src={logo.src}
                alt={`${logo.alt} logo`}
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`${lane}-repeat-${logo.alt}-${index}`}
                className="logo-marquee-item"
                src={logo.src}
                alt=""
                aria-hidden="true"
              />
            ))}
            <div />
          </div>
        ))}
      </div>
    </section>
  );
}
