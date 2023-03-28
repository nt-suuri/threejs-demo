import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
  PixelOptions,
} from "react-particle-image";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }: PixelOptions) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#F7F3A4",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }: any) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  },
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

export default function LogoParticles() {
  const { height, width } = useWindowDimensions();

  return (
    <ParticleImage
      src={"/logo.png"}
      width={Number(width)}
      height={Number(height)}
      scale={1}
      maxParticles={1200}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="transparent"
    />
  );
}
