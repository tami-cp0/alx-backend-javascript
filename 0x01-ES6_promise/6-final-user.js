import signUpUser from '4-user-promise.js';
import uploadPhoto from '5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((responses) => {
      return responses.map((response) => ({
        status: response.status,
        value: response.message,
      }));
    });
}