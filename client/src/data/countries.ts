export interface Country {
  name: string;
  code: string;
  flag: string;
  dialCode: string;
  phoneLength: number; // Expected phone number length without country code
}

export const countries: Country[] = [
  { name: "United States", code: "US", flag: "🇺🇸", dialCode: "+1", phoneLength: 10 },
  { name: "Canada", code: "CA", flag: "🇨🇦", dialCode: "+1", phoneLength: 10 },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", dialCode: "+44", phoneLength: 10 },
  { name: "Germany", code: "DE", flag: "🇩🇪", dialCode: "+49", phoneLength: 11 },
  { name: "France", code: "FR", flag: "🇫🇷", dialCode: "+33", phoneLength: 9 },
  { name: "Italy", code: "IT", flag: "🇮🇹", dialCode: "+39", phoneLength: 10 },
  { name: "Spain", code: "ES", flag: "🇪🇸", dialCode: "+34", phoneLength: 9 },
  { name: "Netherlands", code: "NL", flag: "🇳🇱", dialCode: "+31", phoneLength: 9 },
  { name: "Belgium", code: "BE", flag: "🇧🇪", dialCode: "+32", phoneLength: 9 },
  { name: "Switzerland", code: "CH", flag: "🇨🇭", dialCode: "+41", phoneLength: 9 },
  { name: "Austria", code: "AT", flag: "🇦🇹", dialCode: "+43", phoneLength: 10 },
  { name: "Sweden", code: "SE", flag: "🇸🇪", dialCode: "+46", phoneLength: 9 },
  { name: "Norway", code: "NO", flag: "🇳🇴", dialCode: "+47", phoneLength: 8 },
  { name: "Denmark", code: "DK", flag: "🇩🇰", dialCode: "+45", phoneLength: 8 },
  { name: "Finland", code: "FI", flag: "🇫🇮", dialCode: "+358", phoneLength: 9 },
  { name: "Poland", code: "PL", flag: "🇵🇱", dialCode: "+48", phoneLength: 9 },
  { name: "Czech Republic", code: "CZ", flag: "🇨🇿", dialCode: "+420", phoneLength: 9 },
  { name: "Hungary", code: "HU", flag: "🇭🇺", dialCode: "+36", phoneLength: 9 },
  { name: "Portugal", code: "PT", flag: "🇵🇹", dialCode: "+351", phoneLength: 9 },
  { name: "Greece", code: "GR", flag: "🇬🇷", dialCode: "+30", phoneLength: 10 },
  { name: "Turkey", code: "TR", flag: "🇹🇷", dialCode: "+90", phoneLength: 10 },
  { name: "Russia", code: "RU", flag: "🇷🇺", dialCode: "+7", phoneLength: 10 },
  { name: "Ukraine", code: "UA", flag: "🇺🇦", dialCode: "+380", phoneLength: 9 },
  { name: "Japan", code: "JP", flag: "🇯🇵", dialCode: "+81", phoneLength: 10 },
  { name: "South Korea", code: "KR", flag: "🇰🇷", dialCode: "+82", phoneLength: 10 },
  { name: "China", code: "CN", flag: "🇨🇳", dialCode: "+86", phoneLength: 11 },
  { name: "India", code: "IN", flag: "🇮🇳", dialCode: "+91", phoneLength: 10 },
  { name: "Singapore", code: "SG", flag: "🇸🇬", dialCode: "+65", phoneLength: 8 },
  { name: "Hong Kong", code: "HK", flag: "🇭🇰", dialCode: "+852", phoneLength: 8 },
  { name: "Taiwan", code: "TW", flag: "🇹🇼", dialCode: "+886", phoneLength: 9 },
  { name: "Thailand", code: "TH", flag: "🇹🇭", dialCode: "+66", phoneLength: 9 },
  { name: "Malaysia", code: "MY", flag: "🇲🇾", dialCode: "+60", phoneLength: 9 },
  { name: "Indonesia", code: "ID", flag: "🇮🇩", dialCode: "+62", phoneLength: 10 },
  { name: "Philippines", code: "PH", flag: "🇵🇭", dialCode: "+63", phoneLength: 10 },
  { name: "Vietnam", code: "VN", flag: "🇻🇳", dialCode: "+84", phoneLength: 9 },
  { name: "Australia", code: "AU", flag: "🇦🇺", dialCode: "+61", phoneLength: 9 },
  { name: "New Zealand", code: "NZ", flag: "🇳🇿", dialCode: "+64", phoneLength: 9 },
  { name: "South Africa", code: "ZA", flag: "🇿🇦", dialCode: "+27", phoneLength: 9 },
  { name: "Egypt", code: "EG", flag: "🇪🇬", dialCode: "+20", phoneLength: 10 },
  { name: "Nigeria", code: "NG", flag: "🇳🇬", dialCode: "+234", phoneLength: 10 },
  { name: "Kenya", code: "KE", flag: "🇰🇪", dialCode: "+254", phoneLength: 9 },
  { name: "Ghana", code: "GH", flag: "🇬🇭", dialCode: "+233", phoneLength: 9 },
  { name: "Morocco", code: "MA", flag: "🇲🇦", dialCode: "+212", phoneLength: 9 },
  { name: "Brazil", code: "BR", flag: "🇧🇷", dialCode: "+55", phoneLength: 11 },
  { name: "Argentina", code: "AR", flag: "🇦🇷", dialCode: "+54", phoneLength: 10 },
  { name: "Chile", code: "CL", flag: "🇨🇱", dialCode: "+56", phoneLength: 9 },
  { name: "Colombia", code: "CO", flag: "🇨🇴", dialCode: "+57", phoneLength: 10 },
  { name: "Peru", code: "PE", flag: "🇵🇪", dialCode: "+51", phoneLength: 9 },
  { name: "Mexico", code: "MX", flag: "🇲🇽", dialCode: "+52", phoneLength: 10 },
  { name: "Venezuela", code: "VE", flag: "🇻🇪", dialCode: "+58", phoneLength: 10 },
  { name: "Uruguay", code: "UY", flag: "🇺🇾", dialCode: "+598", phoneLength: 8 },
  { name: "Paraguay", code: "PY", flag: "🇵🇾", dialCode: "+595", phoneLength: 9 },
  { name: "Bolivia", code: "BO", flag: "🇧🇴", dialCode: "+591", phoneLength: 8 },
  { name: "Ecuador", code: "EC", flag: "🇪🇨", dialCode: "+593", phoneLength: 9 },
  { name: "Israel", code: "IL", flag: "🇮🇱", dialCode: "+972", phoneLength: 9 },
  { name: "Saudi Arabia", code: "SA", flag: "🇸🇦", dialCode: "+966", phoneLength: 9 },
  { name: "UAE", code: "AE", flag: "🇦🇪", dialCode: "+971", phoneLength: 9 },
  { name: "Qatar", code: "QA", flag: "🇶🇦", dialCode: "+974", phoneLength: 8 },
  { name: "Kuwait", code: "KW", flag: "🇰🇼", dialCode: "+965", phoneLength: 8 },
  { name: "Bahrain", code: "BH", flag: "🇧🇭", dialCode: "+973", phoneLength: 8 },
  { name: "Oman", code: "OM", flag: "🇴🇲", dialCode: "+968", phoneLength: 8 },
  { name: "Jordan", code: "JO", flag: "🇯🇴", dialCode: "+962", phoneLength: 9 },
  { name: "Lebanon", code: "LB", flag: "🇱🇧", dialCode: "+961", phoneLength: 8 },
  { name: "Iran", code: "IR", flag: "🇮🇷", dialCode: "+98", phoneLength: 10 },
  { name: "Iraq", code: "IQ", flag: "🇮🇶", dialCode: "+964", phoneLength: 10 },
  { name: "Pakistan", code: "PK", flag: "🇵🇰", dialCode: "+92", phoneLength: 10 },
  { name: "Bangladesh", code: "BD", flag: "🇧🇩", dialCode: "+880", phoneLength: 10 },
  { name: "Sri Lanka", code: "LK", flag: "🇱🇰", dialCode: "+94", phoneLength: 9 },
  { name: "Myanmar", code: "MM", flag: "🇲🇲", dialCode: "+95", phoneLength: 9 },
  { name: "Cambodia", code: "KH", flag: "🇰🇭", dialCode: "+855", phoneLength: 9 },
  { name: "Laos", code: "LA", flag: "🇱🇦", dialCode: "+856", phoneLength: 9 },
  { name: "Nepal", code: "NP", flag: "🇳🇵", dialCode: "+977", phoneLength: 10 },
  { name: "Bhutan", code: "BT", flag: "🇧🇹", dialCode: "+975", phoneLength: 8 },
  { name: "Mongolia", code: "MN", flag: "🇲🇳", dialCode: "+976", phoneLength: 8 },
  { name: "North Korea", code: "KP", flag: "🇰🇵", dialCode: "+850", phoneLength: 8 },
  { name: "Kazakhstan", code: "KZ", flag: "🇰🇿", dialCode: "+7", phoneLength: 10 },
  { name: "Uzbekistan", code: "UZ", flag: "🇺🇿", dialCode: "+998", phoneLength: 9 },
  { name: "Kyrgyzstan", code: "KG", flag: "🇰🇬", dialCode: "+996", phoneLength: 9 },
  { name: "Tajikistan", code: "TJ", flag: "🇹🇯", dialCode: "+992", phoneLength: 9 },
  { name: "Turkmenistan", code: "TM", flag: "🇹🇲", dialCode: "+993", phoneLength: 8 },
  { name: "Afghanistan", code: "AF", flag: "🇦🇫", dialCode: "+93", phoneLength: 9 },
  { name: "Algeria", code: "DZ", flag: "🇩🇿", dialCode: "+213", phoneLength: 9 },
  { name: "Tunisia", code: "TN", flag: "🇹🇳", dialCode: "+216", phoneLength: 8 },
  { name: "Libya", code: "LY", flag: "🇱🇾", dialCode: "+218", phoneLength: 9 },
  { name: "Sudan", code: "SD", flag: "🇸🇩", dialCode: "+249", phoneLength: 9 },
  { name: "Ethiopia", code: "ET", flag: "🇪🇹", dialCode: "+251", phoneLength: 9 },
  { name: "Uganda", code: "UG", flag: "🇺🇬", dialCode: "+256", phoneLength: 9 },
  { name: "Tanzania", code: "TZ", flag: "🇹🇿", dialCode: "+255", phoneLength: 9 },
  { name: "Rwanda", code: "RW", flag: "🇷🇼", dialCode: "+250", phoneLength: 9 },
  { name: "Zambia", code: "ZM", flag: "🇿🇲", dialCode: "+260", phoneLength: 9 },
  { name: "Zimbabwe", code: "ZW", flag: "🇿🇼", dialCode: "+263", phoneLength: 9 },
  { name: "Botswana", code: "BW", flag: "🇧🇼", dialCode: "+267", phoneLength: 8 },
  { name: "Namibia", code: "NA", flag: "🇳🇦", dialCode: "+264", phoneLength: 8 },
  { name: "Madagascar", code: "MG", flag: "🇲🇬", dialCode: "+261", phoneLength: 9 },
  { name: "Mauritius", code: "MU", flag: "🇲🇺", dialCode: "+230", phoneLength: 8 },
  { name: "Seychelles", code: "SC", flag: "🇸🇨", dialCode: "+248", phoneLength: 7 },
  { name: "Maldives", code: "MV", flag: "🇲🇻", dialCode: "+960", phoneLength: 7 },
  { name: "Iceland", code: "IS", flag: "🇮🇸", dialCode: "+354", phoneLength: 7 },
  { name: "Ireland", code: "IE", flag: "🇮🇪", dialCode: "+353", phoneLength: 9 },
  { name: "Luxembourg", code: "LU", flag: "🇱🇺", dialCode: "+352", phoneLength: 9 },
  { name: "Monaco", code: "MC", flag: "🇲🇨", dialCode: "+377", phoneLength: 8 },
  { name: "Malta", code: "MT", flag: "🇲🇹", dialCode: "+356", phoneLength: 8 },
  { name: "Cyprus", code: "CY", flag: "🇨🇾", dialCode: "+357", phoneLength: 8 },
  { name: "Estonia", code: "EE", flag: "🇪🇪", dialCode: "+372", phoneLength: 8 },
  { name: "Latvia", code: "LV", flag: "🇱🇻", dialCode: "+371", phoneLength: 8 },
  { name: "Lithuania", code: "LT", flag: "🇱🇹", dialCode: "+370", phoneLength: 8 },
  { name: "Slovenia", code: "SI", flag: "🇸🇮", dialCode: "+386", phoneLength: 8 },
  { name: "Slovakia", code: "SK", flag: "🇸🇰", dialCode: "+421", phoneLength: 9 },
  { name: "Croatia", code: "HR", flag: "🇭🇷", dialCode: "+385", phoneLength: 8 },
  { name: "Bosnia and Herzegovina", code: "BA", flag: "🇧🇦", dialCode: "+387", phoneLength: 8 },
  { name: "Serbia", code: "RS", flag: "🇷🇸", dialCode: "+381", phoneLength: 8 },
  { name: "Montenegro", code: "ME", flag: "🇲🇪", dialCode: "+382", phoneLength: 8 },
  { name: "North Macedonia", code: "MK", flag: "🇲🇰", dialCode: "+389", phoneLength: 8 },
  { name: "Albania", code: "AL", flag: "🇦🇱", dialCode: "+355", phoneLength: 9 },
  { name: "Bulgaria", code: "BG", flag: "🇧🇬", dialCode: "+359", phoneLength: 9 },
  { name: "Romania", code: "RO", flag: "🇷🇴", dialCode: "+40", phoneLength: 9 },
  { name: "Moldova", code: "MD", flag: "🇲🇩", dialCode: "+373", phoneLength: 8 },
  { name: "Belarus", code: "BY", flag: "🇧🇾", dialCode: "+375", phoneLength: 9 },
  { name: "Georgia", code: "GE", flag: "🇬🇪", dialCode: "+995", phoneLength: 9 },
  { name: "Armenia", code: "AM", flag: "🇦🇲", dialCode: "+374", phoneLength: 8 },
  { name: "Azerbaijan", code: "AZ", flag: "🇦🇿", dialCode: "+994", phoneLength: 9 }
];

export const getCountryByDialCode = (dialCode: string): Country | undefined => {
  return countries.find(country => country.dialCode === dialCode);
};

export const getCountryByCode = (code: string): Country | undefined => {
  return countries.find(country => country.code === code);
};

export const getCountryByName = (name: string): Country | undefined => {
  return countries.find(country => country.name.toLowerCase().includes(name.toLowerCase()));
};