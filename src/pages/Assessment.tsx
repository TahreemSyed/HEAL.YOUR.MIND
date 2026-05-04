import { useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Assessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 1,
      text: "Over the last 2 weeks, how often have you felt a structural lack of hope or energy?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 2,
      text: "How often have you experienced a disconnect from activities you typically find engaging?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 3,
      text: "How often do you feel an internal systemic tension or anxiety?",
      options: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      id: 4,
      text: "How would you assess the architecture of your recent sleep cycles?",
      options: ["Optimal", "Functional", "Fragmented", "Poor"]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    setAnswers({ ...answers, [currentStep]: optionIndex });
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsComplete(false);
  };

  return (
    <div className="py-20 md:py-32 bg-[#f9f8f4] min-h-[calc(100vh-96px)] flex items-center justify-center relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-10 left-10 text-[10vw] leading-none font-sans font-black text-stone-200/50 pointer-events-none select-none z-0">
        EVAL.
      </div>

      <div className="max-w-2xl w-full mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-stone-400 block mb-6">Phase 01</span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6 italic">Diagnostic Protocol</h1>
        </div>

        {!isComplete ? (
          <div className="bg-white border border-stone-200 p-12 shadow-2xl">
            <div className="mb-12">
              <div className="flex justify-between text-[9px] uppercase tracking-widest text-[#1a1a1a] mb-4">
                <span>Query {currentStep + 1} of {questions.length}</span>
                <span>{Math.round(((currentStep) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-stone-100 h-1">
                <div 
                  className="bg-[#1a1a1a] h-1 transition-all duration-500"
                  style={{ width: `${((currentStep) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-serif text-[#1a1a1a] mb-12 italic leading-snug">
              {questions[currentStep].text}
            </h2>

            <div className="space-y-4">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full text-left px-8 py-5 border border-stone-200 hover:border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#f9f8f4] transition-all duration-300 group text-stone-600 font-sans text-sm flex justify-between items-center"
                >
                  <span className="uppercase tracking-widest text-[10px]">{option}</span>
                  <span className="font-serif italic text-stone-300 group-hover:text-stone-500">0{index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white border border-[#1a1a1a] p-12 shadow-2xl text-center">
            <div className="font-sans text-[#1a1a1a] text-[10px] uppercase tracking-widest mb-8 border-b border-[#1a1a1a] inline-block pb-2">
              Diagnostic Complete
            </div>
            <h2 className="text-4xl font-serif text-[#1a1a1a] mb-6 italic">Analysis Logged</h2>
            <p className="text-stone-600 mb-12 max-w-md mx-auto text-sm font-sans leading-relaxed">
              Based on the parameters provided, an initial consultation to map your psychological architecture is structurally recommended.
            </p>
            <div className="flex flex-col gap-6">
              <Link
                to="/book"
                className="bg-[#1a1a1a] text-[#f9f8f4] border border-[#1a1a1a] px-8 py-5 font-sans text-[10px] uppercase tracking-widest hover:bg-transparent hover:text-[#1a1a1a] transition-colors duration-300"
              >
                Schedule Architecture Review
              </Link>
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center text-[#1a1a1a] hover:text-stone-500 font-sans text-[10px] uppercase tracking-widest transition-colors duration-300"
              >
                <RefreshCcw className="w-3 h-3 mr-3" /> Initiate Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
