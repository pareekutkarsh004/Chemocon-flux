// registration-data.js
import qrCode from "@/assets/brochure/qrcode.png"; // Adjust path as needed based on file location

export const STORAGE_KEY = "chemconflux26-registration-form";
export const APPS_SCRIPT_UPLOAD_URL =
  "https://script.google.com/macros/s/AKfycbze6e3Pc4kZNHSZjWttkxcZJ2o96BcWo2renE6zT7Gzuatgdss1mQCMpG_puDOiWvY4/exec";
export const GOOGLE_FORM_RESPONSE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfOci0F3Qo8KBkE0sFcRyPMtZlCuG-TKBP1E-R42gNVG4jAfw/formResponse";

export const GOOGLE_FORM_ENTRIES = {
  NAME: "entry.2111203769",
  EMAIL: "entry.166206430",
  PHONE: "entry.1057242179",
  AFFILIATION: "entry.849349972",
  DESIGNATION: "entry.1938379852",
  ADDRESS: "entry.556004646",
  CATEGORY: "entry.1244283262",   
  PAPER_ID: "entry.1077930342",
  DATE: "entry.2011207996",
  PAYMENT_INFO: "entry.1529861587",
  ACCOMMODATION: "entry.1332109183",
  AMOUNT: "entry.159586696",
};

export const registrationFees = [
  { category: "Delegates from academics/Industries/Govt. org", earlyBird: "₹ 5900/-", standard: "₹ 7080/-" },
  { category: "PG Students/Research Scholars", earlyBird: "₹ 3540/-", standard: "₹ 4130/-" },
  { category: "UG students", earlyBird: "₹ 1770/-", standard: "₹ 2360/-" },
  { category: "Foreign Delegates/participants", earlyBird: "$ 295/-", standard: "$ 354/-" },
  { category: "Foreign accompanying person", earlyBird: "$ 118/-", standard: "$ 118/-" },
];

export const CATEGORY_OPTIONS = [
  { key: "delegates", label: "Delegates from academics/Industries/Govt. org", amount: "7080", amountDisplay: "₹ 7080/- (standard)", paymentType: "qr", qrSrc: qrCode },
  { key: "pg", label: "PG Students/Research Scholars", amount: "4130", amountDisplay: "₹ 4130/- (standard)", paymentType: "qr", qrSrc: qrCode },
  { key: "ug", label: "UG students", amount: "2360", amountDisplay: "₹ 2360/- (standard)", paymentType: "qr", qrSrc: qrCode },
  { key: "foreign", label: "Foreign Delegates/participants", amount: "354 USD", amountDisplay: "$ 354/- (standard)", paymentType: "bank" },
  { key: "accompanying", label: "Foreign accompanying person", amount: "118 USD", amountDisplay: "$ 118/-", paymentType: "bank" },
];

export const BANK_DETAILS = {
  accountName: "SNFCE MNNIT Allahabad",
  accountNumber: "10424975574",
  ifsc: "SBIN0002580",
  micr: "211002016",
  branch: "SBI, MNNIT Allahabad",
  swift: "SBININBB828",
};

export const importantDates = [
  { event: "Submission of Abstract", date: "August 15, 2026" },
  { event: "Intimation of Acceptance", date: "August 30, 2026" },
  { event: "Registration Deadline", date: "September 25, 2026" },
];