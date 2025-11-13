import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';
function Projects() {
  return (
    <div className='projects-page'>
      <h1 className='title'>Projekt</h1>
      <ProjectCard title="Jellio" subTitle="Eget projekt i React">
        <p>Den här hemsidan är inspirerad av Trello – ett digitalt verktyg för att planera och organisera projekt. Man kan skapa tavlor med listor och kort för att lägga till uppgifter, anteckningar eller idéer.  Precis som i Trello går det även att bjuda in andra personer till sin tavla via en länk, så att man kan samarbeta i realtid. Målet med projektet var att skapa mitt examensarbete och samtidigt få förståelse för hur man använder sig av en mer komplex databashantering. Hela applikationen är byggd av mig, med Trello som inspiration för design och funktionalitet. </p>
      </ProjectCard>


      <ProjectCard title="Lilla Gumman" subTitle="Ett grupprojekt med React Native ">
        <p>Detta grupprojekt utvecklades under min LIA-praktik hos företaget Lilla Gumman. Målet var att skapa en app där humor, eftertanke och gemenskap inspirerar till positiv förändring i vardagen.
          Appen ger användarna daglig inspiration genom roliga och träffsäkra citat samt ett forum för att dela tankar kring en gemensam daglig fråga.Den innehåller även en extern länk till “Lilla Gumman GPT” – en chatt där man kan prata med den virtuella karaktären “Lilla Gumman”, känd för sin humor, värme och attityd.

          Jag hade en bred roll i projektet och arbetade med både frontend och backend, bland annat genom att utveckla Firebase-funktioner, Cloud Functions och delar av adminvyn. </p>
      </ProjectCard>


      <ProjectCard title="PetBnB" subTitle="Grupparbete i React Native">
        <p>Ett gruppprojekt i skolan som är inspirerat av AirBnB – men med en twist. I stället för att betala med pengar kan användare hyra bostäder genom att erbjuda djurvaktstjänster.
I appen kan användarna utforska olika bostäder, spara dem i en favoritlista, chatta direkt med husägare och se bostäderna markerade på en karta. </p>
      </ProjectCard>


      <ProjectCard title="Tic Tac Party" subTitle="Ett grupparbete utvecklad i Kotlin för Android">
        <p>Tic Tac Party är ett grupprojekt där jag tillsammans med mitt team har utvecklat en Android-applikation i Kotlin. Jag har varit delaktig i utvecklingen av spelet Tic Tac Toe, med fokus på funktionalitet för att spela online mot andra spelare i realtid. Spelet inkluderar användargränssnitt, logik för turordning, kontroll av vinnande kombinationer samt nätverkskommunikation så att två spelare kan spela mot varandra över internet. </p>
      </ProjectCard>

      
      <ProjectCard title="Go Fish" subTitle="Eget projekt i Android">
        <p>Detta är ett individuellt projekt som jag utvecklade i Android och en av de första mobilapparna jag skapade under utbildningen. Appen är en digital version av kortspelet "Finns i sjön", där målet är att samla så många fyrtal som möjligt i samma valör. Jag utvecklade både spel­logiken och animationer som visar hur korten flyttas, vilket gav mig en bättre förståelse för hur man gör appar mer levande och interaktiva. </p>
      </ProjectCard>
   
    </div>
  )
}

export default Projects