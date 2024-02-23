import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";
import { PageItem } from "../../components/page-item";
import { dataContent } from "./lib/dataContent";

interface IEducationalPrograms {}

export const EducationalPrograms: FC<IEducationalPrograms> = () => {
  return (
    <PageLayout title="Освітньо-професійні програми">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  );
};
