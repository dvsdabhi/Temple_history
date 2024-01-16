import React from "react";
import { useState } from "react";
import img from "../Asset/Dwarka/Dwarkadhish.jpg";
import img2 from "../Asset/Dwarka/2.jpg";
import img3 from "../Asset/Dwarka/3.jpg";
import img4 from "../Asset/Dwarka/4.jpg";
import img5 from "../Asset/Dwarka/5.jpg";
import img6 from "../Asset/Dwarka/6.jpg";

const Dwarka = () => {
    const [english, setEnglish] = useState(true);
    const [hindi, setHindi] = useState(false);
    const [gujrati, setGujarati] = useState(false);
    const [image, setImage] = useState(false);

    const onButtonClickEnglish = () => {
        setEnglish(true);
        setHindi(false);
        setGujarati(false);
        setImage(false);
    }

    const onButtonClickHindi = () => {
        setEnglish(false);
        setHindi(true);
        setGujarati(false);
        setImage(false);
    }

    const onButtonClickGujrati = () => {
        setEnglish(false);
        setHindi(false);
        setGujarati(true);
        setImage(false);
    }

    const onButtonClickImage = () => {
        setEnglish(false);
        setHindi(false);
        setGujarati(false);
        setImage(true);
    }

    return (
        <>
            <div className="space-y-4 overflow-auto h-screen">
                <div className="flex justify-center w-full">
                    <h1 className="text-xl font-bold border-2 p-2 rounded-md">Dwarkadhish Temple</h1>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
                <h1 className="text-xl font-bold">History Of Dwarkadhish Temple</h1>
                <div className="flex gap-5">
                    <button onClick={onButtonClickEnglish} className="border-2 border-gray-400 rounded-md p-2">English</button>
                    <button onClick={onButtonClickHindi} className="border-2 border-gray-400 rounded-md p-2">Hindi</button>
                    <button onClick={onButtonClickGujrati} className="border-2 border-gray-400 rounded-md p-2">Gujrati</button>
                    <button onClick={onButtonClickImage} className="border-2 border-gray-400 rounded-md p-2">Images</button>
                </div>
                {english && (
                    <div className="flex flex-col space-y-3">
                        <div>
                            <p>The Dwarkadhish temple, also known as the Jagat Mandir and occasionally spelled Dwarkadhish, is a Hindu temple dedicated to Krishna, who is worshiped here by the name Dwarkadhish (Dvārakādhisha), or 'King of Dwarka'. The temple is located at Dwarka city of Gujarat, India, which is one of the destinations of Char Dham, a Hindu pilgrimage circuit. The main shrine of the five-storied building, supported by 72 pillars, is known as Jagat Mandir or Nija Mandir. Archaeological findings suggest the original temple was built in 200 BCE at the earliest. The temple was rebuilt and enlarged in the 15th–16th century.</p>
                            <p>According to tradition, the original temple was believed to have been built by Krishna's grandson, Vajranabha, over the hari-griha (Krishna's residential place). The original structure was destroyed by Mahmud Begada in 1472, and subsequently rebuilt in the 15th–16th century,[citation needed] in the Māru-Gurjara style.</p>
                            <p>The temple became part of the Char Dham pilgrimage considered sacred by Hindus in India. Adi Shankara, the 8th century Hindu theologian and philosopher, visited the shrine. The other three being comprising Rameswaram, Badrinath and Puri. Even today a memorial within the temple is dedicated to his visit. Dwarakadheesh is the 98th Divya Desam of Vishnu on the subcontinent, glorified in the Divya Prabandha sacred texts. The temple is at an elevation of 12.19 metres (40.0 ft) above mean sea-level. It faces west. The temple layout consists of a garbhagriha (Nijamandira or Harigraha) and an antarala (an antechamber).[7] However, the existing temple is dated to 16th century.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Legend</h1>
                            <p>As per Hindu legend, Dwarka was built on a piece of land by Krishna that was reclaimed from the sea. According to the Mahabharata, the sage Durvasa once visited Krishna and his wife Rukmini. The sage wished that the pair took him to their palace, demanding that they pull his chariot like horses. The pair agreed and started to carry the sage, even as the latter struck Rukmini when she fell.After some distance, according to local tradition, Rukmini got tired and she requested some water from Krishna. Krishna dug a hole with his powers that brought in river Ganga to the place. Durvasa was furious and cursed Rukmini to remain in the place. The temple where Rukmini's shrine is found, is believed to be the place where she stood.In the epic, finding no fault with the divine couple, Durvasa blessed Krishna with invincibility everywhere except the soles of his feet, and declared that Rukmini would be the foremost of the deity's spouses and would be his eternal companion in the next world as well.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">History</h1>
                            <p>The town of Dwarka in Gujarat has a history that dates back centuries, and mentioned in the Mahabharata epic as the Dwaraka Kingdom. Situated on the banks of river Gomti, the town is described in legend as the capital of Krishna. Evidence such as a stone block with script, the way the stones were dressed showing that dowels had been used, and an examination of anchors found on the site suggest that the harbour site dates only to historical times, with some of the underwater structure being late Medieval. Coastal erosion was probably the cause of the destruction of what was an ancient port.</p>
                            <p>Hindus believe that the original temple was constructed by Vajranabha, the great grand son of Krishna, over the residential palace of Krishna. It was destroyed by Sultan Mahmud Begada in 1472.</p>
                            <p>The current temple in Chaulukya style was constructed in 15-16th century.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Structure</h1>
                            <p>The temple covers area of 27-metre by 21-metre with east–west length of 29-metre and north–south width of 23 metres. The temple is constructed of limestone and has intricate carvings.</p>
                            <p>It is a five storied edifice built over 72 pillars (sandstone temple with 60 pillars is also mentioned).There are two important entrances to the temple, one is the main entry door which is called the Moksha Dvara (meaning "Door to Salvation") and the exit door which is known as the Svarga Dvara (meaning: "Gate to Heaven").Outside this doorway are 56 steps that leads to the Gomati River.</p>
                            <p>In the central sanctum is deitified the main deity Dwarkadhish, the Trivikrama form of Vishnu (see Chaturvimshatimurti). Dwarkadhish is depicted with four arms. Balarama, elder brother of Krishna, is worshipped in the chamber to the left of the main altar. The chamber to the right houses the images of Pradyumna and Aniruddha, son and grandson of Krishna respectively. In shrines surrounding the central shrine, the deities Radha, Jambavati, Satyabhama, and Lakshmi are placed.[15] Shrines of Madhav Raoji (another name for Krishna) and sage Durvasa is also present in the temple.There are also two separate shrines dedicated to Radha Krishna and Devaki in front of the central shrine.</p>
                            <p>The temple spire rises to a height of 78 metres (256 ft). A flag, hoisted over the spire, shows the sun and moon, which is believed to indicate that Krishna would be there until the sun and moon exist on Earth.The flag, triangular in shape, is 50 feet (15 m) in length. This flag is changed four times a day with a new one and Hindus pay a huge sum of money to hoist it by purchasing a new flag. The money received on this account is credited to the trust fund of the temple to meet the operation and maintenance expenses of the temple.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Religious importance</h1>
                            <p>Since this site is associated with the ancient city of Dvārakā and the Vedic era Krishna of Mahabharata, it is an important place of pilgrimage for Hindus. It is one of three main pilgrimage sites related to "Krishna" circuit, namely 48 kos parikrama of Kurukshetra in Haryana state, Braj Parikarma in Mathura of Uttar Pradesh state and Dwarka Parikrama (Dwarkadish Yatra) at Dwarkadhish Temple in Gujarat state.</p>
                            <p>Though the origins are not clearly known, the Advaita school of Hinduism established by Adi Shankara, who created Hindu monastic institutions across India, attributes the origin of Char Dham to the seer. The four monasteries are located across the four corners of India and their attendant temples are Badrinath Temple at Badrinath in the North, Jagannath Temple at Puri in the East, Dwarakadhish Temple at Dwarka in the West and Ramanathaswamy Temple at Rameswaram in the South. Though ideologically the temples are divided between the sects of Hinduism, namely Shaivism and Vaishnavism, the Char Dham pilgrimage is an all Hindu affair.[19] The journey across the four cardinal points in India is considered sacred by Hindus who aspire to visit these temples once in their lifetime.[20] Traditionally the trip starts are the eastern end from Puri, proceeding in clockwise direction in a manner typically followed for circumambulation in Hindu temples.</p>
                            <p>The temple is open from 6.00 am to 1.00 pm and 5.00 pm to 9.30 pm. The Krishna Janmashtami festival, or Gokulashtami, the birthday of Krishna was commissioned by Vallaba (1473-1531).</p>
                            <p>According to a legend, Meera Bai, the famed Rajput princess who was also a poetess-saint and a staunch devotee of Krishna, merged with the deity at this temple.It is one of the Sapta Puri, the seven holy cities of India.</p>
                            <p>The temple is near the Dvaraka Pitha, one of the four pithas (religious centers) established by Adi Shankara (686-717) who pioneered unification of Hindu religious beliefs in the country.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">Awards</h1>
                            <p>The Dwarkadhish Jagat Mandir was awarded the certificate of "World Amazing Place" on 22 March 2021 by the World Talent Organization, New Jersey, USA.</p>
                        </div>
                    </div>
                )}

                {gujrati && (
                    <div className="flex flex-col space-y-3">
                        <div className="space-y-3">
                            <p>દ્વારકાધીશ મંદિર અથવા જગત મંદિર અથવા દ્વારકાધીશ એ એક હિન્દુ મંદિર છે, જે ભગવાન કૃષ્ણને સમર્પિત છે. શ્રી કૃષ્ણ અહીં દ્વારકાધીશ અથવા 'દ્વારકાના રાજા' નામથી પૂજાય છે. આ મંદિર ગુજરાતના દ્વારકા, ખાતે આવેલું છે, જે ચારધામ તરીકે ઓળખાતી હિન્દુ તીર્થયાત્રાના તીર્થોમાંનું એક છે. સાત માળ ધારવતા આ મંદિર ૬૦ થાંભલાઓ ઉપર રચાયેલું છે. આ મંદિરને જગત મંદિર અથવા નિજા મંદિર તરીકે ઓળખવામાં આવે છે, પુરાતત્વીય તારણો સૂચવે છે કે તે ૨,૦૦૦ - ૨,૨૦૦ વર્ષ જૂનું છે.૧૫ મી - ૧૬ મી સદીમાં મંદિરનું વિસ્તરણ કરવામાં આવ્યું હતું.દ્વારકાધીશ મંદિર એક પુષ્ટિમાર્ગ મંદિર છે, તેથી તે વલ્લભાચાર્ય અને વિઠ્ઠલેશનાથે બનાવેલ માર્ગદર્શિકા અને ધાર્મિક વિધિઓનું પાલન કરે છે. </p>
                            <p>પરંપરા અનુસાર એવું માનવામાં આવે છે મૂળ મંદિર કૃષ્ણના પૌત્ર વજ્રનાભ દ્વારા હરિગૃહ (કૃષ્ણનું રહેણાંક સ્થળ) ઉપર બાંધવામાં આવ્યું હતું. મૂળ માળખાને મહમૂદ બેગડા દ્વારા ૧૪૭૨ માં ધ્વંસ કરવામાં આવ્યો હતો, અને ત્યારબાદ ૧૫ મી -૧૬ મી સદીમાં ફરીથી બનાવવામાં આવ્યું હતું. મંદિર ભારતમાં હિન્દુઓ દ્વારા પવિત્ર ગણાતા ચારધામ યાત્રાધામનો ભાગ છે. આદિ શંકરાચાર્યે, ૮ મી સદીના હિન્દુ ધર્મશાસ્ત્રી અને તત્વજ્ઞાની, આ મંદિરની મુલાકાત લીધી હતી. અન્ય ત્રણ સ્થળો રામેશ્વરમ, બદ્રીનાથ અને જગન્નાથપુરી હતા. આજે પણ મંદિરની અંદર એક સ્મારક તેમની મુલાકાતને સમર્પિત છે. દ્વારકાધીશ એ ઉપમહાદ્વીપ પર વિષ્ણુનું ૯૮મું દિવ્ય દેશમ છે, જેનો દિવ્ય પ્રબંધ નામના પવિત્ર ગ્રંથમાં મહિમા અપાયો છે. તેનું નિર્માણ રાજા જગતસિંહ રાઠોડે કરાવ્યું હતું. મંદિર ૧૨.૧૯ મીટર ઉંચાઈ ધરાવે છે તે પશ્ચિમ તરફ દ્વાર ધરાવે છે. મંદિર એક ગર્ભગૃહ (નિજ મંદિર અથવા હરિગૃહ) અને અંતરાલ ધરાવે છે. એવું અનુમાન કરવામાં આવે છે કે આ મંદિરનું સ્થાન ૨,૫૦૦ વર્ષ જૂનું છે જ્યાં કૃષ્ણે તેમનું શહેર અને એક મંદિર બનાવ્યું હતું. જો કે, હાલનું મંદિર ૧૬મી સદીથી છે.</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">દંતકથા</h1>
                            <p>હિંદુ દંતકથા મુજબ, દ્વારકાને શ્રી કૃષ્ણ દ્વારા સમુદ્ર થકી મેળવવામાં આવેલા જમીનના ટુકડા પર બાંધવામાં આવી હતી. દુર્વાસા ઋષિ એકવાર કૃષ્ણ અને તેમની પત્ની રૂકમણિને મળવા ગયા હતા. ઋષિએ ઈચ્છા વ્યક્ત કરી કે શ્રી કૃષ્ણ અને રૂકમણિનું યુગલ તેમને તેમના મહેલમાં લઈ જાય. યુગલ સહમત થયું અને ઋષિને તેમના મહેલમાં લઈ ગયા. થોડા અંતર ચાલ્યા પછી, રુકમણી થાકી ગયા અને તેમણે શ્રી કૃષ્ણ પાસે થોડું પાણી માંગ્યું. કૃષ્ણએ એક છિદ્ર ખોદ્યું જે દ્વારા ગંગા નદીને તે જગ્યાએ લાવી આપી. ઋષિ દુર્વાસા આ જોઈ ગુસ્સે થયા અને તેમણે રૂક્મિણીને તે સ્થળે રહેવાનો શ્રાપ આપ્યો. આ રૂકમણિ મંદિર એ જ સ્થળે નિર્માણ થયા હોવાનું માનવામાં આવે છે.</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">ઇતિહાસ</h1>
                            <p>ગુજરાતમાં આવેલા દ્વારકા શહેરનો એક ઇતિહાસ છે જે સદીઓ પૂર્વેનો છે, અને મહાભારત મહાકાવ્યમાં તેનો દ્વારકા કે દ્વારિકા રાજ્ય તરીકે ઉલ્લેખ કર્યો છે. ગોમતી નદીના કાંઠે આવેલું આ શહેર કૃષ્ણની રાજધાની તરીકે દંતકથાઓમાં વર્ણવવામાં આવ્યું છે. સ્ક્રિપ્ટવાળા શિલાલેખો ધરાવતા મોટા પથ્થરો, પથ્થરોની રીત જે રીતે છીણાવામાં આવ્યા હતા જે દર્શાવે છે કે તેમાં ખૂંટા વપરાયા હતા, અને અહીં વપરાયલા લંગરો જેવા પુરાવા દર્શાવે છે કે આ બંદર શહેર ઐતિહાસિક સ્થળ છે. દરિયાની અંદર ખોદકામ કરતા મળી આવેલા માળખા આ શહેર મધ્યયુગીન હોવાનું દર્શાવે દરિયા કાંઠાના ધોવાણ ને કારણે આ પ્રાચીન બંદર શહેરના વિનાશનું કારણ માનવામાં આવે છે.</p>
                            <p>હિન્દુઓ માને છે કે મૂળ મંદિર કૃષ્ણને કૃષ્ણના મહેલની ઉપર કૃષ્ણના પ્રપૌત્ર વ્રજનાભ દ્વારા બંધાવવામાં આવ્યું હતું. સુલતાન મહમદ બેગડા દ્વારા ૧૪૭૨ માં તેનો નાશ કરવામાં આવ્યો હતો. </p>
                            <p>વર્તમાન મંદિરનું નિર્માણ ૧૫-૧૬ મી સદીદરમ્યાન ચૌલુક્ય શૈલીમાં કરવામાં આવ્યું હતું. મંદિર ૨૭-મીટર લંબાઈ ૨૧-મીટર પહોળાઈ ધરાવતા ક્ષેત્ર પર આવેલું છે. તેની પૂર્વ-પશ્ચિમ લંબાઈ ૨૯-મીટર અને ઉત્તર-દક્ષિણ પહોળાઈ ૨૩ મીટર છે. મંદિરનું સૌથી ઉંચું શિખર ૫૧.૮ મીટર છે.</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">ધાર્મિક મહત્વ</h1>
                            <p>આ સ્થળ પ્રાચિન દ્વારિકા નગરી અને વૈદિક યુગમાં રચાયેલ મહાભારતના કૃષ્ણ સાથે સંકળાયેલું હોવાથી, તે હિંદુઓ માટેનું પવિત્ર તીર્થસ્થાન છે. તે શ્રી કૃષ્ણના સંબંધીત ત્રિપુટી પરિકમ્માઓ- હરિયાણા રાજ્યના કુરુક્ષેત્રની ૪૮ કોસ પરિક્રમા, ઉત્તર પ્રદેશ રાજ્યના મથુરાની વ્રજ પરિક્રમા અને ગુજરાત રાજ્યના દ્વારકાધીશ મંદિરની દ્વારકા પરિક્રમા એમ ત્રણ પરિક્રમાઓમાંની એક છે.</p>
                            <p>મંદિરની ઉપર ધ્વજ સૂર્ય અને ચંદ્રને બતાવે છે, જે એવું બતાવે છે કે પૃથ્વી પર સૂર્ય અને ચંદ્ર અસ્તિત્વમાં છે ત્યાં સુધી કૃષ્ણ રહેશે.[૧૦] દિવસમાં પાંચ વખત ધ્વજ બદલવામાં આવે છે, પરંતુ પ્રતીક તેનું તે જ રહે છે. આ મંદિર બાવન સ્તંભો પર બંધાયેલી પાંચ માળની રચના ધરાવે છે જે ૭૨ સ્તંભો પર ચણાયેલું છે. મંદિર ૭૮.૩ મીટર ઉંચું છે.[૧૧] મંદિર ચૂનાના પત્થરથી બનાવવામાં આવ્યું છે જે હજી પણ પ્રાચીન સ્થિતિમાં છે. આ મંદિરમાં બાંધકામ પછીના અનુગામી શાસક રાજવંશો દ્વારા કરવામાં આવેલી જટિલ શિલ્પ કૃતિ દર્શાવે છે અલબત્ આ કાર્યો થકી માળખું વધારે વિસ્તૃત કરવામાં આવ્યું નહોતું.</p>
                            <p>મંદિરમાં બે પ્રવેશદ્વાર છે. મુખ્ય પ્રવેશદ્વાર (ઉત્તર પ્રવેશ) ને "મોક્ષ દ્વાર" (મુક્તિનો દરવાજો) કહેવામાં આવે છે. આ પ્રવેશદ્વાર લોકોને મુખ્ય બજારમાં લઈ જાય છે. દક્ષિણ પ્રવેશદ્વારને "સ્વર્ગ દ્વાર" (સ્વર્ગનો દરવાજો) કહેવામાં આવે છે. આ દરવાજાની બહાર ૫૬ પગથિયા છે જે ગોમતી નદી તરફ દોરી જાય છે.[૧૨] મંદિર સવારે ૬.૦૦ થી બપોરે ૧.૦૦ વાગ્યા સુધી અને સાંજે અને ૫.૦૦ થી ૯.૩૦ સુધી દર્શન માટે ખુલ્લું રહે છે. કૃષ્ણજન્માષ્ટમી તહેવાર અથવા ગોકુલાષ્ટમી, કૃષ્ણનો જન્મદિવસ વલ્લભ (1473-1531) દ્વારા શરૂ કરવામાં આવ્યો હતો.</p>
                            <p>એક દંતકથા અનુસાર રાજકુમારી અને સંત, કૃષ્ણના પ્રખર ભક્ત, મીરાંબાઈ, આ મંદિરમાં દેવતામાં વિલિન થઈ ગયા હતા.[૧૪] આ શહેર ભારતના સપ્ત પુરી (ભારતના સાત પવિત્ર શહેરો)માંનું એક છે.</p>
                            <p>આ મંદિર, ભારતની ચાર પીઠોમાંની એક એવી દ્વારકા પીઠનું પણ ઘર છે. આ પીઠો આદિ શંકરાચાર્ય (૬૮૬-૭૧૭) દ્વારા સ્થાપવામાં આવી હતી. શંકરચાર્યે દેશમાં હિન્દુ ધાર્મિક માન્યતાઓના એકીકરણની પહેલ કરી હતી. આ પીઠ ચાર માળનું માળખું છે જે દેશના જુદા જુદા ભાગોમાં શંકરાચાર્ય દ્વારા સ્થાપિત ચાર પીઠો દર્શાવે છે. અહીં દિવાલો પર ચિત્રો મુકવામાં આવ્યા છે જે શંકરાચાર્યના જીવન ઇતિહાસને દર્શાવે છે તેના ગુંબજમાં વિવિધ મુદ્રામાં શિવની કોતરણી છે.</p>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">માળખું</h1>
                            <p>આ મંદિર ૭૨ થાંભલાઓ પર બાંધવામાં આવેલી પાંચ માળની રચના ધરાવે છે અમુક સ્થળે ૬૦ થાંભલાવાળા રેતીના પત્થરનું મંદિર તરીકે પણ ઉલ્લેખિત છે. કૃષ્ણના પૌત્ર દ્વારા શ્રી કૃષ્ણના મહેલ - હરિગ્રહ ઉપર આ મંદિરનું નિર્માણ કરાવ્યું હતું. મંદિરમાં સભાખંડ અથવા પ્રેક્ષક ખંડ (રંગ મંડપ) છે. [૧૫] મંદિરમાં બે મહત્વપૂર્ણ પ્રવેશદ્વાર છે, એક મુખ્ય પ્રવેશદ્વાર છે જેને મોક્ષ દ્વાર કહેવામાં આવે છે (જેનો અર્થ " મુક્તિનો દ્વાર " છે) અને બહાર નીકળો દરવાજો જે સ્વર્ગ દ્વાર તરીકે ઓળખાય છે (જેનો અર્થ છે: "સ્વર્ગનો દરવાજો)". </p>
                            <p>ગર્ભગૃહમાં સ્થાપિત મુખ્ય દેવતા દ્વારકાધીશ છે, જે વિષ્ણુના ત્રિવિક્રમ સ્વરૂપ તરીકે જાણીતા છે અને તેમને ચાર હથિયારો ધારણ કરેલા દર્શાવવામાં આવ્યા છે.  મુખ્ય વેદીની ડાબી બાજુના ઓરડા પર, કૃષ્ણના મોટા ભાઈ, બલરામ છે. જમણી તરફની ઓરડીમાં શ્રીકૃષ્ણના પુત્ર પ્રદ્યુમ્ન અને પૌત્ર અનિરુદ્ધની છબીઓ છે. મધ્યસ્થ મંદિરની આજુબાજુની દેરીઓમાં રાધા, રૂકમણી, જાંબાવતી, સત્યભામા, લક્ષ્મી, [૧૫] દેવકી (કૃષ્ણની માતા), માધવ રાવજી (કૃષ્ણનું બીજું નામ), રૂકમણિ, જુગલ સ્વરૂપ (કૃષ્ણનું નામ), લક્ષ્મી નારાયણની મૂર્તિઓ છે.</p>
                            <p>મંદિરના ઊંચાઈ ૭૮ મીટર છે અને તેના પર સૂર્ય અને ચંદ્રના પ્રતીકો સાથે ખૂબ મોટો ધ્વજ લહેરાવવામાં આવે છે.[૧૫] ધ્વજ, ત્રિકોણાકાર આકારનો, ૫૦ ફૂટા (૧૫ મીટર) લંબાઈ ધરાવે છે. આ ધ્વજ દિવસમાં પાંચ વખત એક નવા ધ્વજ દ્વારા બદલવામાં આવે છે. નવો ધ્વજ ખરીદીને તેને લહેરાવવા માટે ભક્તો મોટી રકમ ચૂકવે છે. આ ખાતા પર પ્રાપ્ત થયેલ નાણાં મંદિરના સંચાલન અને જાળવણી ખર્ચને પૂરા કરવા માટે મંદિરના ટ્રસ્ટ ફંડમાં જમા થાય છે.</p>
                        </div>
                    </div>
                )}

                {hindi && (
                    <div className="flex flex-col space-y-3">
                        <div>
                            <p>द्वारिकाधीश मंदिर, भी जगत मंदिर के रूप मे जाना जाता है। यह हिंदू मंदिर भगवान श्री विष्णु के आठवे अवतार भगवान श्री कृष्णा को समर्पित है। मंदिर भारत के गुजरात के द्वारका में स्थित है। मंदिर 72 स्तंभों द्वारा समर्थित और 5 मंजिला इमारत का मुख्य मंदिर, जगत मंदिर या निज मंदिर के रूप में जाना जाता है, पुरातात्विक निष्कर्ष यह बताते हैं कि यह 2,200 - 2,500 साल पुराना है।. 15 वीं -16 वीं शताब्दी में मंदिर का विस्तार किया गया।. द्वारकाधीश मंदिर एक पुष्टिमार्ग मंदिर है, इसलिए यह वल्लभाचार्य और विठ्लेसनाथ द्वारा बनाए गए दिशानिर्देशों और अनुष्ठानों का पालन करता है।[उद्धरण चाहिए] [ उद्धरण वांछित ] परंपरा के अनुसार, मूल मंदिर का निर्माण कृष्ण के पड पोते वज्रनाभ ने हरि-गृह (भगवान कृष्ण के आवासीय स्थान) पर किया था। मंदिर भारत में हिंदुओं द्वारा पवित्र माने जाने वाले चार धाम तीर्थ का हिस्सा बन गया, 8 वीं शताब्दी के हिंदू धर्मशास्त्री और दार्शनिक आदि शंकराचार्य ने मंदिर का दौरा किया। अन्य तीन में रामेश्वरम , बद्रीनाथ और पुरी शामिल हैं । आज भी मंदिर के भीतर एक स्मारक उनकी यात्रा को समर्पित है। द्वारकाधीश उपमहाद्वीप में विष्णु के 98 वें दिव्य देशम हैं, जो दिव्य प्रभा पवित्र ग्रंथों में महिमा मंडित करते हैं।</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">किंवदंती</h1>
                            <p>हिंदू कथा के अनुसार, द्वारका का निर्माण कृष्ण द्वारा भूमि के एक टुकड़े पर किया गया था जो समुद्र से प्राप्त हुआ था। ऋषि दुर्वासा एक बार कृष्ण और उनकी पत्नी रुक्मिणी से मिलने गए । ऋषि की इच्छा थी कि जोड़ा उन्हें अपने महल में ले जाए। यह जोड़ा आसानी से सहमत हो गया और ऋषि के साथ उनके महल में जाने लगा। कुछ दूर जाने के बाद रुक्मिणी थक गईं और उन्होंने कृष्ण से कुछ पानी मांगा। कृष्णा ने एक पौराणिक छेद खोदा जो गंगा नदी में लाया गया था। ऋषि दुर्वासा उग्र हो गए और रुक्मिणी को जगह में रहने के लिए शाप दिया। जिस मंदिर में रुक्मिणी का मंदिर पाया जाता है.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">इतिहास</h1>
                            <p>गुजरात के द्वारका शहर का एक इतिहास है जो सदियों पुराना है, और इसका उल्लेख महाभारत महाकाव्य में द्वारका साम्राज्य के रूप में मिलता है । गोमती नदी के तट पर स्थित, इस शहर को भगवान कृष्ण की राजधानी के रूप में वर्णित किया गया है। स्क्रिप्ट के साथ एक पत्थर के खंड के रूप में साक्ष्य, जिस तरह से पत्थरों को कपड़े पहने हुए दिखाया गया था कि डॉवल्स का उपयोग किया गया था, और साइट पर पाए गए एंकर की एक परीक्षा से पता चलता है कि बंदरगाह की साइट केवल ऐतिहासिक समय की है, जिसमें कुछ पानी के नीचे की संरचना देर से हो रही है मध्यकालीन। तटीय क्षरण संभवतः एक प्राचीन बंदरगाह के विनाश का कारण था।.</p>
                            <p>हिंदुओं का मानना है कि मूल मंदिर का निर्माण कृष्ण के आवासीय महल के ऊपर, कृष्ण के महान पुत्र वज्रनाभ द्वारा किया गया था।.</p>
                            <p>चालुक्य शैली में वर्तमान मंदिर का निर्माण 15-16वीं शताब्दी में किया गया है। यह मंदिर २1 मीटर का क्षेत्रफल २१ मीटर और पूर्व-पश्चिम की २ ९ मीटर और उत्तर-दक्षिण चौड़ाई २३ मीटर है। मंदिर की सबसे ऊँची चोटी 51.8 मीटर ऊँची है।.</p>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">धार्मिक महत्व</h1>
                            <p>मंदिर के ऊपर का ध्वज सूर्य और चंद्रमा को दर्शाता है, जो माना जाता है कि यह दर्शाता है कि कृष्ण तब तक रहेंगे जब तक सूर्य और चंद्रमा पृथ्वी पर मौजूद रहेंगे।. ध्वज को दिन में 5 बार से बदल दिया जाता है, लेकिन प्रतीक समान रहता है। मंदिर में पचहत्तर स्तंभों पर निर्मित पांच मंजिला संरचना है। मंदिर का शिखर 78.3 मीटर ऊंचा है।. * मंदिर का निर्माण चूना पत्थर से हुआ है जो अभी भी प्राचीन स्थिति में है। मंदिर में क्षेत्र पर शासन करने वाले राजवंशों के उत्तराधिकारियों द्वारा की गई जटिल मूर्तिकला का विस्तार दिखाया गया है। इन कार्यों से संरचना का अधिक विस्तार नहीं हुआ। मंदिर में दो प्रवेश द्वार हैं। मुख्य प्रवेश द्वार (उत्तर प्रवेश द्वार) को "मोक्ष द्वार" कहा जाता है। यह प्रवेश द्वार एक को मुख्य बाजार में ले जाता है। दक्षिण प्रवेश द्वार को "स्वर्ग द्वार" कहा जाता है। इस द्वार के बाहर 56 सीढ़ियाँ हैं जो गोमती नदी की ओर जाती हैं।. मंदिर सुबह 6 बजे से दोपहर 1.00 बजे तक और शाम 5.00 बजे से रात 9.30 बजे तक खुला रहता है। कृष्णजन्माष्टमी त्योहार, या गोकुलाष्टमी, कृष्ण का जन्मदिन वल्बा (1473-1531) द्वारा शुरू किया गया था।.</p>
                        </div>
                    </div>
                )}

                {image && (
                    <div className="grid grid-cols-3 gap-y-5">
                        <img src={img2} alt="" className="h-[250px] w-[300px]" />
                        <img src={img3} alt="" className="h-[250px] w-[300px]" />
                        <img src={img4} alt="" className="h-[250px] w-[300px]" />
                        <img src={img5} alt="" className="h-[250px] w-[300px]" />
                        <img src={img6} alt="" className="h-[250px] w-[300px]" />
                    </div>
                )}
            </div>
        </>
    );
};

export default Dwarka;