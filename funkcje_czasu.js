function pisz_data(data){
        
    let sek=data.getSeconds();
    let min=data.getMinutes();
    let godz=data.getHours();


    let wypis='Dziś jest '+dzien(data.getDay()) +' '+data.getDate() +' '+
    nazwa_miesiaca(data.getMonth())+ ' '+data.getFullYear()+'  '+
    (godz<10?'0'+godz:godz)
    +':'+
    (min<10?'0'+min:min)
    +':'; 
      
    if(sek<10) wypis+='0'+sek;
    else wypis+=sek;

    document.getElementById('kom').innerHTML=wypis;
}

//###################################
        //funcja zwraca date w postaci rrrr-mm-dd
        function DataOdDo(data){

            let mies=data.getMonth()+1;
            let dzien=data.getDate();
        
            return  data.getFullYear()+'-'+
                    (mies<10?'0'+mies:mies)+'-'+
                    (dzien<10?'0'+dzien:dzien);
        }

function dzien(nr) {
    
    if (nr == 0) return 'niedziela';
    else if(nr==1) return 'poniedziałek';
    else if(nr==2) return 'wtorek';
    else if(nr==3) return 'środa';
    else if(nr==4) return 'czwartek';
    else if(nr==5) return 'piątek';
    else return 'sobota';
        
}

    //################################
    function nazwa_miesiaca(nr_mies){

            if(nr_mies==0) return 'styczeń';
            else if(nr_mies==1) return 'luty';
            else if(nr_mies==2) return 'marzec';
            else if(nr_mies==3) return 'kwiecień';
            else if(nr_mies==4) return 'maj';
            else if(nr_mies==5) return 'czerwiec';
            else if(nr_mies==6) return 'lipiec';
            else if(nr_mies==7) return 'sierpień';
            else if(nr_mies==8) return 'wrzesień';
            else if(nr_mies==9) return 'październik';
            else if(nr_mies==10) return 'listopad';
            else if(nr_mies==11) return 'grudzień';
    }



function zero(liczba){
    if(liczba<10) return '0';
    else return '';
    
}






