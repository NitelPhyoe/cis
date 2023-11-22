import { BLOODTYPE, GENDER } from "@prisma/client";
import { customAlphabet } from "nanoid";

export const nanoid = customAlphabet("1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

export const bloodToTxt = (type: BLOODTYPE) => {
  const txt = {
    A_positive: "A+",
    A_negative: "A-",
    B_positive: "B+",
    B_negative: "B-",
    AB_positive: "AB+",
    AB_negative: "AB-",
    O_positive: "O+",
    O_negative: "O-",
  };

  return txt[type];
};

export const sexToTxt = (type: GENDER) => {
  const txt = {
    MALE: "M",
    FEMALE: "F",
  };

  return txt[type];
};
