import { Label, FormGroup, Input } from "reactstrap";

const Checkbox = (props) => {
  const [selected, setSelected] = React.useState(false);

  const handleChecked = () => {
    props.giveValue({
      from: props.name,
      item: props.title,
      price: props.price,
      isSelected: !selected,
    });
    setSelected(!selected);
  };

  return (
    <>
      <div className="col-4">
        <FormGroup check inline>
          <Label check>
            <Input
              name={props.name}
              type="checkbox"
              onChange={handleChecked}
            ></Input>
            {`${props.title}  `}
            <span className="form-check-sign"></span>
          </Label>
        </FormGroup>
      </div>
      <div className="col-2">
        <span className="text-right">$ {props.price}</span>
      </div>
    </>
  );
};

export default Checkbox;
