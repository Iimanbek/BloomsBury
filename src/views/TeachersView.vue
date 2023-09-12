<template>
    <layout>
        <div class="container">
            <div class="teach_wr">
                <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                        <div class="item_wrapper">
                            <img src="../assets/images/TEACHER1.png" alt="">
                            <v-btn color="#E1411E" v-bind="props">Подробная информация</v-btn>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar color="#E1411E"></v-toolbar>
                            <v-card-text>
                                <div class="text-h4 pa-12">
                                    <div class="view_wrap">
                                        <div>
                                            <p>Айзада Жаныбековна обучалась в Германии с 2000 по
                                                2012 Bergische Gesamthochschule Wuppertal, получила
                                                высшее образование
                                                Ruhr-Universität Bochum. Работала также в Интитуте им.
                                                Гете
                                                В данное время работает преподавателем в КНУ им.
                                                Ж. Баласагына и является частью нашей большой семьи
                                                Опыт работы более 10 лет.
                                                Имеется сертификат С1
                                                Также участие в многочисленных семинарах и курсах повышения квалификации
                                                (Dhoch3: Fachsprache (Oktober- Dezember 2018, Januar-März 2019)
                                                XIII Deutschlehrertag Kirgisistan (26-27.April 2019);
                                                Literatur im DaF-Unterricht. (April-Juni 2019);
                                                30 Jahre friedliche Revolution. (Oktober 2019)</p>
                                        </div>
                                        <div>
                                            <img src="../assets/images/TEACHER1.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                        <div class="item_wrapper">
                            <img src="../assets/images/TEACHER2.png" alt="">
                            <v-btn color="#E1411E" v-bind="props">Подробная информация</v-btn>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar color="#E1411E"></v-toolbar>
                            <v-card-text>
                                <div class="text-h4 pa-12">
                                    <div class="view_wrap">
                                        <div>
                                            <p>Дария Кубанычбековна окончила Кыргызский
                                                Национальный Университет им. Ж. Баласагына по специальности
                                                лингвист-преподаватель
                                                (Германистика).
                                                Имеет опыт преподавания в различных сферах.
                                                В данное время также работает преподавателем на кафедре германистики и МК в
                                                КНУ
                                                им.Ж.Баласагына.
                                                Преподавание ведется на высшем профессиональном уровне с применением
                                                современных
                                                педагогических методов и интерактивных игр. Она всегда чутка и внимательна,
                                                умеет
                                                верно, оценить педагогическую ситуацию и быстро найти оптимальный вариант ее
                                                решения.Также очень требовательна и строга, у нее даже самый ленивый студент
                                                быстро
                                                научится дисциплине С
                                                Сертификаты
                                                Spiele im Deutschunterricht(Goethe- Institut)
                                                Hörtexte im Deutschunterricht
                                                Kreatives schreiben
                                                Sozialformen im Deutschunterricht
                                                Landeskunde im Deutschunterricht
                                                Einführung in die deutsche Literaturgeschichte und Interpretation
                                                exemplarischer Texte" (2015 DAAD)
                                                Medien im Deutschunterricht (2016 DAAD.)</p>
                                        </div>
                                        <div>
                                            <img src="../assets/images/TEACHER2.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                        <div class="item_wrapper">
                            <img src="../assets/images/TEACHER3.png" alt="">
                            <v-btn color="#E1411E" v-bind="props">Подробная информация</v-btn>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar color="#E1411E"></v-toolbar>
                            <v-card-text>
                                <div class="text-h4 pa-12">
                                    <div class="view_wrap">
                                        <div>
                                            <p>Айжамал Абдиматовна.
                                                Образование
                                                Лингвист - преподаватель (Германистика) , КНУ им
                                                Ж.Баласагына,Эрфуртский университет.
                                                Опыт работы более 10 лет, множество сертификатов и курсов повышения
                                                квалификации.
                                                Имеются - OSD Zertifikat C1
                                                -Goethe Zertifikat C1
                                                Для Айжамал Абдиматовны в работе главным приоритетом является качество,
                                                поэтому
                                                дисциплина и доступное подача материала, являются главными ее инструментами.
                                                Также она является нашим менеджером. по всем вопросам можете к ней
                                                обратиться в
                                                любое время!</p>
                                        </div>
                                        <div>
                                            <img src="../assets/images/TEACHER3.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                        <div class="item_wrapper">
                            <img src="../assets/images/TEACHER4.png" alt="">
                            <v-btn color="#E1411E" v-bind="props">Подробная информация</v-btn>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar color="#E1411E"></v-toolbar>
                            <v-card-text>
                                <div class="text-h4 pa-12">
                                    <div class="view_wrap">
                                        <div>
                                            <p>Изат Жумабековна
                                                Образование КГМА им И.Ахунбаева.
                                                Специальность: Гематология.
                                                Да да, по специальности она медик, но это не помешало ей выучить немецкий до
                                                совершенства, пройти курсы изучения языка в Германии( языковая школа Карла
                                                Дюсберга,Келн), получить сертификат четвертого уровня и поехать второй раз
                                                на
                                                трехмесячную практику. В данное время Изат Жумабековна находится в Германии
                                                в городе
                                                Гельдерн,Дюссельдорф. Всем передает привет и говорит, что ситуация
                                                стабилизируется и
                                                постепенно идет на спад;). Является стипендиатом им .Ахунбаева ( оочень
                                                престижная
                                                стипендия !)
                                                Имеет Goethe Zertifikat B2
                                                Опыт работы более 5 лет.
                                                Изат Жумабековна замечательный преподаватель, заслужившая любовь многих
                                                студентов.
                                                Она умеет смотивировать каждого студента, благодаря своей особенной
                                                методике!
                                                Вкладывает очень много энергии,сил и времени в урок и именно поэтому они у
                                                нее
                                                всегда проходят интересно!</p>
                                        </div>
                                        <div>
                                            <img src="../assets/images/TEACHER4.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                        <div class="item_wrapper">
                            <img src="../assets/images/TEACHER5.png" alt="">
                            <v-btn color="#E1411E" v-bind="props">Подробная информация</v-btn>
                        </div>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card>
                            <v-toolbar color="#E1411E"></v-toolbar>
                            <v-card-text>
                                <div class="text-h4 pa-12">
                                    <div class="view_wrap">
                                        <div>
                                            <p>Айпери Мырзабековна окончила КГУ факультет лингвистики,
                                                проходила курсы в Германии( с В2 по С1), проживала также в Германии 2 года,
                                                имеет
                                                опыт в сфере журналистики.
                                                Айпери Мырзабековна проводит уроки на высоком методическом уровне, имеет
                                                хорошую
                                                теоретическую и практическую подготовку. Её умение привлечь дополнительный
                                                материал
                                                делают её уроки интересными и содержательными. Также она очень требовательна
                                                как
                                                преподаватель.Это подтвердят многие ее студенты
                                                Опыт работы более 6 лет.
                                                Имеет сертификат C1 TELC</p>
                                        </div>
                                        <div>
                                            <img src="../assets/images/TEACHER5.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </div>
        <section2 />
    </layout>
</template>
<script>
import section2 from '../components/main/section1.vue';
export default {
    components: {
        'section2': section2
    }
}
</script>
<style lang="scss" scoped>
.item_wrapper {
    width: 300px;
    margin: 30px 0;
  @media screen and (max-width: 1300px){
    margin: 30px ;
  }

    button {
        width: 100% !important;
        color: white !important;

    }

    img {
        width: 100%;
        object-fit: cover;
    }

}

.view_wrap {
    display: flex !important;
    gap: 30px !important;
    div {
        img {
            width: 500px;
        }
    }
}

.teach_wr {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 1300px){
      justify-content: center;
    }
}</style>