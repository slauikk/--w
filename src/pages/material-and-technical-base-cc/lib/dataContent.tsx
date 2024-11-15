import { Img } from "@/components/img";
import Slider from "react-slick";
import styles from "../index.module.scss";
import img_1 from "@/assets/material-base/Паяльний_пристрій.jpg";
import img_2 from "@/assets/material-base/Практичне заняття.jpg";
import img_3 from "@/assets/material-base/Ультразвуковий_дефектоскоп.jpg";
import img_4 from "@/assets/material-base/лабораторія-120в.jpg";
import img_5 from "@/assets/material-base/лабораторія_зварювального_виробництва.jpg";
import img_6 from "@/assets/material-base/Майстерня_ручного_електродугового_зварювання.jpg";

import img_slider_1 from "@/assets/material-base/slider1.jpg";
import img_slider_2 from "@/assets/material-base/slider2.jpg";
import img_slider_3 from "@/assets/material-base/slider3.jpg";
import img_slider_4 from "@/assets/material-base/slider4.jpg";
import img_slider_5 from "@/assets/material-base/slider5.jpg";
import img_slider_6 from "@/assets/material-base/slider6.jpg";
import img_slider_7 from "@/assets/material-base/slider7.jpg";
import img_slider_8 from "@/assets/material-base/slider8.jpg";
import img_slider_9 from "@/assets/material-base/slider9.jpg";
import img_slider_10 from "@/assets/material-base/slider10.jpg";
import img_slider_11 from "@/assets/material-base/slider11.jpg";
import img_slider_12 from "@/assets/material-base/slider12.jpg";
import img_slider_13 from "@/assets/material-base/slider13.jpg";
import img_slider_14 from "@/assets/material-base/slider14.jpg";
import img_slider_15 from "@/assets/material-base/slider15.jpg";
import img_slider_16 from "@/assets/material-base/slider16.jpg";
import img_slider_17 from "@/assets/material-base/slider17.jpg";

export const dataContent = [
    {
        title: "Кабінети і майстерні",
        content: (
            <Slider className={styles.slickSlider} dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>

            <div>
                    <Img src={img_slider_1} />
                </div>
                <div>
                    <Img src={img_slider_2} />
                </div>
                <div>
                    <Img src={img_slider_3} />
                </div>
                <div>
                    <Img src={img_slider_4} />
                </div>
                <div>
                    <Img src={img_slider_5} />
                </div>
                <div>
                    <Img src={img_slider_6} />
                </div>
                <div>
                    <Img src={img_slider_7} />
                </div>
                <div>
                    <Img src={img_slider_8} />
                </div>
                <div>
                    <Img src={img_slider_9} />
                </div>
                <div>
                    <Img src={img_slider_10} />
                </div>
                <div>
                    <Img src={img_slider_11} />
                </div>
                <div>
                    <Img src={img_slider_12} />
                </div>
                <div>
                    <Img src={img_slider_13} />
                </div>
                <div>
                    <Img src={img_slider_14} />
                </div>
                <div>
                    <Img src={img_slider_15} />
                </div>
                <div>
                    <Img src={img_slider_16} />
                </div>
                <div>
                    <Img src={img_slider_17} />
                </div>
            </Slider>
        ),
    },
    {
        content: (
            <>
                <p>
                    За цикловою комісією закріплено два спеціалізованих кабінети та дві навчальні лабораторії, завданням яких є забезпечення поглибленого вивчення дисциплін, реалізація практичної і творчої складових змісту навчання.
                </p>
                <p>
                    Впродовж навчального року удосконалено зварювальну дільницю: придбано зразки для контролю якості зварного з’єднання; електроди, для зварювання різних матеріалів та присадні матеріали; навчальні кабінети поповнено навчальним інвентарем та наочними засобами навчання, проведено поточний ремонт стендів та кабінетів і т.п.
                </p>
                <p>
                    Навчальні кабінети в основному забезпечені необхідним плакатами, роздатковими та відеоматеріалами, методичними лабораторними посібниками, що дозволяє належно проводити лекційні та практичні заняття.
                </p>
                <p>
                    Для дистанційного навчання використовується дистанційний портал – MOODLE. URL-адреса: <a href="http://eguru1.tk.te.ua">http://eguru.tk.te.ua</a> та Google Meet.
                </p>
            </>
        ),
    },
    {
        title: "Лабораторія зварювального виробництва",
        content: (
            <>
                <Img src={img_5} />
            </>
        ),
    },
    {
        title: "Лабораторія 120в – зварювального виробництва",
        content: (
            <>
                <Img src={img_4} />
            </>
        ),
    },
    {
        title: "Майстерня ручного електродугового зварювання",
        content: (
            <>
                <Img src={img_6} />
            </>
        ),
    },
    {
        title: "Обладнання в лабораторії 120в зварювального виробництва",
        content: (
            <>
                <Img src={img_2} />
            </>
        ),
    },
    {
        title: "Паяльний пристрій MQ-R018 для з`єднання труб",
        content: (
            <>
                <Img src={img_1} />
            </>
        ),
    },
    {
        title: "Практичне заняття з дисципліни Зварювання пластмас у лабораторії №120в зварювального виробництва",
        content: (
            <>
                <Img src={img_2} />
            </>
        ),
    },
    {
        title: "Ультразвуковий дефектоскоп УД 2301 Novotest",
        content: (
            <>
                <Img src={img_3} />
            </>
        ),
    },
];
