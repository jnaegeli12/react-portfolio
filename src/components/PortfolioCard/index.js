import React from 'react';
import projects from '../../utils/projects';

function PortfolioCard() {

    return(
        <div className="row">
            {projects.map((project, id) => {
                return(
                  <div className="card col-md-6 col-lg-4" key={id}>
                    <img className="card-img-top" src={project.img} alt={project.name} />
                    <div className="card-body">
                        <p className="card-text">{project.description}</p>
                        <div class="card-footer">
                          <small class="text-muted"><a href={project.demo} className="card-link" rel="noreferrer" target="_blank">App Demo</a>
                        <a href={project.repo} className="card-link" rel="noreferrer" target="_blank">Github Repo</a></small>
                        </div>
                    </div>
                  </div>
                )
            })}
        </div>
    )
}

export default PortfolioCard;