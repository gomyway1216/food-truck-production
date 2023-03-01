import { useEffect, useState } from 'react';

const useLoadImage = (ref) => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const updateStatus = (images) => {
      const val = images.every((item) => {
        return item.complete === true;
      });
      setStatus(images.every((item) => item.complete === true));
    };

    if (!ref?.current) {
      return;
    }

    const loadedImages = Array.from(ref.current.querySelectorAll('img'));

    if (loadedImages.length === 0) {
      setStatus(true);
      return;
    }

    loadedImages.forEach((image) => {
      image.addEventListener('load', () => updateStatus(loadedImages), {
        once: true
      });

      image.addEventListener('error', () => updateStatus(loadedImages), {
        once: true
      });
    });

    return;
  }, [ref]);

  return status;
};

export default useLoadImage;