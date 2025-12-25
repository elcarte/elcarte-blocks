import React from 'react';

export interface HeroProps {
    title: string;
    imageUrl?: string;
    subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({ title, imageUrl, subtitle }) => {
    return (
        <div className="relative bg-gray-900 text-white overflow-hidden rounded-lg min-h-[400px] flex items-center justify-center">
            {imageUrl && (
                <div className="absolute inset-0">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover opacity-50 block"
                    />
                </div>
            )}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-xl md:text-2xl text-gray-200">{subtitle}</p>}
            </div>
        </div>
    );
};
