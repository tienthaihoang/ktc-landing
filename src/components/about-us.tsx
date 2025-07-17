import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";
import about from "/public/about.jpg";

const text = [
  {
    title: "K-Tech College 2025 là gì?",
    description: (
      <div>
        <p>
          <b>K-Tech College 2025</b> (KTC 2025) là chương trình kết nối nhân lực
          dành cho các bạn trẻ trong lĩnh vực công nghệ, do Chính phủ Hàn Quốc
          tài trợ 100% và điều hành bởi LIKELION tại Việt Nam.
        </p>
        <p>
          Thông qua quy trình tuyển chọn kỹ lưỡng, kết nối việc làm thực tế với
          các doanh nghiệp công nghệ hàng đầu Hàn Quốc và đào tạo kỹ năng mềm
          thực tiễn, chương trình giúp bạn không chỉ tìm được công việc phù hợp,
          mà còn sẵn sàng để phát triển trong môi trường làm việc quốc tế.
        </p>
        <p>
          KTC 2025 không chỉ là một cơ hội việc làm, mà là hành trình trưởng
          thành và vươn xa của những người trẻ làm công nghệ.
        </p>
      </div>
    ),
    img: about,
  },
];

export default function AboutUs() {
  return (
    <section id="gioi-thieu" className="bg-[#F2FAFF] py-[60px] md:py-[120px]">
      <div className="container">
        <div className="space-y-12">
          {text.map((item, idx) => (
            <AnimationLayout
              className="duration-1000 delay-300"
              isInviewState={{
                trueState: "opacity-1",
                falseState: "opacity-0 translate-y-12",
              }}
              key={idx}
            >
              <div
                className={cn(
                  "mx-auto text-gray-600 gap-x-12 items-start justify-between lg:flex",
                  idx % 2 != 1 && "lg:flex-row-reverse"
                )}
              >
                <div className="hidden lg:block lg:max-w-xl">
                  <Image
                    src={item.img}
                    className="rounded-lg"
                    alt={item.title}
                  />
                </div>

                <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
                  <div className="max-w-2xl">
                    <h3 className="text-gray-800 text-[20px] text-center md:text-left font-bold sm:text-5xl mb-4">
                      {item.title}
                    </h3>
                    <div className="[&_p]:mb-3">{item.description}</div>
                    <Button size="lg" className="w-full md:w-auto mt-4" asChild>
                      <Link href={site.registrationUrl} target="_blank">
                        Ứng tuyển ngay
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationLayout>
          ))}
        </div>
      </div>
    </section>
  );
}
