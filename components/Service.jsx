export default function Service() {
    const steps = [
      {
        title: "부동산 등록",
        description: "등록된 부동산의 정보를 수집하고 검증합니다.",
        icon: "📋"
      },
      {
        title: "전문가 실사",
        description: "전문가가 직접 방문하여 부동산 상태를 확인합니다.",
        icon: "🔍"
      },
      {
        title: "데이터 분석",
        description: "수집된 정보를 분석하여 정확한 평가를 진행합니다.",
        icon: "📊"
      },
      {
        title: "인증서 발급",
        description: "검증된 부동산에 대한 공식 인증서를 발급합니다.",
        icon: "🏆"
      }
    ];
  
    return (
      <section id="service" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">인증서비스 도입을 통한 부동산 거래</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              집바조의 인증 시스템을 통해 투명하고 신뢰할 수 있는 부동산 거래를 경험하세요.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-blue-200 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center justify-center">
                {/* 왼쪽 영역 */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'block' : 'invisible'} md:text-right`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
                
                {/* 아이콘 */}
                <div className="my-4 md:mx-8 z-10 bg-blue-800 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {step.icon}
                </div>
                
                {/* 오른쪽 영역 */}
                <div className={`w-full md:w-5/12 ${index % 2 === 1 ? 'block' : 'invisible'}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }