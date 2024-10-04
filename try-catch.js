function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorText = document.getElementById('error')
    try {
        const age = parseInt(ageText)

        if (isNaN(age)) {
            throw 'Please enter a number';
        }
        else if (age < 18) {
            throw "Baby not allow"
        }
        else if (age > 30) {
            throw "Old man not allow"
        }
    }
    catch (err) {
        console.log('ERROR : ', err);
        errorText.innerHTML = 'ERROR : ' + err;
    }
    finally {
        console.log('All done')
    }

}   