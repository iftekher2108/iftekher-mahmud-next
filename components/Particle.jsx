
'use client';

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback, useMemo, useState } from "react";

const particlesInit = async (engine) => {
    await loadSlim(engine);
};

export default function Particle() {

    const particlesLoaded = useCallback(async (container) => {
        console.log("Particles loaded", container);
    }, []);

    const options = useMemo(() => ({
        fullScreen: {
            enable: false,
        },
        fpsLimit: 60,

        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                },
            },

            color: {
                value: "#ffffff",
            },

            shape: {
                type: "circle",
            },

            opacity: {
                value: {
                    min: 0.15,
                    max: 0.45,
                },
                animation: {
                    enable: true,
                    speed: 0.5,
                    minimumValue: 0.1,
                    sync: false,
                },
            },

            size: {
                value: {
                    min: 1.5,
                    max: 3.5,
                },
            },

            links: {
                enable: true,
                color: "#ffffff",
                distance: 180,
                opacity: 0.16,
                width: 1,
            },

            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out",
                },
            },
        },

        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
            },
            modes: {
                grab: {
                    distance: 150,
                    links: {
                        opacity: 0.3,
                    },
                },
                push: {
                    quantity: 2,
                },
            },
        },

        detectRetina: true,
    }), []);


    return (
        <ParticlesProvider init={particlesInit}>
            <div className="absolute inset-0 z-0">

                <Particles
                    id="tsparticles"
                    particlesLoaded={particlesLoaded}
                    options={options}
                    className="absolute inset-0"
                />

            </div>
        </ParticlesProvider>
    );
}
