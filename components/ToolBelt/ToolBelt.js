import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faNodeJs, faSass, faMicrosoft, faPython, faGitAlt, faAws, faBootstrap, faDocker } from '@fortawesome/free-brands-svg-icons';

function ToolBelt() {
    return (
        <div className="toolbelt">
            <div className="row">
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faHtml5} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faCss3} size="6x" />
                    </div>

                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faSass} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faJs} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faReact} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faNodeJs} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faMicrosoft} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faAws} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <img className="toolbelt__icon-terraform" src="https://symbols.getvecta.com/stencil_97/45_terraform-icon.0fedccc574.svg" alt="terraform" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faDocker} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faPython} size="6x" />
                    </div>
                </div>
                <div className="col-1-of-6">
                    <div className="u-text-center">
                        <FontAwesomeIcon icon={faGitAlt} size="6x" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToolBelt;