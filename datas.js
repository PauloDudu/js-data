let now = new Date();

dayWeek = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
dayMonth = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

//Pega tudo
console.log("Tudo:", now);

//Pega o dia da semana como numero
console.log("Dia da semana:", dayWeek[now.getDay()]);

//Pega o dia 
console.log("Dia:",now.getDate());

//Pega o mes como inteiro
console.log("Mês:",dayMonth[now.getMonth()]);

//Pega o ano
console.log("Ano:",now.getFullYear());

//Pega as horas
console.log("Hora:",now.getHours());

//Pega os minutis
console.log("Minutos:",now.getMinutes());

//Pega os segundos
console.log("Segundo:",now.getSeconds());

//Pega os milissegundos
console.log("Milissegundo:",now.getMilliseconds());

//Pega a hora formatada
console.log("Hora formatada:",now.toLocaleTimeString());

//Pega a data formatado

//Formatação americana
console.log("Padrão(USA):",now.toLocaleDateString());

//Data formatada na mão 
console.log(`Na mão1(BR): ${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`);
console.log(`Na mão2(BR): ${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`);

//Nao entendi muito bem mas funciona
console.log("Stack Overflow:", now.toISOString().substr(0, 10).split('-').reverse().join('/'));

//Hora padrao
console.log("Hora formatada:",now.toLocaleTimeString(0));
console.log(now.toISOString());
console.log(now.toISOString().substr(0, 10).split('-').reverse().join('/'));
console.log(now.toISOString().substr(11, 8));



let cicero = "1234567891"

console.log(cicero.substr(2, 6));