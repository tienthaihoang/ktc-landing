"use client";
import { site } from "@/config/site";
import Link from "next/link";
import AnimationLayout from "./shared/animation-layout";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="bg-[url('/illustration.png')] bg-cover bg-center py-14 md:py-28 md:h-[85dvh]">
        <AnimationLayout
          className="duration-1000 delay-300"
          isInviewState={{
            trueState: "opacity-1",
            falseState: "opacity-0",
          }}
        >
          <div className="max-w-6xl mx-auto space-y-5 text-center z-30">
            <h1 className="mx-auto text-5xl sm:text-4xl font-extrabold lg:text-5xl max-w-sm sm:max-w-md md:max-w-none uppercase">
              <span className="flex items-center justify-center gap-2 flex-wrap">
                <span className="w-full lg:w-auto">
                  Tuyển thực tập sinh làm việc cho
                </span>
              </span>
              <span className="flex items-center gap-2 justify-center flex-wrap bg-clip-text mt-5">
                <span className="w-full lg:w-auto">
                  doanh nghiệp tại Hàn Quốc
                </span>
              </span>
            </h1>
            <p className="max-w-2xl mx-auto md:text-balance lg:text-lg">
              Tuyển dụng và đào tạo những tài năng CNTT chất lượng cao của Việt
              Nam, đến làm việc tại các công ty công nghệ tại Hàn Quốc
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center text-sm font-medium gap-x-3 gap-y-4 !mt-12">
              <Button size="lg" className="w-full md:w-auto" asChild>
                <Link href={site.registrationUrl} target="_blank">
                  Ứng tuyển ngay
                </Link>
              </Button>
            </div>
            <div className="text-sx font-bold bg-gradient-to-b from-[#ED174C] to-[#006DB8] bg-clip-text text-transparent">
              <p>MIỄN PHÍ THAM GIA</p>
              Hạn cuối ứng tuyển 01/08/2025
            </div>
          </div>
        </AnimationLayout>
      </div>
    </section>
  );
}
