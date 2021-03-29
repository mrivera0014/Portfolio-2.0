import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import Card from '../components/ProjectCard/ProjectCard'
import projects from '../projects.json'

function Projects() {
    return (
        <>
            <Row>
                <Card
                    title={projects[0].title}
                    image={projects[0].image}
                    description={projects[0].description}
                    deployed={projects[0].deployed}
                    github={projects[0].github}
                />
                <Card
                    title={projects[1].title}
                    image={projects[1].image}
                    description={projects[1].description}
                    deployed={projects[1].deployed}
                    github={projects[1].github}
                />
            </Row>
            <Row>
                <Card
                    title={projects[2].title}
                    image={projects[2].image}
                    description={projects[2].description}
                    deployed={projects[2].deployed}
                    github={projects[2].github}
                />
                <Card
                    title={projects[3].title}
                    image={projects[3].image}
                    description={projects[3].description}
                    deployed={projects[3].deployed}
                    github={projects[3].github}
                />
            </Row>
            <Row>
                <Card
                    title={projects[4].title}
                    image={projects[4].image}
                    description={projects[4].description}
                    deployed={projects[4].deployed}
                    github={projects[4].github}
                />
                <Card
                    title={projects[5].title}
                    image={projects[5].image}
                    description={projects[5].description}
                    deployed={projects[5].deployed}
                    github={projects[5].github}
                />
            </Row>
        </>
    )
}

export default Projects