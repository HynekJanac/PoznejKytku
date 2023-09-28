{
    var všechny_nazvy = ['bledule jarní', 'sněženka podsněžník', 'blahočet', 'hrachor jarní', 'hrachor luční', 'jetel ladní', 'jetel luční', 'jetel plazivý', 'trnovník bílý', 'vikev ptačí', 'borovice kosodřevina', 'borovice lesní', 'borovice vejmutovka', 'borovice černá', 'cedr atlaský', 'douglaska tisolistá', 'jedle bělokorá', 'jedlovec kanadský', 'modřín opadavý', 'smrk pichlavý', 'smrk ztepilý', 'brukev řepka olejka', 'hořčice rolní', 'kokoška pastuší tobolka', 'penízek rolní', 'česnáček lékařský', 'hadinec obecný', 'kostival lékařský', 'plicník lékařský', 'pomněnka bahenní', 'buk lesní', 'dub letní', 'dub zimní', 'bříza bělokorá', 'olše lepkavá', 'cykas', 'cypřiš', 'jalovec obecný', 'metasekvoje čínská', 'sekvojovec obrovský', 'tisovec dvouřadý', 'zerav západní', 'mateřídouška obecná', 'zběhovec plazivý', 'šalvěj luční', 'hvozdík kartouzek', 'kohoutek luční', 'ptačinec velkokvětý', 'chrpa modrá', 'chryzantéma', 'devětsil lékařský', 'heřmánek pravý', 'kopretina bílá', 'pampeliška lékařská', 'pcháč', 'podběl obecný', 'sedmikráska chudobka', 'slunečnice roční', 'čekanka obecná', 'řebříček obecný', 'javor klen', 'javor mléč', 'jinan dvoulaločný', 'jírovec maďal', 'kopřiva dvoudomá', 'kopřiva žahavka', 'divizna velkokvětá', 'hluchavka bílá', 'hluchavka nachová', 'jitrocel kopinatý', 'jitrocel prostřední', 'jitrocel větší', 'podbílek šupinatý', 'rozrazil rezekvítek', 'leknín bílý', 'stulík žlutý', 'kokořík', 'konvalinka vonná', 'ocún jesenní', 'vraní oko čtyřlisté', 'rulík zlomocný', 'bojínek luční', 'ječmen setý', 'kostřava', 'kukuřice setá', 'oves setý', 'pšenice setá', 'rákos obecný', 'rýže setá', 'srha říznačka', 'žito seté', 'lípa srdčitá', 'lípa velkolistá', 'habr obecný', 'líska obecná', 'lebeda lesklá', 'bedrník obecný', 'bolehlav plamatý', 'bolševník obecný', 'bršlice kozí noha', 'kerblík lesní', 'mák setý', 'mák vlčí', 'vlaštovičník větší', 'blatouch bahenní', 'hlaváček jarní', 'jaterník podléška', 'koniklec', 'orlíček obecný', 'orsej jarní', 'pryskyřník prudký', 'sasanka hajní', 'čemeřice', 'hrušeň', 'jabloň', 'jahodník obecný', 'jeřáb', 'kontryhel obecný', 'kuklík městský', 'mochna husí', 'mochna nátržník', 'ostružiník křovitý', 'ostružiník maliník', 'růže šípková', 'slivoň broskev', 'slivoň meruňka', 'slivoň trnka', 'slivoň třešeň', 'slivoň višeň', 'slivoň švestka', 'řepík lékařský', 'tis červený', 'violka vonná', 'topol bílý', 'topol osika', 'topol černý', 'vrba bílá', 'vrba jíva', 'vrba křehká', 'hlístník hnízdák', 'kruštík širolistý', 'střevíčník pantoflíček', 'vemeník dvoulistý', 'vstavač kukačka', 'vstavač mužský'];

    var všechny_obrazky = ['Kvetiny na poznavacku/amarylkovité (Amarryllidaceae)/bledule jarní.webp', 'Kvetiny na poznavacku/amarylkovité (Amarryllidaceae)/sněženka podsněžník.webp', 'Kvetiny na poznavacku/blahočetovité (Araucariaceae)/blahočet.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/hrachor jarní.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/hrachor luční.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/jetel ladní.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/jetel luční.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/Jetel plazivý.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/trnovník bílý.webp', 'Kvetiny na poznavacku/bobovité (Fabaceae)/vikev ptačí.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice kosodřevina.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice lesní.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice vejmutovka.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice černá.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/cedr atlaský.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/douglaska tisolistá.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/jedle bělokorá.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/jedlovec kanadský.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/modřín opadavý.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/smrk pichlavý.webp', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/smrk ztepilý.webp', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/brukev řepka olejka.webp', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/hořčice rolní.webp', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/kokoška pastuší tobolka.webp', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/penízek rolní.webp', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/česnáček lékařský.webp', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/hadinec obecný.webp', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/kostival lékařský.webp', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/plicník lékařský.webp', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/pomněnka bahenní.webp', 'Kvetiny na poznavacku/bukovité (Fagaceae)/buk lesní.webp', 'Kvetiny na poznavacku/bukovité (Fagaceae)/dub letní.webp', 'Kvetiny na poznavacku/bukovité (Fagaceae)/dub zimní.webp', 'Kvetiny na poznavacku/břízovité (Betulaceae)/bříza bělokorá.webp', 'Kvetiny na poznavacku/břízovité (Betulaceae)/olše lepkavá.webp', 'Kvetiny na poznavacku/cykasovité (Cycadaceae)/cykas.webp', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/cypřiš.webp', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/jalovec obecný.webp', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/metasekvoje čínská.webp', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/sekvojovec obrovský.webp', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/tisovec dvouřadý.webp', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/zerav západní.webp', 'Kvetiny na poznavacku/hluchavkovité (Lamiaceae)/mateřídouška obecná.webp', 'Kvetiny na poznavacku/hluchavkovité (Lamiaceae)/zběhovec plazivý.webp', 'Kvetiny na poznavacku/hluchavkovité (Lamiaceae)/šalvěj luční.webp', 'Kvetiny na poznavacku/hvozdíkovité (Caryophyllaceae)/hvozdík kartouzek.webp', 'Kvetiny na poznavacku/hvozdíkovité (Caryophyllaceae)/kohoutek luční.webp', 'Kvetiny na poznavacku/hvozdíkovité (Caryophyllaceae)/ptačinec velkokvětý.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/chrpa modrá.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/chryzantéma.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/devětsil lékařský.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/heřmánek pravý.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/kopretina bílá.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/pampeliška lékařská.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/pcháč.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/podběl obecný.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/sedmikráska chudobka.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/slunečnice roční.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/čekanka obecná.webp', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/řebříček obecný.webp', 'Kvetiny na poznavacku/javorovité (Aceraceae)/javor klen.webp', 'Kvetiny na poznavacku/javorovité (Aceraceae)/javor mléč.webp', 'Kvetiny na poznavacku/jinanovité (Ginkgoaceae)/jinan dvoulaločný.webp', 'Kvetiny na poznavacku/jírovcovité (Hippocastanaceae)/jírovec maďal.webp', 'Kvetiny na poznavacku/kopřivovité (Urticaceae)/kopřiva dvoudomá.webp', 'Kvetiny na poznavacku/kopřivovité (Urticaceae)/kopřiva žahavka.webp', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/divizna velkokvětá.webp', 'Kvetiny na poznavacku/Hluchavkovité (Lamiaceae)/hluchavka bílá.webp', 'Kvetiny na poznavacku/Hluchavkovité (Lamiaceae)/hluchavka nachová.webp', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/jitrocel kopinatý.webp', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/jitrocel prostřední.webp', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/jitrocel větší.webp', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/podbílek šupinatý.webp', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/rozrazil rezekvítek.webp', 'Kvetiny na poznavacku/leknínovité (Nymphaeaceae)/leknín bílý.webp', 'Kvetiny na poznavacku/leknínovité (Nymphaeaceae)/stulík žlutý.webp', 'Kvetiny na poznavacku/liliovité (liliaceae)/kokořík.webp', 'Kvetiny na poznavacku/liliovité (liliaceae)/konvalinka vonná.webp', 'Kvetiny na poznavacku/liliovité (liliaceae)/ocún jesenní.webp', 'Kvetiny na poznavacku/liliovité (liliaceae)/vraní oko čtyřlisté.webp', 'Kvetiny na poznavacku/lilkovité (Solanaceae)/rulík zlomocný.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/bojínek luční.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/ječmen setý.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/kostřava.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/kukuřice setá.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/oves setý.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/pšenice setá.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/rákos obecný.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/rýže setá.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/srha říznačka.webp', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/žito seté.webp', 'Kvetiny na poznavacku/lípovité (Tiliaceae)/lípa srdčitá.webp', 'Kvetiny na poznavacku/lípovité (Tiliaceae)/lípa velkolistá.webp', 'Kvetiny na poznavacku/lískovité (Corylaceae)/habr obecný.webp', 'Kvetiny na poznavacku/lískovité (Corylaceae)/líska obecná.webp', 'Kvetiny na poznavacku/merlíkovité (Chenopodiaceae)/lebeda lesklá.webp', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bedrník obecný.webp', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bolehlav plamatý.webp', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bolševník obecný.webp', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bršlice kozí noha.webp', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/kerblík lesní.webp', 'Kvetiny na poznavacku/mákovité (Papaveraceae)/mák setý.webp', 'Kvetiny na poznavacku/mákovité (Papaveraceae)/mák vlčí.webp', 'Kvetiny na poznavacku/mákovité (Papaveraceae)/vlaštovičník větší.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/blatouch bahenní.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/hlaváček jarní.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/jaterník podléška.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/koniklec.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/orlíček obecný.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/orsej jarní.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/pryskyřník prudký.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/sasanka hajní.webp', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/čemeřice.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/hrušeň.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/jabloň.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/jahodník obecný.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/jeřáb.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/kontryhel obecný.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/kuklík městský.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/mochna husí.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/mochna nátržník.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/ostružiník křovitý.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/ostružiník maliník.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/růže šípková.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň broskev.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň meruňka.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň trnka.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň třešeň.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň višeň.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň švestka.webp', 'Kvetiny na poznavacku/růžovité (Rosaceae)/řepík lékařský.webp', 'Kvetiny na poznavacku/tisovité (Taxaceae)/tis červený.webp', 'Kvetiny na poznavacku/violkovité (Violaceae)/violka vonná.webp', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/topol bílý.webp', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/topol osika.webp', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/topol černý.webp', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/vrba bílá.webp', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/vrba jíva.webp', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/vrba křehká.webp', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/hlístník hnízdák.webp', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/kruštík širolistý.webp', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/střevíčník pantoflíček.webp', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/vemeník dvoulistý.webp', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/vstavač kukačka.webp', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/vstavač mužský.webp'];
}

