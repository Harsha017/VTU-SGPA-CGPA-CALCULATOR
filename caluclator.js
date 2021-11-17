document.querySelector('#btn1_sub').addEventListener('click',() =>{
    let first_sgpa=document.querySelector('#sub-1').value;
    let first_sgpa_per=(first_sgpa /100)*5;
    let first_sgpa_per_result=first_sgpa_per.toPrecision(3);
    let two_sgpa=document.querySelector("#sub-2").value;
    let two_sgpa_per=(two_sgpa / 100) * 5;
    let two_sgpa_per_result=two_sgpa_per.toPrecision(3);
    let three_sgpa=document.querySelector("#sub-3").value;
    let three_sgpa_per=(three_sgpa / 100) * 5;
    let three_sgpa_per_result=three_sgpa_per.toPrecision(3);
    let four_sgpa=document.querySelector("#sub-4").value;
    let four_sgpa_per=(four_sgpa / 100) * 10;
    let four_sgpa_per_result=four_sgpa_per.toPrecision(3);
    let five_sgpa=document.querySelector("#sub-5").value;
    let five_sgpa_per=(five_sgpa / 100) * 15;
    let five_sgpa_per_result=five_sgpa_per.toPrecision(3);
    let six_sgpa=document.querySelector("#sub-6").value;
    let six_sgpa_per=(six_sgpa / 100) * 20;
    let six_sgpa_per_result=six_sgpa_per.toPrecision(3);
    let seven_sgpa=document.querySelector("#sub-7").value;
    let seven_sgpa_per=(seven_sgpa / 100) * 25;
    let seven_sgpa_per_result=seven_sgpa_per.toPrecision(3);
    let eight_sgpa=document.querySelector("#sub-8").value;
    let eight_sgpa_per=(eight_sgpa / 100) * 15;
    let eight_sgpa_per_result=eight_sgpa_per.toPrecision(3);
    let total =
   parseFloat(first_sgpa_per_result)+
   parseFloat(two_sgpa_per_result)+
   parseFloat(three_sgpa_per_result)+
   parseFloat(four_sgpa_per_result)+
   parseFloat(five_sgpa_per_result)+
   parseFloat(six_sgpa_per_result)+
   parseFloat(seven_sgpa_per_result)+
   parseFloat(eight_sgpa_per_result);
   let total_sgpa=total.toPrecision(3);
   document.querySelector('.sgpa_output h3').innerHTML=`TOTAL SGPA = ${total_sgpa}`
   })
   
   document.querySelector('#btn1_re').addEventListener('click',() =>{
     document.querySelector('.sgpa_output h3').innerHTML=`TOTAL SGPA =`
     document.querySelector('#sub-1').value='';
     document.querySelector('#sub-2').value='';
     document.querySelector('#sub-3').value='';
     document.querySelector('#sub-4').value='';
     document.querySelector('#sub-5').value='';
     document.querySelector('#sub-6').value='';
     document.querySelector('#sub-7').value='';
     document.querySelector('#sub-8').value='';
   })
   document.querySelector('#btn_sub').addEventListener('click',() =>{
     let first_gpa=document.querySelector('#first-gpa').value;
     let first_gpa_per=(first_gpa /100)*5;
     let first_gpa_per_result=first_gpa_per.toPrecision(3);
     let two_gpa=document.querySelector("#two-gpa").value;
     let two_gpa_per=(two_gpa / 100) * 5;
     let two_gpa_per_result=two_gpa_per.toPrecision(3);
     let three_gpa=document.querySelector("#three-gpa").value;
     let three_gpa_per=(three_gpa / 100) * 5;
     let three_gpa_per_result=three_gpa_per.toPrecision(3);
     let four_gpa=document.querySelector("#four-gpa").value;
     let four_gpa_per=(four_gpa / 100) * 10;
     let four_gpa_per_result=four_gpa_per.toPrecision(3);
     let five_gpa=document.querySelector("#five-gpa").value;
     let five_gpa_per=(five_gpa / 100) * 15;
     let five_gpa_per_result=five_gpa_per.toPrecision(3);
     let six_gpa=document.querySelector("#six-gpa").value;
     let six_gpa_per=(six_gpa / 100) * 20;
     let six_gpa_per_result=six_gpa_per.toPrecision(3);
     let seven_gpa=document.querySelector("#seven-gpa").value;
     let seven_gpa_per=(seven_gpa / 100) * 25;
     let seven_gpa_per_result=seven_gpa_per.toPrecision(3);
     let eight_gpa=document.querySelector("#eight-gpa").value;
     let eight_gpa_per=(eight_gpa / 100) * 15;
     let eight_gpa_per_result=eight_gpa_per.toPrecision(3);
     let total =
     parseFloat(first_gpa_per_result)+
     parseFloat(two_gpa_per_result)+
     parseFloat(three_gpa_per_result)+
     parseFloat(four_gpa_per_result)+
     parseFloat(five_gpa_per_result)+
     parseFloat(six_gpa_per_result)+
     parseFloat(seven_gpa_per_result)+
     parseFloat(eight_gpa_per_result);
     let total_cgpa=total.toPrecision(3);
     document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA = ${total_cgpa}`
    })
    document.querySelector('#btn_re').addEventListener('click',() =>{
      document.querySelector('.cgpa_output h1').innerHTML=`TOTAL CGPA =`
      document.querySelector('#first-gpa').value='';
      document.querySelector('#two-gpa').value='';
      document.querySelector('#three-gpa').value='';
      document.querySelector('#four-gpa').value='';
      document.querySelector('#five-gpa').value='';
      document.querySelector('#six-gpa').value='';
      document.querySelector('#seven-gpa').value='';
      document.querySelector('#eight-gpa').value='';
    })
   