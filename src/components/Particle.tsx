"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useState } from "react";
import { Engine } from "tsparticles-engine";

function Particle() {
  const particlesInit = async (main: Engine) => {
    await loadFull(main);
  };
  // const particlesLoaded = (container: any) => {
  //   console.log(container);
  // };
  const [isHovering, setIsHovering] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{
        position: "absolute",
        height: "1300px",
        width: "100%",
        //border: "3px solid green",
        display: "block",
      }}
    >
      {isHovering && (
        <Particles
          id="tsparticles"
          style={{
            //display: isHovering ? "block" : "none",
            width: 10,
            height: 15,
            zIndex: 1,
            display: "block",
            position: "absolute",

            backgroundColor: "transparent",

            // border: "5px solid red"
          }}
          init={particlesInit}
          // Loaded={particlesLoaded}
          options={{
            background: {
              color: "transparent",
            },
            fpsLimit: 93,
            interactivity: {
              detectOn: "canvas",
              events: {
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 250,
                  duration: 1,
                },
                repulse: {
                  distance: 90,
                  duration: 0.7,
                },
              },

              pauseOnBlur: true,
              retinaDetect: true,
            },
            particles: {
              polygon: {
                nb_sides: 10,
              },
              links: {
                color: "#FFFFFF",
                distance: 350,
                enable: true,
                opacity: 0.15,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 2000,
                },
                value: 20,
              },
              opacity: {
                value: 0,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 0.5, max: 0.8 },
              },
            },
            detectRetina: true,
            //pauseOnBlur: true
          }}
        />
      )}
    </div>
  );
}

export default Particle;
