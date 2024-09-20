import { SectionHeading, Tag, TestimonialCard } from "@/components";
import { testimonials } from "@/data";

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container">
        <div className="sec-heading">
          <div className="flex justify-center items-center">
            <Tag text="Testimonials" />
          </div>
          <SectionHeading
            sectionTitle="What our users say"
            sectionDesc="From intuitive design to powerful features, our app has become an essential tool for users around the world."
          />

          <div className="flex justify-center gap-6 ">
            <div className="flex flex-col gap-6 mt-10 maskImageToBottom">
              {firstCol.map((t, i) => {
                return <TestimonialCard key={i} {...t} />;
              })}
            </div>
            <div className="hidden md:flex flex-col gap-6 mt-10 maskImageToBottom">
              {secondCol.map((t, i) => {
                return <TestimonialCard key={i} {...t} />;
              })}
            </div>
            <div className="hidden lg:flex flex-col gap-6 mt-10 maskImageToBottom">
              {thirdCol.map((t, i) => {
                return <TestimonialCard key={i} {...t} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
