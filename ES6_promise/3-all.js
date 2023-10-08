import { uploadPhoto, createUser } from './utils.js';

async function handleProfileSignup() {
  const photo = await uploadPhoto();
  const user = await createUser();

  console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
}

export default handleProfileSignup;
