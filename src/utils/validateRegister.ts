import { UsernamePasswordInput } from "./usernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
    if (!options.email.includes("@")) {
      return {
        errors: [
          {
            field: "email",
            message: "please enter a vaild email address",
          },
        ],
      };
    }

    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "username is too short",
          },
        ],
      };
    }

    if (options.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "password is too short",
          },
        ],
      };
    }

    return null;
}