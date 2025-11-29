import React, { useEffect, useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, ImageOff } from 'lucide-react';

interface GeneratedCataractImageProps {
  fallbackSrc: string;
  alt: string;
  className?: string;
}

const GeneratedCataractImage: React.FC<GeneratedCataractImageProps> = ({ fallbackSrc, alt, className }) => {
  const [src, setSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateImage = async () => {
      // Try to get cached image from local storage to save API calls/time
      try {
        const cached = localStorage.getItem('cataract_generated_img');
        if (cached) {
          setSrc(cached);
          setLoading(false);
          return;
        }
      } catch (e) {
        console.warn('Storage access failed', e);
      }

      if (!process.env.API_KEY) {
        console.warn('Missing API Key');
        setLoading(false);
        setError(true);
        return;
      }

      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [
              { text: 'A close-up, photorealistic medical image of a human eye affected by a cataract. The lens should appear cloudy, milky, and opaque, clearly contrasting with the iris. High resolution, professional medical photography style.' }
            ],
          },
        });

        let imageBase64 = null;
        if (response.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              imageBase64 = part.inlineData.data;
              break;
            }
          }
        }

        if (imageBase64) {
          const fullSrc = `data:image/png;base64,${imageBase64}`;
          setSrc(fullSrc);
          try {
            localStorage.setItem('cataract_generated_img', fullSrc);
          } catch (e) {
            // Ignore storage errors (quota exceeded etc)
          }
        } else {
          throw new Error("No image data received");
        }
      } catch (err) {
        console.error("Error generating image:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    generateImage();
  }, []);

  if (loading) {
    return (
      <div className={`${className} bg-slate-100 flex flex-col items-center justify-center text-slate-400 relative overflow-hidden`}>
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite] translate-x-[-100%]"></div>
         <Sparkles className="w-10 h-10 mb-3 text-brand-400 animate-pulse" />
         <span className="text-sm font-medium animate-pulse">Gerando imagem exclusiva com IA...</span>
         <style>{`
            @keyframes shimmer {
              100% { transform: translateX(100%); }
            }
         `}</style>
      </div>
    );
  }

  if (error || !src) {
    return <img src={fallbackSrc} alt={alt} className={className} />;
  }

  return <img src={src} alt={alt} className={className} />;
};

export default GeneratedCataractImage;