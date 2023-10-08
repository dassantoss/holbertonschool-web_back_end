import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = {
    status: 'pending',
  };
  const photoPromise = {
    status: 'pending',
  };
  try {
    const userResult = await signUpUser(firstName, lastName);
    userPromise.status = 'fulfilled';
    userPromise.value = userResult;
  } catch (error) {
    userPromise.status = 'rejected';
    userPromise.value = error.toString();
  }
  try {
    const photoResult = await uploadPhoto(fileName);
    photoPromise.status = 'fulfilled';
    photoPromise.value = photoResult;
  } catch (error) {
    photoPromise.status = 'rejected';
    photoPromise.value = error.toString();
  }
  return [userPromise, photoPromise];
}
