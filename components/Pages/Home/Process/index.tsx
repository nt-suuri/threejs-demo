import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import LogoParticles from "./LogoParticles";

const SparkScene = dynamic(
  () => import("../../../../utils/SparkScene/SparkScene"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const Process = () => {
  const [isSSR, setIsSSR] = useState<boolean>(false);

  useEffect(() => {
    setIsSSR(true);
    setInterval(() => setIsSSR(false), 2000);
  }, []);

  return (
    <div className="w-full h-screen m-auto grid grid-cols-1 md:grid-cols-2">
      <div>
        {isSSR ? (
          <SparkScene />
        ) : (
          <div className="h-full flex items-center justify-center">
            {/* TODO: make exact colors like current NT site particles */}
            <LogoParticles />
            {/* <Image src="/logo.png" alt="logo" width={600} height={300} /> */}
          </div>
        )}
      </div>
      <div className="h-full flex justify-center items-center">
        <article className="">
          <h2
            className="md:text-4xl font-semibold leading-none mb-5"
            style={{ fontFamily: "Venera" }}
          >
            Nasha Tech LLC
          </h2>
          <p className="w-96 text-justify tracking-tight">
            By taking advantage of the flexibility, and fast adaptability of
            nomads we can master advanced technology first to aid our business
            while maintaining close contact with our customers.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Process;
