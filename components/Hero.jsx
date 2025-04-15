export default function Hero() {
    return (
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('/api/placeholder/1920/1080')",
            filter: "brightness(0.5)"
          }} 
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-blue-400">"집바조"</span> 진짜를 인증합니다!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10">
            믿고 사는 아파트 인증 플랫폼
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              서비스 알아보기
            </button>
            <button className="px-8 py-4 bg-white text-blue-800 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              문의하기
            </button>
          </div>
        </div>
      </section>
    );
  }