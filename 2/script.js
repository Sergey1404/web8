window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculateBMI);
};
function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#result");
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Введите рост!";
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Введите вес!";
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi <= 18.5) 
            result.innerHTML = `Недостаточный вес : <span>${bmi}</span>`;
        else if (bmi >= 18.5 && bmi <= 25) 
            result.innerHTML = `Нормально : <span>${bmi}</span>`;
        else if (bmi >= 25 && bmi <= 30) 
            result.innerHTML = `У вас излишек веса : <span>${bmi}</span>`;
        else result.innerHTML = `Ожирение : <span>${bmi}</span>`;
    }
}
