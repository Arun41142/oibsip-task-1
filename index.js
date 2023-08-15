alert("choose the value from the dropdown list");
var inp_cel=document.querySelector(".cel");
var inp_fah=document.querySelector(".fah");

inp_cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c*9/5)+32;
    inp_fah.value = f;
});

inp_fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f-32)*5/9;
    inp_cel.value = c;
})
