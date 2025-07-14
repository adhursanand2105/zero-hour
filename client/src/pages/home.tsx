import { ProgressBar } from "@/components/progress-bar";
import { StepCard } from "@/components/step-card";
import { useState, useRef, useEffect } from "react";
import { countries, getCountryByDialCode, Country } from "@/data/countries";
import logoImage from "@assets/logo.png";

export default function Home() {
  const [countryCode, setCountryCode] = useState('+1');
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]); // Default to US
  const [phoneNumber, setPhoneNumber] = useState('123 456 7890');
  const [codeDigits, setCodeDigits] = useState(['1', '5', '9', '2', '3']);
  const [activeDigit, setActiveDigit] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  const handleConnect = () => {
    console.log('Connecting to ascode_...');
    console.log('Phone:', countryCode + phoneNumber);
    console.log('Code:', codeDigits.join(''));
  };

  const handleCodeInput = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newDigits = [...codeDigits];
      newDigits[index] = value;
      setCodeDigits(newDigits);
      
      // Move to next input if value is entered
      if (value && index < 4) {
        inputRefs.current[index + 1]?.focus();
        setActiveDigit(index + 1);
      }
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !codeDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setActiveDigit(index - 1);
    }
  };

  const formatPhoneNumber = (value: string, maxLength: number) => {
    const cleaned = value.replace(/\D/g, '');
    if (maxLength === 10) {
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `${match[1]} ${match[2]} ${match[3]}`;
      }
    } else if (maxLength === 11) {
      const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
      if (match) {
        return `${match[1]} ${match[2]} ${match[3]}`;
      }
    } else if (maxLength === 9) {
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{3})$/);
      if (match) {
        return `${match[1]} ${match[2]} ${match[3]}`;
      }
    } else if (maxLength === 8) {
      const match = cleaned.match(/^(\d{4})(\d{4})$/);
      if (match) {
        return `${match[1]} ${match[2]}`;
      }
    }
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleaned = value.replace(/\D/g, '');
    const maxLength = selectedCountry.phoneLength;
    
    if (cleaned.length <= maxLength) {
      setPhoneNumber(formatPhoneNumber(cleaned, maxLength));
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCode = e.target.value;
    
    // Always ensure it starts with +
    if (!newCode.startsWith('+')) {
      newCode = '+' + newCode.replace(/[^0-9]/g, '');
    }
    
    // Extract only the numeric part after +
    const numericPart = newCode.slice(1).replace(/[^0-9]/g, '');
    
    // Limit to 3 digits
    if (numericPart.length <= 3) {
      newCode = '+' + numericPart;
      setCountryCode(newCode);
      
      // Find matching country
      const matchingCountry = getCountryByDialCode(newCode);
      if (matchingCountry) {
        setSelectedCountry(matchingCountry);
        // Reset phone number when country changes
        setPhoneNumber('');
      }
    }
  };

  const handleCountryCodeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent deletion of the + symbol
    if ((e.key === 'Backspace' || e.key === 'Delete') && countryCode === '+') {
      e.preventDefault();
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <ProgressBar />
      
      {/* Main Content */}
      <div className="px-4 pb-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-white mb-4 leading-tight">
            Final Step: Connect Your ascode_ Account
          </h1>
          <p className="text-base text-text-secondary leading-relaxed mb-6">
            You're just one step away from unlocking all the features ascode_ has to offer!
          </p>
          <p className="text-lg font-semibold">
            <span className="text-white">Trusted by </span>
            <span className="text-light-blue">3,000,000+ happy users</span>
          </p>
        </div>
        
        {/* Step 1 Card */}
        <StepCard
          stepNumber={1}
          label={<><span className="text-light-gray">→</span> Log in with your phone number</>}
        >
          <div className="phone-number-container">
            <div className="country-info">
              <span className="country-flag">{selectedCountry.flag}</span>
              <span className="country-name">{selectedCountry.name}</span>
            </div>
            
            <div className="phone-divider">
              <svg viewBox="0 0 300 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2 L20 2 L28 8 L36 2 L300 2" stroke="#444" strokeWidth="1" fill="none"/>
              </svg>
            </div>
            
            <div className="phone-input-row">
              <div className="country-code-section">
                <input 
                  type="text" 
                  inputMode="numeric"
                  pattern="[+0-9]*"
                  className="country-code-input"
                  value={countryCode}
                  onChange={handleCountryCodeChange}
                  onKeyDown={handleCountryCodeKeyDown}
                  placeholder="+1"
                  maxLength={4}
                />
              </div>
              
              <div className="phone-number-section">
                <input 
                  type="tel" 
                  inputMode="numeric"
                  pattern="[0-9 ]*"
                  className="phone-number-input" 
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  placeholder="123 456 7890"
                  maxLength={selectedCountry.phoneLength + Math.floor(selectedCountry.phoneLength / 3)}
                />
              </div>
            </div>
          </div>

        </StepCard>
        
        {/* Step 2 Card */}
        <StepCard
          stepNumber={2}
          label={<><span className="text-light-gray">→</span> Receive login code in <span className="text-telegram-blue ml-1"><img src={logoImage} alt="Nicegram" className="inline-block w-4 h-4 mr-1" />Nicegram</span></>}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3 relative overflow-hidden">
              <img 
                src={logoImage} 
                alt="Nicegram" 
                className="w-8 h-8 object-contain"
              />
              <div className="verified-badge">✓</div>
            </div>
            <div>
              <div className="text-white font-medium">Nicegram</div>
              <div className="text-sm text-text-secondary flex items-center">
                <span className="text-light-gray ios-font">Telegram login code:</span> 
                <span className="text-white font-mono ml-2">15923</span>
              </div>
            </div>
          </div>

        </StepCard>
        
        {/* Step 3 Card */}
        <StepCard
          stepNumber={3}
          label={<><span className="text-light-gray">→</span> Enter the code in <span className="text-white ml-1">🔷 ascode_</span></>}
          showConnector={false}
        >
          <div className="flex justify-center space-x-3 mt-6">
            {codeDigits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className={`code-digit ${index === activeDigit ? 'active' : ''} text-center outline-none cursor-pointer`}
                value={digit}
                onChange={(e) => handleCodeInput(index, e.target.value)}
                onKeyDown={(e) => handleCodeKeyDown(index, e)}
                onFocus={() => setActiveDigit(index)}
                placeholder=""
              />
            ))}
          </div>
        </StepCard>
        
        {/* Connect Button */}
        <div className="mt-8">
          <button className="connect-btn" onClick={handleConnect}>
            Connect ascode_ Account
          </button>
        </div>
      </div>
    </div>
  );
}
