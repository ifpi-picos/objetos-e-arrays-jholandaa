const convert = require('convert-units');
const diasParaMinutos = (dias) => {
    return dias * 24 * 60;
  };
  const gigabytesParaBytes = (gigabytes) => {
    return convert(gigabytes).from('GB').to('B');
  };
  const dias = 5; 
  const gigabytes = 2;
  const minutos = diasParaMinutos(dias);
  const bytes = gigabytesParaBytes(gigabytes);
  console.log(`${dias} dias são equivalentes a ${minutos} minutos.`);
  console.log(`${gigabytes} gigabytes são equivalentes a ${bytes} bytes.`);
