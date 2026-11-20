const A1Names =
  "Akwey, Ateyo, Eytukan, Eywa, Mo'at, Na'vi, Newey, Neytiri, Ninat, Omatikaya, Otranyu, Rongloa, Silwanin, Tskaha, Tsu'tey";

const A2Names = "Aonung, Kiri, Lo'ak, Neteyam, Ronal, Rotxo, Tonowari, Tuktirey, Tsireya";

const Nouns = "'itan, 'ite, atan, au (drum), eyktan, i'en, Iknimaya, mikyun, ontu, seyri, tsaheylu, tsahìk, unil";

const Life = "Atokirina', Ikran, Palulukan, Riti, talioang, teylu, Toruk";

const Other = "eyk, irayo, makto, taron, te";

export const CameronWords = {
  A1Names,
  A2Names,
  Nouns,
  Life,
  Other,
};

export const reefReplacements = new Map<string, string>([
  ["Mo'at", "Moat"],
  ["Lo'ak", "Loak"],
  ["Rotxo", "Rodo"],
  ["i'en", "ien"],
]);
