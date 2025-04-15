export default function Benefits() {
    const benefit_list = [
      {
        title: "거래 안전성 향상",
        description: "검증된 부동산 정보로 사기 위험 감소",
        icon: "🔒"
      },
      {
        title: "가치 상승",
        description: "인증된 부동산의 시장 가치 향상",
        icon: "📈"
      },
      {
        title: "빠른 거래 진행",
        description: "신뢰 기반의 거래로 절차 간소화",
        icon: "⚡"
      },
      {
        title: "투명한 정보 제공",
        description: "부동산의 실제 상태에 대한 객관적 정보",
        icon: "📊"
      }
    ];
  
    return (
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">집바조 인증의 기대효과</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              인증 서비스 도입을 통해 얻을 수 있는 다양한 혜택들을 확인하세요.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefit_list.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:transform hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-8">
              지금 집바조와 함께 안전하고 투명한 부동산 거래를 시작하세요.
            </p>
            <button className="px-8 py-4 bg-blue-800 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
              서비스 문의하기
            </button>
          </div>
        </div>
      </section>
    );
  }