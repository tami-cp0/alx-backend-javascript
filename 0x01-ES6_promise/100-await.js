import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let user;
  let photo;

  try {
    photo = await uploadPhoto();
  } catch (error) {
    photo = null;
  }

  try {
    user = await createUser();
  } catch (error) {
    user = null;
  }

  return { photo, user };
}
