function nazwa_miesiaca(nrm){

    if(nrm==0) return "Stycznia";
    if(nrm==1) return "Lutego";
    if(nrm==2) return "Marca";
    if(nrm==3) return "Kwietnia";
    if(nrm==4) return "Maja";
    if(nrm==5) return "Czerwca";
    if(nrm==6) return "Lipca";
    if(nrm==7) return "Sierpnia";
    if(nrm==8) return "Września";
    if(nrm==9) return "Października";
    if(nrm==10) return "Listopada";
    if(nrm==11) return "Grudnia";
}
function dzien(dzn){
    if(dzn==0) return "Niedziela";
    if(dzn==1) return "Poniedziałek";
    if(dzn==2) return "Wtorek";
    if(dzn==3) return "Środa";
    if(dzn==4) return "Czwartek";
    if(dzn==5) return "Piątek";
    if(dzn==6) return "Sobota";
}

    //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//funkcja zwraca date w postaci rrrr-mm-dd
function DataOdDo(data){



    let mies=data.getMonth()+1;
    let dzien=data.getDate();

    return data.getFullYear()+'-'+
    (mies<10?'0'+mies:mies)+'-'+
    (dzien<10?'0'+dzien:dzien);
    }

function pisz_data(){

        let data=new Date();
        let sek=data.getSeconds();
        let min=data.getMinutes();
        let godz=data.getHours();

        let wypis=("<h2>"+"Dziś jest: "+dzien(data.getDay())+(" ")+data.getDate()+(" ")+
        nazwa_miesiaca(data.getMonth())+(" ")+data.getFullYear()+"<br>"+

        "Jest godzina: ");

        if(godz<10) wypis+='0'+godz+(":");
        else wypis+=godz+(":");

        if(min<10) wypis+='0'+min+(":");
        else wypis+=min+(":");

        if(sek<10) wypis+='0'+sek;
        else wypis+=sek;

        let data_pobrana=document.getElementById('data_pobrana').value;

        wypis+='<br>';

        wypis+='<br> Data z pola: ';

            let Year=data_pobrana.substr(0,4);
            let Month=data_pobrana.substr(5,2)-1;
            let Day=data_pobrana[8]+data_pobrana[9];

            let data_zpola=new Date(Year, Month, Day);
            if(isNaN(data_zpola)) wypis+='Zła data;';
            else{
            wypis+=dzien(data_zpola.getDay())+' '+data_zpola.getDate()+' '+nazwa_miesiaca(data_zpola.getMonth())+ ' '+data_zpola.getFullYear();

            let czas=data.getTime()-data_zpola.getTime();

           if(czas>=0) {
           wypis+='<br> Od dnia ';
          }
        }