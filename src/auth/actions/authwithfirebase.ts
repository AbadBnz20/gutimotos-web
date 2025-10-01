import { signInWithPopup } from "firebase/auth";
import { FirebaseAuth, googleProvider } from "../config/configFirebase";
import type { AuthFirebaseInterface } from "../interfaces/authfirebase.interfaces";

export const authWithFirebase = async (): Promise<AuthFirebaseInterface> => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const { displayName, email, photoURL } = result.user;
    const token = await result.user.getIdToken();
    return {
      status: true,
      token,
      user: {
        fullName: displayName ?? "",
        email: email ?? "",
        photoURL: photoURL ?? "",
      },
    };
  } catch (error) {
    throw error;
  }
};
