import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'

const History = () => {
  return (
    <main>
      <Tabs defaultValue="origin" className="w-[80vw] my-10 mx-auto">
        <TabsList className="">
          <TabsTrigger value="origin">Oke-odan: The Origin</TabsTrigger>
          <TabsTrigger value="The First Oloke-Odan">The First Oloke-Odan</TabsTrigger>
        </TabsList>
        <TabsContent value="origin">
          <ScrollArea className="w-full h-[500px]">
            <div className="md:columns-2 space-y-6 px-4 gap-4 leading-6">
              <p>
                According to oral history, historical surveys and publications available on the
                history of Oke-odan, the ancient settlement pattern consisted of immigrants from the
                north central Yewa towns of Lobi, Erinja, Eyo-bode, Laro, Shaala, Imasayi, Ibese,
                and Isaga. These are towns after which the settlers named their quarters (Ago) until
                four major quarters eventually evolved, namely; Ago Lobi, Ago Erinja, Ago Eyo, and
                Ago Ilaro.
              </p>
              <p>
                Oke-odan derived its name from the landscape of the area, the hill in the grass
                field (Oke arin Odan); and the hilly part is more pronounced when the town is
                approached from the Yewa River. The long description was later shortened to
                Oke-odan.
              </p>
              <p>
                A popular account on the foundation of Oke-odan is that it was as a result of the
                Egba-Adele war of 1799 which sacked Ilobi and Erinja, two contiguous settlements,
                through combined forces of the two armies. Oba Adele who ruled Lagos twice
                (1775-1780) and (1832-1834) was said to be in exile in Badagry during this period
                and he still had an army which he readily mobilized as allies to the Egba Army.
                Other small neighbouring villages that could not withstand the superior power of the
                Egba-Adele Army also joined the Ilobi and Erinja people to migrate. The Ilobi
                people, under their ruler, Oba Adejola whose appellation was;” Ola tan be ewa” with
                Balogun Akanle, travelled southwest and finally settled at Isoto, a village that has
                now become defunct.
              </p>
              <p>
                After staying in Isoto for some years, Oba Adejola saw the need to look for a more
                comfortable settlement. He thus commissioned a group of hunters to venture further
                to look for a suitable location for peaceful settlement until Lobi could be rebuilt.
                The hunters came back after three days to report that they have found a large
                stretch of land on a hill surrounded by streams and not far from a major river.
                However, before the final departure from Isoto to Oke-odan in 1803, Oba Olobi
                Adejola was said to have died and the people now led by Balogun Akanle took his
                remains to Oke-odan for burial.
              </p>
              <p>
                After the people of Lobi and Erinja had settled down, they were later joined by
                emigrants from Ilaro, Saala, Imasayi, and Saga. They all settled in different parts
                of the new community which later evolved into the four major quarters or Ago which
                were then administered politically by their Baloguns and other influential Chiefs in
                the town. This was the era of the Baloguns who jointly took decisions about the
                domestic and foreign affairs of the cosmopolitan settlement.
              </p>

              <p>
                Apart from the first wave of settlers identified above, Oke-odan also received a
                secondary wave of settlers from Ota, Ipokia, Ado-Odo, Igbesa, and Sakete.
              </p>

              <p>
                Between the 1830s and 1880s, the whole of Yewaland, particularly Oke-odan suffered
                much harassment and attacks from the marauding Dahomey Army, because of her
                strategic location along the commercial route to the sea and as a thriving “great
                slave market”. The Dahomeans first sacked Oke-odan in 1848 and again in 1884 and
                each of these attacks left Oke-odan greatly destroyed. These wars had led to a
                virtual evacuation of the population from the town across the Yewa River to populate
                towns, notably Ajilete and Ado-Odo. Efforts were however made after each of the
                attacks to return and rebuild the town. Hence, the present Oke-odan is a resurgence
                from the remains of both the 1848 and 1884 destruction by the Dahomean Army.
              </p>

              <p>
                After the 1884 attack, the people of Egbado had to explore the protection of the
                British Colonial Government.
              </p>

              <p>
                Balogun Akinwunmi Falola of Oke-odan, who was said to be the most outstanding Egbado
                Chief at that time, with Prince Tella of Ilaro as his deputy, led a delegation to
                the British Consul and they signed a pact to be part of the British protectorate.
                This followed the Anglo-French Agreement of 1889 which had been signed between the
                British and French colonial governments not to allow attacks of settlements under
                each other’s protection. As a result of these pacts, the British Flag was
                successfully hoisted simultaneously at Ilaro and Oke-odan in 1891.
              </p>

              <p>
                With the establishment of the British Protectorate over Oke-odan, the British
                Indirect Rule Policy and its attendant institutions were established. A centralized
                political system which recognized a paramount chief among the leaders of the
                Quarters had to be put in place and supported by the Colonial British Government.
                The traditional head from Erinja quarters was favoured and propped up through the
                support of the British. Accordingly, Oke-odan was administered under the paramount
                chiefs from the Erinja Quarters titled the Elerinja of Oke-odan, between 1880 and
                1935. This was because while the other major settlers, the Ilaro and Ilobi had their
                traditional rulers returning to their homesteads, the Erinjas had their traditional
                ruler settled in Oke-odan. This political dispensation lasted till early 1930s when
                it was resolved that a rotational Obaship Institution among the four major settlers,
                with the title of Oloke-odan of Oke-odan, be adopted.
              </p>

              <p>
                Under this arrangement, four ruling houses were approved by government and gazetted
                as follows:
              </p>
              <ol className="list-decimal list-inside">
                <li>Arolagbade of Ilaro Quarters</li>
                <li>Atibajoye of Eyo Quarters</li>
                <li>Ogidan of Ilobi Quarters</li>
                <li>Lajulo of Erinja Quarters</li>
              </ol>

              <p>
                The rotational dispensation began with the installation of Oba Joseph Akinlade
                Odunfa (Arolagbade, 1942-1945). Не was succeeded by Oba Adenle Idowu (Olugbokiki
                Atibajoye, 1952-1956). The next Oloke-odan was Oba Alamu Ogunbiyi (Ogidan I,
                1957-2003). He was succeeded by the incumbent Oloke-odan, Oba Dr Oluwarotimi Oluremi
                Fagbenro (Lajulo II, 2005-to Date).
              </p>

              <p>
                Due to the enduring social harmony that has evolved among the different settlers,
                Oke-odan is usually referred to as a successful experiment in league of nations.
              </p>

              <p>
                The Oke-odan people are very enterprising and they were widely known as big-time
                farmers in cocoa, kolanut, palm oil, coffee, and cotton. Apart from farming, they
                also engage in various trades which take them to Badagry, Lagos, and other
                neighboring markets. Indeed, during the slave trade era and after the abolition of
                the slave trade, Oke-odan was regarded as a major trade center.
              </p>

              <p>
                The people of Oke-odan are known for their traditional religion which includes
                Egungun, Oro, Ogun, Orisa la, Orisa Ok, Sango, and Osanyin, Sanponna, and Ifa among
                others. The traditional religions or worshiping of deities gradually yielded grounds
                for both the Christian and Islamic Religions to thrive. The introduction of
                Christianity into Oke-odan was inked to an indigene of Ilobi Quarters, Andrew Shanu
                and this was as from 1863. Oke-odan is also said to have pioneered missionary
                activities in the whole of Egbado. For the introduction of the Islamic Religion,
                pioneering roles Cesutu Aderoed to early convers under the Imamship of Imam Kasmu
                Bello Egunjob. He had as his deputy or Noibi, Yesufu Aderonmu.
              </p>

              <p>
                Oke dage apelaos of the Okedan Army among its neighbors are widely acknowledged and
                this has earned Oke-odan the appellation of “Oke-odan suuru, oko il Banta banta.
              </p>
            </div>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="The First Oloke-Odan">
          <ScrollArea className="w-full h-[500px]">
            <div className="md:columns-2 space-y-6 px-4 gap-4 leading-6">
              <div
                className="w-52 h-52 relative float-left mr-10 bg-cover"
                style={{ backgroundImage: 'url(/oloke-odan1.jpg)' }}
              ></div>
              <p>
                The emergence of Yoruba towns and villages, Oke-Odan inclusive, started after the
                death of Oduduwa, the Yoruba divine king who migrated from Mecca to Ile-Ife, which
                today is unquestionably the primary dispersal centre of the Yoruba race worldwide.
                However, some historians and researchers of history of the Yorubas say that Oduduwa
                hailed from Egypt or Israel at a year which archaeology and history are yet to fix.
              </p>
              <p>
                Aftermath of the death of Oduduwa? His only son (Okanbi who was believed to have
                died before him) and grandsons started dispersing from Ile-Ife their ancestral home.
                Different families, groups, quarters and artisans,black-smiths in particular,
                started migrating from Ile-Ife with definite traditional instructions from the Ifa
                oracle regarding where would be their final place of abode. One of such towns was
                Oyo which was founded by Oranyan or Oranmiyan (one of Oduduwa’s grandsons). Other
                sons of Oduduwa includes; Olowu of Owu, Onisabe of Sabe, Onipopo of Popo, Orangun
                Ila, Oni of Ife, Oba of Benin and Alaketu of Ketu. However, some authorities have
                stated that Oduduwa had sixteen children. Another example of such towns is the Awori
                town of Igbesa, Ogun State, formerly in Iseri-Olofin which was established on the
                instruction of Ifa oracle that this particular group of the Awori stock should find
                its home on
                <i>“awon ile ti o wa l’egbe osa”</i> literarily meaning that that group of Awori
                stock should find its permanent place of abode “on a large expanse of land by the
                lagoon”. Thus,
                <i>“ile ti o wa l’egbe osa”</i>
                meaning “land beside the lagoon” was what became “Igbesa” meaning
                <i>“egbe osa”</i> and this was how Igbesa derived its name.
              </p>
              <p>
                The emergence of Yoruba towns and villages was further master-minded decades later
                by the fall of the old Oyo empire in 1817 caused by personal ambition of Afonja of
                Ilorin “the Are-Ona-Kakanfo” the army chief who wanted to establish an independent
                state in Ilorin outside political and administrative umbrella of Alafin of Oyo. He
                surreptitiously hired professional warfare services of the Fulanis to fight the war
                and when the war was eventually won, the Fulanis outsmart him and usurped his
                military and political power as the Yoruba army general.
              </p>
              <p>
                As already indicated, when Oduduwa died his son(s) and grandsons started migrating
                to establish new towns and villages. Unalloyed and unmistakable history and family
                genealogy expressly indicate that one Famokun was one of the grandchildren of
                Oduduwa and that by the directive of Ifa oracle when he was of age of maturity
                migrated from Ile–Ife and settled in Oyo–Igboho and from Oyo-Igboho to (Oke-Agba
                Quarters) in Iboro present day Yewa North, Ogun State, South-Western Nigeria, and it
                was in this place that Famokun married two wives and begat children. One of the
                children of Famokun was Olumokun. Olumokun married two wives and begat a number of
                children among whom was Dosunmu. Dosunmu married two wives in Iboro and one of the
                wives was Ladigbolu who begat four children (male) viz: Fabiyi, Ayefimi, Olowoku and
                Fadeyi. It was Ayefimi that led the third group of people that settled at the foot
                of Yewa river (Okesa)
                <i>Oke-Odan keta or Oke-Odan eleketa</i> which survives till date. Oral tradition
                states that Ayefimi was born around 1750 and that he was around 30 years when he led
                the third group of people to settle by Yewa River.
              </p>
              <p>
                Oral accounts indicate that before Ayefimi and his followers arrived by Yewa river
                he had been provided by Ifa oracle with a sign that would make him know where he was
                to finally settle as his permanent place of abode. The sign would be that any place
                the royal beads
                <i>ileke segi</i> around his wrists break would be his permanent place of abode.
                Thus, after a period of time, on a particular day, Ayefimi who had completely
                forgotten about this sign suddenly discovered that the royal beads around his wrists
                had broken due to unexplained reasons. He, therefore, asked the blacksmiths that
                were with him to assist mend the broken beads which unfortunately yielded no
                results.It was at this juncture that Ayefimi opened his mouth and exclaimed in
                Yoruba <i>apa ina ko ma ka segi !</i> which literarily means
                <i>the potency of fire could not mend the broken royal beads</i>
                which till date remains the praise-name, praise-poetry or panegyric
                <i>oriki</i> of the Odunfas (Arolagbade royal family and other children of Ayefimi-
                <i>“Omo apa ina o ka segi”)</i>. Again, it was this historic event that gave birth
                to the first name with which Oke-Odan was known-
                <i>Ebute-ilabe or Ebute labelabe,</i> that is, the port where the royal beads broke
                into pieces. Later, during Slave Raid it became <i>Odan-booku</i> meaning any slave
                that attempts an escape from his captors and dies in the process, dies and receives
                the blame for it:
                <i>boo ku, o ku gbe, iwo lo mo ta lo ran e wa</i> and later it became known as
                Oke-Odan
                <span className="font-medium">(Oak-hill)</span>.
              </p>
              <p>
                It was Ayefimi who had now moved hinterland (Iga-Ayefimi) that begat Odunfa among
                other children and he was also the first Balogun of Oke-Odan. Iga-Ayefimi which
                later became known as Ago-Ilaro was where the people of Ilaro (mostly people from
                Ona-Ola quarters) were made to live when Egba-Owu or Sodeke war of 1850s displaced
                them to Oke-Odan to seek refuge and this was how Iga-Ayefimi was renamed Ago-Ilaro
                because of high population of people from Ilaro residing there. The first set of
                families that settled in Ago-Ilaro realized that Oke-Odan soil was fertile and good
                for agriculture and they therefore started inviting their relatives from towns and
                villages like Saala and Iboro to come and settle down in Oke-Odan and take up
                farming which was the predominant occupation, then, And this was how the population
                of Ago-Ilaro began to increase. Iga-Ayefimi was one of the two <i>igas</i> referred
                to as <i>Oponle Oke-Odan”</i> or
                <i>“Orise Oke-Odan”</i> in Oke-Odan history just like
                <i>“Iga baba koko</i> or <i>“Oju-Oranyan”</i> which later became Ago-Eyo because of
                large number of people from Oyo-Atiba living there having earlier sojourned in
                several places.
              </p>
              <p>
                Iga-Ayefimi where Ago-Ilaro started was the old St. James’ Church site which was
                relinquished to Church Missionary Society (C.M.S) when some members of Andrew Sanu
                Memorial Anglican Church, Ago-Ilobi, broke away around 1917. It was from this place
                that the Arolagbade ruling house went to establish the present day Arolagbade
                compound (Iga Arola) still in Ago-Ilaro.
              </p>
              <p>
                Well-chronicled and unchallengeable written accounts preserved over the years
                strongly point out that Ayefimi had two wives namely: Ogunsentan Awele and Sekunola.
                From Ogunsentan Awele Ayefimi begat David Ogunbunmi Odunfa (deceased-27th day of
                April, 1923), Matthew Akinyemi (deceased-17th day of February, 1913), Fakeye Ajike
                (deceased-1944), Talabi O. Asabi (death date not yet available). Caleb Olaleye
                (deceased-14th day of August, 1914), Fadeyi Ajesutan Olobetirigi (deceased-21st day
                of May, 1916), Aina Olajide (death date not yet available) and Harriet
                Sangoyomi-later Oluyomi (last child, deceased-13th day of September,1971).From
                Sekunola Ayefimi begat Egunleti and Ajibawo. Sekunola from oral account escaped to
                her people in Dahomey with her children being an indigene to escape from slave
                raiders and that was the last that was heard of her. Her generations are till date
                in Republique du Benin.
              </p>
              <p>
                Ayefimi was succeeded by David Ogunbunmi Odunfa (his first child) as the second
                Balogun of Oke-Odan and father of the first Oloke-Odan of Oke-Odan, His Majesty, Oba
                Joseph Akinlade Odunfa Arolagbade1(30th day of April, 1942- 6th day of June, 1945).
              </p>
              <h2>THE AYEFIMI DECLARATION.</h2>
              <p>
                David Ogunbunmi or Ogubunmi Odunfa was the first child of Ayefimi Dosumu, while
                Matthew Akinyemi was one of his siblings. Odunfa’s full name at birth was Ogunbunmi
                or Ogubunmi Odunfa Ayefimi.
              </p>
              <p>
                Family historians revealed that there was a time their father (Ayefimi) took ill.
                The sickness was so serious that Ayefimi was taken for treatment at an herbalist
                home outside Oke-Odan. Akinyemi was then an infant and was too young to recognize
                Ayefimi as a father. He was the youngest child then. Feeding and other
                responsibilities naturally fell on their mother, Ogunsentan Awele and Odunfa who was
                the eldest child and first son. Odunfa, according to oral tradition, was kind, mild
                and generous, too, but his decisions were always firm and final.
              </p>
              <p>
                Akinyemi would always want to approach his older brother, Odunfa for additional
                meals other than what their mother would provide. Odunfa, being a kind and loving
                brother, would give extra meals and roasted (cocoyam and scented palmoil{' '}
                <i>“epoorun”</i>) to Akinyemi, especially at night during tale-telling.Thus, by the
                time Akinyemi became mature, he had taken special interest in Odunfa and recognized
                him as his <i>“personal lord and saviour”</i>. It was difficult for anyone either in
                the community or in the family to pull them apart. This marked the beginning of the
                perculiar bound between Odunfa and Akinyemi.
              </p>
              <p>
                Fortunately, after about five years, Ayefimi returned home in perfect health.
                Akinyemi and Ayefimi, bizarrely, could not recognize each other. Ayefimi had thought
                that Akinyemi would have died due to lack of adequate care. After a few days upon
                his return, Ayefimi inquired from Odunfa why an <i>unknown child</i> was so attached
                to Odunfa and why <i>this child</i> did not go to his parents, Odunfa laughed at
                Ayefimi’s question. Ayefimi then asked him to allow
                <i>omolomo (another person’s child)</i> to go to his parents. Odunfa and Ogunsentan
                Awele laughed and then opened up to Ayefimi that the child was Akinyemi. Ayefimi was
                shocked and asked them which Akinyemi was he. It was at this juncture they told him
                that it was his youngest child, and that he was the one looking after him while he,
                Ayefimi was away from home for treatments.
              </p>
              <p>
                Ayefimi who was too excited to hear this went into his room and came back to the
                passage immediately and pointed the longest finger of his right hand at Odunfa and
                declared:
                <i>
                  For what you Odunfa did, of all children that come out my body, no name among the
                  names of your siblings shall overshadow your name. Your name would be known all
                  over the world.You will give birth to kings and queens.Your generation will go to
                  school, eat and dine with the “oyinbos” (whitemen). Indeed, I appoint you Odunfa
                  and your unborn generations as kings over Oke-Odan according to age and birth
                  order-K’egbon s’aju aburo. K’aburo tele egbon e.You will have money and wealth for
                  enthronement (“Waa ri ola gba’de” ”Wa r’owo see)”
                </i>
                . This was where the Odunfas earned their royal tiltle, Arolagbade, which took
                effect after the death of Odunfa.
              </p>
              <p>
                Years later, Ayefimi became a python at a very old age and slithered away at a year
                this research cannot fix. It was at this point that the Odunfas garnered their
                panegyric,
                <i>“Omo Agbodere”</i> literarily meaning
                <i>the child of the man that became so old and became a python.</i>
              </p>
              <p>
                This incident marks the birth of the family tradition that forbids the Odunfas and
                other children of Ayefimi from eating python till date.
              </p>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </main>
  )
}

export default History
