// ====== 1) Collez ici les infos de votre projet Supabase (voir LISEZMOI.md) ======
const SUPABASE_URL = 'https://Matdiagnostics.supabase.co';
const SUPABASE_ANON_KEY = 'ktikioeudhiijtfcycwc';

// ====== 2) Vos services et prix (en FCFA) ======
const SERVICES = [
  {key:'win_install',    label:'Installation Windows 10 / 11', price:5000, group:"Services à l'unité"},
  {key:'win_activate',   label:'Activation Windows 10 / 11', price:3000, group:"Services à l'unité"},
  {key:'office_install', label:'Installation Office', price:4000, group:"Services à l'unité"},
  {key:'office_activate',label:'Activation Office', price:3000, group:"Services à l'unité"},
  {key:'drivers',        label:'Installation des pilotes (drivers)', price:2500, group:"Services à l'unité"},
  {key:'antivirus',      label:'Installation antivirus + configuration', price:2500, group:"Services à l'unité"},
  {key:'virus',          label:'Nettoyage virus / logiciels malveillants', price:5000, group:"Services à l'unité"},
  {key:'diagnostic',     label:'Diagnostic complet du PC', price:2000, group:"Services à l'unité"},
  {key:'speed',          label:'Optimisation / accélération du PC', price:4000, group:"Services à l'unité"},
  {key:'backup',         label:'Sauvegarde et récupération de données', price:6000, group:"Services à l'unité"},
  {key:'pack_windows',   label:'Pack Windows (installation + activation)', price:7000, group:'Packs'},
  {key:'pack_office',    label:'Pack Office (installation + activation)', price:6000, group:'Packs'},
  {key:'pack_complet',   label:'Pack Complet (Windows + Office)', price:12000, group:'Packs'},
  {key:'pack_securite',  label:'Pack Sécurité (nettoyage + antivirus + diagnostic)', price:8000, group:'Packs'},
  {key:'pack_premium',   label:'Pack Premium (Complet + pilotes + antivirus + optimisation)', price:18000, group:'Packs'},
];
const fmtPrice = n => Number(n).toLocaleString('fr-FR') + ' FCFA';
