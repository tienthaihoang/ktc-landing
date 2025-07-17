"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";
import AnimationLayout from "./shared/animation-layout";

interface FaqsCardProps {
  faqsList: {
    q: string;
    a: ReactNode;
  };
  idx: number;
}

const FaqsCard = (props: FaqsCardProps) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    if (answerElRef.current) {
      const answerElH = (answerElRef.current.childNodes[0] as HTMLElement)
        .offsetHeight;
      setState(!state);
      setAnswerH(`${answerElH + 20}px`);
    }
  };

  return (
    <div
      className={cn(
        "space-y-3 mt-5 overflow-hidden rounded-lg",
        state ? "bg-[#DEF2FF]" : "bg-[#F2FAFF]"
      )}
      key={idx}
    >
      <h4
        className="cursor-pointer flex items-center justify-between text-base md:text-lg font-semibold px-6 pt-6 pb-2"
        onClick={handleOpenAnswer}
      >
        {faqsList.q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300 px-6"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div className="text-sm md:text-base">{faqsList.a}</div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const faqsList = [
    {
      q: "Chương trình có yêu cầu về độ tuổi và kinh nghiệm của ứng viên không?",
      a: (
        <>
          <p>
            Dự án tiếp nhận ứng viên dưới 35 tuổi, lý lịch rõ ràng, không có
            tiền án tiền sự.
          </p>
          <p>
            Quá trình xét tuyển bao gồm thẩm định hồ sơ, kiểm tra đầu vào và
            phỏng vấn chuyên sâu, không yêu cầu số năm kinh nghiệm cụ thể.
          </p>
        </>
      ),
    },
    {
      q: "Quy trình ứng tuyển diễn ra như thế nào?",
      a: (
        <>
          <p>Ứng tuyển K-Tech College 2025 gồm 4 vòng:</p>
          <p>1. CV screening (Điền form ứng tuyển)</p>
          <p>2. Test chuyên môn (Kiến thức lập trình)</p>
          <p>3. Phỏng vấn soft skill (Online)</p>
          <p>4. Matching & phỏng vấn với Doanh nghiệp Hàn Quốc (Online)</p>
          <p>
            <sup>*</sup>Chúng tôi sẽ tiến hành các vòng tiếp theo nếu bạn vượt
            qua vòng trước đó. Kết quả sẽ được thông báo qua email trong vòng 7
            ngày làm việc.
          </p>
        </>
      ),
    },
    {
      q: "Mất bao lâu để tham gia chương trình K-Tech College 2025?",
      a: (
        <>
          <p>Hoàn tất quy trình ứng tuyển: khoảng 2 tuần</p>
          <p>
            Tham gia kết nối và phỏng vấn với doanh nghiệp Hàn Quốc: khoảng 1
            tháng
          </p>
          <p>
            Tổng thời gian từ lúc ứng tuyển đến khi bắt đầu chương trình cùng
            doanh nghiệp là khoảng 1,5 tháng (có thể thay đổi tùy tiến độ từng
            vòng).
          </p>
        </>
      ),
    },
    {
      q: "Tôi sẽ kết nối với các doanh nghiệp như thế nào?",
      a: (
        <>
          <p>
            KTC 2025 có nền tảng tuyển dụng riêng biệt dành cho các ứng viên
            xuất sắc vượt qua vòng sơ tuyển.
          </p>
          <p>
            Tại đây, bạn sẽ được kết nối trực tiếp với doanh nghiệp Hàn Quốc
            thông qua hệ thống matching, phỏng vấn online và cơ hội nhận được
            offer ngay trên nền tảng.
          </p>
        </>
      ),
    },
    {
      q: "Cần chuẩn bị gì khi tham gia phỏng vấn với doanh nghiệp?",
      a: (
        <>
          <p>CV & Portfolio chỉn chu bằng Tiếng Anh </p>
          <p>Phỏng vấn 100% bằng Tiếng Anh</p>
          <p>Luyện tập kỹ năng trả lời phỏng vấn thường xuyên</p>
        </>
      ),
    },
    {
      q: "Ứng tuyển K-Tech College 2025 có mất phí không?",
      a: "Ứng viên ứng tuyển K-Tech College 2025 hoàn toàn miễn phí. Chương trình cam kết không phát sinh thêm bất cứ chi phí nào khác trong suốt quá trình ứng tuyển.",
    },
  ];

  return (
    <section className="leading-relaxed py-[40px] md:py-[80px]" id="faqs">
      <AnimationLayout
        className="duration-1000 delay-300"
        isInviewState={{
          trueState: "opacity-1",
          falseState: "opacity-0 translate-y-12",
        }}
      >
        <div className="container">
          <div className="space-y-3 text-center">
            <h2 className="text-xl md:text-5xl font-bold md:leading-[62px]">
              Các câu hỏi thường gặp <br />
              về dự án K-Tech College 2025
            </h2>
          </div>
          <div className="mt-8 md:mt-14 max-w-[740px] mx-auto">
            {faqsList.map((item, idx) => (
              <FaqsCard key={idx} idx={idx} faqsList={item} />
            ))}
          </div>
        </div>
      </AnimationLayout>
    </section>
  );
}
