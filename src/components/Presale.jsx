import Button from "./Button";

const PreSale = () => {
  return (
    <div className="relative bg-center bg-cover py-12 md:py-16" >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
            🔐 Pre-sale Wallet:
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
            3PdfqXDnBhTuo9ewYSkKQUwzXXksNZjjURWAbfqcrdUJ
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
            Limits:
            <br />
            Minimum 0.1 SOL
            <br />
            Maximum 10 SOL
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
            Make sure you send it from a NON-exchange wallet in order to not lose tokens.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
            Max supply 1B tokens. Launch imminent! 🚀
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
            Saluki goes out scavenging for luxurious items to bring home to the community. Ultimate Aims are top tier brands such as Rolex, AP, Jacob&Co and even the ultra rare Louis Vuitton keep all light up bag!
          </p>
          <Button href="/presale" white>
            Participate Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PreSale;
