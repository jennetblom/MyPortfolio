
import './ProjectCard.css';

export default function ProjectCard({ title, subTitle, children }) {
    return (
        <div className='projectCard'>
            <h1 className='cardTitle'>{title}</h1>
            <h3 className='cardSubtitle'>{subTitle}</h3>
            {children}
        </div>
    )
}