const url="https://api.openweathermap.org/data/2.5/";
const apikey="a821beb2f52413bba7ff063b0d4077e6";
const search=document.querySelector(".search");
const cityname=document.querySelector(".sehirsimi");
const seviye=document.querySelector(".seviye");
const durum=document.querySelector(".durum");
const Sehir1b=document.querySelector(".Sehir1b");
const Sehir1s=document.querySelector(".Sehir1s");
const Sehir2b=document.querySelector(".Sehir2b");
const Sehir2s=document.querySelector(".Sehir2s");
const Sehir3b=document.querySelector(".Sehir3b");
const Sehir3s=document.querySelector(".Sehir3s");
const Sehir4b=document.querySelector(".Sehir4b");
const Sehir4s=document.querySelector(".Sehir4s");
const Sehir5b=document.querySelector(".Sehir5b");
const Sehir5s=document.querySelector(".Sehir5s");







const Verial=(e) => {
    if(e.keyCode=='13') {
        searchvalue(search.value);
    }
}

const searchvalue = (psearchvalue) => {
    let veriistek=`${url}weather?q=${psearchvalue}&appid=${apikey}&units=metric&lang=tr`;
    
    fetch(veriistek)
    .then(havadurumu => {
        return havadurumu.json();
    })
    .then(yazdir)
}

const yazdir=(yazilandeger) => {
    cityname.textContent=`${yazilandeger.name}, ${yazilandeger.sys.country}`;
    seviye.textContent=`${Math.round(yazilandeger.main.temp)}°C`;
    durum.textContent=`${yazilandeger.weather[0].description}`;
}






const IstanbulF = () => {
    let defaultveri=`${url}weather?q=Istanbul&appid=${apikey}&units=metric&lang=tr`;

    fetch(defaultveri)
    .then(veriaktar=> {
        return veriaktar.json();
    })
    .then(Istanbul)
}

const Istanbul=(veri) => {
    Sehir1b.textContent=`${veri.name}`;
    Sehir1s.textContent=`${Math.round(veri.main.temp)}`;
}


// Sayfa yüklendiğinde İstanbul'un hava durumu bilgisini al ve yazdır



const IzmirF = () => {
    let defaultveri=`${url}weather?q=İzmir&appid=${apikey}&units=metric&lang=tr`;

    fetch(defaultveri)
    .then(veriaktar=> {
        return veriaktar.json();
    })
    .then(Izmir)
}

const Izmir=(veri) => {
    Sehir2b.textContent=`${veri.name}`;
    Sehir2s.textContent=`${Math.round(veri.main.temp)}`;
}


const AntalyaF = () => {
    let defaultveri=`${url}weather?q=Antalya&appid=${apikey}&units=metric&lang=tr`;

    fetch(defaultveri)
    .then(veriaktar=> {
        return veriaktar.json();
    })
    .then(Antalya)
}

const Antalya=(veri) => {
    Sehir3b.textContent=`${veri.name}`;
    Sehir3s.textContent=`${Math.round(veri.main.temp)}`;
}



const DiyarbakırF = () => {
    let defaultveri=`${url}weather?q=Diyarbakir&appid=${apikey}&units=metric&lang=tr`;

    fetch(defaultveri)
    .then(veriaktar=> {
        return veriaktar.json();
    })
    .then(Diyarbakır)
}

const Diyarbakır=(veri) => {
    Sehir4b.textContent=`${veri.name}`;
    Sehir4s.textContent=`${Math.round(veri.main.temp)}`;
}

const TrabzonF = () => {
    let defaultveri=`${url}weather?q=Trabzon&appid=${apikey}&units=metric&lang=tr`;

    fetch(defaultveri)
    .then(veriaktar=> {
        return veriaktar.json();
    })
    .then(Trabzon)
}

const Trabzon=(veri) => {
    Sehir5b.textContent=`${veri.name}`;
    Sehir5s.textContent=`${Math.round(veri.main.temp)}`;
}

IstanbulF();
IzmirF();
AntalyaF();
DiyarbakırF();
TrabzonF();






search.addEventListener("keypress",Verial);