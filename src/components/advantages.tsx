import {
  BookOpenText,
  Building,
  Handshake,
  SquareUserRound,
} from "lucide-react";
import Image from "next/image";
import benefitSrc from "/public/benefits.jpg";
import AnimationLayout from "./shared/animation-layout";

export default function Advantages() {
  const features = [
    {
      icon: <Building className="size-6" strokeWidth={1.5} />,
      title: "Cơ sở vật chất đào tạo chất lượng",
      desc: "Cơ sở vật chất đào tạo được xây mới hoàn toàn, không gian chuyên nghiệp, máy lạnh công suất cao. Trang thiết bị đầy đủ phục vụ cho việc học tập hiệu quả",
    },
    {
      icon: <Handshake className="size-6" strokeWidth={1.5} />,
      title: "Đội ngũ tư vấn chuyên nghiệp và trợ giảng đồng hành xuyên suốt",
      desc: "Chúng tôi bố trí đội ngũ tư vấn chuyên nghiệp bao gồm quản lý khóa học gúp giải quyết các vấn đề phát sinh hoặc các trăn trở của học viên, giảng viên trợ giảng là lập trình viên chuyên nghiệp, đồng hành cùng học viên suốt thời gian học bên cạnh giảng viên chính.",
    },
    {
      icon: <BookOpenText className="size-6" strokeWidth={1.5} />,
      title: "Đăng ký 1 lộ trình, học được nhiều kiến thức",
      desc: "Ngoài việc đào tạo chuyên môn lập trình, để giúp ứng viên vượt qua vòng phỏng vấn xin việc và nhận được visa đi Hàn, chúng tôi còn bổ sung các buổi học kỹ năng cần thiết: tiếng Hàn giao tiếp cơ bản, kỹ năng tạo CV, kỹ năng phỏng vấn, kiến thức về doanh nghiệp và kinh doanh. ",
    },
    {
      icon: <SquareUserRound className="size-6" strokeWidth={1.5} />,
      title: "Nâng cấp profile",
      desc: "CV có kinh nghiệm làm việc ở nước ngoài là điểm thu hút với các Nhà tuyển dụng Việt Nam và Quốc tế",
    },
  ];

  return (
    <section className="pt-6 lg:pt-24 md:pb-20">
      <div className="container">
        <AnimationLayout
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0",
          }}
        >
          <div className=" text-gray-600 gap-8 grid md:grid-cols-[3fr_2fr] overflow-hidden">
            <div className="max-w-xl">
              <div className="max-w-xl space-y-3">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                  Chúng tôi có gì?
                </h2>
                <p>
                  Nhằm tạo cho học viên một môi trường học tập chuyên nghiệp,
                  một tinh thần thật tốt, chúng tôi mang đến một dự án với những
                  điểm mạnh như sau:
                </p>
              </div>
              <div className="mt-12 max-w-lg lg:max-w-none">
                <ul className="space-y-8">
                  {features.map((item, idx) => (
                    <li key={idx} className="flex gap-x-4">
                      <div className="flex-none w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg text-gray-800 font-semibold">
                          {item.title}
                        </h4>
                        <div className="mt-3">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="relative w-full h-full shadow-2xl">
                <Image
                  src={benefitSrc}
                  alt="Benefits"
                  className="object-cover rounded-lg"
                  fill
                />
              </div>
            </div>
          </div>
        </AnimationLayout>
      </div>
    </section>
  );
}
