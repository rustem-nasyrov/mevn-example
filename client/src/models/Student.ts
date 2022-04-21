import { IStudent } from "@/types";

export default class {
  name = "";
  email = "";
  phone = "";

  constructor({ name = "", email = "", phone = "" }: IStudent = {}) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
