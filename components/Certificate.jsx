export default function Certificate() {
    return (
      <section id="certificate" className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">인증서 예시</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              집바조의 인증서는 부동산의 진정성과 품질을 보증합니다.
            </p>
          </div>
          
          <div className="bg-white text-gray-900 rounded-xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="p-8 border-b border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <div className="text-3xl font-bold text-blue-800">집바조 인증서</div>
                <div className="text-xl font-medium">No. 20250416-001</div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-sm text-gray-500 mb-1">부동산 정보</div>
                  <div className="font-medium">서울시 강남구 테헤란로 123</div>
                  <div>아파트 | 85m² | 2005년 준공</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">인증 등급</div>
                  <div className="text-2xl font-bold text-blue-800">A+</div>
                  <div>2025년 4월 16일 발급</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">구조 안전성</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">설비 상태</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">관리 상태</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-800 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <img 
                    src="/api/placeholder/200/80" 
                    alt="집바조 인증 로고" 
                    className="h-12 w-auto"
                  />
                </div>
                <div className="text-right">
                  <div className="font-medium">김대표</div>
                  <div className="text-sm text-gray-500">집바조 대표이사</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }