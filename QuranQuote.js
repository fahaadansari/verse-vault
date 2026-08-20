

 const references = {
    patience: [
        "2:45", "2:153", "2:155", "2:156", "2:157", "2:177", "2:249", "3:17", "3:120", "3:125",
        "3:142", "3:146", "3:186", "3:200", "7:87", "7:126", "7:128", "7:137", "8:46", "8:65",
        "8:66", "10:109", "11:11", "11:49", "11:115", "12:18", "12:83", "12:90", "13:22", "14:5",
        "16:96", "16:110", "16:126", "16:127", "18:28", "20:130", "21:85", "22:35", "23:111", "25:75",
        "28:54", "28:80", "29:59", "30:60", "31:17", "31:31", "32:24", "38:44", "39:10", "40:55",
        "40:77", "41:35", "42:43", "46:35", "47:31", "50:39", "52:48", "70:5", "73:10", "74:7"
    ],
    mercy: [
        "2:163", "2:218", "3:103", "3:135", "3:159", "4:29", "4:110", "6:12", "6:54", "6:147",
        "7:56", "7:151", "7:156", "9:61", "9:128", "10:58", "10:107", "11:47", "12:53", "12:64",
        "12:87", "12:92", "14:34", "15:56", "16:119", "17:24", "18:10", "18:65", "19:21", "21:83",
        "21:107", "23:109", "23:118", "24:21", "25:70", "27:46", "28:86", "29:23", "30:21", "30:46",
        "33:43", "35:2", "36:58", "39:53", "40:7", "41:32", "42:5", "44:42", "45:30", "48:29",
        "55:1", "57:9", "57:28", "59:22", "60:7"
    ],
    hope: [
        "2:186", "2:214", "2:286", "3:139", "3:160", "4:84", "4:104", "5:52", "6:151", "8:26",
        "9:40", "9:51", "12:87", "13:28", "14:7", "15:56", "18:46", "21:83", "21:87", "21:88",
        "21:90", "22:15", "28:85", "29:5", "39:53", "40:60", "65:2", "65:3", "65:7", "87:8",
        "93:3", "93:4", "93:5", "94:5", "94:6", "94:7", "94:8"
    ],
    gratitude: [
        "2:152", "2:172", "3:144", "3:145", "4:147", "5:6", "5:89", "7:10", "7:144", "8:26",
        "10:60", "12:38", "14:7", "14:34", "16:14", "16:78", "16:81", "16:114", "22:36", "23:78",
        "27:40", "28:73", "29:17", "30:46", "31:12", "31:14", "34:13", "35:30", "35:34", "39:7",
        "39:66", "42:23", "45:12", "46:15", "55:13", "56:70", "67:23", "76:3", "76:22", "80:24"
    ],
    strength: [
        "2:249", "2:255", "3:139", "3:146", "3:147", "3:173", "4:45", "5:11", "8:60", "8:62",
        "8:65", "8:66", "9:40", "9:52", "11:52", "18:39", "22:40", "22:78", "26:62", "28:26",
        "30:54", "33:22", "33:25", "35:10", "40:51", "41:30", "42:43", "47:7", "48:4", "51:58",
        "54:42", "58:21", "61:14"
    ]
};







async function GetVerses() {
    const selectedTopic=document.getElementById("role").value;
const TopicVerse=references[selectedTopic];
    if(!selectedTopic){

        document.getElementById('translationText').textContent="Please select any emotion or topic";
        return;
    }

    document.getElementById("arabicText").textContent = "جارٍ التحميل...";
    document.getElementById("translationText").textContent = "Fetching verse...";
    document.getElementById("verseRef").textContent = "";

const selectedCategory=references[selectedTopic];
    const randomVerse=Math.floor(Math.random()*selectedCategory.length)
    const selectedVerse=selectedCategory[randomVerse];
    const arabicUrl = `https://api.alquran.cloud/v1/ayah/${selectedVerse}/quran-simple-enhanced`;
const EngUrl = `https://api.alquran.cloud/v1/ayah/${selectedVerse}/en.sahih`;
   try{
    const [arabicRes,EngRes]=await Promise.all([
        fetch(arabicUrl),
        fetch(EngUrl)
    ])

    const arabData=await arabicRes.json();
    const Engdata=await EngRes.json();

    
  document.getElementById("arabicText").textContent = arabData.data.text;
        document.getElementById("translationText").textContent = Engdata.data.text;
      document.getElementById("verseRef").textContent = `${Engdata.data.surah.englishName} (${selectedVerse})`;

    } catch (error) {
        console.error("Error fetching verse data:", error);
    }
}
document.querySelector(".login-card button").addEventListener("click", function (e) {
    e.preventDefault();
    GetVerses();
});
