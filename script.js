const birth_month = 9
const birth_day = 24
let year;
const t = document.getElementById("titular")

const f = new Date()
if (f.getMonth() > birth_month - 1 || (f.getMonth() == birth_month - 1 && f.getDate() > birth_day)) {
year = f.getFullYear() + 1;} else if (f.getMonth() < birth_month - 1 || (f.getMonth() == birth_month - 1 && f.getDate() < birth_day)) {
year = f.getFullYear();} else {t.innerHTML = `Tilykke med fødselsdagen`; year = f.getFullYear() + 1;}

const aim = new Date(year, birth_month - 1, birth_day)

const dhms = document.getElementById("dhms");
const hms = document.getElementById("hms");
const ms = document.getElementById("ms");
const s = document.getElementById("s");


function update() {
const d = new Date();
const secs = Math.round((aim - d)/1000);
const urmin = ((aim-d)/1000)/60
const urhour = (urmin)/60
dhms.innerHTML = `${Math.floor((urhour)/24)} dage, ${Math.floor(urhour) - Math.floor((urhour)/24) * 24} timer, ${Math.floor(urmin) - (Math.floor(urhour) - Math.floor((urhour)/24) * 24) * 60 - Math.floor((urhour)/24) * 60 * 24} minutter og ${secs - Math.floor((urhour)/24) * 60 * 60 * 24 - (Math.floor(urhour) - Math.floor((urhour)/24) * 24) * 60 * 60 - (Math.floor(urmin) - (Math.floor(urhour) - Math.floor((urhour)/24) * 24) * 60 - Math.floor((urhour)/24) * 60 * 24) * 60} sekunder.`;
hms.innerHTML = `${Math.floor(urhour)} timer, ${Math.floor(Math.floor(urmin)) - Math.floor(urhour) * 60} minutter og ${secs - (Math.floor(Math.floor(urmin)) - Math.floor(urhour) * 60) * 60 - Math.floor(urhour)*3600} sekunder.`;
ms.innerHTML = `${Math.floor(urmin)} minuttter og ${secs - Math.floor(urmin) * 60} sekunder.`;
s.innerHTML = `${secs} sekunder.`;
}
update();
setInterval(update, 1000);
