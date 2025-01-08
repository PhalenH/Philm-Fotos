import { motion } from 'framer-motion';

const PhotoGallery = ({ photos }) => {
  return (
    <div className="gallery">
      {photos.map(photo => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={photo.url} alt={photo.title} />
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGallery;