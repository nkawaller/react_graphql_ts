import { UsernamePasswordInput } from "./usernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
    if (!options.email.includes("@")) {
      return [
          {
            field: "email",
            message: "please enter a vaild email address",
          },
        ];
    }

    if (options.username.length <= 2) {
      return [
          {
            field: "username",
            message: "username is too short",
          },
        ]
    }

    if (options.username.includes('@')) {
      return [
          {
            field: "username",
            message: "username cannot contain an '@' symbol",
          },
        ]
    }

    if (options.password.length <= 2) {
      return [
          {
            field: "password",
            message: "password is too short",
          },
        ]
    }

    return null;
}