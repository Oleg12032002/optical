import React, { useContext, useEffect, useState } from 'react';
import optics1 from '../images/optics1.jpeg';
import optics2 from '../images/optics2.jpeg';
import optics3 from '../images/optics3.jpeg';
import optics4 from '../images/optics4.jpeg';
import optics5 from '../images/optics5.jpeg';

import { MathComponent } from "mathjax-react";
import { LanguageContext } from '../Context/myContext';
import { LanguageContextType } from '../Interfaces/PropsInteface';

function OpticalStructures(props: { language: string; }) {
  const {language} = useContext(LanguageContext) as LanguageContextType;
  let data = {
    en:{
      title:"OPTICAL COATINGS",
      subt1: "Illuminating coatings.",
      text1: `Brightening coatings unite a wide class of coatings designed to reduce
      reflection of light falling on the interface of two media. Enlightenment has a dual role: it increases
      light transmission in optical systems, which is especially important in the case of a large number of refracting surfaces, and reduces
      background light arising as a result of multiple reflections at the boundaries of the interface of media. In practice, most often
      there is a need to illuminate the boundary of the optical medium with air. In this case, the intensity of the reflected light
      determined by the formula:`,
      text12: `where n is the index of refraction of the medium on which light falls normal to the surface. It is not difficult to calculate that the coefficient
      reflection from one face of optical glass, the refractive index of most of which is in the range 1.45-1.9,
      will be from 3.5 to 10% of the incident radiation. The reflection coefficient of semiconductor materials having
      index of refraction is about 3.5, equal `,
      text13:`The simplest way to reduce the reflection coefficient is to apply an indicator film to the interface
      refraction is smaller than that of the illuminating substance. The reflection coefficient from the "substrate - film - air" system at
      wavelength `,
      text131:` is the optical thickness of the film) equal to expression (2): `,
      text14:`where `,
      text141:` are the refractive indices of the layer and glass, respectively.`,
      text15:`З (6) it follows that at`,
      text16:`In practice, zero reflection is possible only for materials with a high refractive index. Execution of this
      conditions for most glass require the production of a film with a refractive index of 1.2-1.3. Works in this direction
      are carried out, however, at present, sufficiently stable layers with such refractive indices have not been obtained. Others
      the disadvantage of single-layer illumination is the narrow area of low reflection, while the task often arises
      illumination of a wide spectral range. You can use simple two-and for achromatic illumination
      three-layer designs based on quarter-wave and half-wave layers, providing a low-reflection zone
      with R = 0.4 % in the range of wavelengths `,
      text161:` for glass with a refractive index of 1.46-1.8. coating
      were designed and manufactured for the purpose of application in the visible region of the spectrum. On the basis of layers of unequal thickness (no
      multiples of the quarter-wave layer) it is possible to obtain reflection coefficients not exceeding 0.2-0.3% in the visible part
      spectrum`,
      text17:`In some cases, for example, in various schemes for generating harmonics of the main radiation, there is a need to
      illuminating coatings designed for two wavelengths. Reflection coefficients can be obtained
      R`,
      text171:` and R`,
      text172:`, which do not exceed 0.1-0.3% of ratio`,
      text173:` in the range of values 1.2-2.5 for glass with different indicators
      refraction.`,
      subt2:`Mirror coatings.`,
      text2: `As can be seen from the name, this class of coatings combines interference coatings that
      are used to increase the reflection coefficient. Structurally, they are probably less diverse than
      illuminating coatings. As a rule, mirrors consist of quarter-wave or multiple-thickness films, which
      alternating, with high and low refractive indices. The reflection coefficient of such a structure depends on the difference in
      indices of refraction of layers and their number and can exceed 99.5%. Dielectric mirrors that have a very small
      absorption coefficient, successfully compete with metal mirrors, in which absorption can reach 25-30%. Except
      moreover, multilayer coatings based on materials such as refractory oxides have higher chemical resistance and
      mechanical strength in comparison with widely used films of aluminum and silver.`,
      text3:`Certain difficulties are encountered in the manufacture of broadband mirrors, that is, mirrors with a wide region of high
      reflection In this case, you can use a set of mirrors deposited on the same substrate with adjacent stripes
      high reflectance. The disadvantage of this method is the need to apply a large number of layers. Another way of production
      broadband mirrors consists in applying a large number of alternating layers, the optical thickness of which is monotonous
      changes according to a certain law. Such coatings are very sensitive to the accuracy of layering, therefore, during their implementation
      high demands are placed on the method of controlling their thickness. Some increase in the area of high reflection is possible
      achieved by increasing the difference in refractive indices of the layers that make up the coating, but this method is limited by the choice of
      materials with the necessary parameters. There are works in which the problem of calculating and manufacturing mirrors is solved,
      having two areas of high reflectivity. And if the design and implementation of most of the described coatings are compared
      simple, their use as mirrors for a laser resonator can cause significant difficulties. In this
      case they require, in addition to high reflectance, such requirements as low loss (i.e., absorption loss and
      light scattering) for low gain lasers, high beam strength for powerful lasers and
      a number of other requirements that determine the efficiency and durability of lasers. These tasks are solved on a case-by-case basis
      by choosing the material of the layers and the optimal technology of their application.`,
      text4:`Interference mirrors are made on the basis of Si-Al2O3, Si-SiO2 and ZnS-MgF2 films. But such designs are laser
      mirrors also have disadvantages. Si films have absorption at wavelengths less than 1 μm, and their optical
      properties strongly depend on the sputtering conditions. Mirrors based on ZnS-MgF2 are made for the infrared region
      spectrum, prone to cracking due to high tensile stress in MgF2 films. Therefore, the choice of one or the other
      designs is not always unambiguous and can be a complex technological task.`,
      text5:`That part of the light that is not reflected from the interference mirror without hindrance
      passes through it, since the losses in the dielectric layers are very small. Thus, the mirror, the reflection coefficient
      which is less than 100%, can be used as a simple light-splitting device that divides the incident on it
      radiation on what passed and what was reflected in a certain proportion. Designs of light-scattering coatings
      extremely diverse. They depend on the requirements for light splitters - aromaticity
      of the light splitter (the width of the spectrum region in which the radiation is divided in a given proportion), from the angle of incidence
      radiation on the light splitter, from the ratio of transmitted and reflected rays, which must be obtained.
      The reflection of light from the coating at an angle different from the normal one leads to its partial or complete
      polarization. In this regard, light splitters may also be required to store the incident polarization
      radiation. Such light splitters are called non-polarizing. The light-dispersing coating is applied either on
      the hypotenuse face of one of the prisms, and coated and uncoated prisms are glued together, either on one or both sides
      plane-parallel plate. If the coating is applied to one side of the plate, the other side, as a rule,
      illuminate, especially in the case of non-polarizing light splitters, in order to eliminate reflections at the "glass -
      air".`,
      subt5:'Light-separating filters',
     text51:`Let's consider some designs of light splitters in more detail. Well-known three-layer coatings, which have an optical thickness
     of the layer adjacent to the substrate, twice as much as the other two layers: П2ВНВ, where В and Н are highly refractive and
     low-refractive layers, P – substrate.`,
     text52:`With refractive indices `,
     text521:` that
     corresponds, for example, to the ZnS-MgF2 coating on glass, it is possible to obtain the ratio of the reflected R to the transmitted T beam – R
     : T 1 in the range of the spectrum `,
     text522:` , where `,
     text523:` is the optical thickness of one layer. R and T deviations
     from the average value in this case does not exceed 10%. More achromatic light splitters with an R : T1 ratio
     can be obtained by increasing the number of layers in the coating. For example, P2VNVNVN and P2VNVNVNP designs are based on the same
     materials, like the previous design, have in the area `,
     text524:` deviation from the average value in absolute value of 1 and 4%, respectively.
     The described structures are synthesized for the incidence of light at an angle of 45° and without taking into account the polarization of the radiation, which
     is divided It should be noted that the synthesized separators of this type are based on five- and nine-layer ones
     coatings consisting of layers of unequal optical thickness, with characteristics similar to those described above
     structures, but much more difficult to manufacture. `,
     subt6:`Attenuators.`,
     text6:`A very wide and peculiar class of optical elements used for making optical elements
     systems of fixed or adjustable optical attenuation. Attenuators (eg neutral filters) are used for
     improvement of the operating conditions of radiation receivers at high light fluxes, measurement of various nonlinearities
     photovoltaic devices, etc. The main requirements for attenuators are the maximum attenuation dependence
     from the characteristics of radiation (wavelength, degree of polarization, power), as well as from conditions and time
     exploitation`,
     text61:`Currently, there are many types of attenuators, which differ in attenuation methods: beam diaphragm,
     use of polarizers, scattering and absorbing media, use of electro-optical properties of liquids
     crystals and electrochromic properties of vanadium oxide films, etc. Fiber optics has its own specific methods
     attenuation.`,
     text62:`Smooth attenuators (with a continuously variable attenuation law) that are manufactured have become widely used
     based on thin metal films of variable thickness, sprayed on transparent substrates. Translucent layers of metal on
     transparent substrate are also widely used as discrete attenuators (having a fixed coefficient
     attenuation). So, Newport Corporation (USA) advertises smooth attenuators based on aluminum film on
     substrates in the form of a disk, the attenuation coefficient of which increases linearly with the increasing angle of rotation of the disk and reaches 10
     ± 1.5 or 20 ± 2 vol. at a wavelength of 0.63 μm. Aluminum, protected by a SiO2 film, the reverse side of the disc is illuminated
     in the region of 400-700 nm. It is also intended to use films of titanium and nickel, the optical density of which is weak
     changes in the visible and near-infrared region of the spectrum.`,
     text63:`The peculiarity of attenuators based on metal films in contrast to the above types of optical elements
     consists in the use of losses, in particular absorption in films. Interference effects due to high absorption in
     metal layers are usually absent.`,
     subt7:`Polarizers.`,
     text7: `Polarizers are used to separate the radiation falling on them into reflected and
     passing beams that are polarized in mutually perpendicular planes. Interference coverage consists of
     two-component system of alternating layers with high and low refractive indices. Structurally
     polarizers are divided into prism and plate. Prisms consist of two glued prisms on the hypotenuse
     the face of one or both of them is pre-applied with an interference coating. The principle of operation of the polarizer is based on
     because radiation reflected at an angle from the interface of two media is partially polarized. Degree
     polarization in this case depends on the angle of incidence of light. There is an angle at which the degree of polarization reaches its maximum
     the maximum value is Brewster's angle. A high degree of polarization can be achieved by providing conditions under which
     radiation reflection for all interfaces in the coating occurs at the Brewster angle.`,
     text71: `When manufacturing prism polarizers, taking into account the above calculations, the degree of polarization can be obtained
     is close to 100% both in the reflected beam and in the transmitted beam. Among the advantages of the described design is
     a relatively wide spectral region of light polarization, which can be expanded by applying to hypotenuse faces
     interference coatings with regions of high polarization shifted relative to each other, and the possibility of manufacturing
     polarizers with an angle between the transmitted and reflected rays equal to 90°. The last parameter can be of great importance
     to simplify optical systems using linearly polarized light.`,
  text72:`A plate polarizer is a transparent plate with an interference coating applied to it. Polarizing effect
  at the same time, it is achieved due to the difference in the width of the region of high reflection of various polarized components of light
  at certain reflection angles. With such a design of the polarizer, it is also possible to achieve a high degree
  polarization, but in a narrower spectral range compared to prism polarizers. Advantages in this
  case is the simplicity of the design, the absence of glued joints, which allows the use of plate polarizers
  in powerful laser systems. Interference polarizers of both types successfully compete with crystal ones
  polarizers and polaroids due to high light transmission and relative cheapness. A relatively narrow area with
  high degree of polarization and the sharp dependence of polarization on the angle of incidence of light on the coating is not significant
  values for monochromatic and narrowly focused laser radiation.`,
  subt8:`Filters.`,
  text8:`Narrowband pass interference filters (NPIF) are designed to select a zone from the spectrum
  of different widths, starting from tens of nanometers and ending with angstroms. Construction of the filter coating
  consists of two or more mirrors, between which there are separating layers. How can mirrors be
  used metal, metal-dielectric and dielectric mirrors. The latter are comparatively better because they allow
  get more bounce with less loss. In the case of using dielectric mirrors, the optical thickness
  of the separating layer h is related to the optical thickness of the mirror layers by the ratio h= 2*p* h', where p = 1, 2, 3... - order
  of the filter, and the wavelength of the maximum transmission of the filter `,
  text811:`=2*h/p. By size`,
  text812:` and other characteristics of the filters have a great impact on errors in the thickness of the coating layers.
  Since the filter coating consists of a fairly large number of layers, the method of controlling their thickness in the process
  application must meet high requirements and the production of VPIF is a rather complex technological task. As
  calculations showed that in dielectric VPFs the absorption coefficient at the wavelength `,
  text813:` in`,
  text814:` times more than mirrors with equivalent thickness. Therefore, even with small ones
  absorption coefficients of layer materials (`,
    text815:`=0.0002), the total absorption in the filter can reach 20-40%. It
  imposes additional restrictions on the materials on the basis of which the filter is constructed, and on their technological modes
  manufacturing, as the losses in the layers (absorption and scattering) depend on them.`,
  text81:`One of the problems that arise in the process of production and operation of filters is their optical instability
  characteristics over time. This is due mainly to irreversible structural changes in the coating and filling
  micropores of water layers. Therefore, to obtain stable filters, their sealing is used by application
  protective glass, which must also be taken into account when choosing the materials of the coating layers.`,
  text82:`Narrow-band filters are often used in combination with long-wavelength and short-wavelength cut-off filters.
  They have high transmittance in a given range of the spectrum and high reflection in the one adjacent to it
  long-wave or short-wave regions, respectively. Short-wave cut-off filters usually have the form:`,
  text83:`and long-wave:`,
  text84:`The area of minimum transmission of cut-off filters of such designs is relatively small. It can be expanded
  due to the manufacture of several filters with adjacent areas of high reflection or due to the use
  materials with selective transmission. The design of the filter synthesized from quarter-wave layers is of interest.
  Such a coating can serve as both a short-wave and a long-wave cut-off filter.`,
  subt9:`Corrective filters.`,
  text9:`Correction filters are intended for correction of the spectrum of the radiation source or receivers
  and are used in various fields of optics. The main disadvantage of radiation is the significant dependence of sensitivity on
  wavelength of light, which leads to large errors when measuring the power of optical radiation. Moreover
  spectral characteristics of different types of photodetectors can differ significantly from each other. Strongly
  the spectral characteristics of various radiation sources also differ. Due to the variety of sources and
  radiation receivers and requirements for their spectral characteristics, there are no general recommendations for their creation
  correction filters. An additional source of spectrum distortions can be the selectivity of the environment, in which
  radiation is spread.`,
  text91:`So, it is possible to correct the spectral sensitivity of a germanium photodiode in some range of wavelengths
  use colored glass. As a result, the selectivity of the "photodiode - correction filter" system will decrease in this
  region up to 10%. Better results can be achieved using interference coatings. Spectral correction
  sensitivity of the silicon photodiode was carried out by the company "Aido" (Japan) in the manufacture of sensors of the AQ-1928 type, which serve
  to measure optical power.`,
  text92:`A special type of coatings is a coating with a variable reflection or transmission coefficient on the surface of the element
  (topological coverings). One of the areas of their use is laser technology, in which they can be used as
  elements of resonators of lasers that form radiation with a narrow directional pattern. Design of such systems
  (refractive indices, optical thickness of layers, thickness distribution over the surface of the optical element) is determined by the requirements
  to the shape of the wave front reflected or such that the radiation passed and the magnitude of the maximum and minimum
  reflection coefficients. The main difficulty in the manufacture of such coatings is to reproduce the calculated one
  distribution of the thickness of the layers on the surface of the element, which requires appropriate research` },
    ua: {
      title:"ОПТИЧНІ ПОКРИТТЯ",
      subt1: "Просвітлюючі покриття.",
      text1: `Просвітлюючі покриття об'єднують широкий клас покриттів, що призначені для зменшення
      відбивання світла, що падає на межу розділу двох середовищ. Просвітлення виконує подвійну роль: збільшує
      світлопроникність в оптичних системах, що особливо важливе у випадку великого числа заломлюючих поверхонь, і зменшує
      фонове світло, що виникає в результаті багатократного відбивання на межах розділу середовищ. На практиці найчастіше
      виникає потреба просвітлення межі оптичного середовища з повітрям. В цьому випадку інтенсивність відбитого світла
      визначається формулою :`,
      text12: `де n – показник заломлення середовища, на яке світло падає по нормалі до поверхні. Неважко обчислити, що коефіцієнт
      відбивання від однієї грані оптичного скла, показник заломлення більшості яких знаходиться в інтервалі 1.45-1.9,
      складатиме від 3.5 до 10 % падаючого випромінювання. Коефіцієнт відбивання напівпровідникових матеріалів, що мають
      показник заломлення близько 3.5, рівний `,
      text13:`Найбільш простим способом зменшення коефіцієнта відбивання є нанесення на межу розділу плівки з показником
      заломлення меншим, ніж у просвітлюючої речовини. Коефіцієнт відбивання від системи «підкладка – плівка – повітря» на
      довжині хвилі`, 
      text131:` оптична товщина плівки) рівний виразу (2): `,
      text14:`де `,
      text141:` показники заломлення плівки і скла відповідно.`,
      text15:`З (6) випливає, що при `,
      text16:`На практиці отримати нульове відбивання можливо лише для матеріалів з великим показником заломлення. Виконання цієї
      умови для більшості скла вимагає виготовлення плівки з показником заломлення 1.2-1.3. Роботи в цьому напрямі
      проводяться, проте в даний час достатньо стабільних шарів з такими показниками заломлення не отримано. Іншим
      недоліком одношарового просвітлення є вузька область низького відбивання, тоді як часто виникає завдання
      просвітлення широкого спектрального діапазону. Можна використовувати для ахроматичного просвітлення прості дво- і
      тришарові конструкції на основі четвертьхвильових та напівхвильових шарів, що забезпечують зону низького відбивання
      з R = 0.4 % у діапазоні довжин хвиль `,
      text161:` для скла з показником заломлення 1.46-1.8. покриття
      конструювалися і виготовлялися з метою застосування у видимій області спектру. На основі нерівнотовщинних шарів (не
      кратних чвертьхвильовому шару) можна отримати коефіцієнти відбивання, що не перевищують 0.2-0.3 % у видимій частини
      спектру.`,
      text17:`В окремих випадках, наприклад, в різних схемах генерації гармонік основного випромінювання виникає потреба в
      просвітлюючих покриттях, розрахованих на дві довжини хвилі. Можна отримати коефіцієнти відбивання
      R`,
      text171:` і R`,
      text172:` , що не перевищують 0.1-0.3 % із співвідношенням`,
      text173:` в інтервалі значень 1.2-2.5 для скла з різними показниками
      заломлення.`,
      subt2:`Дзеркальні покриття.`,
      text2: `Як видно з назви, цей клас покриттів об'єднує інтерференційні покриття, що
      застосовуються з метою збільшення коефіцієнта відбивання. Конструктивно вони, мабуть, менш різноманітні, ніж
      просвітлюючі покриття. Як правило, дзеркала складаються з чвертьхвильових або кратних їм по товщині плівок, що
      чергуються, з високим і низьким показниками заломлення. Коефіцієнт відбивання такої структури залежить від різниці в
      показниках заломлення шарів і їх кількості і може перевищувати 99.5 %. Діелектричні дзеркала, що мають дуже малий
      коефіцієнт поглинання, успішно конкурують з металевими дзеркалами, у яких поглинання може досягати 25-30 %. Крім
      того, багатошарові покриття на основі таких матеріалів, як тугоплавкі оксиди, володіють вищими хімічною стійкістю і
      механічною міцністю в порівнянні з широко вживаними плівками алюмінію і срібла.`,
      text3:`Певні труднощі зустрічаються при виготовленні широкополосних дзеркал, тобто дзеркал з широкою областю високого
      відбивання. У цьому випадку можна використовувати набір дзеркал, нанесених на одну підкладку з суміжними смугами
      високого відбивання. Недоліком такого методу є необхідність нанесення великого числа шарів. Інший шлях виготовлення
      широкосмугових дзеркал полягає в нанесенні великого числа шарів, що чергуються, оптична товщина яких монотонно
      змінюється по певному закону. Такі покриття дуже чутливі до точності нанесення шарів, тому при їх реалізації
      ставляться високі вимогу до методу контролю їх товщини. Деякого збільшення області високого відбивання можна
      досягти, збільшуючи різницю в показниках заломлення шарів, що складають покриття, але цей метод обмежений вибором
      матеріалів з необхідними параметрами. Існують роботи, в яких вирішується проблема розрахунку і виготовлення дзеркал,
      що мають дві області високого відбивання. І якщо конструювання і реалізація більшості описаних покриттів порівняно
      нескладні, то їх застосування в якості дзеркал для лазерного резонатора може викликати значні труднощі. В цьому
      випадку від них вимагають, окрім високого відбивання, такі вимоги, як низькі втрати (тобто втрати на поглинання і
      розсіяння світла) для лазерів з невеликим коефіцієнтом посилення, висока променева міцність для потужніх лазерів і
      ряд інших вимог, які визначають ККД і довговічність лазерів. Ці завдання вирішуються в кожному конкретному випадку
      вибором матеріалу шарів і оптимальної технології їх нанесення.`,
      text4:`Інтерференційні дзеркала виготовляють на основі плівок Si-Al2O3, Si-SiO2 і ZnS-MgF2. Але такі конструкції лазерних
      дзеркал також мають недоліки. Плівки Si володіють поглинанням на довжинах хвиль менше 1 мкм, а їх оптичні
      властивості сильно залежать від умов напилення. Дзеркала на основі ZnS-MgF2 виготовлені для інфрачервоної області
      спектру, схильні до розтріскування через високу розтягуючу напругу в плівках MgF2. Тому вибір тієї або іншої
      конструкції не завжди однозначний і може бути складним технологічним завданням.`,
      subt5:`Світлорозділювачі.`,
      text5:`Та частина світла, яка не відбивається від інтерференційного дзеркала безперешкодно
      проходить крізь нього, оскільки втрати в шарах діелектрика дуже малі. Таким чином, дзеркало, коефіцієнт відбивання
      якого менше 100 %, може використовуватися як простий світлорозділюючий пристрій, що розділяє падаюче на нього
      випромінювання на те, що пройшло і те, що відбилося, у певній пропорції. Конструкції світлорозділюючих покриттів
      надзвичайно різноманітні. Вони залежать від вимог, що ставляться світлорозділювачам, – ароматичності
      світлорозділювача (ширина області спектру, в якій випромінювання ділиться в заданій пропорції), від кута падіння
      випромінювання на світлорозділювач, від відношення пройшовшого та відбитого променів, яке необхідно отримати.
      Відбивання світла від покриття під кутом, відмінним від нормального, приводить до його часткової або повної
      поляризації. У зв'язку з цим від світлорозділювачів може вимагатися також зберігання поляризації падаючого
      випромінювання. Такі світлорозділювачі називаються неполяризуючими. Світлорозділююче покриття наноситься або на
      гіпотенузну грань однієї з призм, і призми з покриттям і без покриття склеюються, або на одну чи обидві сторони
      плоскопаралельної пластини. Якщо покриття наноситься на одну сторону пластини, другу сторону, як правило,
      просвітлюють, особливо у разі неполяризуючих світлорозділювачів, з метою виключити відбивання на межі «скло –
      повітря».`,
     text51:`Розглянемо деякі конструкції світлорозділювачів докладніше. Добре відомі тришарові покриття, у яких оптична товщина
     шару, прилеглого до підкладки, в два рази більше двох інших шарів: П2ВНВ, де В і Н – високозаломлюючий і
     низькозаломлюючий шари, П – підкладка. `,
     text52:`При показниках заломлення `,
     text521:`, що
     відповідає, наприклад, покриттю ZnS-MgF2 на склі, можна отримати відношення відбитого R до пройшовшого T променя – R
     : T 1 в області спектру `,
     text522:` , де `,
     text523:` – оптична товщина одного шару. Відхилення R і T
     від середнього значення в цьому випадку не перевищує 10%. Більш ахроматичні світлорозділювачі з відношенням R : T1
     можна отримати, збільшуючи число шарів в покритті. Наприклад, конструкції П2НВНВН і П2ВНВНВНП на основі тих же
     матеріалів, що і попередня конструкція, мають в області `,
     text524:` відхилення від середнього значення по абсолютній величині 1 і 4 % відповідно.
     Описані конструкції синтезовані для падіння світла під кутом 45° і без урахування поляризації випромінювання, що
     розділяється. Необхідно відзначити, що синтезовані розділювачі такого типу на основі п’яти-і девятислойних
     покриттів, що складаються з шарів нерівної оптичної товщини, по своїх характеристиках близькі до описаним вище
     конструкціям, але значно складніші у виготовленні. `,
     subt6:`Ослаблювачі.`,
     text6:`Дуже широкий і своєрідний клас оптичних елементів, що застосовуються для внесення до оптичних
     систем фіксованого або регульованого оптичного згасання. Ослаблювачі (напр. нейтральні фільтри) використовуються для
     покращення умов роботи приймачів випромінювання при великих світлових потоках, вимірювання нелінійності різних
     фотоелектричних пристроїв і т.п. Основні вимоги, що вимагаються до ослаблювачів, є максимальна залежність ослаблення
     від характеристик випромінювання (довжини хвилі, ступеня поляризації, потужності), а також від умов і часу
     експлуатації.`,
     text61:`В даний час існує безліч типів ослаблювачів, що відрізнябться методами ослаблення: діафрагмування променя,
     застосування поляризаторів, розсіюючих і поглинаючих середовищ, використання електрооптичних властивостей рідких
     кристалів і електрохромних властивостей плівок оксиду ванадію і т.д. Волоконна оптика має свої специфічні методи
     ослаблення. `,
     text62:`Великого поширення набули плавні ослаблювачі (із законом ослаблення, що безперервно змінюється), що виготовляються
     на основі тонких плівок металу змінної товщини, напилених на прозорі підкладки. Напівпрозорі шари металу на
     прозрачній підкладці широко використовуються також в якості дискретних ослаблювачів (що мають фіксований коефіцієнт
     ослаблення). Так, фірма Newport Corporation (США) рекламує плавні ослаблювачі на основі алюмінієвої плівки на
     підкладках у вигляді диска, коефіцієнт ослаблення яких лінійно росте із зростанням кута повороту диска і досягає 10
     ± 1.5 або 20 ± 2 об. на довжині хвилі 0.63 мкм. Алюміній, захищений плівкою SiO2, зворотна сторона диска просвітлена
     в області 400-700 нм. Передбачається також використовувати плівки титану і нікелю, оптична щільність яких слабо
     змінюється у видимій і ближній інфракрасній області спектру. `,
     text63:`Своєрідність ослаблювачів на основі плівок металів на відміну від перерахованих вище типів оптичних елементів
     полягає в використанні втрат, зокрема поглинання в плівках. Інтерференційні ефекти внаслідок великого поглинання в
     металевих шарах, як правило, відсутні.`,
     subt7:`Поляризатори.`,
     text7: `Поляризатори використовуються для розділення падаючого на них випромінювання на відбитий і
     пройшовший пучки, що поляризовані у взаємно-перпендикулярних площинах. Інтерференційне покриття складається з
     двохкомпонентної системи шарів, що чергуються, з високим і низьким показниками заломлення. Конструктивно
     поляризатори поділяються на призмові і пластинчасті. Призмові складаються з двох склеєних призм, на гіпотенузні
     грані однієї чи обох з них заздалегідь нанесене інтерференційне покриття. Принцип роботи поляризатора заснований на
     тому, що випромінювання, відбите під кутом від межі розділу двох середовищ, частково поляризується. Ступінь
     поляризації в цьому випадку залежить від кута падіння світла. Є кут, при якому ступінь поляризації досягає свого
     максимального значення, – кут Брюстера. Високого ступеня поляризації можна добитися, забезпечуючи умови, при яких
     відбивання випромінювання для всіх меж розділу в покритті відбувається під кутом Брюстера.`,
     text71: `При виготовленні призмових поляризаторів з урахуванням приведених розрахунків можна отримати ступінь поляризації
     близький до 100 % як в у відбитому промені, так і у промені, що пройшов. До переваг описаної конструкції відноситься
     відносно широка спектральна область поляризації світла, яку можна розширити, наносячи на гіпотенузні грані
     інтерференційні покриття із зміщеними один відносно одного областями високої поляризації, і можливість виготовлення
     поляризаторів з кутом між пройшовшим і відбитим променями рівним 90°. Останній параметр може мати велике значення
     для спрощення оптичних систем з використанням лінійно-поляризованого світла.`,
  text72:`Пластинчастий поляризатор є прозорою пластинкою з нанесеним на неї інтерференційним покриттям. Поляризаційний ефект
  при цьому досягається за рахунок різниці в ширині області високого відбивання різних поляризованих складових світла
  при визначених кутах відбивання. При такій конструкції поляризатора можна також досягти високого ступеня
  поляризації, але у вужчому спектральному діапазоні в порівнянні з призмовими поляризаторами. Перевагами в цьому
  випадку є простота конструкції, відсутність клеєних з'єднань, що дозволяє використовувати пластинчасті поляризатори
  в потужніх лазерних системах. Інтерференційні поляризатори обох типів успішно конкурують із кристалічними
  поляризаторами і полароїдами завдяки великому світлопропусканню і відносній дешевизні. Відносно вузька область з
  високим ступенем поляризації і різка залежність поляризації від кута падіння світла на покриття не має істотного
  значення для монохроматичного і вузьконаправленого лазерного випромінювання.`,
  subt8:`Фільтри.`,
  text8:`Вузькополосні пропускаючі інтерференційні фільтри (ВПІФ) призначені для виділення із спектру зони
  різної ширини, починаючи з десятків нанометрів і закінчуючи ангстремами. Конструкція фільтруючого покриття
  складається з двох або більшого числа дзеркал, між якими знаходяться розділяючі шари. Як дзеркала можуть бути
  використані металічні, метало-діелектричні і діелектричні дзеркала. Останні порівняно кращі, оскільки дозволяють
  отримувати більше відбивання при менших втратах. У разі застосування діелектричних дзеркал оптична товщина
  розділяючого шару hпов'язана з оптичною товщиною шарів дзеркал співвідношенням h= 2*p* h', де p = 1, 2, 3… - порядок
  фільтру, а довжина хвилі максимуму пропускання фільтра `,
  text811:`=2*h/p. На величину`,
  text812:` та інші характеристики фільтрів великий вплив роблять помилки в товщині шарів покриття.
  Оскільки покриття фільтру складається з досить великого числа шарів, то до способу контролю їх товщини в процесі
  нанесення повинні пред'являтися високі вимоги і виготовлення ВПІФ є достатньо складним технологічним завданням. Як
  показали розрахунки, у діелектричних ВПІФ коефіцієнт поглинання на довжині хвилі `,
  text813:` в`,
  text814:` раз більше, ніж у дзеркал з еквівалентною товщиною. Тому навіть при невеликих
  коефіцієнтах поглинання матеріалів шарів (`,
    text815:`=0.0002) сумарне поглинання у фільтрі може досягати 20-40 %. Це
  накладає додаткові обмеження на матеріали, на основі яких конструюється фільтр, і на технологічні режими їх
  виготовлення, оскільки від них залежать втрати в шарах (поглинання і розсіювання).`,
  text81:`Однією з проблем, що виникають в процесі виробництва і при експлуатації фільтрів, є нестабільність їх оптичних
  характеристик у часі. Це обумовлено головним чином необоротними структурними змінами в покритті і заповненням
  мікропор шарів водою. Тому для отримання стабільних фільтрів застосовується їх герметизація шляхом застосування
  захисного скла, що також необхідно враховувати при виборі матеріалів шарів покриття.`,
  text82:`Вузькополосні фільтри часто застосовуються у поєднанні з довгохвильовими і короткохвильовим відрізуючими фільтрами.
  Вони володіють високим пропусканням в заданому інтервалі спектру і високим відбиванням в прилеглій до нього
  довгохвильовій або короткохвильовій областях відповідно. Короткохвильові відрізуючі фільтри зазвичай мають вигляд:`,
  text83:`а довгохвильові:`,
  text84:`Область мінімального пропускання відрізуючих фільтрів таких конструкцій відносно невелика. Вона може бути розширена
  за рахунок виготовлення декількох фільтрів із суміжними областями високого відбивання або за рахунок використання
  матеріалів з селективним пропусканням. Являє собою інтерес конструкція фільтру, синтезована з чвертьхвильових шарів.
  Таке покриття може служити як короткохвильовим, так і довгохвильовим відрізуючим фільтром.`,
  subt9:`Коректуючі фільтри.`,
  text9:`Коректуючі фільтри призначені для корекції спектру джерела або приймачів випромінювання
  і використовуються в різних областях оптики. Основним недоліком випромінювання є істотна залежність чутливості від
  довжини хвилі світла, що приводить до великих похибок при вимірюванні потужності оптичного випромінювання. Причому
  спектральні характеристики різних типів фотоприймачів можуть істотним чином відрізнятися один від одного. Сильно
  відрізняються також спектральні характеристики різних джерел випромінювання. Внаслідок різноманіття джерел і
  приймачів випромінювання і вимог до їх спектральних характеристик, не існує загальних рекомендацій по створенню
  коректуючих фільтрів. Додатковим джерелом спотворень спектру може служити селективність середовища, в якій
  розповсюджується випромінювання.`,
  text91:`Так, для корекції спектральної чутливості германієвого фотодіода в деякій області довжин хвиль можна
  використовувати кольорове скло. У результаті селективність системи «фотодіод – коректуючий фільтр» зменшиться в цій
  області до 10 %. Кращих результатів можна досягти застосовуючи інтерференційні покриття. Корекцію спектральної
  чутливості кремнієвого фотодіода проводила фірма «Аїдо» (Японія) при виготовленні датчиків типа AQ-1928, які служать
  для вимірювання оптичної потужності.`,
  text92:`Особливий тип покриттів складають покриття із змінним по поверхні елементу коефіцієнтом відбивання або пропускання
  (топологічні покриття). Однією з областей їх використання є лазерна техніка, в якій вони можуть застосовуватися як
  елементи резонаторів лазерів, що формують випромінювання з вузькою діаграмою спрямованості. Конструкція таких систем
  (показники заломлення, оптична товщина шарів, розподіл товщини по поверхні оптичного елементу) визначається вимогами
  до форми хвильового фронту відбитого або такого, що пройшло випромінювання і величиною максимального і мінімального
  коефіцієнтів відбивання. Основна складність при виготовленні таких покриттів полягає у відтворенні розрахункового
  розподілу товщини шарів по поверхні елементу, що вимагає проведення відповідних досліджень`
    }
   };

   const [strings, setStrings] = useState(language==="en"?data["en"]:data["ua"]||null);
   useEffect(()=>{setStrings(language==="en"?data["en"]:data["ua"]||null)},[data, language])
return <div className='info'>

  <h1>{strings.title}</h1>
  <div className='filtersImageDiv'><img src={optics1}  className='filtersImage' alt="Optical Filters"></img></div>
  <p>
    <h2>{strings.subt1}</h2> {strings.text1}
  </p>

  <p> <MathComponent tex={String.raw`R = \left(\frac{n-1}{n+1} \right)^2, (1)`} /> </p>

  <p>{strings.text12} &asymp; 30 %.</p>

  <p>{strings.text13} <i>&lambda; = 4*D </i>(<i>D</i> {strings.text131}</p>

  <p> <MathComponent tex={String.raw`R = \left(\frac{n_п-n_с^2}{n_п+n_с^2} \right)^2, (2)`} /> </p>

  <p>{strings.text14} <i>n<sub>п</sub></i>, <i>n<sub>с</sub></i> –{strings.text141}</p>

  <p>{strings.text15} <i>n<sub>п</sub></i> &asymp; <i>n<sub>с</sub></i><sup> &frac12;</sup> , <i>R &asymp; 0</i>.
  </p>

  <p>{strings.text16}<i>&lambda;<sub>1</sub></i> - <i>&lambda;<sub>2</sub>=1.6*&lambda;<sub>1</sub></i>{strings.text161}</p>

  <p>{strings.text17}(<i>&lambda;<sub>1</sub></i>){strings.text171}(<i>&lambda;<sub>2</sub></i>){strings.text172} <i>&lambda;<sub>2</sub></i> : <i>&lambda;<sub>1</sub></i>{strings.text173}</p>

	<div className='filtersImageDiv'><img src={optics2}  className='filtersImage' alt="Optical Filters"></img></div>
  <p><h2>{strings.subt2}</h2> {strings.text2} </p>

  <p>{strings.text3} </p>

  <p>{strings.text4} </p>

  <p><b>{strings.subt5}</b> {strings.text5} </p>

  <p>{strings.text51}</p>

  <p>{strings.text52}<i>n<sub>v</sub>= 2.3-2.4, n<sub>n</sub> = 1.32-1.38, n<sub>i</sub> = 1.5-1.6</i >{strings.text521}<i>&lambda;<sub>1</sub> = 0.72*&lambda;<sub>0</sub> </i> - <i>&lambda;<sub>2</sub > =
     2.3*&lambda;<sub>1</sub> </i>{strings.text522}<i>&lambda;<sub>0</sub>/4</i>{strings.text523}<i>&lambda;<sub>1</sub> + &lambda;<sub>2</sub> =
     1.7*&lambda;<sub>1</sub> </i>{strings.text524}</p>

     <div className='filtersImageDiv'><img src={optics3}  className='filtersImage' alt="Optical Filters"></img></div>
  <p><h2>{strings.subt6}</h2> {strings.text6}</p>

  <p>{strings.text61}</p>

  <p>{strings.text62}</p>

  <p>{strings.text63} </p>
	<div className='filtersImageDiv'><img src={optics4}  className='filtersImage' alt="Optical Filters"></img></div>
  <p><h2>{strings.subt7}</h2> {strings.text7} </p>

  {/* <p> <MathComponent tex={String.raw`&phi;_в = arctg\frac{n_н}{n_в} \text { та } &phi;_н = arctg\frac{n_в}{n_н} `} /> </p>

  <p>де <i>n<sub>н</sub></i> i <i>n<sub>в</sub> </i> – показники заломлення низькозаломлюючого та високозаломлюючого
    шарів відповідно, а <i> &phi;<sub>н</sub></i> i <i> &phi;<sub>в</sub> </i> – кути відбивання на межах розділу шарів.
    Оптична товщина шарів при цьому визначається з виразу: </p>

  <p> <MathComponent tex={String.raw`n_i*h_i*cos&phi;_i = &lambda;_0/4`} />; </p>

  <p>Тут <i>n<sub>i</sub>*h<sub>i</sub></i> та <i>&phi;<sub>i</sub></i> – оптична товщина i-гошару і кут, що визначає
    напрям розповсюдження випромінювання в i-ому шарі. З метою отримання оптимального поляризаційного ефекту показник
    заломлення матеріалу призм вираховується по формулі: </p>

  <p> <MathComponent tex={String.raw` n_i = \frac{n_в*sin &phi;_в}{sin &phi;_i} = \frac{n_н*sin &phi;_н}{sin &phi;_i}, (3)`} /> </p>

  <p>де <i>&phi;<sub>i</sub></i> – кут призми. </p> */}

  <p>{strings.text71} </p>

  <p>{strings.text72} </p>


  <p><h2>{strings.subt8}</h2> {strings.text8}&lambda;<sub>max</sub>{strings.text811} &lambda;<sub>max</sub>{strings.text812}&lambda;<sub>max</sub>{strings.text813} 10<sup>2</sup>-10<sup>4</sup>{strings.text814}&chi;{strings.text815}</p>

  <p>{strings.text81} </p>

  <p>{strings.text82}
  </p>

  <p>ПВНВ...НВ0.5Н або П2ВН2ВН…2ВН2В </p>

  <p>{strings.text83} </p>

  <p> П0.5ВНВ…НВН0.5В. </p>

  <p>{strings.text84} </p>

	<div className='filtersImageDiv'><img src={optics5}  className='filtersImage' alt="Optical Filters"></img></div>

  <p><h2>{strings.subt9}</h2> {strings.text9} </p>

  <p>{strings.text91} </p>

  <p> {strings.text92}
  </p>
</div>

};

export default OpticalStructures;