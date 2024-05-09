import { Whatsapp } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import logoGiolaser from "/public/images/giolaser.png";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-full items-center justify-center">
      <Image
        src={logoGiolaser}
        alt="Logo Giolaser"
        width={500}
        height={500}
        className="flex p-6 pb-24"
      />
      <div className="flex flex-col h-full w-full items-center justify-center gap-4">
        <Link
          href="https://wa.me//5551999402802"
          className="flex h-14 w-72 rounded-full bg-[#EE82EE] hover:bg-[#BA55D3] hover:transition items-center"
        >
          <Whatsapp
            size="28"
            color="#FFFFFF"
            variant="Outline"
            className="ml-[20px]"
          />
          <p className="ml-16 text-white">Recepção</p>
        </Link>
        <Link
          href="https://wa.me//5551989104446"
          className="flex h-14 w-72 rounded-full bg-[#EE82EE] hover:bg-[#BA55D3] hover:transition items-center justify-start"
        >
          <Whatsapp
            size="28"
            color="#FFFFFF"
            variant="Outline"
            className="ml-5"
          />
          <p className="ml-[53px] text-white">Área técnica</p>
        </Link>
        <Link
          href="https://wa.me//5551998822716"
          className="flex h-14 w-72 rounded-full bg-[#EE82EE] hover:bg-[#BA55D3] hover:transition items-center justify-start"
        >
          <Whatsapp
            size="28"
            color="#FFFFFF"
            variant="Outline"
            className="ml-5"
          />
          <p className="ml-[25px] text-white">Consultoria de Vendas</p>
        </Link>
      </div>
    </main>
  );
}
