export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">집바조</h3>
              <p className="text-gray-400">
                믿고 사는 아파트 인증 플랫폼
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">연락처</h4>
              <div className="space-y-2 text-gray-400">
                <p>광주광역시 서구 금화로 383번길 10, 진여성빌딩 204호</p>
                <p>이메일: ceo@l-league.co.kr</p>
                <p>전화: 010-5938-1101</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">SNS</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  인스타그램
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  페이스북
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  블로그
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 집바조. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }