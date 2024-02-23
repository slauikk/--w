import { FC } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";
import { PageLayout } from "../../layouts";

interface IHome {}

export const Home: FC<IHome> = () => {
  return (
    <PageLayout>
      <div id="home" className={clsx(styles.page)}>
        <div className={clsx(styles.page_content)}>
          <div className={clsx(styles.page_content_inner)}>
            <div className={clsx(styles.home_hero)}>
              <div className={clsx(styles.home_hero_info)}>
                <div className={clsx(styles.home_hero_info_title)}>
                  Циклова комісія зварювальних технологій
                </div>
                <div className={clsx(styles.home_hero_info_des)}>
                  <p>
                    Спеціальність 122 "Комп'ютерні науки та інформаційні
                    технології" надає знання, навички та компетентності в галузі
                    комп'ютерних наук та інформаційних технологій. Випускники
                    можуть займатися розробкою програмного забезпечення,
                    аналізом даних, веб-розробкою, мережевими технологіями та
                    безпекою інформації. Спеціальність поєднує аспекти
                    комп'ютерних наук, програмування, інформаційних систем та
                    штучного інтелекту. Випускники отримують практичні навички
                    та готові до розвитку кар'єри у сучасній галузі комп'ютерних
                    наук.
                  </p>
                </div>
              </div>
              <img
                className={clsx(styles.home_hero_img)}
                src="./assets/img/materialBase/310/12.png"
                alt=""
              />
            </div>
            <div className={clsx(styles.home_section)}>
              <div className={clsx(styles.home_section_title)}>
                <div className={clsx(styles.home_section_title_inner)}>
                  Чим перспективне навчання у нашому коледжі за спеціальністю
                  <br />
                  122 Комп’ютерні науки та інформаційні технології
                </div>
              </div>
              <div className={clsx(styles.home_prospects)}>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Кар'єрні можливості:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Розробник програмного забезпечення: Ви можете працювати на
                      різних етапах розробки програмного забезпечення, включаючи
                      аналіз, проектування, реалізацію та тестування програмних
                      рішень.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Дослідник штучного інтелекту: Зацікавленість у глибинному
                      машинному навчанні, нейромережах та розумних системах може
                      відкрити двері до кар'єри в дослідженнях штучного
                      інтелекту.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Консультант з безпеки комп'ютерних систем: З ростом
                      кіберзлочинності з'являється попит на фахівців, які
                      забезпечують безпеку комп'ютерних систем та захищають їх
                      від потенційних загроз.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Аналітик даних: Здатність аналізувати великі обсяги даних
                      та виділяти корисну інформацію стає все важливішою в
                      різних галузях, і комп'ютерні науки можуть відкрити двері
                      до кар'єри аналітика даних.
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Переваги індустрії комп'ютерних наук:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Постійний ріст: Галузь комп'ютерних наук швидко
                      розвивається, що створює безліч нових можливостей та
                      проблем, які потребують розуміння технологій.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Гнучкість кар'єри: Комп'ютерні науки використовуються у
                      багатьох галузях, що дозволяє вам знайти роботу в сфері,
                      яка вас цікавить, будь то медицина, фінанси, розваги або
                      інша галузь.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Висока зарплата: Професії в галузі комп'ютерних наук часто
                      пов'язані з високими зарплатами та багатими можливостями
                      для кар'єрного зростання.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Висока зарплата: Професії в галузі комп'ютерних наук часто
                      пов'язані з високими зарплатами та багатими можливостями
                      для кар'єрного зростання.
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Навчання та навички:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Програмування: Навички програмування є основним елементом
                      спеціальності комп'ютерних наук. Рекомендовано вивчити
                      мови програмування, такі як Python, Java або C++, а також
                      основи веб-розробки.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Алгоритми та структури даних: Розуміння алгоритмів та
                      ефективних структур даних є важливим для розв'язання
                      складних проблем та оптимізації програм.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Комунікаційні навички: Вміння ефективно спілкуватися та
                      працювати в команді важливо для успіху в сфері
                      комп'ютерних наук, оскільки часто виникає потреба в
                      співпраці з іншими фахівцями та клієнтами.
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item
                      )}
                    >
                      Постійне навчання: Галузь комп'ютерних наук постійно
                      змінюється, тому важливо бути готовим до навчання нових
                      технологій та оновлення своїх навичок.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
