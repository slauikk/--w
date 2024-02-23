import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "@/layouts";
import { ContactsSection } from "@/components/contacts";
import { dataContacts } from "./lib/dataContacts";

interface IContacts {}

export const Contacts: FC<IContacts> = () => {
  return (
    <PageLayout title="Контакти">
      <ContactsSection data={dataContacts} />
    </PageLayout>
  );
};
