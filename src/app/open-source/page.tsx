import BackLink from "../back-link";

export default function OpenSource() {
  return (
    <>
      <BackLink />
      <div className="bg-[#061148]/80 grow-1 flex flex-col justify-between items-start">
        <div className="p-8 text-white text-right w-full mb-[-200px]">
          <span className="text-4xl">Cheers!</span>
          <p className="mt-2 mb-4 ml-12">
            jesuisplate.com est maintenant opensource!
          </p>
          <a
            href="https://github.com/sharkdarras/jesuisplate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-2  border-white inline-block"
          >
            Voir
          </a>
        </div>
        <img className="h-[450px]" src="/imgs/budlight.png" alt="Budlight" />
      </div>
    </>
  );
}
