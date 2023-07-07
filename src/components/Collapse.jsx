import React, { useState } from "react";
import { Button, Collapse } from "reactstrap";

export default function CollapseComponent(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        {props.buttonTitle}
      </Button>
      <Collapse isOpen={isOpen} {...arguments}>
        {props.children}
      </Collapse>
    </div>
  );
}
