import { Canvas } from "@react-three/fiber";
import { PlayIcon, ForwardIcon, PauseIcon, NextIcon } from "../../../../assets/svg";
import Box from "../../../3d/Models/Box";
import { DivInview } from "../../../Animations/DivInView";
import Particle from "../Particle";

const Intro = () => {
  return (
    <div className="h-screen w-screen bg-zinc-600 dark:bg-black p-5">
      <DivInview>
        {/* todo: spark storm animation (infinite). see more: https://varun.ca/three-js-particles/ */}
        <div className="w-full flex items-center justify-center">
          <div className="mt-5">
            <Particle />
          </div>
        </div>
        {/* todo: fix font family, improve readability if possible */}
        <div className="w-full text-center uppercase content">
          <div className="relative">
            <div>
              <h1
                className="text-5xl md:text-7xl font-medium "
                style={{ fontFamily: "Venera" }}
              >
                Nasha Tech
              </h1>
              <div className="h-5 overflow-hidden">
                <h1
                  className="-translate-y-8 md:-translate-y-10 text-5xl md:text-7xl font-medium "
                  style={{ fontFamily: "Venera" }}
                >
                  Nasha Tech
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="mx-5">
              <dl className="md:w-full text-xs mt-5">
                <dt>
                  To make technology as accessible as possible for every people
                </dt>
              </dl>
              <div className="border-b border-white mt-5"></div>
              <div className="w-full flex justify-between mt-3">
                <div className="flex text-white">
                  <NextIcon className="w-5 h-5 rotate-180" />
                  <ForwardIcon className="w-5 h-5 rotate-180" />
                  <PlayIcon className="w-5 h-5 scale-75 rotate-180" />
                  <PauseIcon className="w-5 h-5 " />
                  <PlayIcon className="w-5 h-5 scale-75" />
                  <ForwardIcon className="w-5 h-5" />
                  <NextIcon className="w-5 h-5" />
                </div>
                <div className="text-white uppercase">Since 2018</div>
                {/* generate barcode? or some cool stuffs here */}
                <div className="flex">...</div>
              </div>
            </div>
          </div>
        </div>
      </DivInview>
    </div>
  );
};

export default Intro;
