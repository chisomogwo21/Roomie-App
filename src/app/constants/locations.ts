export interface LocationOption {
  label: string;
  value: string;
  district?: string;
}

export const RWANDA_LOCATIONS: LocationOption[] = [
  // Gasabo District
  { label: "Gacuriro, Kigali", value: "Gacuriro, Kigali", district: "Gasabo" },
  { label: "Kacyiru, Kigali", value: "Kacyiru, Kigali", district: "Gasabo" },
  { label: "Kimihurura, Kigali", value: "Kimihurura, Kigali", district: "Gasabo" },
  { label: "Kimironko, Kigali", value: "Kimironko, Kigali", district: "Gasabo" },
  { label: "Nyarutarama, Kigali", value: "Nyarutarama, Kigali", district: "Gasabo" },
  { label: "Remera, Kigali", value: "Remera, Kigali", district: "Gasabo" },
  { label: "Kibagabaga, Kigali", value: "Kibagabaga, Kigali", district: "Gasabo" },

  // Kicukiro District
  { label: "Gikondo, Kigali", value: "Gikondo, Kigali", district: "Kicukiro" },
  { label: "Kagarama, Kigali", value: "Kagarama, Kigali", district: "Kicukiro" },
  { label: "Kanombe, Kigali", value: "Kanombe, Kigali", district: "Kicukiro" },
  { label: "Niboye, Kigali", value: "Niboye, Kigali", district: "Kicukiro" },
  { label: "Kicukiro, Kigali", value: "Kicukiro, Kigali", district: "Kicukiro" },

  // Nyarugenge District
  { label: "Kigali City Center", value: "Kigali City Center", district: "Nyarugenge" },
  { label: "Muhima, Kigali", value: "Muhima, Kigali", district: "Nyarugenge" },
  { label: "Nyamirambo, Kigali", value: "Nyamirambo, Kigali", district: "Nyarugenge" },

  // Other Cities/Regions
  { label: "Huye, Rwanda", value: "Huye, Rwanda" },
  { label: "Karongi, Rwanda", value: "Karongi, Rwanda" },
  { label: "Musanze, Rwanda", value: "Musanze, Rwanda" },
  { label: "Nyagatare, Rwanda", value: "Nyagatare, Rwanda" },
  { label: "Rubavu, Rwanda", value: "Rubavu, Rwanda" },
  { label: "Rusizi, Rwanda", value: "Rusizi, Rwanda" },
  { label: "Rwamagana, Rwanda", value: "Rwamagana, Rwanda" },
].sort((a, b) => a.label.localeCompare(b.label));

// Simple list of city names for the Create Listing city selector
export const RWANDA_CITIES = [
  "Kigali",
  "Huye",
  "Musanze",
  "Rubavu",
  "Gisenyi",
  "Butare",
  "Rwamagana",
  "Rusizi",
  "Nyagatare",
  "Karongi",
  "Kayonza",
  "Nyanza",
];
