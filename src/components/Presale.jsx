const PreSale = () => {
  return (
    <section id="Presale">
      <div className="relative bg-center bg-cover py-12 p-0.5 bg-no-repeat bg-[length:100%_100%] md:py-16 md:max-sm lg:max-2xl " >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-white mb-2">
              🔐 Pre-sale Wallet:
            </h2>
            <p className="text-lg md:text-sm lg:text-2xl text-white mb-6 border border-r-amber-500 ">
              3PdfqXDnBhTuo9ewYSkKQUwzXXksNZjjURWAbfqcrdUJ
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-3 border border-opacity-40 border-blue-800 ">
              Limits:
              <br />
              <div className="text-blue-400 ">Minimum</div> 0.1 SOL
              <br />
              <div className="text-red-700 ">Maximum</div> 10 SOL
            </p>
            <div className="border">
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 border">
                Make sure you send it from a NON-exchange wallet in order to not lose tokens.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-6">
                Max supply 1B tokens. Launch imminent! 🚀
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8">
                Saluki goes out scavenging for luxurious items to bring home to the community. Ultimate Aims are top tier brands such as Rolex, AP, Jacob&Co and even the ultra rare Louis Vuitton keep all light up bag!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PreSale;
