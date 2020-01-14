import React, { Fragment, useState } from 'react'
import { Modal, ModalHeader, ModalFooter, ModalBody, Button } from 'reactstrap'
import { theme } from '../style.js'
import { ProjectWrapper } from './style.js'
import { Animated } from 'react-animated-css'
import { Waypoint } from 'react-waypoint'

// Using a functional component because we don't use state, constructor, or lifecycle hooks
export default function Project({children, title, subtitle, image, icons, link, date}) {
	const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  
  const [visible, setVisible] = useState(false);
	const makeVisible = () => setVisible(true);

  return (
    <Animated animationIn={"fadeInUp"} isVisible={visible}>
      <ProjectWrapper image={image} onClick={toggleModal} className="shadow d-flex justify-content-center align-items-center">
        <div className="overlay" />
        <div className="text text-center p-4">
          <h3>{title}</h3>
          <Waypoint onEnter={makeVisible}></Waypoint>
          <span>{subtitle}</span>
        </div>
      </ProjectWrapper>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>
          {title}
        </ModalHeader>
        <ModalBody>
          <ul className="list-unstyled d-flex flex-row flex-wrap my-1">
            {icons.map((Icon) => { 
              return (
                <li className="mr-3 mb-2" styled={{color: theme.black}}>
                  <Icon size={21} />
                </li> 
              );
            })}
          </ul>
          <h4 className="h6">{subtitle}</h4>
          {children} 
        </ModalBody>
        <ModalFooter>
          <div className="date mr-auto small">{date}</div>
          {link && <Button color="primary" href={link} target={"_blank"}>View project</Button>}
        </ModalFooter>
      </Modal>
    </Animated>
  );
}