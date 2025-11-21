
import './Contact.css';
import GitHub from '../../assets/Github.png';
import LinkedIn from '../../assets/LinkedIn2.png';
function Contact() {

  const handleClick = () => {
    const audio = new Audio(clickSound);
    audio.volume = 0.2;
    audio.play();
  };
  return (
    <div className='contact-page'>
      <h1 className='title'>Låt oss prata!</h1>
      <div className='contactContainer'>
          <div className='contact-card'>

                <h2 className='contact-card__heading'>
            Har du frågor eller söker ni en ny kollega?

          </h2>
           <p>

            Aktivt på jakt efter jobb inom apputveckling, och tips på lediga tjänster tas tacksamt emot.
            Ser fram emot att bidra till spännande projekt och samarbeten.
          </p>
          <p>

            Jag svarar snabbast på mobilen, men du är självklart välkommen att kontakta mig via mail, LinkedIn eller GitHub också.
            Ser fram emot att höra från dig! 🌞

          </p>

          <div className="contactInfo">

            <a href="tel:0700189220" className="iconLinkText">

              <span>📱 0700-189220</span>
            </a>

            <a href="mailto:jeboblom20@hotmail.com" className="iconLinkText">

              <span>✉️ jeboblom20@hotmail.com</span>
            </a>
          </div>
          <div className='icons'>
            <a
              href="https://github.com/jennetblom"
              target="_blank"
              rel="noopener noreferrer"
              className="iconLink"
            >
              <img src={GitHub} alt="GitHub" className='contact-iconGit' />
              <span>Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jennet-blom-2a78a9200"
              target="_blank"
              rel="noopener noreferrer"
                className="iconLink"
            >
              <img src={LinkedIn} alt="LinkedIn" className='contact-icon' />
                <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact