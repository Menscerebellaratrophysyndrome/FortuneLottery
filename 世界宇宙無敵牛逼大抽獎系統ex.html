<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>運勢抽籤系統</title>
  <script src="https://cdn.jsdelivr.net/npm/lucide-icons@0.216.0/dist/lucide.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/tailwindcss@3.0.0/dist/tailwind.min.css"></script>
  <style>
    .bg-pattern {
      background: radial-gradient(ellipse at center, var(--tw-gradient-stops));
    }
  </style>
</head>
<body class="min-h-screen bg-gray-100 flex items-center justify-center p-4">

  <div id="app" class="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-6 w-full max-w-md">
    <div class="text-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 text-yellow-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 2l4 4 4-4m0 12l-4-4-4 4m8-7H7m9 4H8"></path>
        </svg> 
        運勢抽籤系統 
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 text-yellow-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 2l4 4 4-4m0 12l-4-4-4 4m8-7H7m9 4H8"></path>
        </svg>
      </h1>
    </div>

    <div id="category-buttons" class="flex justify-between space-x-2 mb-6">
      <button class="category-button w-full p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200" onclick="handleCategorySelect('love')">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 text-pink-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 21c4-4 8-6 8-10a8 8 0 0 0-8-8c-2.5 0-4 2-4 2s-1.5-2-4-2a8 8 0 0 0-8 8c0 4 4 6 8 10s8-6 8-10z"></path>
        </svg>
        愛情
      </button>

      <button class="category-button w-full p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200" onclick="handleCategorySelect('study')">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 text-blue-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 3H7c-1.1 0-1.99.9-1.99 2L5 17c0 1.1.9 2 1.99 2h14c1.1 0 1.99-.9 1.99-2V5c0-1.1-.9-2-1.99-2zM17 18H7v-2h10v2zm0-4H7v-2h10v2zm0-4H7V8h10v2z"></path>
        </svg>
        學業
      </button>

      <button class="category-button w-full p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200" onclick="handleCategorySelect('wealth')">
        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto mb-2 text-green-600" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2l4 4-4 4m0-8v12m0 0l4 4-4 4"></path>
        </svg>
        財運
      </button>
    </div>

    <button id="draw-fortune" class="w-full p-3 rounded-lg bg-gray-300 text-gray-500 cursor-not-allowed" onclick="drawFortune()" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" class="inline-block mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 2l4 4-4 4m0-8v12m0 0l4 4-4 4"></path>
      </svg>
      抽籤
    </button>

    <div id="fortune-message" class="mt-6 p-5 bg-white rounded-xl shadow-md text-center hidden">
      <p id="fortune-text" class="text-lg font-semibold text-gray-600"></p>
    </div>
  </div>

  <script>
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
        { text: "對於困難的課題，你今天會有意想不到的突破。", color: "text-indigo-500" },
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
        { text: "有機會獲得額外收入或獎勳。", color: "text-emerald-600" }
      ]
    };

    let selectedCategory = null;

    function handleCategorySelect(category) {
      selectedCategory = category;
      document.getElementById('fortune-message').classList.add('hidden');
      document.getElementById('draw-fortune').disabled = false;
      document.getElementById('app').className = `min-h-screen flex items-center justify-center p-4 bg-pattern ${category === 'love' ? 'from-pink-200 to-red-200' : category === 'study' ? 'from-blue-200 to-cyan-200' : 'from-green-200 to-lime-200'}`;
    }

    function drawFortune() {
      if (!selectedCategory) return;

      const messages = fortuneMessages[selectedCategory];
      const randomIndex = Math.floor(Math.random() * messages.length);
      const fortune = messages[randomIndex];
      
      const fortuneText = document.getElementById('fortune-text');
      fortuneText.textContent = fortune.text;
      fortuneText.className = `text-lg font-semibold ${fortune.color}`;

      document.getElementById('fortune-message').classList.remove('hidden');
    }
  </script>
</body>
</html>
