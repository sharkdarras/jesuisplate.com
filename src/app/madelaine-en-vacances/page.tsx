import BackLink from "../back-link";

export default function MadelaineEnVacances() {
  return (
    <>
      <BackLink />
      <div className="bg-pink-100 text-center">
        <img
          src="/imgs/madelaine-en-vacances.png"
          alt="Madelaine en vacances"
          className="w-52 inline-block"
        />

        <div className="flex flex-col items-center gap-12 pb-12">
          <div className="bg-white p-4 w-80 rotate-[4deg]">
            <img src="/imgs/cheers-bitches.jpeg" />
            <p className="mt-4">#CheersBitches</p>
          </div>

          <div className="bg-white p-4 w-80 rotate-[-4deg]">
            <img src="/imgs/lele-ours.jpeg" />
            <p className="mt-4">#TrouverLAmourAGatlinburg</p>
          </div>

          <div className="bg-white p-4 w-80 rotate-[4deg]">
            <img src="/imgs/quete-de-sens.jpeg" />
            <p className="mt-4">#QueteDeSens</p>
          </div>

          <div className="bg-white p-4 w-80 rotate-[-4deg]">
            <img src="/imgs/staying-active.gif" />
            <p className="mt-4">#StayingActive</p>
          </div>

          <div className="bg-white p-4 w-80 rotate-[4deg]">
            <img src="/imgs/depression.png" />
            <p className="mt-4">#RetourDifficile</p>
          </div>
        </div>
      </div>
    </>
  );
}
