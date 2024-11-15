import { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";
import { PageItem } from "../../components/page-item";
import { dataContent } from "./lib/dataContent";
import { Loading } from "@/components/loading";

interface ISyllabuses {}

export const Syllabuses: FC<ISyllabuses> = () => {
  const [isLoading, setLoading] = useState<boolean>(false); // Використовуємо статичні дані, тому завантаження встановлюємо на false

  return (
      <PageLayout title="Дисципліни (силабуси)">
        {isLoading && <PageItem content={<Loading />} />}
        {!isLoading &&
            dataContent.map((item, i) => (
                <PageItem key={i} content={item.content} />
            ))}
      </PageLayout>
  );
};
