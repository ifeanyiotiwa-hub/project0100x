const getName = function()
{
    const maleNames= ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    const femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    // const getGender = document.getElementsByName('gender');
    const dateOfBirth = document.getElementById("dob");
    const dobValueArray = dateOfBirth.value.split('-');
    const dobNumArr = dobValueArray.map(val => parseInt(val));

    let CC = Math.floor(dobNumArr[0] / 100);
    let YY= Math.floor(dobNumArr[0] % 100);
    let MM = dobNumArr[1];
    let DD = dobNumArr[2];
    

    let dayOfWeek = ( ( (Math.round(CC/4)) -2*CC-1) + (Math.round(5*YY/4) ) + (Math.round(26*(MM+1)/10)) + DD ) % 7;

    const isCheckedMale = document.getElementById('male-gender').checked;
    const isCheckedFemale = document.getElementById('female-gender').checked;

    console.log(isCheckedFemale);
    console.log(isCheckedMale);

    if(!(dayOfWeek)) {
        this.alert(`Nothing was entered`);
    }
    else {
        if (isCheckedFemale || isCheckedMale){
        this.alert(`Your AKAN NAME is ${femaleNames[dayOfWeek] || maleNames[dayOfWeek]}`);
        }
    }
    console.log(dayOfWeek);

}