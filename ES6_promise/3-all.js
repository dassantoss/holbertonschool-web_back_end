import { uploadPhoto, createUser } from './utils';

async function handleProfileSignup() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;
