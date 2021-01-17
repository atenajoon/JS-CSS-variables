const inputs = document.querySelectorAll('.controls input');
//  here the inputs constant is not an array, it's just a NodeList 
//  which has some of the methods of the array, and in case
//  we need to have more methods we need to convert it to an array

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

// End... Atena