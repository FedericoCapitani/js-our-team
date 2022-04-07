/* Viene fornito un file js in cui è definito un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
MILESTONE 1 
stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2 
stampare le stesse informazioni su DOM sottoforma di stringhe */

function stampa_info_oggetto(object){
    const info = document.getElementById('team')
    info.innerHTML = ''
    for(let i = 0; i < object.length; i++){
        const info_name = document.createElement('div');
        const info_role = document.createElement('div');
        const info_photo = document.createElement('div');
        info_name.append(`Nome: ${object[i].name}`)
        info_role.append(`Ruolo: ${object[i].role}`)
        info_photo.append(`Foto: ${object[i].image}`)
        info.append(info_name, info_role, info_photo)
    }
}


const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
console.log('Membri del team:');
for(let i = 0; i < team.length; i++){
    console.log(`Nome: ${team[i].name}`);
    console.log(`Ruolo: ${team[i].role}`);
    console.log(`Foto: ${team[i].image}`);
}
const membri_team = stampa_info_oggetto(team);