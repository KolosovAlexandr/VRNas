import style from "./sectionImage.module.scss";

type ISectionImage = {
  img: string;
  className?: string;
};

export const SectionImage = ({ img, className }: ISectionImage) => {
  return (
    <div className={`${className} ${style.container}`}>
      <img src={img} alt="" />
    </div>
  );
};
