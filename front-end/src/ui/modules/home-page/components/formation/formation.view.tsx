import { useState } from "react";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiPlayCircleLine, RiCloseCircleLine } from "react-icons/ri"; // Importer une icône pour le bouton de fermeture

export const FormationView = () => {
  const [showVideo, setShowVideo] = useState(false); // État pour afficher ou non la vidéo

  // Fonction appelée pour fermer la vidéo et réafficher l'image
  const closeVideo = () => {
    setShowVideo(false);
  };

  // Fonction appelée à la fin de la vidéo pour la cacher automatiquement
  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div className="bg-gray-300">
      <Container className="py-24 text-center">
        <Typography variant="h2" component="h2" className="mb-2.5">
          Texte à remplacer par ce que tu veux
        </Typography>
        <Typography variant="lead" component="h3" className="mb-5">
          Texte à remplacer par ce que tu veux
        </Typography>
        <Typography variant="caption3" theme="gray" component="p" className="mb-16">
          Texte à remplacer par ce que tu veux !
        </Typography>

        {/* Remplace le lien par un div avec onClick pour déclencher l'affichage de la vidéo */}
        <div onClick={() => setShowVideo(true)} className="cursor-pointer">
          <div className="relative bg-gray-400 rounded h-[626px]">
            {/* Afficher soit l'image soit la vidéo */}
            {showVideo ? (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
                {/* Iframe de la vidéo */}
                <iframe
                  width="100%" // Remplit tout le cadre
                  height="100%" // Remplit tout le cadre
                  src="https://www.youtube.com/embed/YSiYewXvlzU?autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onEnded={handleVideoEnd} // Détection de la fin de la vidéo
                  className="rounded"
                ></iframe>

              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 relative z-10 h-full text-white rounded bg-gray opacity-0 hover:opacity-70 animate">
                <RiPlayCircleLine size={42} />
                <Typography variant="caption2" theme="white" className="uppercase" weight="medium">
                  Let&apos;s go to Login and run
                </Typography>
              </div>
            )}
            {/* Image affichée quand la vidéo n'est pas visible */}
            {!showVideo && (
              <Image
                fill
                src="/assets/images/formation.png"
                alt="fusion des sports"
                className="object-cover object-center rounded"
              />
            )}
          </div>
          <button
            onClick={closeVideo} // Appelle la fonction pour fermer la vidéo
            className="absolute top-4 right-4 z-30 text-gray bg-transparent border-none cursor-pointer"
          >
            <RiCloseCircleLine size={42} />
          </button>
        </div>
      </Container>
    </div>
  );
};
