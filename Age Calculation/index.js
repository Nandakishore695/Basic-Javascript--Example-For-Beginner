document.querySelector("#handleDaysConvert").addEventListener('click', function () {
    let birthNumber = document.querySelector('#birth-number').value;

    let yearbirthNumber = parseInt(birthNumber.substring(0, 4));
    let monthbirthNumber = parseInt(birthNumber.substring(5, 7));
    let datebirthNumber = parseInt(birthNumber.substring(8, 10));

    let today = new Date();

    let yearcurrentNumber = today.getFullYear();
    let monthcurrentNumber = today.getMonth() + 1;
    let datecurrentNumber = today.getDate();

    let isYear, isMonth, isDate;
    isYear = yearbirthNumber - yearcurrentNumber;
    isMonth = monthbirthNumber - monthcurrentNumber;
    isDate = datebirthNumber - datecurrentNumber;

    let year, month, date;
    year = Math.abs(isYear);
    month = Math.abs(isMonth);
    date = Math.abs(isDate);

    let result = `your age is ${year}, and total months ${month}, and total dates ${date}`
    document.querySelector('#age-result').innerHTML = result;
});