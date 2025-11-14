'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [showHand, setShowHand] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHand(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+212600000000"; // رقم الواتساب - غيّر هنا
  const price = "49 DH"; // الثمن
  const whatsappMessage = encodeURIComponent("السلام عليكم، بغيت نطلب شلاظة نيسواز 🥗");

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-moroccan-green opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-moroccan-red opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl w-full">
        {/* Header Section */}
        <div className="text-center mb-8 animate-slide-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-moroccan-red rounded-full flex items-center justify-center text-2xl">
              🥗
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-shadow">
              شلاظة نيسواز مغربية
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-white/90 font-semibold">
            بغيت شي حاجة صحية؟ بنينة؟ وواجدة فثواني؟
          </p>
        </div>

        {/* Main Product Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden box-shadow-xl">
          {/* Product Image Section */}
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
            {/* Table surface effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white/80"></div>

            {/* Lighting effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-yellow-200/30 blur-3xl"></div>

            {/* Salad Bowl */}
            <div className="relative z-10 animate-float">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-white rounded-full shadow-2xl flex items-center justify-center border-8 border-gray-100 relative overflow-hidden">
                {/* Salad ingredients */}
                <div className="absolute inset-0 p-8 flex flex-col items-center justify-center">
                  <div className="text-9xl md:text-[12rem] filter drop-shadow-lg">
                    🥗
                  </div>
                  {/* Ingredient details */}
                  <div className="absolute top-12 left-12 text-4xl animate-pulse">🥚</div>
                  <div className="absolute top-16 right-16 text-3xl animate-pulse delay-100">🍅</div>
                  <div className="absolute bottom-20 left-16 text-3xl animate-pulse delay-200">🫒</div>
                  <div className="absolute bottom-16 right-20 text-4xl animate-pulse delay-300">🐟</div>
                </div>
              </div>
            </div>

            {/* Hand grabbing animation */}
            {showHand && (
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 animate-grab">
                <div className="text-6xl md:text-7xl filter drop-shadow-xl">
                  👋
                </div>
              </div>
            )}

            {/* Price Tag */}
            <div className="absolute top-8 right-8 bg-moroccan-red text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 animate-pulse">
              <p className="text-2xl md:text-3xl font-bold">{price}</p>
            </div>
          </div>

          {/* Info Section */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Feature 1 */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">💚</div>
                <h3 className="text-xl font-bold text-moroccan-green mb-2">صحية</h3>
                <p className="text-gray-600">مكونات طبيعية 100%</p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">😋</div>
                <h3 className="text-xl font-bold text-moroccan-red mb-2">بنينة</h3>
                <p className="text-gray-600">مذاق لا يُقاوم</p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-3">⚡</div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">واجدة</h3>
                <p className="text-gray-600">جاهزة فثواني</p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold text-gray-800 mb-4">
                جرّب شلاظة نيسواز و مغربي... وخلي صحتك هي الأولوية!
              </p>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full text-2xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <span className="text-3xl">📱</span>
                اطلب الآن عبر الواتساب
                <span className="text-3xl">💚</span>
              </a>

              {/* WhatsApp Number Display */}
              <div className="flex items-center justify-center gap-2 text-gray-600 text-lg mt-4">
                <span>📞</span>
                <span className="font-semibold">{whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Footer Logo/Brand Section */}
          <div className="bg-gradient-to-r from-moroccan-red via-moroccan-green to-moroccan-red p-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                🥗
              </div>
              <p className="text-white text-xl font-bold">شلاظة نيسواز المغربية الأصلية</p>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-xl">
                🇲🇦
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8 animate-pulse">
          <p className="text-white text-xl font-semibold drop-shadow-lg">
            ⬆️ اضغط فوق للطلب الآن ⬆️
          </p>
        </div>
      </div>
    </main>
  );
}
