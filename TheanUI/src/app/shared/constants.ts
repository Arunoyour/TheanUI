export class Constants {
  // public static get baseURL(): string { return "../"; }
  public static get baseURL(): string { return "https://www.thean.in/"; }
  public static readonly TextOnly: string = "Specical characters not allowed.";
  public static readonly Required: string = "Mandatory field.";
  public static readonly DigitOnly: string = "Digit only";
  public static readonly Email: string = "Invalid email format";
  public static readonly Phone: string = "Invalid phone number";
  public static getMessage(val: string) {
    if (val == "required") {
      return this.Required;
    } else if (val == "digitOnly") {
      return this.DigitOnly;
    } else if (val == "textOnly") {
      return this.TextOnly;
    } else if (val == "email") {
      return this.Email;
    } else if (val == "phone") {
      return this.Phone;
    }
    else {
      return ""
    }
  }
}
