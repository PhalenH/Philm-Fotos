import Photo, { find } from '../models/Photo';

const uploadPhoto = async (req, res) => {
  const { title, description, url } = req.body;
  try {
    const photo = new Photo({ title, description, url, user: req.user.id });
    await photo.save();
    res.status(201).json(photo);
  } catch (error) {
    res.status(500).json({ error: 'Error uploading photo' });
  }
};

const getPhotos = async (req, res) => {
  try {
    const photos = await find({ user: req.user.id });
    res.status(200).json(photos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching photos' });
  }
};

export default { uploadPhoto, getPhotos };