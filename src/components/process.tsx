import AnimationLayout from "./shared/animation-layout";

const applySteps = [
  {
    title: "Nộp đơn ứng tuyển",
    description:
      "Ứng viên điền đơn đăng ký và nộp hồ sơ trước hạn chót để được đưa vào danh sách xét tuyển.",
  },
  {
    title: "Kiểm tra chuyên môn",
    description:
      "Thực hiện bài đánh giá năng lực lập trình online. (Áp dụng cho các vị trí kỹ thuật)",
  },
  {
    title: "Phỏng vấn kỹ năng mềm",
    description:
      "Phỏng vấn online để đánh giá khả năng giao tiếp, làm việc nhóm và tư duy giải quyết vấn đề.",
  },
  {
    title: "Xét duyệt hồ sơ",
    description:
      "Được xét duyệt tham gia vào mạng lưới nhân sự tiềm năng của KTC.",
  },
];

const connectSteps = [
  {
    title: "Matching trực tiếp với doanh nghiệp Hàn Quốc",
    description:
      "Kết nối ứng viên với các công ty công nghệ phù hợp thông qua hệ thống tuyển dụng chuyên biệt của chương trình.",
  },
  {
    title: "Phỏng vấn và Nhận offer từ các công ty phù hợp",
    description:
      "Trực tiếp phỏng vấn cùng doanh nghiệp và tiến tới nhận offer chính thức.",
  },
  {
    title: "Tham gia lớp đào tạo kỹ năng mềm",
    description:
      "Ứng viên kết nối thành công sẽ được đào tạo về kỹ năng mềm – giúp dễ dàng thích nghi trong môi trường quốc tế.",
  },
  {
    title: "Onboarding",
    description:
      "Hoàn thành đạt yêu cầu lớp đào tạo, ứng viên sẽ chính thức onboarding.",
  },
];

export default function Process() {
  return (
    <AnimationLayout
      className="duration-1000 delay-300"
      isInviewState={{
        trueState: "opacity-1",
        falseState: "opacity-0",
      }}
    >
      <div className="container py-[40px] md:py-[120px]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold sm:text-5xl">Hành trình KTC</h2>
          <p className="mt-8 text-center text-base md:text-xl">
            K-Tech College 2025 sẽ diễn ra như thế nào?
          </p>
        </div>

        <div className="mt-8 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          {/* Cột applySteps */}
          <div className="grid grid-rows-[auto,1fr,1fr,1fr,1fr] gap-[30px]">
            <h3 className="text-lg md:text-2xl font-bold text-[#FF99AC] text-center md:text-left row-span-1">
              Ứng tuyển
            </h3>
            {applySteps.map((step, index) => (
              <div key={index} className="flex items-start gap-x-4 h-full">
                <div className="relative flex items-center justify-start min-w-[80px] h-[60px]">
                  <span className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0F1] to-[#E0F0FE] leading-none">
                    {`0${index + 1}`}
                  </span>
                  <span className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-[#F84C63]"></span>
                </div>
                <div className="text-left flex-1">
                  <p className="text-base md:text-xl font-bold">{step.title}</p>
                  <p className="text-sm mt-1 md:text-base text-[#7B7B8C]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cột connectSteps */}
          <div className="grid grid-rows-[auto,1fr,1fr,1fr,1fr] gap-[30px]">
            <h3 className="text-lg md:text-2xl font-bold text-[#FF99AC] text-center md:text-left row-span-1">
              Kết nối
            </h3>
            {connectSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-x-4 h-full">
                <div className="relative flex items-center justify-start min-w-[80px] h-[60px]">
                  <span className="text-[48px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0F1] to-[#E0F0FE] leading-none">
                    {`0${index + 1}`}
                  </span>
                  <span className="absolute bottom-1 right-2 w-2 h-2 rounded-full bg-[#F84C63]"></span>
                </div>
                <div className="text-left flex-1">
                  <p className="text-base md:text-xl font-bold">{step.title}</p>
                  <p className="text-sm mt-1 md:text-base text-[#7B7B8C]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimationLayout>
  );
}
