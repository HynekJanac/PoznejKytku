var všechny_nazvy = ['bledule jarní', 'sněženka podsněžník', 'blahočet', 'hrachor jarní', 'hrachor luční', 'jetel ladní', 'jetel luční', 'jetel plazivý', 'trnovník bílý', 'vikev ptačí', 'borovice kosodřevina', 'borovice lesní', 'borovice vejmutovka', 'borovice černá', 'cedr atlaský', 'douglaska tisolistá', 'jedle bělokorá', 'jedlovec kanadský', 'modřín opadavý', 'smrk pichlavý', 'smrk ztepilý', 'brukev řepka olejka', 'hořčice rolní', 'kokoška pastuší tobolka', 'penízek rolní', 'česnáček lékařský', 'hadinec obecný', 'kostival lékařský', 'plicník lékařský', 'pomněnka bahenní', 'buk lesní', 'dub letní', 'dub zimní', 'bříza bělokorá', 'olše lepkavá', 'cykas', 'cypřiš', 'jalovec obecný', 'metasekvoje čínská', 'sekvojovec obrovský', 'tisovec dvouřadý', 'zerav západní', 'mateřídouška obecná', 'zběhovec plazivý', 'šalvěj luční', 'hvozdík kartouzek', 'kohoutek luční', 'ptačinec velkokvětý', 'chrpa modrá', 'chryzantéma', 'devětsil lékařský', 'heřmánek pravý', 'kopretina bílá', 'pampeliška lékařská', 'pcháč', 'podběl obecný', 'sedmikráska chudobka', 'slunečnice roční', 'čekanka obecná', 'řebříček obecný', 'javor klen', 'javor mléč', 'jinan dvoulaločný', 'jírovec maďal', 'kopřiva dvoudomá', 'kopřiva žahavka', 'divizna velkokvětá', 'hluchavka bílá', 'hluchavka nachová', 'jitrocel kopinatý', 'jitrocel prostřední', 'jitrocel větší', 'podbílek šupinatý', 'rozrazil rezekvítek', 'leknín bílý', 'stulík žlutý', 'kokořík', 'konvalinka vonná', 'ocún jesenní', 'vraní oko čtyřlisté', 'rulík zlomocný', 'bojínek luční', 'ječmen setý', 'kostřava', 'kukuřice setá', 'oves setý', 'pšenice setá', 'rákos obecný', 'rýže setá', 'srha říznačka', 'žito seté', 'lípa srdčitá', 'lípa velkolistá', 'habr obecný', 'líska obecná', 'lebeda lesklá', 'bedrník obecný', 'bolehlav plamatý', 'bolševník obecný', 'bršlice kozí noha', 'kerblík lesní', 'mák setý', 'mák vlčí', 'vlaštovičník větší', 'blatouch bahenní', 'hlaváček jarní', 'jaterník podléška', 'koniklec', 'orlíček obecný', 'orsej jarní', 'pryskyřník prudký', 'sasanka hajní', 'čemeřice', 'hrušeň', 'jabloň', 'jahodník obecný', 'jeřáb', 'kontryhel obecný', 'kuklík městský', 'mochna husí', 'mochna nátržník', 'ostružiník křovitý', 'ostružiník maliník', 'růže šípková', 'slivoň broskev', 'slivoň meruňka', 'slivoň trnka', 'slivoň třešeň', 'slivoň višeň', 'slivoň švestka', 'řepík lékařský', 'tis červený', 'violka vonná', 'topol bílý', 'topol osika', 'topol černý', 'vrba bílá', 'vrba jíva', 'vrba křehká', 'hlístník hnízdák', 'kruštík širolistý', 'střevíčník pantoflíček', 'vemeník dvoulistý', 'vstavač kukačka', 'vstavač mužský'];


var oder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144];

var answers = [0, 0, 0, 1, 0, 2, 2, 2, 2, 0, 2, 2, 0, 2, 1, 0, 1, 2, 2, 2, 0, 1, 2, 1, 1, 0, 0, 2, 2, 2, 0, 1, 0, 2, 1, 0, 0, 1, 2, 0, 0, 1, 1, 0, 2, 0, 2, 2, 0, 1, 0, 2, 0, 1, 0, 2, 2, 0, 1, 1, 1, 0, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 2, 2, 0, 1, 0, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 2, 0, 2, 1, 2, 0, 1, 0, 2, 0, 0, 1, 0, 0, 2, 1, 2, 0, 1, 1, 1, 2, 1, 0, 2, 0, 1, 1, 1, 1, 2, 2, 2, 0, 0, 0, 2, 1, 0, 2, 2, 1, 0, 1, 2];

var random_oder = oder.sort(() => Math.random() - 0.5);
var random_answers = answers.sort(() => Math.random() - 0.5);


function Zadání(position, right_answer_position) {
    document.getElementById("image").src = "Kvetiny/" + všechny_nazvy[position]+".jpg";

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
        document.getElementsByClassName("Progress-HUD")[0].style.display = "none";
        document.getElementsByClassName("Zadani-a-Odpovedi")[0].style.display = "none";
        
        document.getElementById("vysledky").style.display = "block";

        document.getElementById("vysledky-procenta").innerHTML = "procentuální úspěšnost: " + String(Math.round((right - wrong)/145 * 100)) + "%"
        document.getElementById("vysledky-hodnota").innerHTML = "počet bodů: " + String(right - wrong) + "/145";
        
        if (Math.round((right - wrong)/145 * 100) <= 30){
            document.getElementById("gif").src = "/img/meow-sad.gif"
        }
        
        if (Math.round((right - wrong)/145 * 100) >= 50){
            document.getElementById("gif").src = "/img/cat-displeased-why.gif"
        }

        if (Math.round((right - wrong)/145 * 100) >= 80){
            document.getElementById("gif").src = "/img/cat-happy.gif"
        }


    }
    document.getElementById("progress").style.width = (index * 0.6896551724).toString() + "%";
    document.getElementById("progress_numbers").innerHTML = index.toString() + "/145";
}

Quiz();