var oder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144];

var answers = [0, 0, 0, 1, 0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 1, 0, 1, 2, 2, 2, 0, 1, 2, 1, 1, 0, 0, 2, 2, 2, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 0, 1, 1, 0, 2, 0, 2, 2, 0, 1, 0, 2, 0, 1, 0, 2, 2, 0, 1, 1, 1, 0, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2, 2, 0, 1, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 1, 2, 0, 1, 0, 2, 0, 0, 1, 0, 0, 2, 1, 2, 0, 1, 1, 1, 2, 1, 0, 2, 0, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 2, 1, 0, 2, 2, 1, 0, 1, 2];

var random_oder = oder.sort(() => Math.random() - 0.5);
var random_answers = answers.sort(() => Math.random() - 0.5);



function Zadání(position, right_answer_position) {
    document.getElementById("image").src = všechny_obrazky[position];

    if (right_answer_position == 0) {
        document.getElementById("option0").innerHTML = všechny_nazvy[position];
        if (position == 146) {
            document.getElementById("option1").innerHTML = všechny_nazvy[position - 1];
            document.getElementById("option2").innerHTML = všechny_nazvy[position - 2];
        }
        else {
            document.getElementById("option1").innerHTML = všechny_nazvy[position + 1];
            document.getElementById("option2").innerHTML = všechny_nazvy[position + 2];
        }


    }

    if (right_answer_position == 1) {
        document.getElementById("option1").innerHTML = všechny_nazvy[position];
        if (position == 146) {
            document.getElementById("option0").innerHTML = všechny_nazvy[position - 1];
            document.getElementById("option2").innerHTML = všechny_nazvy[position - 2];
        }
        else {
            document.getElementById("option0").innerHTML = všechny_nazvy[position + 1];
            document.getElementById("option2").innerHTML = všechny_nazvy[position + 2];
        }
    }


    if (right_answer_position == 2) {
        document.getElementById("option2").innerHTML = všechny_nazvy[position];
        if (position == 146) {
            document.getElementById("option1").innerHTML = všechny_nazvy[position - 1];
            document.getElementById("option0").innerHTML = všechny_nazvy[position - 2];
        }
        else {
            document.getElementById("option1").innerHTML = všechny_nazvy[position + 1];
            document.getElementById("option0").innerHTML = všechny_nazvy[position + 2];
        }
    }
}

