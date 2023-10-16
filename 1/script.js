function checkloveper(){

    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;
  
    if(name == ""){
     alert('Введите ваше имя');
    }else if (name.length <=2 ) {
     alert('Мин длина 3')
    }else if(!isNaN(name)){
     alert('Никаких чисел');
    }
  
    else if(lname == ""){
     alert('Введите имя вашей второй половинки');
    }else if (lname.length <=2 ) {
     alert('Мин длина 3')
    }else if(!isNaN(lname)){
     alert('Никаких чисел');
    }else{
    var lovdata = Math.random() * 100;
    lovdata = Math.floor(lovdata);
    alert((name)+' подходит к '+ (lname) +' на '+ (lovdata) +' процентов!');
    }
   }
