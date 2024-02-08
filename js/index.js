for(let i = 0; i <= 31; i++){
    dia.innerHTML += `<option>${i}</option>`;
}

let meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

for(let i = 0; i < meses.length; i++){
    mes.innerHTML += `<option>${meses[i]}</option>`;
}

let data = new Date()

for(let i = data.getFullYear(); i >= data.getFullYear() - 100; i--){
    anos.innerHTML += `<option>${i}</option>`;
}