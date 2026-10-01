import { useEffect, useRef, useState } from "react";

export type GalleryImage = {
  image: string;
  title: string;
  description: string;
};

function ImageGallery({
  images,
  heading = "Galería",
}: {
  images: GalleryImage[];
  heading?: string;
}) {
  const [expandedImage, setExpandedImage] = useState<GalleryImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (expandedImage && !dialog.open) {
      dialog.showModal();
    } else if (!expandedImage && dialog.open) {
      dialog.close();
    }
  }, [expandedImage]);

  return (
    <section className="mb-8">
      <h2 className="mb-5 text-2xl font-semibold text-white">{heading}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.title}
            className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            <button
              type="button"
              onClick={() => setExpandedImage(image)}
              aria-label={`Ampliar imagen: ${image.title}`}
              className="group block w-full cursor-zoom-in text-left focus-visible:outline-2 focus-visible:outline-white"
            >
              <div className="flex aspect-video items-center justify-center overflow-hidden bg-black/30 p-2">
                <img
                  src={image.image}
                  alt=""
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </button>
            <figcaption className="p-4">
              <h3 className="mb-2 text-base font-semibold text-white">
                {image.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {image.description}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={expandedImage?.title}
        onClose={() => setExpandedImage(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setExpandedImage(null);
          }
        }}
        className="fixed inset-0 m-auto max-h-[94dvh] max-w-[96vw] overflow-visible rounded-xl border border-white/15 bg-zinc-950 p-3 text-white shadow-2xl backdrop:bg-black/85 md:max-w-[90vw]"
      >
        {expandedImage && (
          <figure className="relative">
            <button
              type="button"
              onClick={() => setExpandedImage(null)}
              aria-label="Cerrar imagen ampliada"
              className="absolute right-2 top-2 z-10 rounded-md border border-white/20 bg-black/70 p-2 text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-white"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={expandedImage.image}
              alt={expandedImage.title}
              className="max-h-[80dvh] max-w-[90vw] object-contain"
            />
            <figcaption className="pt-3 text-sm text-zinc-300">
              {expandedImage.title}
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}

export default ImageGallery;
