'use strict';

const inputs = 'Delta[\[Rho], \[Sigma]]*NO[JM2[\[Sigma]], \[CapitalPsi]M[\[Rho]]]';

let a = /\\text{Delta}/g
let A1 = inputs.replace(a, '\\delta_');

let a1 = /Delta/g
let A = inputs.replace(a1, '\\delta_');

let b = /\[/g
let B = A.replace(b, '{');

let c = /\]/g
let C = B.replace(c, '}');

let d = /\\text{NO}/g
let D = C.replace(d, '');

let e = '\\text{JM1}'
let E = D.replace(e, 'J_');

let f = '\\text{$\\Psi $M}';
let F = E.replace(f, '\\Psi_');

let g1 = /Alpha/g
let G1 = F.replace(g1, '\\alpha');

let g2 = /Beta/g
let G2 = G1.replace(g2, '\\beta');

let g3 = /Gamma/g
let G3 = G2.replace(g3, '\\gamma');

let g4 = /Epsilon/g
let G4 = G3.replace(g4, '\\epsilon');

let g5 = /Zeta/g
let G5 = G4.replace(g5, '\\zeta');

let g6 = /Eta/g
let G6 = G5.replace(g6, '\\eta');

let g7 = /Theta/g
let G7 = G6.replace(g7, '\\theta');

let g8 = /Iota/g
let G8 = G7.replace(g8, '\\iota');

let g9 = /Kappa/g
let G9 = G8.replace(g9, '\\kappa');

let g10 = /Lambda/g
let G10 = G9.replace(g10, '\\lambda');

let g11 = /Mu/g
let G11 = G10.replace(g11, '\\mu');

let g12 = /Nu/g
let G12 = G11.replace(g12, '\\nu');

let g13 = /Xi/g
let G13 = G12.replace(g13, '\\xi');

let g14 = /Omicron/g
let G14 = G13.replace(g14, '\\omicron');

let g15 = /Pi/g
let G15 = G14.replace(g15, '\\pi');

let g16 = /Rho/g
let G16 = G15.replace(g16, '\\rho');

let g17 = /Sigma/g
let G17 = G16.replace(g17, '\\sigma');

let g18 = /Tau/g
let G18 = G17.replace(g18, '\\tau');

let g19 = /Upsilon/g
let G19 = G18.replace(g19, '\\upsilon');

let g20 = /Phi/g
let G20 = G19.replace(g20, '\\phi');

let g21 = /Chi/g
let G21 = G20.replace(g21, '\\chi');

let g22 = /Psi/g
let G22 = G21.replace(g22, '\\psi');

let g23 = /Omega/g
let G23 = G22.replace(g23, '\\omega');


console.log(G23);
