// Execute: node tests/core.test.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync(require('node:path').join(__dirname,'../index.html'),'utf8');
const script = html.split('<script>')[1].split('</script>')[0];
new vm.Script(script); // syntax check of complete app
const lines = script.split('\n');
const pick = prefix => {const line=lines.find(l=>l.startsWith(prefix));assert.ok(line,'Missing '+prefix);return line;};
const core = [pick('const $='), 'let project; const D=()=>project;', pick('function calc('), pick('function duplicateLabels('), pick('function result(')].join('\n');
const context = vm.createContext({console});
vm.runInContext(core+'\nthis.api={calc,result,setProject:p=>{project=p}};',context);
const {calc,result,setProject}=context.api;
const c={type:'Olhal',fix:'Química',maker:'Walsywa',model:'WQE 500 Plus',diam:12.7,tpi:13,hole:14,hef:110,h:140,c:45,s:60,fc:30,ultimate:8365,required:1500};
const p={label:'PA-001',target:'',actual:1500,time:60,displacement:.5,before:'ok',after:'ok',result:'Aprovado'};
const base={points:[p],target:1500,duration:60,limit:1,equipment:'Instrumento teste',calibration:'Certificado teste',method:'Procedimento teste',accept:'Critério teste'};
let project,pass=0,fail=0;
function test(name,fn){project=structuredClone(base);setProject(project);try{fn();pass++;console.log('PASS',name)}catch(e){fail++;console.log('FAIL',name,e.message)}}
test('Área 1/2 UNC ~91,55 mm²',()=>assert.ok(Math.abs(calc(c).area-91.55)<.1));
test('Tensão nominal ~160,7 MPa',()=>assert.ok(Math.abs(calc(c).stress-160.7)<.2));
test('Alteração de carga recalcula tensão',()=>assert.equal(calc({...c,required:3000}).stress,2*calc(c).stress));
test('Embutimento 240 mm não aprovado pela referência',()=>assert.match(calc({...c,hef:240}).checks[3][1],/Pendente/));
test('Capacidade conjunto permanece pendente',()=>assert.match(calc(c).checks.at(-1)[1],/Pendente/));
test('Ponto sem carga medida pendente',()=>assert.equal(result({...p,actual:''}),'Pendente'));
test('Carga insuficiente reprovada',()=>assert.equal(result({...p,actual:1499}),'Reprovado'));
test('Deslocamento excessivo reprovado',()=>assert.equal(result({...p,displacement:1.1}),'Reprovado'));
test('Tempo insuficiente reprovado',()=>assert.equal(result({...p,time:59}),'Reprovado'));
test('Duplicidade bloqueia aprovação',()=>{project.points.push({...p,label:' pa-001 '});assert.equal(result(p),'Pendente')});
test('Calibração ausente bloqueia aprovação',()=>{project.calibration='';assert.equal(result(p),'Pendente')});
test('Dados e avaliação preenchidos permitem resultado de teste aprovado',()=>assert.equal(result(p),'Aprovado'));
test('Carga específica zero inválida não pode cair no padrão',()=>assert.equal(result({...p,target:0}),'Pendente'));
test('Carga requerida negativa não gera tensão nominal',()=>assert.equal(calc({...c,required:-1}).stress,null));
test('Geometria de rosca impossível não gera área',()=>assert.equal(calc({...c,tpi:1}).area,null));
test('Caranguejo não usa equação UNC',()=>assert.equal(calc({...c,type:'Vergalhão caranguejo'}).area,null));
console.log({pass,fail});if(fail)process.exitCode=1;
