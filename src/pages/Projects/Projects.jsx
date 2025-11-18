import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Projects.css';
import lillaDagens from '../../assets/lillaDagens.jpg';
import lillaChat from '../../assets/lillaChat.jpg';
import lillaKonvo from '../../assets/lillaKonvo.jpg';
import lillaProfil from '../../assets/lillaProfil.jpg';
import jellioStart from '../../assets/jellioStart.png';
import jellioWork from '../../assets/jellioWork.png';
import jellioBoard from '../../assets/jellioBoard.png';
import ticPlay from '../../assets/ticPlay.jpg';
import ticWin from '../../assets/ticWin.jpg';
import ticMatch from '../../assets/ticMatch.jpg';
import ticLeader from '../../assets/ticLeader.jpg';
import fishPlay from '../../assets/fishPlay.jpg';
import fishGo from '../../assets/fishGo.jpg';
import fishRules from '../../assets/fishRules.jpg';
import fishWin from '../../assets/fishWin.jpg';
import petHouse from '../../assets/petHouse.jpg';
import petHost from '../../assets/petHost.jpg';
import petAnimal from '../../assets/petAnimal.jpg';
import petChat from '../../assets/petChat.jpg';


function Projects() {
  return (
    <div className='projects-page'>
      <h1 className='title'>Projekt</h1>
      <ProjectCard title="Jellio" subTitle="Eget projekt i React">
        <p>
          Den här hemsidan är inspirerad av Trello – ett digitalt verktyg för att planera och organisera projekt.
          <br />

        </p>
        <div className='imageDesktopContainer'>
          <img src={jellioStart} className='imageDesktop' />
          <img src={jellioWork} className='imageDesktop' />
        </div>
        <p>  Precis som i Trello skapar man tavlor med listor för att lägga till uppgifter, anteckningar eller idéer.
          Det går även att redigera och ta bort uppgifter vid behov, samt flytta kort mellan listor med drag-och-släpp-funktionalitet.
          <br />
          <br />
          För att samarbeta i realtid, kan man bjuda in andra personer till sin tavla via en länk.
        </p>
        <img src={jellioBoard} className='imageDesktop' />
        <p>
          Målet med projektet var att skapa mitt examensarbete och samtidigt få förståelse för hur man använder sig av
          en mer komplex databashantering. Hela applikationen är byggd av mig, med Trello som inspiration för design och funktionalitet.
        </p>
      </ProjectCard>




      <ProjectCard title="Lilla Gumman" subTitle="Ett grupprojekt med React Native ">
        <p>Detta grupprojekt utvecklades under min LIA-praktik hos företaget Lilla Gumman.
          <br />
          <br />
          Målet var att skapa en app där humor, eftertanke och gemenskap inspirerar till positiv förändring i vardagen.
          Appen ger användarna daglig inspiration genom roliga och träffsäkra citat samt ett forum för att dela tankar kring en
          gemensam daglig fråga.
          <br />
          <br />

        </p>

        <div className='imagePhoneContainer'>
          <img src={lillaDagens} className='project-image' />
          <img src={lillaChat} className='project-image' />
          <img src={lillaKonvo} className='project-image' />
          <img src={lillaProfil} className='project-image' />
        </div>

        <p>


          Den innehåller även en extern länk till “Lilla Gumman GPT” –
          en chatt där man kan prata med den virtuella karaktären “Lilla Gumman”, känd för sin humor, värme och attityd.
          <br />  <br />
          Jag hade en bred roll i projektet och arbetade med både frontend och backend,
          bland annat genom att utveckla Firebase-funktioner, Cloud Functions och delar av adminvyn.
        </p>
      </ProjectCard>




      <ProjectCard title="PetBnB" subTitle="Grupparbete i Swift för iOS">
        <p>Ett gruppprojekt i skolan som är inspirerat av AirBnB – men med en twist.
          I stället för att betala med pengar kan användare hyra bostäder genom att erbjuda djurvaktstjänster.
          <br />
          I appen kan användarna utforska olika bostäder, spara dem i en favoritlista, chatta direkt med husägare och
          se bostäderna markerade på en karta.
        </p>
        <div className='imagePhoneContainer'>
          <img src={petAnimal} className='project-image' />
          <img src={petHost} className='project-image' />
          <img src={petHouse} className='project-image' />
          <img src={petChat} className='project-image' />
        </div>

      </ProjectCard>


      <ProjectCard title="Tic Tac Party" subTitle="Ett grupparbete utvecklad i Kotlin för Android">
        <p>Tic Tac Party är ett grupprojekt där jag tillsammans med mitt team har utvecklat en Android-applikation i Kotlin.

          Spelet inkluderar användargränssnitt, logik för turordning, kontroll av vinnande kombinationer samt nätverkskommunikation så att
          två spelare kan spela mot varandra över internet.

        </p>
        <div className='imagePhoneContainer'>
          <img src={ticPlay} className='project-image' />
          <img src={ticMatch} className='project-image' />
          <img src={ticWin} className='project-image' />
          <img src={ticLeader} className='project-image' />
        </div>
        <p>     Jag har varit delaktig i utvecklingen av spelet Tic Tac Toe, med fokus på funktionalitet för att spela online mot andra spelare
          i realtid. </p>
      </ProjectCard>


      <ProjectCard title="Go Fish" subTitle="Eget projekt i Android">
        <p>Detta är ett individuellt projekt som jag utvecklade i Android och en av de första mobilapparna jag skapade under utbildningen. Appen är en digital version av kortspelet "Finns i sjön", där målet är att samla så många fyrtal som möjligt i samma valör.
          <br />
          <br />
          Jag utvecklade både spel­logiken och animationer som visar hur korten flyttas, vilket gav mig en bättre förståelse för hur man gör appar mer levande och interaktiva.
        </p>
        <div className='imagePhoneContainer'>
          <img src={fishPlay} className='project-image' />
          <img src={fishGo} className='project-image' />
          <img src={fishRules} className='project-image' />
          <img src={fishWin} className='project-image' />
        </div>
        <p>
          Hela applikationen är byggd av mig själv, från design till kodning.
        </p>
      </ProjectCard>

    </div>
  )
}

export default Projects