var index = 0;
var right = 0;
var wrong = 0;

function Quiz() {
    var spravna = random_answers[index];
    Zadání(random_oder[index], spravna)
    document.getElementById("Next").style.display = "none";
    document.getElementById("right0").style.display = "none";
    document.getElementById("right1").style.display = "none";
    document.getElementById("right2").style.display = "none";
    document.getElementById("wrong0").style.display = "none";
    document.getElementById("wrong1").style.display = "none";
    document.getElementById("wrong2").style.display = "none";

    document.getElementById("option0").onclick = function () {
        document.getElementById("Next").style.display = "inline";
        if (spravna == 0) {
            document.getElementById("right0").style.display = "inline";
            right += 1;
        }

        else {
            document.getElementById("wrong0").style.display = "inline";
            wrong += 1;
        }

    }

    document.getElementById("option1").onclick = function () {
        document.getElementById("Next").style.display = "inline";
        if (spravna == 1) {
            document.getElementById("right1").style.display = "inline";
            right += 1;
        }

        else {
            document.getElementById("wrong1").style.display = "inline";
            wrong += 1;
        }

    }

    document.getElementById("option2").onclick = function () {
        document.getElementById("Next").style.display = "inline";
        if (spravna == 2) {
            document.getElementById("right2").style.display = "inline";
            right += 1;
        }

        else {
            document.getElementById("wrong2").style.display = "inline";
            wrong += 1;
        }

    }


    index += 1;

    if (index > 5) {
        document.getElementsByClassName("Progress-HUD")[0].style.display = "none";
        document.getElementsByClassName("Zadani-a-Odpovedi")[0].style.display = "none";
        
        document.getElementById("vysledky").style.display = "block";

        document.getElementById("vysledky-procenta").innerHTML = "procentuální úspěšnost: " + String(Math.round(right/145 * 100)) + "%"
        document.getElementById("vysledky-hodnota").innerHTML = "počet bodů: " + (right - wrong).toString() + "/145";
    }
    document.getElementById("progress").style.width = (index * 0.6896551724).toString() + "%";
    document.getElementById("progress_numbers").innerHTML = index.toString() + "/145";
}

Quiz();