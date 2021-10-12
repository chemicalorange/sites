let vod = document.querySelector(".vod");
let choice = document.querySelector(".choice");
let output = document.querySelector(".output");
let choiceBefore = document.querySelector('.choiceBefore');
console.log(choiceBefore)

choice.addEventListener("change",()=>{
    let numbers = Number(vod.value);
    switch(choiceBefore.value){
        case '2':
            numbers = parseInt(numbers, 2);
            break;

            case '3':
                numbers = parseInt(numbers, 3);
                break;

                case '8':
                numbers = parseInt(numbers, 8);
                    break;
            case '10':
                numbers = parseInt(numbers, 10);
                    break;
            
            case '12':
                numbers = parseInt(numbers, 12);
                    break;

            case '13':
                numbers = parseInt(numbers, 13);
                    break;
            case '16':
                numbers = parseInt(numbers, 16);
                    break;

     }

     switch(choice.value){
        case '2':
            output.innerHTML = +parseInt(numbers).toString(2);
            break;

            case '3':
                output.innerHTML = +parseInt(numbers).toString(3);
                break;

                case '8':
                    output.innerHTML = +parseInt(numbers).toString(8);
                    break;
            case '10':
                    output.innerHTML = +parseInt(numbers).toString(10);
                    break;
            
            case '12':
                    output.innerHTML = +parseInt(numbers).toString(12);
                    break;

            case '13':
                    output.innerHTML = +parseInt(numbers).toString(13);
                    break;
            case '16':
                let hexString = numbers.toString(16);
                if (hexString.length % 2) {
                  hexString = '0' + hexString;
                }
                output.innerHTML = hexString;
                    break;

            
            default:
                output.innerHTML = "Произошла ошибка вычислений";
     }

       
  
})