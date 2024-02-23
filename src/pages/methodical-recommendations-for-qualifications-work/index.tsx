import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";
import { PageItem } from "../../components/page-item";
import { dataContent } from "./lib/dataContent";

interface IMethodicalRecommendations {}

export const MethodicalRecommendations: FC<IMethodicalRecommendations> = () => {
  return (
    <PageLayout title="Методичні вказівки до виконання ДП">
      {dataContent.map((e, i) => (
        <PageItem {...e} key={i} />
      ))}
    </PageLayout>
  );
};
