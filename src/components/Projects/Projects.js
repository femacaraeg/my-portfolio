import { useState } from 'react'
import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import ProjectDialog from '../ProjectDialog/ProjectDialog'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState({})

  const handleCard = (id) => {
    setSelectedProject(projects.find((x) => x.id === id))
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProject({})
  }

  return (
    <>
      <section id='projects' className='section projects'>
        <h2 className='section__title'>Projects</h2>

        <div className='projects__grid'>
          {projects.map((project) => (
            <ProjectContainer
              key={uniqid()}
              project={project}
              handleCard={() => handleCard(project.id)}
            />
          ))}
        </div>
      </section>
      <ProjectDialog
        isOpen={open}
        handleClose={handleClose}
        project={selectedProject}
      />
    </>
  )
}

export default Projects
