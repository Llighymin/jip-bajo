export default function Team() {
    const team = [
      {
        name: "임지호",
        role: "CEO",
        description: [
          "현) 멍이로움 대표",
          "현) 청년창업사관학교 15기 입교",
          "현) 주식회사 일등정보통신 점장",
          "전) 화순파티룸 옥탑방(공간대여 및 에어비엔비 운영)",
          "전) 주식회사 더에스 전직원 사내교육담당(통신판매, 부동산)",
          "부동산, 공사, 장례 등 현장 관련 경험 다수"
        ],
        image: "/api/placeholder/400/400"
      },
      {
        name: "최현민",
        role: "CTO",
        description: [
          "현) 주식회사 엘리그 대표",
          "현) 청년창업사관학교 15기 입교",
          "현) 예비창업패키지 우수기업 수료",
          "전) 광주정보문화산업ㅂ진흥원 AI 시제품 제작 멘토",
          "전) 오아시스 해커톤 멘토",
          "네이버, 카카오, 배달의민족 등 다양한 기업과 협업 경험"
        ],
        image: "/api/placeholder/400/400"
      }
    ];
  
    return (
      <section id="team" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">우리 팀 소개</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              부동산 거래의 투명성과 신뢰성을 높이기 위해 모였습니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-800 font-medium mb-4">{member.role}</p>
                  <ul className="space-y-2">
                  {member.description.map((item, i) => (
                    <li key={i} className="text-gray-700">• {item}</li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }