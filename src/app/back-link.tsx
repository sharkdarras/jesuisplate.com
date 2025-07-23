import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function BackLink() {
  return (
    <Link
      href="/"
      className="flex justify-center items-center bg-white/75 gap-4 p-2 text-black uppercase text-sm font-semibold flex items-center"
    >
      <FaLongArrowAltLeft className="mr-2" />
      Retour à l&apos;accueil
    </Link>
  );
}
