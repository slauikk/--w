import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";
import { PageItem } from "../../components/page-item";
import { dataContent } from "./lib/dataContent";

interface IStudentLeisure {}

export const StudentLeisure: FC<IStudentLeisure> = () => {
  return (
    <PageLayout title="Студентське дозвілля">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  );
};
