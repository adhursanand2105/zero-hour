import { StatusBar } from "@/components/status-bar";
import { ProgressBar } from "@/components/progress-bar";
import { StepCard } from "@/components/step-card";
import { useState } from "react";

export default function Home() {
  const [activeDigit, setActiveDigit] = useState(4); // 0-based index, 4 = 5th position (3)
  
  const codeDigits = ['1', '5', '9', '2', '3'];
  
  const handleConnect = () => {
    // Handle connection logic here
    console.log('Connecting to ascode_...');
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
            <span className="text-2xl mr-3">🇺🇸</span>
            <span className="text-telegram-blue font-medium">United States</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="bg-gray-800 rounded-lg px-3 py-4 text-white font-mono text-lg">
              +1
            </div>
            <input 
              type="tel" 
              className="phone-input flex-1" 
              value="123 456 7890" 
              readOnly
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
              <div
                key={index}
                className={`code-digit ${index === activeDigit ? 'active' : ''}`}
              >
                {digit}
              </div>
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
