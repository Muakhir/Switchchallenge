let btnSubmit = document.querySelector('[data-submit]')
//create a function
function displayMarks(){
  let marks = +document.querySelector('[data-marks]').value
  // labels reference
  let output = document.querySelector('[data-output]')
  // switch
  switch (true){
    case marks < 50:
      output.textContent = `sorry,but you failed. Try again next time`;
    break;
    case marks <= 59:
      output.textContent = `you passed`
    break;
    case marks <= 69:
      output.textContent =`C+`
    break;
    case marks <= 79:
      output.textContent =`Distinction`
    break;
    case marks <= 89:
      output.textContent =`B+`
    break;
    case marks <= 99:
      output.textContent =`A`
    break;
    case marks == 100:
      output.textContent =`A+`
    break;
    default:
      output.textContent =`Have not submited`
    break;
  
  }
}
btnSubmit.addEventListener('click', displayMarks)