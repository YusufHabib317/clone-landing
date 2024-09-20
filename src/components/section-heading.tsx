type SectionHeadingProps = {
  sectionTitle: string;
  sectionDesc: string;
};
export function SectionHeading(props: SectionHeadingProps) {
  const { sectionTitle, sectionDesc } = props;
  return (
    <>
      <h2 className="text-center text-3xl md:text-[54px] leading-[64px] font-bold tracking-tighter sec-title-gradient mt-5">
        {sectionTitle}
      </h2>
      <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010d3e] mt-5">
        {sectionDesc}
      </p>
    </>
  );
}
