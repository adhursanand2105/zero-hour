import { StatusBar } from "@/components/status-bar";
import { ProgressBar } from "@/components/progress-bar";
import { StepCard } from "@/components/step-card";
import { useState } from "react";

export default function Home() {
  const [activeDigit, setActiveDigit] = useState(4); // 0-based index, 4 = 5th position (3)
  
  const codeDigits = ['1', '5', '9', '2', '3'];
  
  const handleConnect = () => {
    // Handle connection logic here
    console.log('Connecting to Telegram...');
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
            Final Step: Connect Your Telegram Account
          </h1>
          <p className="text-base text-text-secondary leading-relaxed mb-6">
            You're just one step away from unlocking all the features Nicegram has to offer!
          </p>
          <p className="text-lg font-semibold">
            <span className="text-white">Trusted by </span>
            <span className="text-social-proof">3,000,000+ happy users</span>
          </p>
        </div>
        
        {/* Step 1 Card */}
        <StepCard
          stepNumber={1}
          label="→ Log in with your phone number"
        >
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3">🇺🇸</span>
            <span className="text-white font-medium">United States</span>
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
          label={<>→ Receive login code in <span className="text-telegram-blue ml-1">📱 Telegram</span></>}
        >
          <div className="flex items-center mb-4">
            <div className="telegram-icon mr-3">
              <div className="verified-badge">✓</div>
            </div>
            <div>
              <div className="text-white font-medium">Telegram</div>
              <div className="text-sm text-text-secondary">
                Telegram login code: <span className="text-telegram-blue font-mono">15923</span>
              </div>
            </div>
          </div>
        </StepCard>
        
        {/* Step 3 Card */}
        <StepCard
          stepNumber={3}
          label={<>→ Enter the code in <span className="text-white ml-1">📱 Nicegram</span></>}
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
            Connect Telegram Account
          </button>
        </div>
      </div>
    </div>
  );
}
