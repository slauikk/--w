import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";
import { PageItem } from "../../components/page-item";
import { dataContent } from "./lib/dataContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



interface IMaterialBase {}

export const MaterialBase: FC<IMaterialBase> = () => {
  return (
    <PageLayout title="Матеріально-технічна база ЦК">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  );
};
