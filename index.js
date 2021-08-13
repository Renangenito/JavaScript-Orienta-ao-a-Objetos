import {Cliente} from "./Cliente.js"
import { Conta } from "./Conta/Conta.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutentificacao } from "./SistemaAutentificacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(300);
contaSalario.sacar(100);

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("987654321");

const cliente = new Cliente("Renan", 44684668800, "246810");

const diretorEstaLogado = SistemaAutentificacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutentificacao.login(gerente, "987654321");


const clienteEstaLogado = SistemaAutentificacao.login(cliente, "246810");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);



