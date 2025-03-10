import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center px-5 pt-32 md:pt-40 pb-0"
        >
            {/* Фоновые элементы */}
            <div className="absolute inset-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] mask-image-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)] backdrop-blur-[2px]">
            </div>

            {/* Контент */}
            <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground max-w-lg md:max-w-2xl mx-auto md:leading-tight">
                    {heroDetails.heading}
                </h1>
                <p className="mt-4 text-foreground max-w-lg mx-auto">
                    {heroDetails.subheading}
                </p>
                
                {/* Кнопки скачивания */}
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <AppStoreButton dark />
                    <PlayStoreButton dark />
                </div>

                {/* Изображение с анимацией радара */}
                <div className="relative mt-12 md:mt-16 mx-auto z-10 flex justify-center">
                    <div className="relative">
                        <Image
                            src="/images/new-hero.webp"
                            width={500}
                            height={450}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority
                            unoptimized
                            alt="App mockup"
                        />
                        <div className="absolute inset-0 flex items-center justify-center -translate-y-10">
                            <div className="w-96 h-96 rounded-full bg-blue-400 opacity-50 animate-ping"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
