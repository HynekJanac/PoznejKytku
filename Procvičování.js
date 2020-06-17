{
    var všechny_nazvy = ['bledule jarní', 'sněženka podsněžník', 'blahočet', 'hrachor jarní', 'hrachor luční', 'jetel ladní', 'jetel luční', 'jetel plazivý', 'trnovník bílý', 'vikev ptačí', 'borovice kosodřevina', 'borovice lesní', 'borovice vejmutovka', 'borovice černá', 'cedr atlaský', 'douglaska tisolistá', 'jedle bělokorá', 'jedlovec kanadský', 'modřín opadavý', 'smrk pichlavý', 'smrk ztepilý', 'brukev řepka olejka', 'hořčice rolní', 'kokoška pastuší tobolka', 'penízek rolní', 'česnáček lékařský', 'hadinec obecný', 'kostival lékařský', 'plicník lékařský', 'pomněnka bahenní', 'buk lesní', 'dub letní', 'dub zimní', 'bříza bělokorá', 'olše lepkavá', 'cykas', 'cypřiš', 'jalovec obecný', 'metasekvoje čínská', 'sekvojovec obrovský', 'tisovec dvouřadý', 'zerav západní', 'mateřídouška obecná', 'zběhovec plazivý', 'šalvěj luční', 'hvozdík kartouzek', 'kohoutek luční', 'ptačinec velkokvětý', 'chrpa modrá', 'chryzantéma', 'devětsil lékařský', 'heřmánek pravý', 'kopretina bílá', 'pampeliška lékařská', 'pcháč', 'podběl obecný', 'sedmikráska chudobka', 'slunečnice roční', 'čekanka obecná', 'řebříček obecný', 'javor klen', 'javor mléč', 'jinan dvoulaločný', 'jírovec maďal', 'kopřiva dvoudomá', 'kopřiva žahavka', 'divizna velkokvětá', 'hluchavka bílá', 'hluchavka nachová', 'jitrocel kopinatý', 'jitrocel prostřední', 'jitrocel větší', 'podbílek šupinatý', 'rozrazil rezekvítek', 'leknín bílý', 'stulík žlutý', 'kokořík', 'konvalinka vonná', 'ocún jesenní', 'vraní oko čtyřlisté', 'rulík zlomocný', 'bojínek luční', 'ječmen setý', 'kostřava', 'kukuřice setá', 'oves setý', 'pšenice setá', 'rákos obecný', 'rýže setá', 'srha říznačka', 'žito seté', 'lípa srdčitá', 'lípa velkolistá', 'habr obecný', 'líska obecná', 'lebeda lesklá', 'bedrník obecný', 'bolehlav plamatý', 'bolševník obecný', 'bršlice kozí noha', 'kerblík lesní', 'mák setý', 'mák vlčí', 'vlaštovičník větší', 'blatouch bahenní', 'hlaváček jarní', 'jaterník podléška', 'koniklec', 'orlíček obecný', 'orsej jarní', 'pryskyřník prudký', 'sasanka hajní', 'čemeřice', 'hrušeň', 'jabloň', 'jahodník obecný', 'jeřáb', 'kontryhel obecný', 'kuklík městský', 'mochna husí', 'mochna nátržník', 'ostružiník křovitý', 'ostružiník maliník', 'růže šípková', 'slivoň broskev', 'slivoň meruňka', 'slivoň trnka', 'slivoň třešeň', 'slivoň višeň', 'slivoň švestka', 'řepík lékařský', 'tis červený', 'violka vonná', 'topol bílý', 'topol osika', 'topol černý', 'vrba bílá', 'vrba jíva', 'vrba křehká', 'hlístník hnízdák', 'kruštík širolistý', 'střevíčník pantoflíček', 'vemeník dvoulistý', 'vstavač kukačka', 'vstavač mužský'];

    var všechny_obrazky = ['Kvetiny na poznavacku/amarylkovité (Amarryllidaceae)/bledule jarní.jpg', 'Kvetiny na poznavacku/amarylkovité (Amarryllidaceae)/sněženka podsněžník.jpg', 'Kvetiny na poznavacku/blahočetovité (Araucariaceae)/blahočet.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/hrachor jarní.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/hrachor luční.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/jetel ladní.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/jetel luční.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/Jetel plazivý.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/trnovník bílý.jpg', 'Kvetiny na poznavacku/bobovité (Fabaceae)/vikev ptačí.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice kosodřevina.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice lesní.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice vejmutovka.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/borovice černá.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/cedr atlaský.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/douglaska tisolistá.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/jedle bělokorá.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/jedlovec kanadský.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/modřín opadavý.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/smrk pichlavý.jpg', 'Kvetiny na poznavacku/borovicovité (Pinaceae)/smrk ztepilý.jpg', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/brukev řepka olejka.jpg', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/hořčice rolní.jpg', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/kokoška pastuší tobolka.jpg', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/penízek rolní.jpg', 'Kvetiny na poznavacku/brukvovité (Brassicaceae)/česnáček lékařský.jpg', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/hadinec obecný.jpg', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/kostival lékařský.jpg', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/plicník lékařský.jpg', 'Kvetiny na poznavacku/brutnákovité (Boraginaceae)/pomněnka bahenní.jpg', 'Kvetiny na poznavacku/bukovité (Fagaceae)/buk lesní.jpg', 'Kvetiny na poznavacku/bukovité (Fagaceae)/dub letní.jpg', 'Kvetiny na poznavacku/bukovité (Fagaceae)/dub zimní.jpg', 'Kvetiny na poznavacku/břízovité (Betulaceae)/bříza bělokorá.jpg', 'Kvetiny na poznavacku/břízovité (Betulaceae)/olše lepkavá.jpg', 'Kvetiny na poznavacku/cykasovité (Cycadaceae)/cykas.jpg', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/cypřiš.jpg', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/jalovec obecný.jpg', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/metasekvoje čínská.jpg', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/sekvojovec obrovský.jpg', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/tisovec dvouřadý.jpg', 'Kvetiny na poznavacku/cypřišovité (Cupressaceae)/zerav západní.jpg', 'Kvetiny na poznavacku/hluchavkovité (Lamiaceae)/mateřídouška obecná.jpg', 'Kvetiny na poznavacku/hluchavkovité (Lamiaceae)/zběhovec plazivý.jpg', 'Kvetiny na poznavacku/hluchavkovité (Lamiaceae)/šalvěj luční.jpg', 'Kvetiny na poznavacku/hvozdíkovité (Caryophyllaceae)/hvozdík kartouzek.jpg', 'Kvetiny na poznavacku/hvozdíkovité (Caryophyllaceae)/kohoutek luční.jpg', 'Kvetiny na poznavacku/hvozdíkovité (Caryophyllaceae)/ptačinec velkokvětý.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/chrpa modrá.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/chryzantéma.JPG', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/devětsil lékařský.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/heřmánek pravý.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/kopretina bílá.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/pampeliška lékařská.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/pcháč.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/podběl obecný.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/sedmikráska chudobka.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/slunečnice roční.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/čekanka obecná.jpg', 'Kvetiny na poznavacku/hvězdnicovité (Asteraceae)/řebříček obecný.jpg', 'Kvetiny na poznavacku/javorovité (Aceraceae)/javor klen.jpg', 'Kvetiny na poznavacku/javorovité (Aceraceae)/javor mléč.jpg', 'Kvetiny na poznavacku/jinanovité (Ginkgoaceae)/jinan dvoulaločný.jpg', 'Kvetiny na poznavacku/jírovcovité (Hippocastanaceae)/jírovec maďal.jpg', 'Kvetiny na poznavacku/kopřivovité (Urticaceae)/kopřiva dvoudomá.jpg', 'Kvetiny na poznavacku/kopřivovité (Urticaceae)/kopřiva žahavka.jpg', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/divizna velkokvětá.jpg', 'Kvetiny na poznavacku/Hluchavkovité (Lamiaceae)/hluchavka bílá.jpg', 'Kvetiny na poznavacku/Hluchavkovité (Lamiaceae)/hluchavka nachová.jpg', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/jitrocel kopinatý.jpg', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/jitrocel prostřední.jpg', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/jitrocel větší.jpg', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/podbílek šupinatý.jpg', 'Kvetiny na poznavacku/krtičníkovité (Scophulariaceae)/rozrazil rezekvítek.jpg', 'Kvetiny na poznavacku/leknínovité (Nymphaeaceae)/leknín bílý.jpg', 'Kvetiny na poznavacku/leknínovité (Nymphaeaceae)/stulík žlutý.jpg', 'Kvetiny na poznavacku/liliovité (liliaceae)/kokořík.jpg', 'Kvetiny na poznavacku/liliovité (liliaceae)/konvalinka vonná.jpg', 'Kvetiny na poznavacku/liliovité (liliaceae)/ocún jesenní.jpg', 'Kvetiny na poznavacku/liliovité (liliaceae)/vraní oko čtyřlisté.jpg', 'Kvetiny na poznavacku/lilkovité (Solanaceae)/rulík zlomocný.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/bojínek luční.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/ječmen setý.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/kostřava.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/kukuřice setá.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/oves setý.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/pšenice setá.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/rákos obecný.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/rýže setá.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/srha říznačka.jpg', 'Kvetiny na poznavacku/lipnicovité (Poaceae)/žito seté.jpg', 'Kvetiny na poznavacku/lípovité (Tiliaceae)/lípa srdčitá.jpg', 'Kvetiny na poznavacku/lípovité (Tiliaceae)/lípa velkolistá.jpg', 'Kvetiny na poznavacku/lískovité (Corylaceae)/habr obecný.jpg', 'Kvetiny na poznavacku/lískovité (Corylaceae)/líska obecná.jpg', 'Kvetiny na poznavacku/merlíkovité (Chenopodiaceae)/lebeda lesklá.jpg', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bedrník obecný.jpg', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bolehlav plamatý.jpg', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bolševník obecný.jpg', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/bršlice kozí noha.jpg', 'Kvetiny na poznavacku/miříkovité (Apiaceae)/kerblík lesní.jpg', 'Kvetiny na poznavacku/mákovité (Papaveraceae)/mák setý.jpg', 'Kvetiny na poznavacku/mákovité (Papaveraceae)/mák vlčí.jpg', 'Kvetiny na poznavacku/mákovité (Papaveraceae)/vlaštovičník větší.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/blatouch bahenní.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/hlaváček jarní.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/jaterník podléška.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/koniklec.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/orlíček obecný.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/orsej jarní.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/pryskyřník prudký.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/sasanka hajní.jpg', 'Kvetiny na poznavacku/pryskyřníkovité (Ranunculaceae)/čemeřice.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/hrušeň.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/jabloň.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/jahodník obecný.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/jeřáb.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/kontryhel obecný.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/kuklík městský.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/mochna husí.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/mochna nátržník.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/ostružiník křovitý.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/ostružiník maliník.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/růže šípková.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň broskev.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň meruňka.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň trnka.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň třešeň.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň višeň.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/slivoň švestka.jpg', 'Kvetiny na poznavacku/růžovité (Rosaceae)/řepík lékařský.jpg', 'Kvetiny na poznavacku/tisovité (Taxaceae)/tis červený.jpg', 'Kvetiny na poznavacku/violkovité (Violaceae)/violka vonná.jpg', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/topol bílý.jpg', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/topol osika.jpg', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/topol černý.jpg', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/vrba bílá.jpg', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/vrba jíva.jpg', 'Kvetiny na poznavacku/vrbovité (Salicaceae)/vrba křehká.jpg', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/hlístník hnízdák.jpg', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/kruštík širolistý.jpg', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/střevíčník pantoflíček.jpg', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/vemeník dvoulistý.jpg', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/vstavač kukačka.jpg', 'Kvetiny na poznavacku/vstavačovité (Orchideaceae)/vstavač mužský.jpg'];
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

    if (index > 145) {
        document.getElementById("progress_background").style.display = "none";
        document.getElementById("progress").style.display = "none";
        document.getElementById("progress_numbers").style.display = "none";

        document.getElementById("image_box").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("vysledky").style.display = "block";
        document.getElementById("body").style.display = "block";
        document.getElementById("body").innerHTML = "počet bodů " + (right - wrong).toString() + "/145";
    }
    document.getElementById("progress").style.width = (index * 0.5862068966).toString() + "%";
    document.getElementById("progress_numbers").innerHTML = index.toString() + "/145";
}

Quiz();