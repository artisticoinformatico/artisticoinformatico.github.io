 /*
        document.write(min(2,4)+min(3,5));
        document.write("<br>")
         a+"x<sup>2</sup>+"+b+"x+"+c+"=0"
        document.write(suma(min(2,3), min(5, 3)));
        document.write("<br>");
        document.write(max3(101,12,3))*/

        function suma(a,b) {

            return a+b;
            
        }

        function min(a,b) {
            if(a<b) return a;
            else return b;
        }
        function max3(a,b,c) {
            var max=a;
            if (max<b) max = b;
            if (max<c) max = c;
            return max;
        }

        //  OOOOOOOOOOOOOOOOOOOHHHH YES DADDY

        function piszrownanie(a,b,c) {
            let text='';

            if(a==0 && b==0 && c==0) return text="HEy, soMETHing'S WrRrROnG, I cEn feLL IT :#'o";

            if(a>0) text+=a+'x<sup>2</sup>';
            else if(a<0) text+=a+'-x<sup>2</sup>';
            else if(a==0) text+='';
            else text+=a+'x<sup>2</sup>';

            
            if(b==1) text+='+x';
            else if(b>0) text+='+'+b+'x';
            else if(b==-1) text+='-x';
            else if(b==0) text+='';
            else text+=b+'x';

            if(c>0) text+='+'+c;
            else if(c<0) text+=c;
            text+='=0';




            return text;
        }

        function ilerozw(a,b,c) {
            if(a==0) return 'error';

            let delta = (b*b)-(4*a*c);

            if(delta==0) {
                return 1;
            } else if (delta>0) {
                return 2;
            } else if (delta<0) {
                return 0;
            }

        }

        function ilerozw1 (a,b,c) {
            if(a==0) return 'error';

            let delta = (b*b)-(4*a*c);

            if(delta==0) {
                return ' ma jedno rozwiązanie';
            } else if (delta>0) {
                return ' ma dwa rozwiązania';
            } else if (delta<0) {
                return ' nie ma rozwiązań';
            }
        }

       


        
        
