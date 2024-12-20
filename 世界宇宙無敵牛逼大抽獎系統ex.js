import React, { useState } from 'react';
import { HeartIcon, BookIcon, CreditCardIcon, StarIcon, SparklesIcon } from 'lucide-react';

const fortuneMessages = {
  love: [
    { text: "今天將遇到心儀的對象，保持開放和自信的心態。", color: "text-pink-600" },
    { text: "感情運勢大好，與伴侶之間的默契更加深厚。", color: "text-rose-500" },
    { text: "有機會修復曾經的情感裂痕，釋懷很重要。", color: "text-red-400" },
    { text: "愛情運勢穩定，相互理解和尊重是關鍵。", color: "text-pink-500" },
    { text: "可能會收到一份意外的浪漫驚喜。", color: "text-red-600" },
    { text: "感情上有新的突破，保持耐心和誠意。", color: "text-rose-700" },
    { text: "與另一半的感情將進入更親密的階段。", color: "text-pink-700" }
  ],
  study: [
    { text: "學習靈感源源不絕，今天是充滿效率的一天。", color: "text-blue-600" },
    { text: "對於困難的課題，你今天會有意想不到的breakthrough。", color: "text-indigo-500" },
    { text: "建議嘗試新的學習方法，效果可能會很驚人。", color: "text-cyan-600" },
    { text: "與同學或老師的交流將帶來豐富的收穫。", color: "text-blue-500" },
    { text: "集中精力，你的努力將很快看到成果。", color: "text-teal-600" },
    { text: "今天是吸收新知識的絕佳時機。", color: "text-sky-700" },
    { text: "學習的動力和專注力達到新高峰。", color: "text-blue-700" }
  ],
  wealth: [
    { text: "財運有所提升，但仍需審慎理財。", color: "text-green-600" },
    { text: "可能會有意外之財的機會，保持警覺。", color: "text-emerald-500" },
    { text: "投資方面宜保守，避免激進決策。", color: "text-lime-600" },
    { text: "今天適合與夥伴討論財務計劃。", color: "text-green-500" },
    { text: "小心理財，機會正在悄悄靠近。", color: "text-yellow-600" },
    { text: "財務狀況將逐漸改善，保持樂觀。", color: "text-green-700" },
    { text: "有機會獲得額外收入或獎勵。", color: "text-emerald-600" }
  ]
};

const categoryDetails = {
  love: { 
    gradient: "from-pink-200 to-red-200",
    icon: HeartIcon,
    bgPattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100 to-pink-200"
  },
  study: { 
    gradient: "from-blue-200 to-cyan-200",
    icon: BookIcon,
    bgPattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100 to-blue-200"
  },
  wealth: { 
    gradient: "from-green-200 to-lime-200",
    icon: CreditCardIcon,
    bgPattern: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-100 to-green-200"
  }
};

const FortuneDrawingApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [fortune, setFortune] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFortune(null);
  };

  const drawFortune = () => {
    if (selectedCategory) {
      const messages = fortuneMessages[selectedCategory];
      const randomIndex = Math.floor(Math.random() * messages.length);
      setFortune(messages[randomIndex]);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${selectedCategory ? categoryDetails[selectedCategory].bgPattern : 'bg-gray-100'} transition-all duration-500`}>
      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center justify-center">
            <SparklesIcon className="mr-2 text-yellow-500" /> 
            運勢抽籤系統 
            <SparklesIcon className="ml-2 text-yellow-500" />
          </h1>
        </div>

        <div className="flex justify-between space-x-2 mb-6">
          {Object.keys(fortuneMessages).map((category) => {
            const CategoryIcon = categoryDetails[category].icon;
            return (
              <button 
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`w-full p-3 rounded-lg transition-all duration-300 ${
                  selectedCategory === category 
                    ? `bg-gradient-to-r ${categoryDetails[category].gradient} text-white` 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <CategoryIcon className="mx-auto mb-2" />
                {category === 'love' ? '愛情' : category === 'study' ? '學業' : '財運'}
              </button>
            );
          })}
        </div>

        <button 
          onClick={drawFortune} 
          disabled={!selectedCategory} 
          className={`w-full p-3 rounded-lg transition-all duration-300 ${
            selectedCategory 
              ? 'bg-yellow-500 text-white hover:bg-yellow-600' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          <StarIcon className="inline-block mr-2" />
          抽籤
        </button>

        {fortune && (
          <div className="mt-6 p-5 bg-white rounded-xl shadow-md text-center">
            <p className={`text-lg font-semibold ${fortune.color}`}>
              {fortune.text}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FortuneDrawingApp;
