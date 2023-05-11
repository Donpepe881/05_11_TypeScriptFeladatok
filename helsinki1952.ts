let eredmenyek: string[] = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4 200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat",
];

interface helsinki {
    helyezes: number;
    sportolokszama: Number;
    sportagnev: String;
    versenyszamnev: String;
}

function Objektumfeltolto(feltoltendoElem: string[]): helsinki[] {
    var beolvasottAdatok: helsinki[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let darabolandoSor: string[] = feltoltendoElem[i].split(" ");
        let objektum: helsinki = {
            helyezes: Number(darabolandoSor[0]),
            sportolokszama: Number(darabolandoSor[1]),
            sportagnev: darabolandoSor[2],
            versenyszamnev: darabolandoSor[3]
        };
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
var helsinkiAdatok: helsinki[] = Objektumfeltolto(eredmenyek);



// 3. feladat

function HelyezesekSzama(adatok: helsinki[]): any {
    return adatok.length;
}

let helyezesekOsszege: number = HelyezesekSzama(helsinkiAdatok);
document.write("3. feladat:<br>");
document.write("Pontszerző helyezések száma: " + helyezesekOsszege);

// 4. feladat

function ErmekSzama(adatok: helsinki[]): any {
    let arany: number = 0;
    let ezust: number = 0;
    let bronz: number = 0;

    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            arany++;
        }
        else if (adatok[i].helyezes == 2) {
            ezust++;
        }
        else if (adatok[i].helyezes == 3) {
            bronz++;
        }
    }
    document.write("<br> 4. feladat: <br> Arany: " + arany);
    document.write("<br> Ezüst: " + ezust);
    document.write("<br> Bronz: " + bronz);
}

ErmekSzama(helsinkiAdatok);

// 5. feladat

function OlimpiaiPontokSzama(adatok: helsinki[]): any {
    let elso: number = 0;
    let masodik: number = 0;
    let harmadik: number = 0;
    let negyedik: number = 0;
    let otodik: number = 0;
    let hatodik: number = 0;
    let osszeg: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].helyezes == 1) {
            elso += 7;
        }
        else if (adatok[i].helyezes == 2) {
            masodik += 5;
        }
        else if (adatok[i].helyezes == 3) {
            harmadik += 4;
        }
        else if (adatok[i].helyezes == 4) {
            harmadik += 3;
        }
        else if (adatok[i].helyezes == 5) {
            masodik += 2;
        }
        else if (adatok[i].helyezes == 6) {
            masodik += 1;
        }
    }
    osszeg = elso + masodik + harmadik + negyedik + otodik + hatodik;
    return osszeg;
}

let olimpiaiPontok: number = OlimpiaiPontokSzama(helsinkiAdatok);
document.write("<br> 5. feladat: <br> Olimpiai pontok száma: " + olimpiaiPontok);

document.write("<br> 6. feladat <br>");
function tornaSportAg(adatok: helsinki[]): any {
    let uszasErmekSzama: number = 0;
    let tornaErmekSzama: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].sportagnev == "uszas") {
            uszasErmekSzama += adatok[i].helyezes
        }
        else if (adatok[i].sportagnev == "torna") {
            tornaErmekSzama += adatok[i].helyezes
        }
    }
    if (uszasErmekSzama > tornaErmekSzama) {
        document.write("Úszás sportágban szereztek több érmet.")
    }
    else if (uszasErmekSzama < tornaErmekSzama) {
        document.write("Torna sportágban szereztek több érmet.")
    }
    else if (uszasErmekSzama == tornaErmekSzama) {
        document.write("Egyenlő volt az érmek száma")
    }
}

tornaSportAg(helsinkiAdatok);

// 7. feladat
document.write("<br> 7. feladat: <br>")

function LegtobbSportolo(adatok: helsinki[]): any {
    let maxIndex: number = 0;
    for (let i: number = 0; i < adatok.length; i++) {
        if (adatok[i].sportolokszama > adatok[maxIndex].sportolokszama) {
            maxIndex = i;
        }
    }
    document.write(" Helyezés: " + adatok[maxIndex].helyezes)
    document.write("<br> Sportág: " + adatok[maxIndex].sportagnev)
    document.write("<br> Versenyszám: " + adatok[maxIndex].versenyszamnev)
    document.write("<br> Sportolók száma: " + adatok[maxIndex].sportolokszama)
}

LegtobbSportolo(helsinkiAdatok);